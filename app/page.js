'use client';
import StatsCounter from '@/components/StatsCounter';
import PartnerMarquee from '@/components/PartnerMarquee';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        background: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
        textAlign: 'center', position: 'relative', padding: '120px 0 80px'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.85)', zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="fade-in">
            <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.8rem)', marginBottom: '1.5rem', textTransform: 'uppercase', lineHeight: '1', fontWeight: '900', color: '#111', letterSpacing: '-2px' }}>
              Revolutionizing <span style={{ color: '#00A19D' }}>Chemical</span><br className="desktop-only" />
              <span style={{ color: '#00A19D' }}>Technologies</span> For Industry
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', maxWidth: '850px', margin: '0 auto 3rem', lineHeight: '1.8', color: '#333', fontWeight: '500' }}>
              Manufacturer of precision-engineered water treatment chemical technologies serving Spinning, Weaving (Sizing), Dyeing, Finishing, Sugar, Paper, Cement, Leather, and Food industries.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/products" className="btn btn-primary" style={{ minWidth: '220px' }}>EXPLORE PRODUCTS</a>
              <a href="https://wa.me/923054444125" className="btn btn-outline" style={{ minWidth: '220px' }} target="_blank" rel="noopener noreferrer">
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
            .desktop-only { display: none; }
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #001e3c, #001122)', color: 'white', position: 'relative', zIndex: 5 }}>
        <div className="container">
          <div className="stats-grid">
            <StatsCounter target={80} label="Industries Served" suffix="+" />
            <StatsCounter target={55} label="Partner Brands" suffix="+" />
            <StatsCounter target={15} label="Years Experience" suffix="+" />
            <StatsCounter target={500} label="Projects Delivered" suffix="+" />
          </div>
        </div>
        <style jsx>{`
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
            textAlign: center;
          }
          @media (max-width: 992px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 50px 30px; }
          }
          @media (max-width: 480px) {
            .stats-grid { grid-template-columns: 1fr; gap: 40px; }
          }
        `}</style>
      </section>

      <PartnerMarquee />

      {/* Industry Expertise Grid */}
      <section style={{ padding: 'clamp(60px, 10vw, 120px) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 5rem)' }}>
            <span style={{ color: '#00A19D', fontWeight: '800', letterSpacing: '4px', fontSize: '0.85rem', textTransform: 'uppercase' }}>Our Expertise</span>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', marginTop: '0.8rem', color: '#111', fontWeight: '900', lineHeight: '1.1' }}>Industries We <span style={{ color: '#00A19D' }}>Transform</span></h2>
          </div>
          <div className="expertise-grid">
            {[
              { title: 'Textile & Weaving', desc: 'Sizing, dyeing & finishing chemicals', img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80' },
              { title: 'Water Treatment & R.O', desc: 'Antiscalants, biocides & membrane cleaners', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80' },
              { title: 'Cooling Towers', desc: 'Corrosion & scale inhibitors', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80' },
              { title: 'Boiler Systems', desc: 'Steam purity & efficiency chemicals', img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80' },
              { title: 'Sugar & Paper Mills', desc: 'Process optimization chemicals', img: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&q=80' },
              { title: 'Food & Beverage', desc: 'Hygiene & sanitation solutions', img: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=600&q=80' },
            ].map((item, i) => (
              <div key={i} className="img-card card-hover" style={{ height: '320px', borderRadius: '24px' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="img-card-overlay" style={{ padding: '30px' }}>
                  <h3 style={{ margin: '0 0 8px', fontSize: '1.4rem', color: 'white', fontWeight: '800' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.9 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .expertise-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          @media (max-width: 992px) {
            .expertise-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 640px) {
            .expertise-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      {/* ISO Certification Section */}
      <section style={{ padding: 'clamp(60px, 10vw, 100px) 0', background: '#f8fafa' }}>
        <div className="container">
          <div className="iso-flex">
            <div className="iso-content">
              <div style={{
                backgroundColor: 'rgba(0,161,157,0.1)', padding: '10px 25px', borderRadius: '50px',
                fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px',
                color: '#008b88', border: '1px solid rgba(0,161,157,0.2)', marginBottom: '2rem', display: 'inline-block'
              }}>
                ISO 9001:2015 Certified ● Strategic Solutions
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: '#111', fontWeight: '900', marginBottom: '2rem', lineHeight: '1.1' }}>Experts Of <span style={{ color: '#00A19D' }}>Industrial Solutions</span></h2>
              <p style={{ color: '#555', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.9' }}>
                As Pakistan&apos;s leading manufacturer of weaving chemicals, we provide comprehensive chemical treatment solutions that extend operational life, reduce downtime, and maximize efficiency.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {['Sizing Chemical Technologies', 'AC & Humidification Chemicals', 'Cooling Tower & Boiler Treatments', 'R.O Plants & Water Treatment'].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <div style={{ color: '#00A19D', fontWeight: '900', fontSize: '1.2rem' }}>✓</div>
                    <div style={{ fontWeight: '700', color: '#111', fontSize: '1.05rem' }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="iso-image">
              <div className="img-card" style={{ height: '500px', borderRadius: '30px', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="Industrial facility" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .iso-flex {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            align-items: center;
            gap: 80px;
          }
          @media (max-width: 992px) {
            .iso-flex { grid-template-columns: 1fr; gap: 60px; }
            .iso-image { order: -1; }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #00A19D, #0077C0)', padding: 'clamp(60px, 12vw, 120px) 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2.2rem, 7vw, 3.5rem)', marginBottom: '1.5rem', color: 'white', fontWeight: '900', lineHeight: '1.1' }}>Ready To Elevate Your Industry?</h2>
          <p style={{ opacity: 0.9, fontSize: '1.2rem', marginBottom: '3.5rem', maxWidth: '700px', margin: '0 auto 3.5rem' }}>Partner with Pakistan&apos;s most trusted industrial chemical manufacturer.</p>
          <a href="https://wa.me/923054444125" className="btn" style={{ background: 'white', color: '#00A19D', fontWeight: '900', width: 'auto', padding: '18px 50px' }}>
            CONSULT AN EXPERT NOW
          </a>
        </div>
      </section>
    </div>
  );
}