import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

// Favicon: monograma "F" sobre o mar profundo, com a linha do horizonte.
export default function Icon() {
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
          fontSize: 46,
          fontWeight: 800,
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        F
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            left: 12,
            right: 12,
            height: 3,
            background: 'linear-gradient(90deg, #0F86A5, #E4B570)',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
