export const particleVertexShader = /* glsl */ `
  uniform float uProgress; // 0 = cloud, 1 = mark, 2 = network
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uDisplaceStrength;
  uniform float uPixelRatio;

  uniform vec3 uColorCloud;
  uniform vec3 uColorNetwork;

  attribute vec3 aPositionCloud;
  attribute vec3 aPositionMark;
  attribute vec3 aPositionNetwork;

  varying float vAlpha;
  varying vec3 vColor;

  void main() {
    float stage = floor(min(uProgress, 1.999));
    float t = fract(uProgress);
    vec3 a = stage < 0.5 ? aPositionCloud : aPositionMark;
    vec3 b = stage < 0.5 ? aPositionMark : aPositionNetwork;
    vec3 basePos = mix(a, b, t);

    // Color narrates the same journey as shape: coral (creative/video)
    // through the cloud/mark states, resolving to cobalt (AI/systems) only
    // as the field arrives at the network formation.
    vColor = mix(uColorCloud, uColorNetwork, smoothstep(0.5, 1.5, uProgress));

    // Gentle idle drift so the cloud never looks static.
    float driftX = sin(uTime * 0.35 + basePos.y * 1.5) * 0.05;
    float driftY = cos(uTime * 0.3 + basePos.x * 1.5) * 0.05;
    basePos.x += driftX * (1.0 - t * 0.5);
    basePos.y += driftY * (1.0 - t * 0.5);

    // Cursor displacement, falls off with distance, dialed via uDisplaceStrength.
    vec3 viewPos = (modelViewMatrix * vec4(basePos, 1.0)).xyz;
    vec2 toMouse = uMouse - viewPos.xy;
    float dist = length(toMouse);
    float falloff = smoothstep(1.2, 0.0, dist);
    viewPos.xy -= normalize(toMouse + 0.0001) * falloff * uDisplaceStrength;

    vAlpha = 0.55 + 0.45 * (1.0 - smoothstep(0.0, 2.2, length(basePos)));

    vec4 mvPosition = vec4(viewPos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = (14.0 * uPixelRatio) / -mvPosition.z;
  }
`;

export const particleFragmentShader = /* glsl */ `
  uniform float uAberration;
  varying float vAlpha;
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    float core = smoothstep(0.5, 0.0, dist);
    if (core <= 0.001) discard;

    // Cheap fake chromatic aberration: sample the same radial mask with a
    // tiny per-channel UV offset instead of a full postprocessing pass —
    // produces a subtle red/blue fringe at each point's edge.
    vec2 offset = normalize(uv + 0.0001) * uAberration;
    float rMask = smoothstep(0.5, 0.0, length(uv - offset));
    float bMask = smoothstep(0.5, 0.0, length(uv + offset));
    float fringe = rMask - bMask;

    vec3 color = vColor + vec3(fringe * 0.5, 0.0, -fringe * 0.5);
    gl_FragColor = vec4(color, core * vAlpha);
  }
`;
