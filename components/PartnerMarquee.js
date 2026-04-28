'use client';

const partners = [
  { name: "Cola Next", color: "#8B0000", bg: "#8B0000", textColor: "#fff" },
  { name: "Tata Pakistan", color: "#003087", bg: "#003087", textColor: "#fff" },
  { name: "ZA Group", color: "#C9A84C", bg: "#1a1a1a", textColor: "#C9A84C" },
  { name: "Alam Group", color: "#CC0000", bg: "#fff", textColor: "#CC0000" },
  { name: "Nishat Mills", color: "#1a3a6b", bg: "#1a3a6b", textColor: "#fff" },
  { name: "Sapphire Fibres", color: "#005f9e", bg: "#005f9e", textColor: "#fff" },
  { name: "Gul Ahmed", color: "#c0392b", bg: "#fff", textColor: "#c0392b" },
  { name: "Interloop Ltd", color: "#00573f", bg: "#00573f", textColor: "#fff" },
  { name: "Masood Textiles", color: "#2c3e50", bg: "#2c3e50", textColor: "#fff" },
  { name: "Lucky Industries", color: "#e67e22", bg: "#fff", textColor: "#e67e22" },
  { name: "Kohinoor Textile", color: "#8e44ad", bg: "#8e44ad", textColor: "#fff" },
  { name: "Crescent Bahuman", color: "#16a085", bg: "#16a085", textColor: "#fff" },
  { name: "Ibrahim Fibres", color: "#2980b9", bg: "#2980b9", textColor: "#fff" },
  { name: "Artistic Milliners", color: "#1abc9c", bg: "#fff", textColor: "#1abc9c" },
  { name: "Al-Karam Textile", color: "#d35400", bg: "#d35400", textColor: "#fff" },
  { name: "Orient Textile", color: "#7f8c8d", bg: "#2c3e50", textColor: "#fff" },
  { name: "Chenab Group", color: "#27ae60", bg: "#27ae60", textColor: "#fff" },
  { name: "Faisal Spinning", color: "#2c3e50", bg: "#fff", textColor: "#2c3e50" },
  { name: "Ahmed Fine Textile", color: "#c0392b", bg: "#c0392b", textColor: "#fff" },
  { name: "Naveena Industries", color: "#8e44ad", bg: "#fff", textColor: "#8e44ad" },
  { name: "Packages Ltd", color: "#e74c3c", bg: "#e74c3c", textColor: "#fff" },
  { name: "DG Khan Cement", color: "#95a5a6", bg: "#2c3e50", textColor: "#fff" },
  { name: "Bestway Cement", color: "#c0392b", bg: "#c0392b", textColor: "#fff" },
  { name: "Engro Fertilizer", color: "#3498db", bg: "#3498db", textColor: "#fff" },
  { name: "FrieslandCampina", color: "#003087", bg: "#003087", textColor: "#fff" },
  { name: "Nestle Pakistan", color: "#c0392b", bg: "#fff", textColor: "#c0392b" },
  { name: "Unilever Pakistan", color: "#1565C0", bg: "#1565C0", textColor: "#fff" },
  { name: "ICI Pakistan", color: "#00695C", bg: "#00695C", textColor: "#fff" },
  { name: "Ravi Textile Mills", color: "#BF360C", bg: "#fff", textColor: "#BF360C" },
  { name: "Sitara Chemicals", color: "#4527A0", bg: "#4527A0", textColor: "#fff" },
];

// Duplicate for infinite loop effect
const allPartners = [...partners, ...partners];

export default function PartnerMarquee() {
  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f4f4 100%)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Fade edges */}
      <div style={{
        position: 'absolute', top: 0, left: 0, bottom: 0, width: '120px',
        background: 'linear-gradient(to right, #f8f9fa, transparent)',
        zIndex: 10, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: '120px',
        background: 'linear-gradient(to left, #f8f9fa, transparent)',
        zIndex: 10, pointerEvents: 'none'
      }} />

      <div className="container" style={{ marginBottom: '50px', textAlign: 'center' }}>
        <span style={{ color: 'var(--primary)', fontWeight: '700', letterSpacing: '3px', fontSize: '0.85rem', textTransform: 'uppercase' }}>
          Trusted By Industry Leaders
        </span>
        <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', color: '#1a1a1a' }}>
          Our <span style={{ color: 'var(--primary)' }}>Partner Brands</span>
        </h2>
        <p style={{ color: '#666', maxWidth: '600px', margin: '1rem auto 0' }}>
          Seamens Enterprises proudly serves 55+ industry-leading companies across Pakistan's textile, food, cement, and manufacturing sectors.
        </p>
      </div>

      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marqueeScroll 50s linear infinite',
          gap: '20px',
          paddingBottom: '20px'
        }}>
          {allPartners.map((partner, i) => (
            <div key={i} style={{
              flexShrink: 0,
              width: '200px',
              height: '90px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: partner.bg,
              border: '2px solid rgba(0,0,0,0.08)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'default',
              padding: '12px',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'; }}
            >
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '800',
                fontSize: '0.9rem',
                color: partner.textColor,
                textAlign: 'center',
                lineHeight: '1.3',
                letterSpacing: '0.5px',
              }}>{partner.name.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second row going opposite direction */}
      <div style={{ overflow: 'hidden', width: '100%', marginTop: '20px' }}>
        <div style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marqueeScrollReverse 55s linear infinite',
          gap: '20px',
        }}>
          {[...allPartners].reverse().map((partner, i) => (
            <div key={i} style={{
              flexShrink: 0,
              width: '200px',
              height: '90px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#fff',
              border: `2px solid ${partner.color}30`,
              boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
              padding: '12px',
            }}>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: '700',
                fontSize: '0.85rem',
                color: partner.color,
                textAlign: 'center',
                lineHeight: '1.3',
              }}>{partner.name.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeScrollReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
