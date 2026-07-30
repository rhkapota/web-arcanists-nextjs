'use client';

import { useEffect, useRef } from 'react';
import { PhoenixMark } from '@/components/PhoenixMark';
import { createBurst } from '@/lib/embers';

const TOTAL_MS = 3200;
const BURST_AT_MS = 1800;

export function IntroGate() {
  const burstRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains('arc-intro')) return;


    const burst: { handle: ReturnType<typeof createBurst> | null } = { handle: null };
    let finished = false;

    const burstTimer = window.setTimeout(() => {
      if (burstRef.current) {
        burst.handle = createBurst(burstRef.current, { count: 130, duration: 1400 });
      }
    }, BURST_AT_MS);


    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(burstTimer);
      window.clearTimeout(endTimer);
      root.classList.remove('arc-intro');
      window.dispatchEvent(new CustomEvent('arc:surge'));
    };

    const endTimer = window.setTimeout(finish, TOTAL_MS);

    const skip = () => {
      burst.handle?.stop();
      finish();
    };

    window.addEventListener('keydown', skip);
    window.addEventListener('pointerdown', skip);

    return () => {
      window.clearTimeout(burstTimer);
      window.clearTimeout(endTimer);
      burst.handle?.stop();
      window.removeEventListener('keydown', skip);
      window.removeEventListener('pointerdown', skip);
    };
  }, []);

  return (
    <div id="arc-gate" aria-hidden="true" className="fixed inset-0 z-[200] overflow-hidden">
      <div className="arc-door-l absolute inset-y-0 left-0 w-1/2 bg-black" />
      <div className="arc-door-r absolute inset-y-0 right-0 w-1/2 bg-black" />
      <div className="arc-seam absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-orange-500" />

      {/* Full-bleed so sparks carry past the logo and spill through the opening
          doors, instead of clipping at a small box edge. */}
      <canvas ref={burstRef} className="absolute inset-0 h-full w-full pointer-events-none" />

      <div className="absolute inset-0 grid place-items-center">
        <div className="arc-mark relative h-[260px] w-[260px] md:h-[360px] md:w-[360px]">
          <PhoenixMark className="arc-phoenix absolute inset-0 h-full w-full" />
          <img
            src="/icon.png"
            alt=""
            className="arc-ignite absolute inset-0 h-full w-full object-contain"
          />
          <div className="arc-shock absolute inset-0 rounded-full border border-orange-500/60" />
        </div>
      </div>

      <p className="arc-skip absolute bottom-8 left-1/2 -translate-x-1/2 terminal-text text-[10px] uppercase tracking-[0.3em] text-neutral-600">
        press any key to skip
      </p>
    </div>
  );
}
