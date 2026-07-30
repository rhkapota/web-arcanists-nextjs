
export type Ember = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  life: number;
  ttl: number;
  seed: number;
  swayHz: number;
  swayAmp: number;
  flickHz: number;
};


const RAMP: Array<[number, [number, number, number]]> = [
  [0.0, [255, 246, 224]], // near white-hot
  [0.2, [253, 224, 138]], // amber
  [0.45, [249, 115, 22]], // #f97316 — the brand anchor
  [0.72, [190, 42, 12]], // deep red
  [1.0, [90, 52, 44]], // ash
];

const SPRITE_STOPS = 8;
const SPRITE_PX = 32;
const SPRITE_HALF = SPRITE_PX / 2;

const rand = (min: number, max: number) => min + Math.random() * (max - min);


const gaussian = (mean: number, sd: number) =>
  mean + ((Math.random() + Math.random() + Math.random() + Math.random()) / 4 - 0.5) * sd * 3.46;

const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
};

function sampleRamp(k: number): [number, number, number] {
  const t = Math.min(1, Math.max(0, k));
  for (let i = 1; i < RAMP.length; i++) {
    const [stop, colour] = RAMP[i];
    if (t > stop) continue;
    const [prevStop, prevColour] = RAMP[i - 1];
    const f = (t - prevStop) / (stop - prevStop);
    return [
      Math.round(prevColour[0] + (colour[0] - prevColour[0]) * f),
      Math.round(prevColour[1] + (colour[1] - prevColour[1]) * f),
      Math.round(prevColour[2] + (colour[2] - prevColour[2]) * f),
    ];
  }
  return RAMP[RAMP.length - 1][1];
}


export function buildSprites(): HTMLCanvasElement[] {
  return Array.from({ length: SPRITE_STOPS }, (_, i) => {
    const [r, g, b] = sampleRamp(i / (SPRITE_STOPS - 1));
    const sprite = document.createElement('canvas');
    sprite.width = SPRITE_PX;
    sprite.height = SPRITE_PX;

    const ctx = sprite.getContext('2d');
    if (!ctx) return sprite;

    const grad = ctx.createRadialGradient(
      SPRITE_HALF,
      SPRITE_HALF,
      0,
      SPRITE_HALF,
      SPRITE_HALF,
      SPRITE_HALF
    );
    grad.addColorStop(0, `rgba(${r},${g},${b},1)`);
    grad.addColorStop(0.3, `rgba(${r},${g},${b},0.6)`);
    grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, SPRITE_PX, SPRITE_PX);
    return sprite;
  });
}

export function emberCount(w: number, h: number) {
  return Math.round(Math.min(110, Math.max(24, (w * h) / 22000)));
}

export function makeEmber(): Ember {
  return {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    r: 1,
    life: 0,
    ttl: 1,
    seed: 0,
    swayHz: 0.5,
    swayAmp: 10,
    flickHz: 6,
  };
}

export function spawnEmber(p: Ember, w: number, h: number, hearth: number) {
  const fromHearth = Math.random() < hearth;
  p.x = fromHearth ? gaussian(w / 2, w * 0.18) : rand(-0.05, 1.05) * w;
  p.y = fromHearth ? rand(h * 0.55, h * 0.95) : h + rand(0, 60);
  p.vx = rand(-6, 6);
  p.vy = -(14 + Math.random() * 34);
  p.r = 0.6 + Math.random() * 1.6;
  p.ttl = 6 + Math.random() * 9;
  p.life = 0;
  p.seed = Math.random() * Math.PI * 2;
  p.swayHz = 0.3 + Math.random() * 0.6;
  p.swayAmp = 6 + Math.random() * 16;
  p.flickHz = 4 + Math.random() * 7;
}

export function stepEmber(
  p: Ember,
  dt: number,
  t: number,
  w: number,
  h: number,
  hearth: number,
  rise = 1
) {
  p.life += dt;
  p.vy = Math.max(p.vy - 3 * dt, -70); // buoyant acceleration, capped
  // The sinusoidal sway is what sells convection; without it embers read as
  // rain running backwards.
  p.x += (p.vx + Math.sin(t * p.swayHz + p.seed) * p.swayAmp) * dt;
  p.y += p.vy * rise * dt;

  if (p.life >= p.ttl || p.y < -20 || p.x < -60 || p.x > w + 60) {
    spawnEmber(p, w, h, hearth);
  }
}

export function emberAlpha(p: Ember, t: number) {
  const k = p.life / p.ttl;
  const env = smoothstep(0, 0.08, k) * (1 - smoothstep(0.55, 1, k));
  const flicker = 0.55 + 0.45 * Math.sin(t * p.flickHz + p.seed);
  return env * flicker;
}

export function emberSprite(p: Ember) {
  return Math.min(SPRITE_STOPS - 1, ((p.life / p.ttl) * SPRITE_STOPS) | 0);
}

export function drawEmber(
  ctx: CanvasRenderingContext2D,
  sprites: HTMLCanvasElement[],
  p: Ember,
  alpha: number
) {
  const size = p.r * 8;
  ctx.globalAlpha = alpha;
  ctx.drawImage(sprites[emberSprite(p)], p.x - size / 2, p.y - size / 2, size, size);
}

type BurstHandle = { stop: () => void };


export function createBurst(
  canvas: HTMLCanvasElement,
  opts: { count?: number; duration?: number } = {}
): BurstHandle {
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return { stop: () => {} };

  const count = opts.count ?? 120;
  const duration = opts.duration ?? 1600;
  const sprites = buildSprites();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  const rect = canvas.getBoundingClientRect();
  const w = rect.width || canvas.clientWidth || 300;
  const h = rect.height || canvas.clientHeight || 300;
  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const cx = w / 2;
  const cy = h / 2;

  const parts = Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = rand(120, 420);
    const p = makeEmber();
    p.x = cx;
    p.y = cy;
    p.vx = Math.cos(angle) * speed;
    p.vy = Math.sin(angle) * speed;
    p.r = 0.7 + Math.random() * 1.8;
    p.ttl = rand(0.9, 1.6);
    p.seed = Math.random() * Math.PI * 2;
    p.flickHz = 6 + Math.random() * 8;
    return p;
  });

  let raf = 0;
  let last = performance.now();
  const started = last;

  const frame = (now: number) => {
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;

    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';

    const drag = Math.pow(0.92, dt * 60);
    for (const p of parts) {
      p.life += dt;
      p.vx *= drag;
      p.vy = p.vy * drag - 40 * dt; // sparks turn buoyant as they slow
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      const k = p.life / p.ttl;
      if (k >= 1) continue;
      drawEmber(ctx, sprites, p, (1 - smoothstep(0.4, 1, k)) * (0.6 + 0.4 * Math.sin(now / 1000 * p.flickHz + p.seed)));
    }
    ctx.globalAlpha = 1;

    if (now - started < duration) raf = requestAnimationFrame(frame);
  };

  raf = requestAnimationFrame(frame);

  return {
    stop: () => {
      cancelAnimationFrame(raf);
      ctx.clearRect(0, 0, w, h);
    },
  };
}
