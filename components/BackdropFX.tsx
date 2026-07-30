
type BackdropProps = {
  grid?: 'hero' | 'footer' | false;
  glow?: 'hot' | 'warm' | false;
};


const GRID = {
  hero: 'bg-[linear-gradient(rgba(249,115,22,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.04)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]',
  footer:
    'bg-[linear-gradient(rgba(249,115,22,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:50px_50px]',
} as const;

const GLOW = {

  hot: 'absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[560px] h-[320px] md:h-[560px] bg-orange-500/[0.12] rounded-full blur-[110px] pointer-events-none will-change-[filter]',
  warm: 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/[0.07] rounded-full blur-[80px] md:blur-[120px] pointer-events-none opacity-40 will-change-[filter]',
} as const;

export function BackdropFX({ grid = 'hero', glow = false }: BackdropProps) {
  return (
    <>
      {grid && <div className={`absolute inset-0 pointer-events-none ${GRID[grid]}`} />}
      {glow && <div className={GLOW[glow]} />}
    </>
  );
}
