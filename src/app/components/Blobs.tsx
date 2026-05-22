/* Shared blob components — Philo (coral) and Xeny (lavender)
   Built from the Figma avatar structure: blurred gradient ellipse
   + glass face container + paired white-bar eyes.
*/

export function BlobSphere({
  size,
  gradStops,
  filterId,
  eyeDir = 'right',
  anim,
  style,
}: {
  size: number;
  gradStops: React.ReactNode;
  filterId: string;
  eyeDir?: 'right' | 'left';
  anim?: string;
  style?: React.CSSProperties;
}) {
  const pad   = size * 0.12;
  const total = size + pad * 2;
  const cx    = total / 2;
  const cy    = total / 2;
  const r     = size / 2 - 1;

  const eyeStyle: React.CSSProperties =
    eyeDir === 'right'
      ? { top: '32%', left: '46%', right: '16%', bottom: '43%' }
      : { top: '32%', left: '16%', right: '46%', bottom: '43%' };

  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0, animation: anim, ...style }}>
      {/* Blurred gradient ellipse */}
      <div style={{ position: 'absolute', inset: -pad, pointerEvents: 'none' }}>
        <svg width={total} height={total} viewBox={`0 0 ${total} ${total}`} fill="none">
          <defs>
            <filter id={filterId} filterUnits="userSpaceOnUse"
              x="0" y="0" width={total} height={total}
              colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur stdDeviation={size * 0.055} result="blur" />
            </filter>
            <linearGradient id={`g-${filterId}`} x1={cx} y1={cy - r} x2={cx} y2={cy + r}
              gradientUnits="userSpaceOnUse">
              {gradStops}
            </linearGradient>
          </defs>
          <ellipse cx={cx} cy={cy} rx={r} ry={r}
            fill={`url(#g-${filterId})`} filter={`url(#${filterId})`} />
        </svg>
      </div>

      {/* Glass face */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)',
        background: 'rgba(255,255,255,0.20)',
        border: '1px solid rgba(255,255,255,0.30)',
        boxShadow: '0 0 40px rgba(255,255,255,0.80)',
      }}>
        <div style={{ position: 'absolute', ...eyeStyle }}>
          <div style={{
            position: 'absolute', top: 0, bottom: 0, left: 0, right: '72%',
            background: 'linear-gradient(to bottom,#fff 0%,rgba(255,255,255,0.65) 50%,rgba(255,255,255,0) 100%)',
            borderRadius: 9999, boxShadow: '0 4px 4px rgba(0,0,0,0.02)',
          }} />
          <div style={{
            position: 'absolute', top: 0, bottom: 0, left: '72%', right: 0,
            background: 'linear-gradient(to bottom,#fff 0%,rgba(255,255,255,0.65) 50%,rgba(255,255,255,0) 100%)',
            borderRadius: 9999, boxShadow: '0 4px 4px rgba(0,0,0,0.02)',
          }} />
        </div>
      </div>
    </div>
  );
}

export function PhiloBlob({
  size,
  eyeDir = 'right',
  anim,
  style,
}: {
  size: number;
  eyeDir?: 'right' | 'left';
  anim?: string;
  style?: React.CSSProperties;
}) {
  return (
    <BlobSphere size={size} filterId={`philo-${size}`} eyeDir={eyeDir} anim={anim} style={style}
      gradStops={<>
        <stop stopColor="#FFCB9D" />
        <stop offset="0.5" stopColor="#FF8A8E" stopOpacity="0.82" />
        <stop offset="1"   stopColor="#FF8A8E" stopOpacity="0.40" />
      </>}
    />
  );
}

export function XenyBlob({
  size,
  eyeDir = 'right',
  anim,
  style,
}: {
  size: number;
  eyeDir?: 'right' | 'left';
  anim?: string;
  style?: React.CSSProperties;
}) {
  return (
    <BlobSphere size={size} filterId={`xeny-${size}`} eyeDir={eyeDir} anim={anim} style={style}
      gradStops={<>
        <stop stopColor="#A6BCFF" />
        <stop offset="0.80" stopColor="#FF8A8E" stopOpacity="0.80" />
        <stop offset="1"    stopColor="#FF8A8E" stopOpacity="0.40" />
      </>}
    />
  );
}
