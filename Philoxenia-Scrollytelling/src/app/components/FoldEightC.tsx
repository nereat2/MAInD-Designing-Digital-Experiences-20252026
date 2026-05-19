/* Fold 8C — What Makes It Different */

const KEYFRAMES = `
@keyframes bar-pulse-0 {
  0%,100% { transform: scaleY(1); opacity: 0.40; }
  50%      { transform: scaleY(0.55); opacity: 0.25; }
}
@keyframes bar-pulse-1 {
  0%,100% { transform: scaleY(1); opacity: 0.58; }
  50%      { transform: scaleY(0.60); opacity: 0.38; }
}
@keyframes bar-pulse-2 {
  0%,100% { transform: scaleY(1); opacity: 0.85; }
  50%      { transform: scaleY(0.62); opacity: 0.55; }
}
@keyframes bar-pulse-3 {
  0%,100% { transform: scaleY(1); opacity: 0.72; }
  50%      { transform: scaleY(0.58); opacity: 0.48; }
}
@keyframes bar-pulse-4 {
  0%,100% { transform: scaleY(1); opacity: 0.52; }
  50%      { transform: scaleY(0.56); opacity: 0.32; }
}
@keyframes bar-pulse-5 {
  0%,100% { transform: scaleY(1); opacity: 0.40; }
  50%      { transform: scaleY(0.50); opacity: 0.22; }
}
@keyframes circle-left {
  0%,100% { transform: translateX(0); }
  50%      { transform: translateX(9px); }
}
@keyframes circle-right {
  0%,100% { transform: translateX(0); }
  50%      { transform: translateX(-9px); }
}
`;

/* ── BARS GRAPHIC ──────────────────────────────── */
const BAR_HEIGHTS = [24, 42, 64, 50, 32, 18];
const BAR_OPACITIES = [0.40, 0.58, 0.85, 0.72, 0.52, 0.40];

function BarsGraphic() {
  return (
    <div style={{
      height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7
    }}>
      {BAR_HEIGHTS.map((h, i) => (
        <div key={i} style={{
          width: 9, height: h, borderRadius: 5,
          backgroundColor: '#FF385C',
          opacity: BAR_OPACITIES[i],
          transformOrigin: 'bottom',
          animation: `bar-pulse-${i} 1.8s ease-in-out ${i * 0.22}s infinite`
        }} />
      ))}
    </div>
  );
}

/* ── CONCENTRIC CIRCLES GRAPHIC ──────────────────── */
const RINGS = [
  { r: 52, opacity: 0.50 },
  { r: 80, opacity: 0.30 },
  { r: 110, opacity: 0.16 },
  { r: 138, opacity: 0.08 },
];
const SVG_SIZE = 300;
const CX = SVG_SIZE / 2;

function ConcentricGraphic() {
  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={SVG_SIZE} height="100%" viewBox={`0 0 ${SVG_SIZE} 200`} style={{ overflow: 'visible' }}>
        {RINGS.map(({ r, opacity }) => (
          <circle key={r} cx={CX} cy={100} r={r}
            fill="none" stroke="#7BBFA8" strokeWidth={1.5} opacity={opacity} />
        ))}
        {/* Centre filled dot */}
        <circle cx={CX} cy={100} r={13} fill="#7BBFA8" />
        {/* White centre dot */}
        <circle cx={CX} cy={100} r={4} fill="white" />
      </svg>
    </div>
  );
}

/* ── OVERLAPPING CIRCLES GRAPHIC ─────────────────── */
function OverlapGraphic() {
  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: 80, height: 48 }}>
        {/* Left circle */}
        <div style={{
          position: 'absolute', top: 0, left: 0,
          width: 48, height: 48, borderRadius: '50%',
          backgroundColor: '#8B9ED4', opacity: 0.45,
          animation: 'circle-left 4s ease-in-out infinite'
        }} />
        {/* Right circle */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: 48, height: 48, borderRadius: '50%',
          backgroundColor: '#8B9ED4', opacity: 0.65,
          animation: 'circle-right 4s ease-in-out infinite'
        }} />
      </div>
    </div>
  );
}

/* ── CARD ─────────────────────────────────────────── */
function Card({
  graphicBg, graphic, title, line
}: {
  graphicBg: string; graphic: React.ReactNode; title: string; line: string;
}) {
  return (
    <div style={{ borderRadius: 24, overflow: 'hidden', flex: 1, minWidth: 0 }}>
      {/* Graphic zone */}
      <div style={{ background: graphicBg, height: 200 }}>
        {graphic}
      </div>
      {/* Text body */}
      <div style={{ background: '#FFFFFF', padding: '24px 26px 28px' }}>
        <div style={{
          fontSize: 17, fontWeight: 700, letterSpacing: '-0.015em',
          color: '#2C2825', marginBottom: 8
        }}>{title}</div>
        <p style={{
          fontSize: 13, lineHeight: 1.65,
          color: 'rgba(44,40,37,0.62)', margin: 0
        }}>{line}</p>
      </div>
    </div>
  );
}

/* ── FOLD 8C ──────────────────────────────────────── */
export default function FoldEightC() {
  return (
    <section style={{
      background: '#F4F3F1',
      padding: '100px 0',
      fontFamily: 'Figtree, sans-serif'
    }}>
      <style>{KEYFRAMES}</style>

      <div style={{
        maxWidth: 960, margin: '0 auto',
        padding: '0 clamp(1.5rem, 6vw, 4rem)'
      }}>
        {/* Section label */}
        <p style={{
          fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.16em',
          color: '#FF385C', marginBottom: 40
        }}>WHAT MAKES IT DIFFERENT</p>

        {/* Three cards */}
        <div style={{ display: 'flex', gap: 16 }}>
          <Card
            graphicBg="linear-gradient(145deg, #FFEEE8 0%, #FFD8CC 55%, #FFCEC4 100%)"
            graphic={<BarsGraphic />}
            title="Conversation-driven"
            line="The agent listens. No forms, no dropdowns."
          />
          <Card
            graphicBg="linear-gradient(145deg, #E6F5EF 0%, #C8E8D8 55%, #B8DFD0 100%)"
            graphic={<ConcentricGraphic />}
            title="Territory-rooted"
            line="Every recommendation knows the exact place it's talking about."
          />
          <Card
            graphicBg="linear-gradient(145deg, #EEEAFB 0%, #DDD6F5 55%, #D0C8F0 100%)"
            graphic={<OverlapGraphic />}
            title="Personally matched"
            line="The more you use it, the better it knows you."
          />
        </div>
      </div>
    </section>
  );
}
