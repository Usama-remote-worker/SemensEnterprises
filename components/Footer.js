'use client';

export default function Footer() {
  return (
    <footer style={{ background: '#000814', color: '#ffffff', paddingTop: 80, paddingBottom: 40, borderTop: '2px solid rgba(72,202,228,0.15)' }}>
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 48, marginBottom: 60 }}>

          {/* Column 1: Brand Profile */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <h3 style={{ color: '#ffffff', fontWeight: 900, fontSize: '1.3rem', letterSpacing: '0.5px', margin: 0 }}>
              SEAMENS <span style={{ color: '#48CAE4' }}>ENTERPRISES</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.92rem', lineHeight: 1.8, margin: 0 }}>
              Pioneering high-performance chemical and engineering solutions for the global textile and manufacturing sectors. Committed to operational excellence through precision-engineered technologies.
            </p>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap', marginTop: 10 }}>
              <img src="/iso-certified.png" alt="ISO 9001:2015" style={{ height: 56, width: 'auto', filter: 'brightness(1.15)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ padding: '4px 12px', border: '1px solid rgba(72,202,228,0.3)', background: 'rgba(72,202,228,0.05)', borderRadius: 4, fontSize: '0.65rem', fontWeight: 800, color: '#48CAE4', letterSpacing: 1 }}>GOTS APPLIED</div>
                <div style={{ padding: '4px 12px', border: '1px solid rgba(72,202,228,0.3)', background: 'rgba(72,202,228,0.05)', borderRadius: 4, fontSize: '0.65rem', fontWeight: 800, color: '#48CAE4', letterSpacing: 1 }}>ZDHC LEVEL 3.0</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 15 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#25d366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: 20, height: 20 }} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', marginBottom: 2 }}>Direct Hotline</div>
                <a href="https://wa.me/923054444125" target="_blank" rel="noopener noreferrer" style={{ color: '#48CAE4', fontWeight: 800, fontSize: '0.92rem', textDecoration: 'none' }}>+92 305 444 4125</a>
              </div>
            </div>
          </div>

          {/* Column 2: High-Value Services */}
          <div>
            <h4 style={{ marginBottom: '1.6rem', color: '#ffffff', fontWeight: 900, fontSize: '0.95rem', letterSpacing: 2, textTransform: 'uppercase', position: 'relative', display: 'inline-block' }}>
              Our Services
              <div style={{ width: 40, height: 3, background: '#48CAE4', position: 'absolute', bottom: -8, left: 0, borderRadius: 2 }} />
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Air Humidification Plants & Boilers',
                'Cooling Towers, Chillers & RO Plants',
                'Parts & Industrial Machinery',
                'Textile Process Auxiliaries',
                'Specialized Cleaning Chemicals',
                'Turnkey Plant Engineering',
              ].map(s => (
                <li key={s}>
                  <a href="/products" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', transition: 'all 0.25s', display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#48CAE4'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <span style={{ color: '#48CAE4', fontSize: '0.7rem' }}>✦</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Directory */}
          <div>
            <h4 style={{ marginBottom: '1.6rem', color: '#ffffff', fontWeight: 900, fontSize: '0.95rem', letterSpacing: 2, textTransform: 'uppercase', position: 'relative', display: 'inline-block' }}>
              Company
              <div style={{ width: 40, height: 3, background: '#48CAE4', position: 'absolute', bottom: -8, left: 0, borderRadius: 2 }} />
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14, marginBottom: '2rem' }}>
              {[
                { name: 'Home',       href: '/' },
                { name: 'About Us',   href: '/aboutus' },
                { name: 'Products',   href: '/products' },
                { name: 'Samples',    href: '/samples' },
                { name: 'Blog',       href: '/blog' },
              ].map(link => (
                <li key={link.name}>
                  <a href={link.href} style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', transition: 'all 0.25s', display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#48CAE4'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <span style={{ color: '#48CAE4', fontSize: '0.7rem' }}>✦</span> {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 12 }}>
              {['F', 'T', 'Y', 'in'].map(social => (
                <a key={social} href="#" target="_blank" rel="noopener noreferrer"
                  style={{ width: 40, height: 40, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontWeight: 800, transition: 'all 0.3s', textDecoration: 'none' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#0077B6'; e.currentTarget.style.borderColor = '#0077B6'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = 'rgba(255,255,255,0.85)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >{social}</a>
              ))}
            </div>
          </div>


        </div>

        {/* Bottom Bar Details */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.83rem', margin: 0 }}>
            © {new Date().getFullYear()} Seamens Enterprises. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Terms & Conditions', 'Privacy Policy', 'Environmental Policy'].map(t => (
              <a key={t} href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', transition: 'color 0.25s', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#48CAE4'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
