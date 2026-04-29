'use client';

export default function PartnerMarquee() {
  const row1 = [
    { name: 'TATA PAKISTAN', color: '#004B91', logo: 'https://www.tatapakistan.com/wp-content/uploads/2021/04/logo.png' },
    { name: 'COLA NEXT', color: '#E31E24', logo: 'https://colanext.com/wp-content/uploads/2022/01/Cola-Next-Logo.png' },
    { name: 'ZARA', color: '#000000', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg' },
    { name: 'GUL AHMED', color: '#000000', logo: 'https://www.gulahmedshop.com/static/version1713435649/frontend/Gulahmed/default/en_US/images/logo.svg' },
    { name: 'SHADMAN COTTON', color: '#00A19D' },
    { name: 'RANA TEXTILE', color: '#0077C0' },
    { name: 'HTM', color: '#D4AF37' },
    { name: 'STYLE TEXTILE', color: '#E01E2E', logo: 'https://www.styletextile.com/wp-content/uploads/2021/03/style-logo.png' },
    { name: 'JAMAL FABRICS', color: '#25D366' },
    { name: 'SAPPHIRE', color: '#000000', logo: 'https://sapphireonline.pk/cdn/shop/files/Sapphire_Logo_Black_150x.png' },
    { name: 'AHMAD HASSAN', color: '#FF6B6B' },
    { name: 'RIZWAN TEXTILE', color: '#00A19D' },
    { name: 'ATTOCK CEMENT', color: '#004B91', logo: 'https://attockcement.com/wp-content/uploads/2021/03/logo.png' },
  ];

  const row2 = [
    { name: 'AHMED FINE', color: '#0077C0' },
    { name: 'MADINA SUGAR', color: '#D4AF37' },
    { name: 'IFL', color: '#E01E2E' },
    { name: 'BEST EXPORT', color: '#25D366' },
    { name: 'ARTISTIC MILLINERS', color: '#000000', logo: 'https://artisticmilliners.com/wp-content/uploads/2020/09/am-logo.png' },
    { name: 'SAIF GROUP', color: '#00A19D', logo: 'https://thesaifgroup.com/wp-content/uploads/2020/01/logo.png' },
    { name: 'MAHMOOD GROUP', color: '#004B91', logo: 'https://mahmoodgroup.com/wp-content/uploads/2020/03/logo.png' },
    { name: 'NAVEENA DEVELOPERS', color: '#D4AF37', logo: 'https://naveenagroup.com/wp-content/uploads/2021/05/logo.png' },
    { name: 'DIN GROUPS', color: '#E01E2E', logo: 'https://dingroup.com/wp-content/uploads/2021/05/logo.png' },
    { name: 'KHAS TEXTILE', color: '#25D366' },
    { name: 'ALAM GROUP', color: '#FF6B6B' },
    { name: 'FAZAL GROUP', color: '#00A19D', logo: 'https://fazalgroup.com/wp-content/uploads/2021/06/logo.png' },
    { name: 'HUSSAIN MILLS', color: '#0077C0' },
  ];

  const MarqueeRow = ({ items, reverse }) => (
    <div style={{
      display: 'flex',
      width: 'fit-content',
      animation: `${reverse ? 'marqueeScrollReverse' : 'marqueeScroll'} 50s linear infinite`,
      gap: '25px',
      padding: '10px 0'
    }}>
      {[...items, ...items, ...items].map((partner, i) => (
        <div key={i} style={{
          minWidth: '220px',
          height: '110px',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          border: `1px solid ${partner.color}20`,
          boxShadow: '0 8px 25px rgba(0,0,0,0.03)',
          padding: '15px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {partner.logo ? (
            <img 
              src={partner.logo} 
              alt={partner.name} 
              style={{ 
                maxHeight: '45px', 
                maxWidth: '160px', 
                objectFit: 'contain',
                marginBottom: '8px'
              }} 
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }}
            />
          ) : null}
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '800',
            fontSize: partner.logo ? '0.7rem' : '0.9rem',
            color: partner.color,
            textAlign: 'center',
            letterSpacing: '0.5px',
            display: partner.logo ? 'none' : 'block'
          }}>{partner.name}</span>
          <div style={{ 
            position: 'absolute', bottom: 0, left: 0, right: 0, 
            height: '4px', background: partner.color, opacity: 0.6 
          }}></div>
        </div>
      ))}
    </div>
  );

  return (
    <section style={{ padding: '70px 0', background: '#fcfcfc', overflow: 'hidden', borderTop: '1px solid #f0f0f0' }}>
      <div className="container" style={{ marginBottom: '40px', textAlign: 'center' }}>
        <p style={{ color: '#00A19D', fontWeight: '800', letterSpacing: '4px', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '10px' }}>Our Trusted Network</p>
        <h2 style={{ fontSize: '2.2rem', fontWeight: '900', color: '#111', letterSpacing: '-1px' }}>Powering Industry Leaders</h2>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <MarqueeRow items={row1} reverse={false} />
        </div>
        <div style={{ overflow: 'hidden', width: '100%', marginTop: '10px' }}>
          <MarqueeRow items={row2} reverse={true} />
        </div>

        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '200px', background: 'linear-gradient(to right, #fcfcfc, transparent)', zIndex: 2 }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '200px', background: 'linear-gradient(to left, #fcfcfc, transparent)', zIndex: 2 }}></div>
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