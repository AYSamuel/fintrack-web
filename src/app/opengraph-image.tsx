import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Traccia — Privacy-first personal finance';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D0D0F',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Blue glow — top left */}
        <div
          style={{
            position: 'absolute',
            top: -150,
            left: -150,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.22) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Purple glow — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            right: -150,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          {/* App name */}
          <div
            style={{
              fontSize: 104,
              fontWeight: 800,
              background: 'linear-gradient(135deg, #60A5FA 0%, #A78BFA 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-4px',
              lineHeight: 1,
            }}
          >
            Traccia
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 30,
              color: '#9CA3AF',
              letterSpacing: '-0.5px',
            }}
          >
            Your finances. Your device. Your rules.
          </div>

          {/* Privacy pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '12px',
              background: 'rgba(59,130,246,0.1)',
              border: '1px solid rgba(59,130,246,0.25)',
              borderRadius: '100px',
              padding: '10px 28px',
            }}
          >
            <div style={{ fontSize: 20, color: '#93C5FD' }}>
              Privacy-first personal finance
            </div>
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 44,
            fontSize: 20,
            color: '#374151',
            letterSpacing: '0.5px',
          }}
        >
          traccia.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
