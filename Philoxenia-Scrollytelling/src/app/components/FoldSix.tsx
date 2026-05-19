export default function FoldSix() {
  return (
    <section className="w-full" style={{ fontFamily: 'Figtree, sans-serif' }}>

      {/* ── PART 1 — THE REVEAL ─────────────────────── */}
      <div style={{ backgroundColor: '#FFFFFF', paddingTop: '120px', paddingBottom: '72px' }}>
        <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 clamp(1.5rem, 6vw, 4rem)' }}>

          {/* Eyebrow */}
          <p style={{ fontSize: '11px', fontWeight: 500, color: '#FF385C', textTransform: 'uppercase', letterSpacing: '0.16em', marginBottom: '24px' }}>
            The solution
          </p>

          {/* φιλοξενία */}
          <h2 style={{ fontFamily: 'Gelasio, serif', fontSize: 'clamp(64px, 8vw, 88px)', fontWeight: 700, color: '#2C2825', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '16px' }}>
            φιλοξενία
          </h2>

          {/* Sub-headline */}
          <div style={{ fontFamily: 'Gelasio, serif', fontSize: 'clamp(28px, 3.5vw, 34px)', fontWeight: 400, color: 'rgba(44,40,37,0.55)', letterSpacing: '-0.01em', paddingLeft: '2ch', marginBottom: '32px' }}>
            — the love of strangers.
          </div>

          {/* Concept body — single paragraph */}
          <p style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.75, color: 'rgba(44,40,37,0.70)', maxWidth: '56ch', marginBottom: '72px' }}>
            Philo and Xeny are two AI agents named after the two halves of φιλοξενία — the ancient Greek word for the love of strangers. Together they do what no platform feature has managed: connect the right person to the right place, in the right way.
          </p>
        </div>
      </div>

      {/* ── PART 2 — AGENT CARDS ────────────────────── */}
      <div style={{ background: 'linear-gradient(135deg, #FFD4B0 0%, #FFC4B0 50%, #FFB8C0 100%)', paddingTop: '80px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 clamp(1.5rem, 6vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>

            {/* Philo card */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '40px', boxShadow: '0 24px 64px rgba(0,0,0,0.10)' }}>
              {/* Orb */}
              <div style={{ position: 'relative', width: '96px', height: '96px', marginBottom: '24px' }}>
                <div style={{
                  position: 'absolute', width: '136px', height: '136px', left: '-20px', top: '-20px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,176,133,0.3) 0%, rgba(255,140,122,0.3) 45%, rgba(255,255,255,0) 70%)',
                  filter: 'blur(12px)',
                }} />
                <div style={{
                  position: 'relative', width: '96px', height: '96px', borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 30%, #FFB085 0%, #FF8C7A 45%, rgba(255,235,230,0.95) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                }}>
                  <div style={{ width: '10px', height: '20px', backgroundColor: 'white', borderRadius: '10px' }} />
                  <div style={{ width: '10px', height: '20px', backgroundColor: 'white', borderRadius: '10px' }} />
                </div>
              </div>
              {/* Content */}
              <div style={{ fontFamily: 'Gelasio, serif', fontSize: '28px', fontWeight: 700, color: '#2C2825' }}>Philo</div>
              <div style={{ fontSize: '12px', fontWeight: 500, color: '#FF385C', textTransform: 'uppercase', letterSpacing: '0.14em', marginTop: '4px' }}>
                Optimise
              </div>
              <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(44,40,37,0.08)', margin: '16px 0' }} />
              <p style={{ fontSize: '15px', fontWeight: 400, lineHeight: 1.65, color: 'rgba(44,40,37,0.68)' }}>
                Helps hosts shape their listing identity and helps guests find the right stay — through conversation, not filters.
              </p>
            </div>

            {/* Xeny card */}
            <div style={{ backgroundColor: '#FFFFFF', borderRadius: '24px', padding: '40px', boxShadow: '0 24px 64px rgba(0,0,0,0.10)' }}>
              {/* Orb */}
              <div style={{ position: 'relative', width: '96px', height: '96px', marginBottom: '24px' }}>
                <div style={{
                  position: 'absolute', width: '136px', height: '136px', left: '-20px', top: '-20px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 30%, rgba(184,176,232,0.3) 0%, rgba(212,168,200,0.3) 45%, rgba(255,255,255,0) 70%)',
                  filter: 'blur(12px)',
                }} />
                <div style={{
                  position: 'relative', width: '96px', height: '96px', borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 30%, #B8B0E8 0%, #D4A8C8 45%, #FFB8B8 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                }}>
                  <div style={{ width: '10px', height: '20px', backgroundColor: 'white', borderRadius: '10px' }} />
                  <div style={{ width: '10px', height: '20px', backgroundColor: 'white', borderRadius: '10px' }} />
                </div>
              </div>
              {/* Content */}
              <div style={{ fontFamily: 'Gelasio, serif', fontSize: '28px', fontWeight: 700, color: '#2C2825' }}>Xeny</div>
              <div style={{ fontSize: '12px', fontWeight: 500, color: '#8B9ED4', textTransform: 'uppercase', letterSpacing: '0.14em', marginTop: '4px' }}>
                Wander
              </div>
              <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(44,40,37,0.08)', margin: '16px 0' }} />
              <p style={{ fontSize: '15px', fontWeight: 400, lineHeight: 1.65, color: 'rgba(44,40,37,0.68)' }}>
                Turns a host's local knowledge into a living guide that travels with the guest through their destination.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── PART 3 — INTELLIGENCE LAYER ─────────────── */}
      <div style={{ backgroundColor: '#F4F3F1', paddingTop: '0', paddingBottom: '100px' }}>
        <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 clamp(1.5rem, 6vw, 4rem)', paddingTop: '80px' }}>

          {/* Intro line */}
          <p style={{ fontSize: '17px', fontWeight: 400, lineHeight: 1.65, color: 'rgba(44,40,37,0.65)', maxWidth: '54ch', marginBottom: '40px' }}>
            Powered by something no other platform has — a mix of human knowledge and AI intelligence.
          </p>

          {/* Three open columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px' }}>

            {/* Host knowledge */}
            <div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF385C' }} />
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#2C2825', marginTop: '10px' }}>
                Host knowledge
              </div>
              <p style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.7, color: 'rgba(44,40,37,0.62)', marginTop: '8px' }}>
                The host's identity, voice and local expertise — captured through conversation, built into every recommendation.
              </p>
            </div>

            {/* Territory partners */}
            <div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#88C4A8' }} />
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#2C2825', marginTop: '10px' }}>
                Territory partners
              </div>
              <p style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.7, color: 'rgba(44,40,37,0.62)', marginTop: '8px' }}>
                Local businesses, tourism organisations and community voices — verified, place-specific insights that go beyond what any algorithm can find alone.
              </p>
            </div>

            {/* AI intelligence */}
            <div>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#8B9ED4' }} />
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#2C2825', marginTop: '10px' }}>
                AI intelligence
              </div>
              <p style={{ fontSize: '14px', fontWeight: 400, lineHeight: 1.7, color: 'rgba(44,40,37,0.62)', marginTop: '8px' }}>
                Real-time data, market signals and contextual information — keeping recommendations grounded, current and aware of the world around them.
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
