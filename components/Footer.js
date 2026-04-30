export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '80px 0 40px', borderTop: '1px solid #eee' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div>
            <h3 style={{ color: '#001e3c', marginBottom: '1.5rem', fontWeight: '900', letterSpacing: '0.5px' }}>SEAMENS <span style={{ color: '#00A19D' }}>ENTERPRISES</span></h3>
            <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Pioneering high-performance chemical engineering solutions for the global textile and manufacturing industries. Dedicated to operational excellence through precision-engineered technologies.
            </p>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <img src="/iso-certified.png" alt="ISO 9001:2015" style={{ height: '60px', width: 'auto' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div style={{ padding: '4px 10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 'bold', color: '#555' }}>GOTS APPLIED</div>
                <div style={{ padding: '4px 10px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 'bold', color: '#555' }}>ZDHC LEVEL 3.0</div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: '#001e3c', fontWeight: '800' }}>SERVICES</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#666' }}>
              <li><a href="/products">Air Humidification Plants & Boilers</a></li>
              <li><a href="/products">Cooling Towers, Chillers & RO Plants</a></li>
              <li><a href="/products">Parts & Machineries</a></li>
              <li><a href="/products">Textile Auxiliaries</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem', color: '#001e3c', fontWeight: '800' }}>COMPANY</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#666' }}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '15px' }}>
              {['facebook', 'twitter', 'youtube'].map(social => (
                <a key={social} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer" 
                   style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#001e3c', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <span style={{ fontSize: '1.2rem' }}>{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div style={{ background: 'white', padding: '30px', borderRadius: '20px', border: '1px solid #eee' }}>
            <h4 style={{ marginBottom: '1rem', color: '#001e3c', fontWeight: '800' }}>Newsletter</h4>
            <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1.5rem' }}>Sign up our newsletter to get update information, news and free insight.</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input type="email" placeholder="Email" style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.9rem' }} />
              <button type="submit" style={{ padding: '12px', background: '#00A19D', color: 'white', borderRadius: '8px', border: 'none', fontWeight: '800', cursor: 'pointer' }}>Send</button>
            </form>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #eee', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#999', fontSize: '0.85rem', flexWrap: 'wrap', gap: '20px' }}>
          <p>Copyright © 2024 Seamens Enterprises</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/environmental">Environmental Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
