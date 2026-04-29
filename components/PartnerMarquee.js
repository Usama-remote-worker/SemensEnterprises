'use client';

export default function PartnerMarquee() {
  const partners = [
    { name: 'ENGRO CORP', logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=300&q=80' },
    { name: 'GUL AHMED', logo: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=300&q=80' },
    { name: 'INTERLOOP', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80' },
    { name: 'NISHAT MILLS', logo: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&q=80' },
    { name: 'SADIQ GROUP', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?w=300&q=80' },
    { name: 'FAISAL MILLS', logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80' },
  ];

  return (
    <div style={{ padding: 'clamp(50px, 10vw, 100px) 0', background: '#ffffff', borderTop: '1px solid #f0f0f0', borderBottom: '1px solid #f0f0f0', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(30px, 6vw, 60px)' }}>
          <p style={{ fontSize: '0.9rem', fontWeight: '800', color: '#00A19D', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '10px' }}>Global Partnerships</p>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '900', color: '#111' }}>Trusted By Industry Leaders</h2>
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
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .marquee-content {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
        .partner-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0 50px;
          min-width: 150px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .partner-logo:hover {
          transform: translateY(-5px);
        }
        .logo-box {
          height: 60px;
          width: 100%;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 12px;
          padding: 5px;
        }
        .partner-logo img {
          height: 100%;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          transition: all 0.4s ease;
        }
        .partner-logo span {
          font-weight: 800;
          font-size: 0.8rem;
          color: #444;
          letter-spacing: 1px;
          text-align: center;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .partner-logo { margin: 0 30px; min-width: 120px; }
          .logo-box { height: 45px; }
          .partner-logo span { font-size: 0.7rem; }
        }
      `}</style>
    </div>
  );
}