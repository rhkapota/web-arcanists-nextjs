import type { CSSProperties } from 'react';

type Stroke = { d: string; delay: number };

const STROKES: Stroke[] = [
  // Wings: steep leading edge with a curl at the tip, then fanned feathers.
  { d: 'M92,92 C74,70 48,46 26,34 C33,48 37,58 39,70', delay: 0 },
  { d: 'M108,92 C126,70 152,46 174,34 C167,48 163,58 161,70', delay: 70 },
  {
    d: 'M92,94 C76,78 54,60 34,50 M92,98 C78,86 60,72 44,64 M92,102 C80,93 66,83 52,77',
    delay: 150,
  },
  {
    d: 'M108,94 C124,78 146,60 166,50 M108,98 C122,86 140,72 156,64 M108,102 C120,93 134,83 148,77',
    delay: 200,
  },
  // Neck, hooked head, beak and crest.
  {
    d: 'M100,104 C99,94 99,84 100,75 C101,68 98,62 92,60 C86,58 81,61 80,66 C79,71 82,75 87,76 M80,66 L67,70 L80,75 M96,59 C92,50 92,43 97,36',
    delay: 280,
  },
  // Tail: the signature swoosh, down and curling left.
  { d: 'M100,106 C97,128 86,150 68,164 C56,173 47,176 40,175', delay: 380 },
  { d: 'M101,106 C106,126 108,144 104,158 M99,107 C94,126 88,142 78,154', delay: 450 },
  // Broken ring of flame, echoing the patch's stitched border.
  { d: 'M36,55 A78,78 0 0,0 36,145 M164,55 A78,78 0 0,1 164,145', delay: 540 },
  // "U" and "M" close the wordmark last.
  { d: 'M54,100 L54,134 C54,148 64,156 78,156 C92,156 102,148 102,134 L102,100', delay: 660 },
  { d: 'M108,156 L108,100 L127,130 L146,100 L146,156', delay: 740 },
];

export function PhoenixMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {STROKES.map((stroke, i) => (
        <path
          key={i}
          d={stroke.d}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          style={{ '--arc-delay': `${stroke.delay}ms` } as CSSProperties}
        />
      ))}
    </svg>
  );
}
