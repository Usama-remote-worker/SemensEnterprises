'use client';

export default function About() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* Header Spacer */}
      <div style={{ height: 'clamp(90px, 15vw, 120px)' }}></div>

      <section style={{ padding: 'clamp(40px, 10vw, 80px) 0' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span style={{ color: '#00A19D', fontWeight: '800', letterSpacing: '4px', fontSize: '0.85rem', textTransform: 'uppercase' }}>Established Since 2008</span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 3.5rem)', marginTop: '0.8rem', color: '#111', fontWeight: '900', marginBottom: '2rem', lineHeight: '1.1' }}>Legacy Of <span style={{ color: '#00A19D' }}>Industrial Excellence</span></h1>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.9', color: '#444', marginBottom: '2.5rem' }}>
                Seamens Enterprises stands as a beacon of innovation and reliability in the chemical manufacturing landscape of Pakistan. With over 15 years of specialized expertise, we have pioneered precision-engineered chemical technologies that empower the nation's largest industrial sectors.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '3rem' }}>
                <div style={{ padding: '24px', background: '#f8fafa', borderRadius: '20px', borderLeft: '5px solid #00A19D' }}>
                  <h4 style={{ margin: '0 0 8px', color: '#111', fontSize: '1.1rem' }}>ISO 9001:2015</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>Certified Quality Management System.</p>
                </div>
                <div style={{ padding: '24px', background: '#f8fafa', borderRadius: '20px', borderLeft: '5px solid #0077C0' }}>
                  <h4 style={{ margin: '0 0 8px', color: '#111', fontSize: '1.1rem' }}>Global Standards</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#666', lineHeight: '1.5' }}>Chemicals formulated for international compliance.</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="img-card" style={{ height: '500px', borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.15)', overflow: 'hidden' }}>
                <img src="/projects/project-water.png" alt="Industrial engineering" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .about-grid {
            display: grid;
            grid-template-columns: 1.1fr 1fr;
            gap: 80px;
            align-items: center;
          }
          @media (max-width: 992px) {
            .about-grid { grid-template-columns: 1fr; gap: 60px; }
            .about-image { order: -1; }
          }
        `}</style>
      </section>

      <section style={{ padding: 'clamp(60px, 12vw, 100px) 0', background: '#f8fafa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 2.8rem)', fontWeight: '900', color: '#001e3c', lineHeight: '1.1' }}>Our <span style={{ color: '#00A19D' }}>Commitment</span></h2>
            <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: '1.8', marginTop: '1.5rem' }}>We don't just sell chemicals; we deliver strategic solutions that enhance operational efficiency and environmental sustainability.</p>
          </div>
          <div className="commitment-grid">
            {[
              { t: 'Innovation', d: 'Our R&D team continuously develops next-generation formulations for water treatment and textile processing.', img: '/products/cat-textile.png' },
              { t: 'Reliability', d: 'Strict quality control at every stage of manufacturing ensures batch-to-batch consistency.', img: '/products/cat-parts.png' },
              { t: 'Partnership', d: 'We work closely with our industrial partners to solve their most complex chemical challenges.', img: '/projects/project-boilers.png' }
            ].map((item) => (
              <div key={item.t} className="card-hover" style={{ background: 'white', borderRadius: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', overflow: 'hidden' }}>
                <div style={{ height: '180px' }}>
                  <img src={item.img} alt={item.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '40px 30px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '1.2rem', color: '#001e3c' }}>{item.t}</h3>
                  <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem' }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .commitment-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          @media (max-width: 992px) {
            .commitment-grid { grid-template-columns: 1fr; gap: 30px; }
          }
        `}</style>
      </section>

      <section style={{ padding: 'clamp(60px, 12vw, 120px) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 3rem)', fontWeight: '900', color: '#111', marginBottom: '2rem', lineHeight: '1.1' }}>Trusted By <span style={{ color: '#00A19D' }}>Industry Leaders</span></h2>
            <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '2', marginBottom: '4rem' }}>
              From the textile hubs of Faisalabad to the industrial estates of Karachi, Seamens Enterprises is the preferred partner for water treatment and weaving chemical technologies.
            </p>
            <div style={{ padding: 'clamp(40px, 8vw, 70px) 30px', background: '#001e3c', borderRadius: '40px', color: 'white' }}>
              <div className="stats-flex">
                <div>
                  <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: '900', color: '#00A19D', marginBottom: '0.5rem' }}>15+</h2>
                  <p style={{ opacity: 0.8, fontWeight: '600', letterSpacing: '1px' }}>YEARS EXPERIENCE</p>
                </div>
                <div>
                  <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: '900', color: '#00A19D', marginBottom: '0.5rem' }}>500+</h2>
                  <p style={{ opacity: 0.8, fontWeight: '600', letterSpacing: '1px' }}>PROJECTS DONE</p>
                </div>
                <div>
                  <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: '900', color: '#00A19D', marginBottom: '0.5rem' }}>80+</h2>
                  <p style={{ opacity: 0.8, fontWeight: '600', letterSpacing: '1px' }}>CITIES SERVED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .stats-flex {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
          }
          @media (max-width: 640px) {
            .stats-flex { grid-template-columns: 1fr; gap: 50px; }
          }
        `}</style>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #00A19D, #0077C0)', padding: 'clamp(60px, 10vw, 100px) 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2.2rem, 7vw, 3.2rem)', marginBottom: '1.5rem', fontWeight: '900', lineHeight: '1.1' }}>Discover Our History</h2>
          <p style={{ marginBottom: '3.5rem', opacity: 0.9, fontSize: '1.15rem' }}>Contact our team for a comprehensive company profile and technical portfolio.</p>
          <a href="https://wa.me/923054444125" className="btn" style={{ background: 'white', color: '#00A19D', fontWeight: '900', width: 'auto', padding: '18px 50px' }}>DOWNLOAD PROFILE</a>
        </div>
      </section>
    </div>
  );
}