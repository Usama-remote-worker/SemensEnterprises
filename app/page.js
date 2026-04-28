'use client';
import StatsCounter from '@/components/StatsCounter';
import PartnerMarquee from '@/components/PartnerMarquee';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <section style={{
        height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center',
        background: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
        textAlign: 'center', position: 'relative'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.85)', zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '100px' }}>
          <div className="fade-in">
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', marginBottom: '1.5rem', textTransform: 'uppercase', lineHeight: '1.1', fontWeight: '900', color: '#111' }}>
              Revolutionizing <span style={{ color: '#00A19D' }}>Chemical</span><br/>
              <span style={{ color: '#00A19D' }}>Technologies</span> For Industry
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '850px', margin: '0 auto 3rem', lineHeight: '1.8', color: '#333', fontWeight: '500' }}>
              Manufacturer of precision-engineered water treatment chemical technologies serving Spinning, Weaving (Sizing), Dyeing, Finishing, Sugar, Paper, Cement, Leather, and Food industries.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/products" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1rem', borderRadius: '50px', fontWeight: '800' }}>EXPLORE PRODUCTS</a>
              <a href="https://wa.me/923054444125" className="btn btn-outline" style={{ padding: '1.2rem 3rem', fontSize: '1rem', borderRadius: '50px', fontWeight: '800', border: '2px solid #00A19D', color: '#00A19D' }} target="_blank" rel="noopener noreferrer">
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #001e3c, #001122)', color: 'white', position: 'relative', zIndex: 5 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
            <StatsCounter target={80} label="Industries Served" suffix="+" />
            <StatsCounter target={55} label="Partner Brands" suffix="+" />
            <StatsCounter target={15} label="Years Experience" suffix="+" />
            <StatsCounter target={500} label="Projects Delivered" suffix="+" />
          </div>
        </div>
      </section>

      <PartnerMarquee />

      {/* Industry Expertise Grid */}
      <section style={{ padding: '120px 0', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span style={{ color: '#00A19D', fontWeight: '800', letterSpacing: '4px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Our Expertise</span>
            <h2 style={{ fontSize: '3rem', marginTop: '0.8rem', color: '#111', fontWeight: '900' }}>Industries We <span style={{ color: '#00A19D' }}>Transform</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
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
                <div className="img-card-overlay" style={{ padding: '40px 30px' }}>
                  <h3 style={{ margin: '0 0 8px', fontSize: '1.4rem', color: 'white', fontWeight: '800' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.9 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISO Certification Section */}
      <section style={{ padding: '100px 0', background: '#f8fafa' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '80px' }}>
          <div>
            <div style={{
              backgroundColor: 'rgba(0,161,157,0.1)', padding: '8px 25px', borderRadius: '50px',
              fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px',
              color: '#008b88', border: '1px solid rgba(0,161,157,0.2)', marginBottom: '1.5rem', display: 'inline-block'
            }}>
              ISO 9001:2015 Certified ● Strategic Solution Providers
            </div>
            <h2 style={{ fontSize: '3rem', color: '#111', fontWeight: '900', marginBottom: '2rem' }}>Experts Of <span style={{ color: '#00A19D' }}>Industrial Solutions</span></h2>
            <p style={{ color: '#555', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.9' }}>
              As Pakistan&apos;s leading manufacturer of weaving chemicals, we provide comprehensive chemical treatment solutions that extend operational life, reduce downtime, and maximize efficiency.
            </p>
          </div>
          <div className="img-card" style={{ height: '500px', borderRadius: '30px', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" alt="Industrial facility" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #00A19D, #0077C0)', padding: '100px 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white', fontWeight: '900' }}>Ready To Elevate Your Industry?</h2>
          <a href="https://wa.me/923054444125" className="btn" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem', background: 'white', color: '#00A19D', fontWeight: '900', borderRadius: '50px' }}>
            CONSULT AN EXPERT NOW
          </a>
        </div>
      </section>
    </div>
  );
}