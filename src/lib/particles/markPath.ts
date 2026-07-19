// Abstract convergence mark: two angled strokes crossing near their
// midpoint — not a literal logo/glyph (brand name may still change), ties
// to the existing copy "Two disciplines. One team." Reused by the hero
// particle field (as the `mark` formation) and by SignatureMark.tsx in the
// footer, so both draw from these exact same control points.

type Point2 = [number, number];

export const strokeA: Point2[] = [
  [-0.9, 0.75],
  [-0.2, 0.15],
  [0.15, -0.1],
  [0.9, -0.75],
];

export const strokeB: Point2[] = [
  [0.9, 0.75],
  [0.2, 0.15],
  [-0.15, -0.1],
  [-0.9, -0.75],
];

function lerpAlongPolyline(points: Point2[], t: number): Point2 {
  const segments = points.length - 1;
  const scaled = Math.min(t, 1) * segments;
  const i = Math.min(Math.floor(scaled), segments - 1);
  const localT = scaled - i;
  const [x0, y0] = points[i];
  const [x1, y1] = points[i + 1];
  return [x0 + (x1 - x0) * localT, y0 + (y1 - y0) * localT];
}

export function sampleMarkPath(count: number, rand: () => number = Math.random): Float32Array {
  const positions = new Float32Array(count * 3);
  const half = Math.floor(count / 2);
  for (let i = 0; i < count; i++) {
    const onStrokeA = i < half;
    const localIndex = onStrokeA ? i : i - half;
    const localCount = onStrokeA ? half : count - half;
    const t = localCount <= 1 ? 0 : localIndex / (localCount - 1);
    const [x, y] = lerpAlongPolyline(onStrokeA ? strokeA : strokeB, t);
    const jitter = () => (rand() - 0.5) * 0.05;
    positions[i * 3 + 0] = x * 1.6 + jitter();
    positions[i * 3 + 1] = y * 1.6 + jitter();
    positions[i * 3 + 2] = (rand() - 0.5) * 0.18;
  }
  return positions;
}
