'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function SamplesPage() {
  return (
    <main style={{ background: '#ffffff' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ padding: '180px 0 80px', background: '#f8fafa' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#00A19D', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Quality Assurance</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: '950', color: '#001e3c', marginTop: '1rem', lineHeight: 1.1 }}>Request A <span style={{ color: '#00A19D' }}>Sample</span></h1>
            <p style={{ fontSize: '1.2rem', color: '#666', marginTop: '1.5rem', lineHeight: 1.6 }}>
              Experience the quality of Seamens Enterprises firsthand. We provide technical samples of our textile auxiliaries and chemical solutions for industrial testing.
            </p>
          </div>
          <div style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
            <img src="/samples-hero.png" alt="Chemical samples" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Sample Form Section */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ background: 'white', padding: '60px', borderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
            <h2 style={{ fontSize: '2rem', color: '#001e3c', fontWeight: '900', marginBottom: '2.5rem', textAlign: 'center' }}>Sample Request Details</h2>
            <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: '800', color: '#555', fontSize: '0.85rem' }}>FULL NAME</label>
                <input type="text" placeholder="John Doe" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: '800', color: '#555', fontSize: '0.85rem' }}>COMPANY NAME</label>
                <input type="text" placeholder="Industrial Corp" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: '800', color: '#555', fontSize: '0.85rem' }}>EMAIL ADDRESS</label>
                <input type="email" placeholder="john@example.com" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: '800', color: '#555', fontSize: '0.85rem' }}>PHONE NUMBER</label>
                <input type="text" placeholder="+92 300 0000000" style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none' }} />
              </div>
              <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: '800', color: '#555', fontSize: '0.85rem' }}>PRODUCT CATEGORY</label>
                <select style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', background: 'white' }}>
                  <option>Textile Auxiliaries</option>
                  <option>Water Treatment Chemicals</option>
                  <option>Specialized Industrial Chemicals</option>
                </select>
              </div>
              <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: '800', color: '#555', fontSize: '0.85rem' }}>MESSAGE / SPECIFIC REQUIREMENTS</label>
                <textarea rows="4" placeholder="Tell us about your testing requirements..." style={{ padding: '15px', borderRadius: '12px', border: '1px solid #ddd', outline: 'none', resize: 'none' }}></textarea>
              </div>
              <div style={{ gridColumn: 'span 2', marginTop: '10px' }}>
                <button type="submit" style={{ 
                  width: '100%', padding: '18px', background: '#00A19D', color: 'white', 
                  borderRadius: '12px', border: 'none', fontWeight: '900', fontSize: '1rem',
                  cursor: 'pointer', transition: 'all 0.3s'
                }}
                onMouseEnter={e => e.target.style.background = '#008c8a'}
                onMouseLeave={e => e.target.style.background = '#00A19D'}
                >SUBMIT REQUEST</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .container { max-width: 1300px; margin: 0 auto; padding: 0 20px; }
        @media (max-width: 992px) {
          .container { grid-template-columns: 1fr !important; gap: 40px !important; text-align: center; }
        }
      `}</style>
    </main>
  );
}