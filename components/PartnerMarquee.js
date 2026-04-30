'use client';
import { useState } from 'react';

function PartnerCard({ partner }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div style={{
      minWidth: '200px',
      height: '100px',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      border: `1px solid ${partner.color}15`,
      boxShadow: '0 5px 15px rgba(0,0,0,0.02)',
      padding: '12px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {partner.logo && !imgError ? (
        <img 
          src={partner.logo} 
          alt={partner.name} 
          style={{ 
            maxHeight: '40px', 
            maxWidth: '150px', 
            objectFit: 'contain',
            marginBottom: '5px'
          }} 
          onError={() => setImgError(true)}
        />
      ) : null}
      {(imgError || !partner.logo) && (
        <span style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '800',
          fontSize: '0.85rem',
          color: partner.color,
          textAlign: 'center',
          letterSpacing: '0.3px'
        }}>{partner.name}</span>
      )}
      <div style={{ 
        position: 'absolute', bottom: 0, left: 0, right: 0, 
        height: '3px', background: partner.color, opacity: 0.5 
      }}></div>
    </div>
  );
}

export default function PartnerMarquee() {
  const row1 = [
    { name: 'TATA PAKISTAN', color: '#004B91', logo: 'https://www.tatapakistan.com/wp-content/uploads/2021/04/logo.png' },
    { name: 'COLA NEXT', color: '#E31E24', logo: 'https://colanext.com/wp-content/uploads/2022/01/Cola-Next-Logo.png' },
    { name: 'ZARA', color: '#000000', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' },
    { name: 'GUL AHMED', color: '#000000', logo: 'https://www.gulahmedshop.com/static/version1713435649/frontend/Gulahmed/default/en_US/images/logo.svg' },
    { name: 'SAPPHIRE', color: '#000000' },
    { name: 'KOHINOOR TEXTILE', color: '#004B91' },
    { name: 'ALKARAM', color: '#E31E24' },
    { name: 'COLONY TEXTILE', color: '#00A19D' },
    { name: 'SURAJ COTTON', color: '#0077C0' },
    { name: 'NAGINA GROUP', color: '#D4AF37' },
    { name: 'AL QADAR', color: '#E01E2E' },
    { name: 'GULSHAN TEXTILES', color: '#25D366' },
    { name: 'NISHAT MILLS', color: '#000000' },
    { name: 'MEKOTEX', color: '#FF6B6B' },
    { name: 'AZGARD 9', color: '#004B91' },
    { name: 'RUSTAM TEXTILE', color: '#00A19D' },
    { name: 'FAZAL CLOTH', color: '#0077C0' },
    { name: 'YBJ', color: '#D4AF37' },
    { name: 'GADOON TEXTILE', color: '#E01E2E' },
    { name: 'GOHAR TEXTILE', color: '#25D366' },
    { name: 'AGI DENIM', color: '#000000' },
  ];

  const row2 = [
    { name: 'SHADMAN COTTON', color: '#00A19D' },
    { name: 'RANA TEXTILE', color: '#0077C0' },
    { name: 'HTM', color: '#D4AF37' },
    { name: 'STYLE TEXTILE', color: '#E01E2E' },
    { name: 'JAMAL FABRICS', color: '#25D366' },
    { name: 'AHMAD HASSAN', color: '#FF6B6B' },
    { name: 'RIZWAN TEXTILE', color: '#00A19D' },
    { name: 'ATTOCK CEMENT', color: '#004B91' },
    { name: 'AHMED FINE', color: '#0077C0' },
    { name: 'MADINA SUGAR', color: '#D4AF37' },
    { name: 'IFL', color: '#E01E2E' },
    { name: 'BEST EXPORT', color: '#25D366' },
    { name: 'ARTISTIC MILLINERS', color: '#000000' },
    { name: 'SAIF GROUP', color: '#00A19D' },
    { name: 'MAHMOOD GROUP', color: '#004B91' },
    { name: 'NAVEENA DEVELOPERS', color: '#D4AF37' },
    { name: 'DIN GROUPS', color: '#E01E2E' },
    { name: 'KHAS TEXTILE', color: '#25D366' },
    { name: 'ALAM GROUP', color: '#FF6B6B' },
    { name: 'FAZAL GROUP', color: '#00A19D' },
    { name: 'HUSSAIN MILLS', color: '#0077C0' },
  ];

  const MarqueeRow = ({ items, reverse }) => (
    <div style={{
      display: 'flex',
      width: 'fit-content',
      animation: `${reverse ? 'marqueeScrollReverse' : 'marqueeScroll'} 65s linear infinite`,
      gap: '20px',
      padding: '8px 0'
    }}>
      {[...items, ...items, ...items].map((partner, i) => (
        <PartnerCard key={i} partner={partner} />
      ))}
    </div>
  );

  return (
    <section style={{ padding: '80px 0', background: '#ffffff', overflow: 'hidden', borderTop: '1px solid #f0f0f0' }}>
      <div className="container" style={{ marginBottom: '50px', textAlign: 'center' }}>
        <p style={{ color: '#00A19D', fontWeight: '800', letterSpacing: '4px', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '12px' }}>Our Strategic Partners</p>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: '900', color: '#111', letterSpacing: '-1px', lineHeight: 1.2 }}>Powering Global Industrial Excellence</h2>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <MarqueeRow items={row1} reverse={false} />
        </div>
        <div style={{ overflow: 'hidden', width: '100%', marginTop: '15px' }}>
          <MarqueeRow items={row2} reverse={true} />
        </div>

        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '200px', background: 'linear-gradient(to right, #ffffff, transparent)', zIndex: 2 }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '200px', background: 'linear-gradient(to left, #ffffff, transparent)', zIndex: 2 }}></div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marqueeScrollReverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}