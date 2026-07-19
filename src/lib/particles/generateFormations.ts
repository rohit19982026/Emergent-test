import { sampleMarkPath } from "./markPath";
import { NETWORK_EDGE_SPARSITY } from "./constants";

export type Formations = {
  cloud: Float32Array;
  mark: Float32Array;
  network: Float32Array;
  edges: Uint16Array; // index pairs into `network`
};

// Deterministic PRNG so the same formations are generated every load
// (no visible pop/reshuffle between server-rendered layout and client mount).
function seededRandom(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function generateCloud(count: number, rand: () => number): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const radius = 1.9 * Math.cbrt(rand());
    const theta = rand() * Math.PI * 2;
    const phi = Math.acos(2 * rand() - 1);
    positions[i * 3 + 0] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }
  return positions;
}

function generateNetwork(
  count: number,
  rand: () => number
): { positions: Float32Array; edges: Uint16Array } {
  const positions = new Float32Array(count * 3);
  const gridSize = Math.max(2, Math.ceil(Math.cbrt(count)));
  const spacing = 3.2 / gridSize;
  const indexOf = new Map<string, number>();
  const coords: [number, number, number][] = [];

  let idx = 0;
  outer: for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      for (let z = 0; z < gridSize; z++) {
        if (idx >= count) break outer;
        const jitterAmount = spacing * 0.12;
        positions[idx * 3 + 0] = (x - gridSize / 2) * spacing + (rand() - 0.5) * jitterAmount;
        positions[idx * 3 + 1] = (y - gridSize / 2) * spacing + (rand() - 0.5) * jitterAmount;
        positions[idx * 3 + 2] = (z - gridSize / 2) * spacing + (rand() - 0.5) * jitterAmount;
        indexOf.set(`${x},${y},${z}`, idx);
        coords.push([x, y, z]);
        idx++;
      }
    }
  }

  // Sparsified grid-adjacency edges — O(N), avoids an expensive brute-force
  // k-NN search and reads as a live node network rather than a solid lattice.
  const edgePairs: number[] = [];
  const offsets: [number, number, number][] = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];
  for (let i = 0; i < coords.length; i++) {
    const [x, y, z] = coords[i];
    for (const [dx, dy, dz] of offsets) {
      if (rand() > NETWORK_EDGE_SPARSITY) continue;
      const j = indexOf.get(`${x + dx},${y + dy},${z + dz}`);
      if (j !== undefined) edgePairs.push(i, j);
    }
  }

  return { positions, edges: Uint16Array.from(edgePairs) };
}

// Reorders a formation's points by angular position (+ radius as a
// tiebreaker) around its own centroid. Applying this to every formation
// means "particle rank i by angle" lands at the same flat index i in each
// one, so morphing travels along short, non-crossing paths instead of a
// random reshuffle — an approximation of optimal transport that's cheap
// enough to run at load time.
function sortBySpatialKey(positions: Float32Array, count: number): { sorted: Float32Array; permutation: number[] } {
  let cx = 0;
  let cy = 0;
  let cz = 0;
  for (let i = 0; i < count; i++) {
    cx += positions[i * 3];
    cy += positions[i * 3 + 1];
    cz += positions[i * 3 + 2];
  }
  cx /= count;
  cy /= count;
  cz /= count;

  const keyOf = (i: number) => {
    const x = positions[i * 3] - cx;
    const y = positions[i * 3 + 1] - cy;
    const z = positions[i * 3 + 2] - cz;
    const theta = Math.atan2(y, x);
    const radius = Math.sqrt(x * x + y * y + z * z);
    return theta * 1000 + radius;
  };

  const permutation = Array.from({ length: count }, (_, i) => i).sort((a, b) => keyOf(a) - keyOf(b));
  const sorted = new Float32Array(count * 3);
  permutation.forEach((originalIndex, newIndex) => {
    sorted[newIndex * 3] = positions[originalIndex * 3];
    sorted[newIndex * 3 + 1] = positions[originalIndex * 3 + 1];
    sorted[newIndex * 3 + 2] = positions[originalIndex * 3 + 2];
  });
  return { sorted, permutation };
}

export function generateFormations(count: number, seed = 1337): Formations {
  const rand = seededRandom(seed);

  const cloudRaw = generateCloud(count, rand);
  const markRaw = sampleMarkPath(count, rand);
  const { positions: networkRaw, edges: rawEdges } = generateNetwork(count, rand);

  const { sorted: cloud } = sortBySpatialKey(cloudRaw, count);
  const { sorted: mark } = sortBySpatialKey(markRaw, count);
  const { sorted: network, permutation: networkPermutation } = sortBySpatialKey(networkRaw, count);

  // Remap edge indices through the network's sort permutation so they still
  // point at the correct particles after reordering.
  const inverse = new Array<number>(count);
  networkPermutation.forEach((originalIndex, newIndex) => {
    inverse[originalIndex] = newIndex;
  });
  const edges = Uint16Array.from(rawEdges, (originalIndex) => inverse[originalIndex]);

  return { cloud, mark, network, edges };
}
