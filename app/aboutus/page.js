'use client';
import TransparentLogo from '@/components/TransparentLogo';

export default function About() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* Header Spacer */}
      <div style={{ height: '120px' }}></div>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#00A19D', fontWeight: '800', letterSpacing: '4px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Established Since 2008</span>
              <h1 style={{ fontSize: '3.5rem', marginTop: '0.8rem', color: '#111', fontWeight: '900', marginBottom: '2rem' }}>Legacy Of <span style={{ color: '#00A19D' }}>Industrial Excellence</span></h1>
              <p style={{ fontSize: '1.15rem', lineHeight: '2', color: '#444', marginBottom: '2rem' }}>
                Seamens Enterprises stands as a beacon of innovation and reliability in the chemical manufacturing landscape of Pakistan. With over 15 years of specialized expertise, we have pioneered precision-engineered chemical technologies that empower the nation's largest industrial sectors.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '3rem' }}>
                <div style={{ padding: '20px', background: '#f8fafa', borderRadius: '15px', borderLeft: '4px solid #00A19D' }}>
                  <h4 style={{ margin: '0 0 5px', color: '#111' }}>ISO 9001:2015</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>Certified Quality Management System.</p>
                </div>
                <div style={{ padding: '20px', background: '#f8fafa', borderRadius: '15px', borderLeft: '4px solid #0077C0' }}>
                  <h4 style={{ margin: '0 0 5px', color: '#111' }}>Global Standards</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>Chemicals formulated for international compliance.</p>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div className="img-card" style={{ height: '550px', borderRadius: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
                <img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80" alt="Laboratory research" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 0', background: '#f8fafa' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 5rem' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#111' }}>Our <span style={{ color: '#00A19D' }}>Commitment</span></h2>
            <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>We don't just sell chemicals; we deliver strategic solutions that enhance operational efficiency and environmental sustainability.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {[
              { t: 'Innovation', d: 'Our R&D team continuously develops next-generation formulations for water treatment and textile processing.', icon: '🧪' },
              { t: 'Reliability', d: 'Strict quality control at every stage of manufacturing ensures batch-to-batch consistency.', icon: '🛡️' },
              { t: 'Partnership', d: 'We work closely with our industrial partners to solve their most complex chemical challenges.', icon: '🤝' }
            ].map((item) => (
              <div key={item.t} style={{ padding: '40px', background: 'white', borderRadius: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#111' }}>{item.t}</h3>
                <p style={{ color: '#666', lineHeight: '1.7' }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '900', color: '#111', marginBottom: '2rem' }}>Trusted By <span style={{ color: '#00A19D' }}>Industry Leaders</span></h2>
            <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '2', marginBottom: '4rem' }}>
              From the textile hubs of Faisalabad to the industrial estates of Karachi, Seamens Enterprises is the preferred partner for water treatment and weaving chemical technologies.
            </p>
            <div style={{ padding: '60px', background: '#001e3c', borderRadius: '40px', color: 'white' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
                <div>
                  <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#00A19D' }}>15+</h2>
                  <p style={{ opacity: 0.8 }}>Years of Experience</p>
                </div>
                <div>
                  <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#00A19D' }}>500+</h2>
                  <p style={{ opacity: 0.8 }}>Industrial Projects</p>
                </div>
                <div>
                  <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#00A19D' }}>80+</h2>
                  <p style={{ opacity: 0.8 }}>Cities Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, #00A19D, #0077C0)', padding: '100px 0', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: '900' }}>Discover Our History</h2>
          <p style={{ marginBottom: '3rem', opacity: 0.9 }}>Contact our team for a comprehensive company profile and technical portfolio.</p>
          <a href="https://wa.me/923054444125" className="btn" style={{ padding: '1.3rem 3.5rem', fontSize: '1.1rem', background: 'white', color: '#00A19D', fontWeight: '900', borderRadius: '50px' }}>DOWNLOAD PROFILE</a>
        </div>
      </section>
    </div>
  );
}