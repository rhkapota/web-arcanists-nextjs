'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
  buildSprites,
  drawEmber,
  emberAlpha,
  emberCount,
  makeEmber,
  spawnEmber,
  stepEmber,
  type Ember,
} from '@/lib/embers';


const BASE_ALPHA = 0.8;
const SURGE_MS = 900;


export function EmberField() {
  const ref = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const intensityRef = useRef(1);


  intensityRef.current = pathname === '/' ? 1 : 0.55;

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    const reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');

    let raf = 0;
    let last = performance.now();
    let running = false;
    let w = 0;
    let h = 0;
    let dpr = 0;
    let sprites: HTMLCanvasElement[] = [];
    let surgeUntil = 0;
    const parts: Ember[] = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;

      const nextDpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * nextDpr);
      canvas.height = Math.floor(h * nextDpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(nextDpr, 0, 0, nextDpr, 0, 0);

      if (nextDpr !== dpr || sprites.length === 0) {
        sprites = buildSprites();
        dpr = nextDpr;
      }

      const target = emberCount(w, h);
      while (parts.length < target) {
        const p = makeEmber();
        spawnEmber(p, w, h, 0.4);
        p.life = Math.random() * p.ttl; // stagger, so the field starts mid-burn
        parts.push(p);
      }
      parts.length = target;
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);

      const dt = Math.min((now - last) / 1000, 1 / 30); // clamp tab-stall spikes
      last = now;

      // Fully occluded while the intro gate is up — skip the work entirely.
      if (document.documentElement.classList.contains('arc-intro')) return;

      const t = now / 1000;
      const intensity = intensityRef.current;
      const scrollY = window.scrollY;
      const heat = Math.min(1, Math.max(0.25, 1 - scrollY / (h * 1.2)));
      const surge = now < surgeUntil ? (surgeUntil - now) / SURGE_MS : 0;

      const active = Math.round(parts.length * (0.35 + 0.65 * heat * intensity));
      const dim = BASE_ALPHA * (0.45 + 0.55 * heat) * (0.45 + 0.55 * intensity) * (1 + surge);
      const hearth = intensity === 1 && scrollY < h * 0.5 ? 0.5 : 0.35;
      const rise = 1 + surge * 0.6;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter'; // additive is correct for light on black

      for (let i = 0; i < active; i++) {
        const p = parts[i];
        stepEmber(p, dt, t, w, h, hearth, rise);
        drawEmber(ctx, sprites, p, emberAlpha(p, t) * dim);
      }

      ctx.globalAlpha = 1;
    };

    const startLoop = () => {
      if (running || reduceMq.matches) return;
      resize();
      last = performance.now();
      running = true;
      raf = requestAnimationFrame(frame);
    };

    const stopLoop = () => {
      cancelAnimationFrame(raf);
      running = false;
    };

    const onVisibility = () => {
      if (document.hidden) {
        stopLoop();
      } else if (!reduceMq.matches) {
        // Resetting `last` is essential — otherwise the first frame back
        // carries the whole hidden duration as one delta.
        last = performance.now();
        if (!running) {
          running = true;
          raf = requestAnimationFrame(frame);
        }
      }
    };

    let resizeTimer = 0;
    let lastW = 0;
    let lastH = 0;
    const onResize = () => {
      // Mobile Safari and Chrome Android fire resize continuously as the URL
      // bar collapses; without this guard the canvas reallocates dozens of
      // times per scroll gesture.
      if (window.innerWidth === lastW && Math.abs(window.innerHeight - lastH) < 40) return;
      lastW = window.innerWidth;
      lastH = window.innerHeight;
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 150);
    };

    const onSurge = () => {
      surgeUntil = performance.now() + SURGE_MS;
    };

    const onMotionPreference = () => {
      if (reduceMq.matches) stopLoop();
      else startLoop();
    };

    lastW = window.innerWidth;
    lastH = window.innerHeight;
    startLoop();

    window.addEventListener('resize', onResize);
    window.addEventListener('arc:surge', onSurge);
    document.addEventListener('visibilitychange', onVisibility);
    reduceMq.addEventListener('change', onMotionPreference);

    return () => {
      stopLoop();
      window.clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('arc:surge', onSurge);
      document.removeEventListener('visibilitychange', onVisibility);
      reduceMq.removeEventListener('change', onMotionPreference);
      parts.length = 0;
    };
  }, []);

  return (
    <canvas
      id="arc-embers"
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 -z-10 block h-full w-full pointer-events-none"
    />
  );
}
