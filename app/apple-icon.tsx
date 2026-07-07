import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#062A3B',
          color: '#F3FAFB',
          fontSize: 120,
          fontWeight: 800,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        F
        <div
          style={{
            position: 'absolute',
            bottom: 34,
            left: 34,
            right: 34,
            height: 6,
            background: 'linear-gradient(90deg, #0F86A5, #E4B570)',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
