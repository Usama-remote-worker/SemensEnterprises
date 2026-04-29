'use client';

export default function PartnerMarquee() {
  const partners = [
    { name: 'Sadiq', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?w=300&q=80' },
    { name: 'Engro', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&q=80' },
    { name: 'Nishat', logo: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&q=80' },
    { name: 'Gul Ahmed', logo: 'https://images.unsplash.com/photo-1554200876-56c2f25224fa?w=300&q=80' },
    { name: 'Interloop', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80' },
    { name: 'Faisal', logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80' },
  ];

  return (
    <div style={{ padding: 'clamp(40px, 8vw, 80px) 0', background: '#f8fafa', borderBottom: '1px solid #eee', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(25px, 5vw, 45px)' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: '800', color: '#888', letterSpacing: '3px', textTransform: 'uppercase' }}>Trusted By 50+ Global Brands</p>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="partner-logo">
                <div className="logo-box">
                  <img src={partner.logo} alt={partner.name} />
                </div>
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
          position: relative;
        }
        .marquee-content {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        .partner-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 45px;
          min-width: 130px;
          opacity: 0.7;
          transition: 0.3s;
        }
        .partner-logo:hover {
          opacity: 1;
        }
        .logo-box {
          height: 45px;
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .partner-logo img {
          height: 100%;
          width: auto;
          object-fit: contain;
          filter: grayscale(1);
          transition: filter 0.3s;
        }
        .partner-logo:hover img {
          filter: grayscale(0);
        }
        .partner-logo span {
          font-weight: 800;
          font-size: 0.75rem;
          color: #333;
          letter-spacing: 0.5px;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .partner-logo { margin: 0 25px; min-width: 100px; }
          .logo-box { height: 35px; }
          .partner-logo span { font-size: 0.65rem; }
        }
      `}</style>
    </div>
  );
}