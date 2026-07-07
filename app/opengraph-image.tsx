import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Shopping Fortaleza — Onde as compras encontram o oceano';

// Imagem de partilha (Open Graph / Twitter): wordmark sobre o mar profundo
// com a linha do horizonte — a assinatura visual do site.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #062A3B 0%, #04202D 100%)',
          color: '#F3FAFB',
          padding: 80,
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 10, color: '#38B2C6' }}>
          BAÍA DE LUANDA · ANGOLA
        </div>
        <div
          style={{
            fontSize: 116,
            fontWeight: 800,
            lineHeight: 1,
            marginTop: 18,
            letterSpacing: -2,
          }}
        >
          SHOPPING FORTALEZA
        </div>
        <div style={{ fontSize: 34, color: '#9DB3BC', marginTop: 28 }}>
          Onde as compras encontram o oceano
        </div>
        <div
          style={{
            position: 'absolute',
            left: 80,
            right: 80,
            top: 348,
            height: 4,
            background:
              'linear-gradient(90deg, rgba(15,134,165,0), #0F86A5, #E4B570, rgba(228,181,112,0))',
          }}
        />
      </div>
    ),
    { ...size },
  );
}
