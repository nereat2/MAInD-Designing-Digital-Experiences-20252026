/* Fold 8C — What Makes It Different */
import { useScrollReveal } from '../hooks/useScrollReveal';
import conversationImg from '../../imports/conversation.png';
import shopsImg from '../../imports/shops.png';
import heartImg from '../../imports/heart.png';

const KEYFRAMES = `
@keyframes blob-float {
  0%,100% { transform: scale(1) translateY(0px); }
  50%      { transform: scale(1.08) translateY(-4px); }
}
@keyframes blob-drift {
  0%,100% { transform: scale(1) translate(0,0); }
  33%      { transform: scale(1.06) translate(3px,-3px); }
  66%      { transform: scale(0.96) translate(-2px,2px); }
}
@keyframes card-in {
  from { opacity:0; transform:translateY(24px); }
  to   { opacity:1; transform:translateY(0); }
}
`;

const CARDS = [
  {
    title: 'Conversation-driven',
    body: 'The agent listens. No forms, no dropdowns.',
    image: conversationImg,
  },
  {
    title: 'Territory-rooted',
    body: "Every recommendation knows the exact place it's talking about.",
    image: shopsImg,
  },
  {
    title: 'Personally matched',
    body: 'The more you use it, the better it knows you.',
    image: heartImg,
  },
];

function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ width: 120, height: 120, marginBottom: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

function Card({ card, delay }: { card: typeof CARDS[0]; delay: number }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.60)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.62)',
        borderRadius: 20,
        padding: '36px 32px 40px',
        boxShadow: '0 4px 24px rgba(140,130,200,0.10), 0 1px 4px rgba(140,130,200,0.08)',
        display: 'flex',
        flexDirection: 'column',
        animation: `card-in 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms both`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)';
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 16px 48px rgba(140,130,200,0.18), 0 2px 8px rgba(140,130,200,0.10)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          '0 4px 24px rgba(140,130,200,0.10), 0 1px 4px rgba(140,130,200,0.08)';
      }}
    >
      <CardImage src={card.image} alt={card.title} />
      <div style={{
        fontSize: 18, fontWeight: 700, letterSpacing: '-0.018em',
        color: '#1C1917', marginBottom: 10, lineHeight: 1.25
      }}>
        {card.title}
      </div>
      <p style={{
        fontSize: 14, lineHeight: 1.7,
        color: 'rgba(28,25,23,0.55)', margin: 0
      }}>
        {card.body}
      </p>
    </div>
  );
}

export default function FoldEightC() {
  const sectionLabel = useScrollReveal();
  const cardGrid = useScrollReveal(0.15, 100);

  return (
    <section style={{
      position: 'relative',
      fontFamily: 'Figtree, sans-serif',
      padding: '100px 0 110px',
      overflow: 'hidden',
      /* Pink gradient */
      background: 'linear-gradient(175deg, #FFD1D6 0%, #FFE0E3 35%, #FFEFF1 65%, #FFF9FA 100%)',
    }}>
      <style>{KEYFRAMES}</style>

      {/* Ambient orbs layered into the background */}
      <div aria-hidden style={{
        position: 'absolute', top: -80, left: '10%',
        width: 420, height: 420, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(255,112,85,0.18) 0%, transparent 65%)',
        filter: 'blur(30px)',
      }} />
      <div aria-hidden style={{
        position: 'absolute', top: 60, right: '8%',
        width: 340, height: 340, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(155,144,216,0.22) 0%, transparent 65%)',
        filter: 'blur(24px)',
      }} />
      <div aria-hidden style={{
        position: 'absolute', bottom: -40, left: '35%',
        width: 500, height: 300, borderRadius: '50%', pointerEvents: 'none',
        background: 'radial-gradient(circle, rgba(126,200,192,0.15) 0%, transparent 65%)',
        filter: 'blur(36px)',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 960, margin: '0 auto',
        padding: '0 clamp(1.5rem, 6vw, 4rem)'
      }}>
        {/* Section label */}
        <p ref={sectionLabel.ref} style={{
          fontSize: 11, fontWeight: 500,
          textTransform: 'uppercase', letterSpacing: '0.16em',
          color: 'rgba(28,25,23,0.42)', marginBottom: 48,
          ...sectionLabel.style
        }}>
          WHAT MAKES IT DIFFERENT
        </p>

        {/* Card grid */}
        <div ref={cardGrid.ref} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          ...cardGrid.style
        }}>
          {CARDS.map((card, i) => (
            <Card key={card.title} card={card} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
