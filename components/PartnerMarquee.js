'use client';

export default function PartnerMarquee() {
  const partnersRow1 = [
    { name: 'SADIQ GROUP', color: '#00A19D' },
    { name: 'ENGRO CORP', color: '#0077C0' },
    { name: 'NISHAT MILLS', color: '#D4AF37' },
    { name: 'GUL AHMED', color: '#E01E2E' },
    { name: 'INTERLOOP', color: '#25D366' },
    { name: 'FAISAL MILLS', color: '#FF6B6B' },
  ];

  const partnersRow2 = [
    { name: 'LUCKY CEMENT', color: '#00A19D' },
    { name: 'SURIYA TEXTILE', color: '#0077C0' },
    { name: 'CHENAB GROUP', color: '#D4AF37' },
    { name: 'SAPPPHIRE', color: '#E01E2E' },
    { name: 'AMRELI STEELS', color: '#25D366' },
    { name: 'FATIMA FERT', color: '#FF6B6B' },
  ];

  const MarqueeRow = ({ items, reverse }) => (
    <div style={{
      display: 'flex',
      width: 'fit-content',
      animation: `${reverse ? 'marqueeScrollReverse' : 'marqueeScroll'} 40s linear infinite`,
      gap: '30px',
      padding: '15px 0'
    }}>
      {[...items, ...items, ...items].map((partner, i) => (
        <div key={i} style={{
          minWidth: '220px',
          height: '100px',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          border: `2px solid ${partner.color}20`,
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          padding: '20px',
          transition: 'all 0.3s ease'
        }}>
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '900',
            fontSize: '0.95rem',
            color: partner.color,
            textAlign: 'center',
            letterSpacing: '1px'
          }}>{partner.name}</span>
          <div style={{ width: '40px', height: '3px', background: partner.color, marginTop: '10px', borderRadius: '5px', opacity: 0.5 }}></div>
        </div>
      ))}
    </div>
  );

  return (
    <section style={{ padding: '80px 0', background: '#f8fafa', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: '50px', textAlign: 'center' }}>
        <p style={{ color: '#00A19D', fontWeight: '800', letterSpacing: '4px', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '15px' }}>Industry Footprint</p>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#111' }}>Trusted By 50+ Global Partners</h2>
      </div>

      <div style={{ position: 'relative' }}>
        {/* Row 1: Left to Right */}
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <MarqueeRow items={partnersRow1} reverse={false} />
        </div>

        {/* Row 2: Right to Left */}
        <div style={{ overflow: 'hidden', width: '100%', marginTop: '20px' }}>
          <MarqueeRow items={partnersRow2} reverse={true} />
        </div>

        {/* Gradients */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '150px', background: 'linear-gradient(to right, #f8fafa, transparent)', zIndex: 2 }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '150px', background: 'linear-gradient(to left, #f8fafa, transparent)', zIndex: 2 }}></div>
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
        @media (max-width: 768px) {
          section { padding: 60px 0; }
        }
      `}</style>
    </section>
  );
}