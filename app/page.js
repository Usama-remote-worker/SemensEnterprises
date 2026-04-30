'use client';
import StatsCounter from '@/components/StatsCounter';
import PartnerMarquee from '@/components/PartnerMarquee';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <section className="hero-section">
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.7)', zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="fade-in">
            <h1 className="hero-title">
              Integrated <span style={{ color: '#00A19D' }}>Chemical & Engineering</span> Solutions for Modern Industry
            </h1>
            <p className="hero-subtitle">
              Seamens Enterprises is a leader in high-performance industrial solutions. We provide a comprehensive range of chemical auxiliaries, advanced plant machinery, and expert-led services to drive your operational efficiency.
            </p>
            <div className="hero-actions">
              <a href="/products" className="btn btn-primary" style={{ padding: '18px 45px', fontSize: '1.05rem' }}>EXPLORE OUR SOLUTIONS</a>
              <a href="https://wa.me/923054444125" className="btn btn-outline" target="_blank" rel="noopener noreferrer" style={{ padding: '18px 45px', fontSize: '1.05rem' }}>
                GET A QUOTE
              </a>
            </div>
          </div>
        </div>
        <style jsx>{`
          .hero-section {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: url("https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80");
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            text-align: center;
            position: relative;
            padding: 140px 0 100px;
            width: 100%;
          }
          .hero-title {
            font-size: clamp(2.5rem, 7vw, 4.2rem);
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            line-height: 1.1;
            font-weight: 950;
            color: #001e3c;
            letter-spacing: -2px;
          }
          .hero-subtitle {
            font-size: clamp(1rem, 4vw, 1.2rem);
            max-width: 800px;
            margin: 0 auto 3rem;
            line-height: 1.8;
            color: #444;
            font-weight: 600;
          }
          .hero-actions {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
          }
          @media (max-width: 768px) {
            .hero-section {
              padding: 120px 20px 80px;
              background-attachment: scroll;
            }
            .hero-title {
              font-size: 2rem;
              letter-spacing: -1px;
            }
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #001e3c, #001122)', color: 'white' }}>
        <div className="container">
          <div className="stats-grid">
            <StatsCounter target={15} label="Years of Expertise" suffix="+" />
            <StatsCounter target={500} label="Projects Completed" suffix="+" />
            <StatsCounter target={4.8} label="Client Satisfaction" suffix="/5" />
            <StatsCounter target={95} label="Retention Rate" suffix="%" />
          </div>
        </div>
        <style jsx>{`
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 40px;
            text-align: center;
          }
          @media (max-width: 992px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 480px) {
            .stats-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      <PartnerMarquee />

      {/* Global Sector Expertise */}
      <section style={{ padding: '120px 0', backgroundColor: '#fdfdfd' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: '#00A19D', fontWeight: '800', letterSpacing: '4px', fontSize: '0.85rem', textTransform: 'uppercase' }}>Our Core Competencies</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3rem)', marginTop: '0.8rem', color: '#001e3c', fontWeight: '950', lineHeight: '1.1' }}>Comprehensive <span style={{ color: '#00A19D' }}>Industrial Solutions</span></h2>
            <p style={{ maxWidth: '700px', margin: '1.5rem auto 0', color: '#666', fontSize: '1.1rem' }}>Engineered for peak performance, sustainability, and operational excellence across multiple sectors.</p>
          </div>
          <div className="expertise-grid">
            {[
              { title: 'Textile Auxiliaries', desc: 'Advanced solutions for sizing, dyeing and finishing to elevate fabric quality.', img: '/textile-expertise.png' },
              { title: 'Air Humidification & Boilers', desc: 'Robust systems ensuring stable atmospheric conditions and reliable steam generation.', img: '/boilers-expertise.png' },
              { title: 'Water & Thermal Systems', desc: 'High-performance cooling towers, chillers and Reverse Osmosis (RO) plants.', img: '/cooling-expertise.png' },
              { title: 'Industrial Machinery', desc: 'Precision parts, turnkey plant erection, and strategic infrastructure upgrades.', img: '/machinery-expertise.png' },
              { title: 'Specialized Chemicals', desc: 'Purpose-built industrial cleaning formulations for effective contaminant removal.', img: '/chemicals-expertise.png' },
              { title: 'Sustainable Engineering', desc: 'Custom solutions designed to improve efficiency and reduce environmental impact.', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80' },
            ].map((item, i) => (
              <div key={i} className="img-card card-hover" style={{ height: '400px', borderRadius: '30px', border: '1px solid #eee' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div className="img-card-overlay" style={{ padding: '40px', background: 'linear-gradient(to top, rgba(0,30,60,0.95), transparent)' }}>
                  <h3 style={{ margin: '0 0 12px', fontSize: '1.6rem', color: 'white', fontWeight: '900' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '1rem', opacity: 0.95, lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .expertise-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 35px;
          }
          @media (max-width: 1024px) {
            .expertise-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 640px) {
            .expertise-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      {/* Featured Projects Section */}
      <section style={{ padding: '120px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: '#00A19D', fontWeight: '800', letterSpacing: '4px', fontSize: '0.85rem', textTransform: 'uppercase' }}>Case Studies</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3rem)', marginTop: '0.8rem', color: '#001e3c', fontWeight: '950', lineHeight: '1.1' }}>Innovative <span style={{ color: '#00A19D' }}>Industrial Projects</span></h2>
            <p style={{ maxWidth: '700px', margin: '1.5rem auto 0', color: '#666', fontSize: '1.1rem' }}>Delivering efficient water treatment and engineering systems for global partners.</p>
          </div>
          <div className="projects-grid">
            {[
              { cat: 'Full Plant Erection Project', title: 'Turnkey Project Management for a New Manufacturing Facility', img: '/projects/project-tanks.png' },
              { cat: 'Textile Mill Process Upgrade', title: 'Integrating Advanced Auxiliaries to Boost Fabric Quality & Efficiency', img: '/projects/project-pipes.png' },
              { cat: 'Industrial Boiler System Installation', title: 'High-Efficiency Steam Generation System for a Processing Plant', img: '/projects/project-boilers.png' },
              { cat: 'Cooling Tower & Chiller System Revamp', title: 'Comprehensive System Overhaul for Enhanced Cooling Performance', img: '/projects/project-cooling.png' },
              { cat: 'Machinery Modernization Project', title: 'Strategic Upgrade of Production Line Machinery for a Valued Partner', img: '/projects/project-water.png' },
              { cat: 'RO Plant Installation for Industrial Use', title: 'State-of-the-Art RO System for High-Purity Water Production', img: '/projects/project-ro.png' },
            ].map((proj, i) => (
              <div key={i} className="project-card card-hover" style={{ background: '#fff', borderRadius: '20px', overflow: 'hidden', border: '1px solid #eee' }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '25px' }}>
                  <span style={{ color: '#00A19D', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{proj.cat}</span>
                  <h3 style={{ fontSize: '1.15rem', color: '#001e3c', fontWeight: '900', marginTop: '10px', lineHeight: 1.4 }}>{proj.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          @media (max-width: 1024px) {
            .projects-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 640px) {
            .projects-grid { grid-template-columns: 1fr; }
          }
        `}</style>
      </section>

      {/* About Company */}
      <section style={{ padding: '120px 0', background: '#f8f9fa' }}>
        <div className="container">
          <div className="iso-flex">
            <div className="iso-content">
              <span style={{ color: '#00A19D', fontWeight: '800', letterSpacing: '2px', fontSize: '0.85rem', textTransform: 'uppercase' }}>Who We Are</span>
              <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: '#001e3c', fontWeight: '950', marginBottom: '2rem', marginTop: '0.5rem', lineHeight: '1.1' }}>Experts in <span style={{ color: '#00A19D' }}>Comprehensive Industrial Solutions</span></h2>
              <p style={{ color: '#555', marginBottom: '2rem', fontSize: '1.15rem', lineHeight: '1.8' }}>
                Seamens Enterprises specializes in delivering a full spectrum of value-added solutions for critical industrial applications. Our expertise covers everything from high-performance textile auxiliaries and specialized chemicals to complete plant machinery and engineering services.
              </p>
              <p style={{ color: '#555', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
                With over 15 years of experience serving key sectors like textiles, sugar, paper, and food & beverage, we are committed to optimizing your operational efficiency and ensuring superior quality across all production stages.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                {[
                  { t: 'Our Vision', d: 'To be the recognized leader in industrial support solutions, trusted for unparalleled expertise.' },
                  { t: 'Our Mission', d: 'To engineer superior, cost-effective solutions that optimize operational efficiency.' }
                ].map((item) => (
                  <div key={item.t} style={{ background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                    <h4 style={{ color: '#00A19D', fontWeight: '900', marginBottom: '10px' }}>{item.t}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="iso-image">
              <div className="img-card" style={{ height: '550px', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,30,60,0.1)' }}>
                <img src="/cooling-expertise.png" alt="Industrial Excellence" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

      {/* CTA Section */}
      <section style={{ background: '#001e3c', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 7vw, 3.5rem)', marginBottom: '1.5rem', color: 'white', fontWeight: '950', lineHeight: '1.1' }}>Ready For A Customized Solution?</h2>
          <p style={{ opacity: 0.9, fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem', color: 'white' }}>
            Contact Seamens Enterprises for a tailored technical consultation. Our experts will provide a comprehensive strategy based on your unique operational needs.
          </p>
          <a href="https://wa.me/923054444125" className="btn btn-primary" style={{ background: '#00A19D', padding: '20px 60px', fontWeight: '900' }}>
            GET A CUSTOM QUOTE NOW
          </a>
        </div>
      </section>
    </div>
  );
}