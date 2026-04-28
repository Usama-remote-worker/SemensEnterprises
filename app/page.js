export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <div className="fade-in">
            <span style={{ 
              backgroundColor: 'var(--primary)', 
              padding: '8px 20px', 
              borderRadius: '50px', 
              fontSize: '0.8rem', 
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '2rem',
              display: 'inline-block'
            }}>
              Strategic Solution Providers
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Revolutionizing <span style={{ color: 'var(--primary)' }}>Chemical Technologies</span>
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2.5rem', opacity: '0.9' }}>
              Cost-effective solutions for the entire spectrum of textile industries: Sizing, Weaving, Dying, Finishing, and Spinning.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <a href="/products" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>EXPLORE PRODUCTS</a>
              <a href="/about" className="btn btn-outline" style={{ padding: '1rem 2.5rem', borderColor: 'white', color: 'white' }}>LEARN MORE</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3P Principles Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>OUR 3P PRINCIPLES</h2>
            <p style={{ color: 'var(--text-muted)' }}>The core values that drive our excellence and innovation.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="glass" style={{ padding: '40px', borderRadius: '15px', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔥</div>
              <h3 style={{ color: 'var(--primary)' }}>PASSION</h3>
              <p style={{ color: 'var(--text-muted)' }}>Fueling our drive to innovate and solve complex industrial challenges with dedication.</p>
            </div>
            <div className="glass" style={{ padding: '40px', borderRadius: '15px', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ color: 'var(--primary)' }}>PERFECTION</h3>
              <p style={{ color: 'var(--text-muted)' }}>Achieving the highest standards in chemical purity and mechanical engineering.</p>
            </div>
            <div className="glass" style={{ padding: '40px', borderRadius: '15px', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
              <h3 style={{ color: 'var(--primary)' }}>PRECISION</h3>
              <p style={{ color: 'var(--text-muted)' }}>Engineered accuracy in every drop of chemical and every part we manufacture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Experts Section */}
      <section style={{ backgroundColor: 'var(--accent)', padding: '100px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', alignItems: 'center', gap: '60px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text)' }}>
              EXPERTS OF <span style={{ color: 'var(--primary)' }}>INDUSTRIAL SOLUTIONS</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              We specialize in high-performance chemicals and systems that extend the life of your industrial assets.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800' }}>✓</span> Sizing Chemical Technologies (Experts)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800' }}>✓</span> AC Plants Long-Life Chemicals
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800' }}>✓</span> Cooling Tower & Boiler Treatments
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ color: 'var(--primary)', fontWeight: '800' }}>✓</span> R.O Plants & Water Treatment Tech
              </li>
            </ul>
            <a href="/contact" className="btn btn-primary" style={{ marginTop: '2.5rem' }}>CONSULT AN EXPERT</a>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ 
              width: '100%', 
              height: '500px', 
              background: 'url("https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
              backgroundSize: 'cover',
              borderRadius: '20px',
              boxShadow: 'var(--shadow-lg)'
            }}></div>
            <div style={{ 
              position: 'absolute', 
              bottom: '-30px', 
              right: '-30px', 
              backgroundColor: 'white', 
              padding: '30px', 
              borderRadius: '15px',
              boxShadow: 'var(--shadow-lg)',
              maxWidth: '250px'
            }}>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '5px' }}>ISO 9001:2015</h4>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Certified Quality Management System for Industrial Excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Chemicals Preview */}
      <section className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>HYGIENE & CLEANING LINE</h2>
            <p style={{ color: 'var(--text-muted)' }}>Industrial grade cleaning solutions for Hospitals, Malls, and Hotels.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
            {['Hygiene Hero', 'Germs Guard', 'Glimmer & Gloss', 'Glass Glisten', 'Silk Hand', 'ShineMax', 'Floor Shield'].map((item) => (
              <div key={item} className="glass" style={{ padding: '20px', borderRadius: '10px', textAlign: 'center', borderBottom: '4px solid var(--primary)' }}>
                <h4 style={{ margin: 0, fontSize: '1rem' }}>{item.toUpperCase()}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
