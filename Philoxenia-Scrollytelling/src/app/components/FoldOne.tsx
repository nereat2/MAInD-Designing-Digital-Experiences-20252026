import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

declare const gsap: any;
declare const ScrollTrigger: any;

export default function FoldOne() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const hlFirstRef = useRef<HTMLSpanElement>(null);
  const hlSecondRef = useRef<HTMLSpanElement>(null);
  const hlMarketRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const sentence1Ref = useRef<HTMLSpanElement>(null);
  const sentence2Ref = useRef<HTMLSpanElement>(null);
  const sentence3Ref = useRef<HTMLSpanElement>(null);
  const scrollIndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const g = (window as any).gsap as typeof gsap;
    const ST = (window as any).ScrollTrigger as typeof ScrollTrigger;
    if (!g || !ST) return;

    g.registerPlugin(ST);

    const fold = containerRef.current;
    const foldH = window.innerHeight;

    // ── PHASE 1: LOAD ANIMATIONS ────────────────────────────────────────────

    g.set(bgRef.current, { scale: 1.08 });
    g.set(eyebrowRef.current, { opacity: 0, y: 10 });
    g.set(headlineRef.current, { opacity: 0, y: 18 });
    g.set(scrollIndRef.current, { opacity: 0 });
    g.set([sentence1Ref.current, sentence2Ref.current, sentence3Ref.current], { opacity: 0, y: 12 });

    const loadTl = g.timeline();
    loadTl
      .to(bgRef.current, { scale: 1, duration: 2.2, ease: 'expo.out' }, 0)
      .to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0.3)
      .to(headlineRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 0.55)
      .to(scrollIndRef.current, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 1.6);

    // ── PHASE 2: SCROLL ANIMATIONS ──────────────────────────────────────────

    // Scroll indicator fades out after first 20px of scroll
    ST.create({
      start: 20,
      onEnter: () => g.to(scrollIndRef.current, { opacity: 0, duration: 0.4, ease: 'power2.out' }),
      once: true,
    });

    // Subtitle sentences — discrete scroll-triggered reveals (not scrubbed)
    // Each fires when that % of the fold has scrolled past the viewport top
    [
      { ref: sentence1Ref, start: '15% top' },
      { ref: sentence2Ref, start: '30% top' },
      { ref: sentence3Ref, start: '50% top' },
    ].forEach(({ ref, start }) => {
      g.to(ref.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: fold,
          start,
          toggleActions: 'play none none reverse',
        },
      });
    });

    // Parallax exit — scrubbed from fold-top-at-viewport-top to fold-bottom-at-viewport-top
    const exitTl = g.timeline({
      scrollTrigger: {
        trigger: fold,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      },
    });

    // Background at 0.4x scroll speed:
    // Container moves up foldH; we add +0.6*foldH downward offset so net = 0.4x
    exitTl.to(bgRef.current, { y: foldH * 0.6, ease: 'none', duration: 1 }, 0);

    // Scrim intensifies by +15% opacity
    exitTl.to(scrimRef.current, { opacity: 1, ease: 'none', duration: 1 }, 0);

    // Eyebrow at 1.15x — peels away slightly faster (-15% extra upward)
    exitTl.to(eyebrowRef.current, { y: -foldH * 0.15, ease: 'none', duration: 1 }, 0);

    // Headline first half (light) fades 1.5× faster: done at 67% of scroll
    exitTl.to(hlFirstRef.current, { opacity: 0, ease: 'none', duration: 0.67 }, 0);

    // Headline second half fades over full scroll
    exitTl.to(hlSecondRef.current, { opacity: 0, ease: 'none', duration: 1 }, 0);

    // "marketplace." is very last — starts fading at 70%, gone at 100%
    exitTl.to(hlMarketRef.current, { opacity: 0, ease: 'none', duration: 0.3 }, 0.7);

    // Subtitle at 0.9x — lingers slightly (+10% downward offset)
    exitTl.to(
      [sentence1Ref.current, sentence2Ref.current, sentence3Ref.current],
      { y: foldH * 0.1, ease: 'none', duration: 1 },
      0
    );

    return () => {
      loadTl.kill();
      exitTl.kill();
      ST.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">

      {/* Background photograph — oversized vertically so parallax doesn't clip */}
      <div
        ref={bgRef}
        className="absolute left-0 right-0 bg-cover bg-center"
        style={{
          top: '-20%',
          height: '140%',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1709113832647-166996ec9c8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxldXJvcGVhbiUyMHJlc2lkZW50aWFsJTIwbmVpZ2hib3Job29kJTIwc3RyZWV0JTIwY291cnR5YXJkJTIwYXV0aGVudGljfGVufDF8fHx8MTc3OTA0NjU1MHww&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      />

      {/* Bottom gradient scrim */}
      <div
        ref={scrimRef}
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(18,14,12,0.90) 0%, rgba(18,14,12,0.75) 25%, rgba(18,14,12,0.4) 45%, rgba(18,14,12,0) 55%)',
          opacity: 0.85,
        }}
      />

      {/* Top vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(18,14,12,0) 30%, rgba(18,14,12,0.25) 100%)',
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Content */}
      <div
        className="relative h-full flex flex-col justify-end px-16 pb-20"
        style={{ maxWidth: '100%' }}
      >
        <div style={{ maxWidth: '860px' }}>

          {/* Eyebrow pill */}
          <div
            ref={eyebrowRef}
            className="inline-flex items-center mb-7"
            style={{
              borderRadius: '100px',
              backgroundColor: 'rgba(255,255,255,0.14)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.22)',
              padding: '9px 18px',
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: 400, color: '#FF385C', letterSpacing: '0.02em' }}>
              φιλοξενία
            </span>
            <div
              style={{
                width: '1px',
                height: '10px',
                backgroundColor: 'rgba(255,255,255,0.35)',
                margin: '0 10px',
              }}
            />
            <span
              style={{
                fontSize: '10px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.80)',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
              }}
            >
              THE LOVE OF STRANGERS
            </span>
          </div>

          {/* Headline — three spans for differential animation */}
          <h1
            ref={headlineRef}
            style={{
              fontSize: '62px',
              lineHeight: '1.06',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              maxWidth: '18ch',
            }}
          >
            <span
              ref={hlFirstRef}
              style={{ fontWeight: 300, color: 'rgba(255,255,255,0.97)' }}
            >
              It started with open doors.{' '}
            </span>
            <span
              ref={hlSecondRef}
              style={{ fontWeight: 800, color: 'rgba(255,255,255,0.97)' }}
            >
              It became a{' '}
            </span>
            <span
              ref={hlMarketRef}
              style={{ fontWeight: 800, color: '#FF385C' }}
            >
              marketplace.
            </span>
          </h1>

          {/* Subtitle — three sentences, each scroll-revealed independently */}
          <p
            ref={subtitleRef}
            style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '1.7',
              color: 'rgba(255,255,255,0.82)',
              maxWidth: '52ch',
              margin: 0,
            }}
          >
            <span ref={sentence1Ref} style={{ display: 'block' }}>
              An idea built on human connection and belonging.
            </span>
            <span ref={sentence2Ref} style={{ display: 'block' }}>
              A sacred duty — the stranger welcomed as guest.
            </span>
            <span ref={sentence3Ref} style={{ display: 'block' }}>
              Then someone put a price on it.
            </span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndRef}
        className="absolute bottom-12 left-16 flex items-center gap-3"
      >
        <div
          style={{
            width: '32px',
            height: '1px',
            backgroundColor: 'rgba(255,255,255,0.25)',
          }}
        />
        <div className="flex flex-col" style={{ gap: '2px' }}>
          <ChevronDown
            size={14}
            color="white"
            strokeWidth={1.5}
            className="fold1-chevron-1"
          />
          <ChevronDown
            size={14}
            color="white"
            strokeWidth={1.5}
            className="fold1-chevron-2"
            style={{ marginTop: '-4px' }}
          />
        </div>
        <span
          style={{
            fontSize: '10px',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
          }}
        >
          SCROLL
        </span>
      </div>
    </div>
  );
}
