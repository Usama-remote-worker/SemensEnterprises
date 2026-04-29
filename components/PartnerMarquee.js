'use client';

export default function PartnerMarquee() {
  const partners = [
    { name: 'Sadiq', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?w=200&q=80' },
    { name: 'Engro', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?w=200&q=80' },
    { name: 'Nishat', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?w=200&q=80' },
    { name: 'Gul Ahmed', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?w=200&q=80' },
    { name: 'Interloop', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?w=200&q=80' },
    { name: 'Faisal', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aba9?w=200&q=80' },
  ];

  return (
    <div style={{ padding: '60px 0', background: '#f8fafa', borderBottom: '1px solid #eee', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: '800', color: '#888', letterSpacing: '3px', textTransform: 'uppercase' }}>Trusted By 50+ Global Brands</p>
        </div>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
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
          margin: 0 40px;
          min-width: 120px;
          opacity: 0.6;
          transition: 0.3s;
          filter: grayscale(1);
        }
        .partner-logo:hover {
          opacity: 1;
          filter: grayscale(0);
        }
        .partner-logo img {
          height: 40px;
          margin-bottom: 10px;
        }
        .partner-logo span {
          font-weight: 800;
          font-size: 0.8rem;
          color: #333;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 768px) {
          .partner-logo { margin: 0 25px; min-width: 100px; }
          .partner-logo img { height: 30px; }
        }
      `}</style>
    </div>
  );
}