import { ChevronDown } from 'lucide-react';
import FoldTwo from './components/FoldTwo';
import FoldThree from './components/FoldThree';
import FoldFour from './components/FoldFour';
import FoldFive from './components/FoldFive';
import FoldSix from './components/FoldSix';
import FoldSeven from './components/FoldSeven';
import FoldEight from './components/FoldEight';
import FoldEightC from './components/FoldEightC';
import FoldNine from './components/FoldNine';

export default function App() {
  return (
    <div className="w-full" style={{ fontFamily: 'Figtree, sans-serif' }}>
      {/* Fold 1: Hero */}
      <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1709113832647-166996ec9c8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxldXJvcGVhbiUyMHJlc2lkZW50aWFsJTIwbmVpZ2hib3Job29kJTIwc3RyZWV0JTIwY291cnR5YXJkJTIwYXV0aGVudGljfGVufDF8fHx8MTc3OTA0NjU1MHww&ixlib=rb-4.1.0&q=80&w=1080)'
        }}
      />

      {/* Bottom Gradient Scrim */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(18, 14, 12, 0.90) 0%, rgba(18, 14, 12, 0.75) 25%, rgba(18, 14, 12, 0.4) 45%, rgba(18, 14, 12, 0) 55%)'
        }}
      />

      {/* Top Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(18, 14, 12, 0) 30%, rgba(18, 14, 12, 0.25) 100%)'
        }}
      />

      {/* Film Grain Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          mixBlendMode: 'overlay'
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end px-16 pb-20" style={{ maxWidth: '100%' }}>
        <div style={{ maxWidth: '860px' }}>
          {/* Eyebrow - Frosted Glass Pill */}
          <div
            className="inline-flex items-center mb-7"
            style={{
              borderRadius: '100px',
              backgroundColor: 'rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              padding: '9px 18px'
            }}
          >
            {/* φιλοξενία */}
            <span
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: '#FF385C',
                letterSpacing: '0.02em'
              }}
            >
              φιλοξενία
            </span>

            {/* Divider */}
            <div
              style={{
                width: '1px',
                height: '10px',
                backgroundColor: 'rgba(255, 255, 255, 0.35)',
                margin: '0 10px'
              }}
            />

            {/* THE LOVE OF STRANGERS */}
            <span
              style={{
                fontSize: '10px',
                fontWeight: 500,
                color: 'rgba(255, 255, 255, 0.80)',
                textTransform: 'uppercase',
                letterSpacing: '0.14em'
              }}
            >
              THE LOVE OF STRANGERS
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: '62px',
              fontWeight: 700,
              lineHeight: '1.06',
              color: 'rgba(255, 255, 255, 0.97)',
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              maxWidth: '18ch'
            }}
          >
            It started with open doors. It became a marketplace.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.82)',
              maxWidth: '52ch'
            }}
          >
            An idea built on human connection and belonging became a cold transaction.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-16 flex items-center gap-3">
        <div
          style={{
            width: '32px',
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.25)'
          }}
        />
        <div className="flex flex-col" style={{ gap: '2px' }}>
          <ChevronDown size={14} color="white" strokeWidth={1.5} />
          <ChevronDown size={14} color="white" strokeWidth={1.5} style={{ marginTop: '-4px' }} />
        </div>
        <span
          style={{
            fontSize: '10px',
            fontWeight: 400,
            color: 'rgba(255, 255, 255, 0.35)',
            textTransform: 'uppercase',
            letterSpacing: '0.18em'
          }}
        >
          SCROLL
        </span>
      </div>
      </div>

      {/* Fold 2: What This Is */}
      <FoldTwo />

      {/* Fold 3: The World That Broke */}
      <FoldThree />

      {/* Fold 4: Two Sides of the Same Stay */}
      <FoldFour />

      {/* Fold 5: The Window */}
      <FoldFive />

      {/* Fold 6: Introducing φιλοξενία */}
      <FoldSix />

      {/* Fold 7: Philo · Optimise */}
      <FoldSeven />

      {/* Fold 8: Xeny · Wander */}
      <FoldEight />

      {/* Fold 8C: What Makes It Different */}
      <FoldEightC />

      {/* Fold 9: Beyond Airbnb */}
      <FoldNine />
    </div>
  );
}