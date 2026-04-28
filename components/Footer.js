export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '80px 0 40px', borderTop: '1px solid #eee' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>SEAMENS ENTERPRISES</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Revolutionizing cost-effective chemical technologies for the entire spectrum of textile industries with precision-engineered parts and plants.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              {/* Certification placeholders/icons */}
              <div style={{ padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>ISO 9001:2015</div>
              <div style={{ padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>GOTS APPLIED</div>
              <div style={{ padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>ZDHC LEVEL 3.0</div>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>QUICK LINKS</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)' }}>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/samples">Samples</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>OUR LOCATION</h4>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Plot No. 51, Street No. 1, Awal Khair Stop, Al-mustafa Town, Commercial Zone, Nain Sukh Chowk, Main Sharqpur Road, Lahore, Pakistan.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              <strong>Phone:</strong> +92 305 4444125<br />
              <strong>WhatsApp:</strong> +92 305 4444125
            </p>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #eee', paddingTop: '40px', textAlign: 'center', color: '#999', fontSize: '0.9rem' }}>
          <p>&copy; {new Date().getFullYear()} SEAMENS ENTERPRISES. All rights reserved. Strategic Solution Providers.</p>
        </div>
      </div>
    </footer>
  );
}
