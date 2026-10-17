import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'VibeFlow — Batch USDC Payments. Instantly.'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          padding: '80px',
          background: '#fafaf8',
          position: 'relative',
        }}
      >
        {/* violet glow */}
        <div
          style={{
            position: 'absolute',
            top: '-160px',
            right: '-120px',
            width: '560px',
            height: '560px',
            borderRadius: '9999px',
            background: 'rgba(124, 58, 237, 0.16)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-200px',
            left: '-140px',
            width: '480px',
            height: '480px',
            borderRadius: '9999px',
            background: 'rgba(37, 99, 235, 0.12)',
            filter: 'blur(60px)',
          }}
        />

        {/* badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            alignSelf: 'flex-start',
            border: '1px solid #e5e7eb',
            borderRadius: '9999px',
            padding: '10px 20px',
            background: '#ffffff',
            fontSize: '24px',
            fontWeight: 600,
            color: '#111111',
          }}
        >
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '9999px',
              background: '#7c3aed',
            }}
          />
          Built on Arc Blockchain
        </div>

        {/* wordmark */}
        <div
          style={{
            display: 'flex',
            marginTop: '36px',
            fontSize: '120px',
            fontWeight: 800,
            letterSpacing: '-4px',
            color: '#111111',
            lineHeight: 1,
          }}
        >
          VibeFlow
        </div>

        {/* tagline */}
        <div
          style={{
            display: 'flex',
            marginTop: '20px',
            fontSize: '52px',
            fontWeight: 600,
            color: '#6b7280',
            lineHeight: 1.15,
          }}
        >
          Batch USDC Payments. <span style={{ color: '#7c3aed' }}>Instantly.</span>
        </div>

        {/* footer pills */}
        <div
          style={{
            display: 'flex',
            gap: '14px',
            marginTop: '48px',
          }}
        >
          {['USDC', 'EURC', 'Sub-second finality'].map((label) => (
            <div
              key={label}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '9999px',
                padding: '10px 22px',
                background: '#f1eef9',
                fontSize: '24px',
                fontWeight: 600,
                color: '#7c3aed',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
