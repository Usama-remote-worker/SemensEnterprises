'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import TransparentLogo from './TransparentLogo';

const MEGA_ITEMS = [
  {
    category: 'Water Systems',
    links: [
      { name: 'RO & Water Treatment Plants', href: '/products', desc: 'Industrial-grade reverse osmosis systems' },
      { name: 'Cooling Towers & Chillers',   href: '/products', desc: 'Full-spectrum thermal management' },
      { name: 'Air Humidification & Boilers',href: '/products', desc: 'Steam generation & humidity control' },
    ],
  },
  {
    category: 'Chemicals & Auxiliaries',
    links: [
      { name: 'Textile Auxiliaries',    href: '/products', desc: 'Sizing, dyeing and finishing chemicals' },
      { name: 'Specialized Chemicals',  href: '/products', desc: 'Industrial cleaning & surface treatment' },
      { name: 'Process Consulting',     href: '/products', desc: 'On-site audits & water analysis' },
    ],
  },
  {
    category: 'Engineering',
    links: [
      { name: 'Industrial Machinery & Parts', href: '/products', desc: 'Turnkey plant erection & upgrades' },
      { name: 'Sustainable Engineering',      href: '/products', desc: 'Energy reduction & compliance solutions' },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [megaOpen, setMegaOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const glass = scrolled
    ? 'rgba(255, 255, 255, 0.96)'
    : 'rgba(255, 255, 255, 0.82)';

  const textColor = '#002B49';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
        background: glass,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 119, 182, 0.15)',
        boxShadow: scrolled ? '0 10px 40px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.4s ease',
        padding: scrolled ? '8px 0' : '14px 0',
      }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" onClick={() => setMenuOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 12, zIndex: 10001, textDecoration: 'none' }}>
            <TransparentLogo src="/logo.png" height={scrolled ? '54px' : '68px'} />
            <span style={{
              color: '#002B49',
              fontWeight: 900,
              fontSize: scrolled ? '1.15rem' : '1.35rem',
              letterSpacing: '0.5px',
              transition: 'all 0.4s ease',
              fontFamily: 'inherit',
              whiteSpace: 'nowrap'
            }}>
              Seamens <span style={{ color: '#0077B6', fontWeight: 600 }}>Enterprises</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="d-nav" style={{ display: 'flex', alignItems: 'center', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.8px' }}>
            <li><Link href="/" style={{ color: textColor, opacity: 0.88, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = 0.88}
            >HOME</Link></li>

            {/* Mega-menu trigger */}
            <li style={{ position: 'relative' }}
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button style={{ background: 'none', border: 'none', color: textColor, opacity: 0.88, fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, padding: '6px 0', fontFamily: 'inherit' }}>
                PRODUCTS & SERVICES
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ transition: 'transform 0.3s', transform: megaOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>

              {/* Mega dropdown */}
              <div style={{
                position: 'fixed', top: scrolled ? 70 : 96, left: 0, right: 0,
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(24px)',
                borderTop: '1px solid rgba(0, 119, 182, 0.15)',
                borderBottom: '1px solid rgba(0, 119, 182, 0.12)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                padding: '48px 5%',
                display: megaOpen ? 'grid' : 'none',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: 48,
                zIndex: 9998,
              }}>
                {MEGA_ITEMS.map(cat => (
                  <div key={cat.category}>
                    <div style={{ color: '#0077B6', fontWeight: 800, fontSize: '0.72rem', letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 20, paddingBottom: 10, borderBottom: '1px solid rgba(0, 119, 182, 0.15)' }}>
                      {cat.category}
                    </div>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                      {cat.links.map(l => (
                        <li key={l.name} style={{ marginBottom: 6 }}>
                          <Link href={l.href} onClick={() => setMegaOpen(false)} style={{ display: 'block', padding: '10px 14px', borderRadius: 10, transition: 'background 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0, 119, 182, 0.05)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                          >
                            <div style={{ color: '#002B49', fontWeight: 700, fontSize: '0.88rem', marginBottom: 2 }}>{l.name}</div>
                            <div style={{ color: 'rgba(0, 43, 73, 0.6)', fontSize: '0.75rem', fontWeight: 500 }}>{l.desc}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>

            {[
              { name: 'SAMPLES',  href: '/samples' },
              { name: 'ABOUT US', href: '/aboutus' },
              { name: 'BLOG',     href: '/blog' },
            ].map(link => (
              <li key={link.name}>
                <Link href={link.href} style={{ color: textColor, opacity: 0.88, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0.88}
                >{link.name}</Link>
              </li>
            ))}
          </ul>

          {/* Right: ISO badge + CTA */}
          <div className="d-nav" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <img src="/iso-certified.png" alt="ISO 9001:2015"
              style={{ height: scrolled ? '44px' : '54px', width: 'auto', transition: 'height 0.4s ease', filter: 'brightness(1.0)' }} />
            <a href="https://wa.me/923054444125" target="_blank" rel="noopener noreferrer"
              style={{ background: 'linear-gradient(135deg,#0077B6,#00B4D8)', color: '#fff', padding: '11px 24px', borderRadius: '1rem', fontWeight: 800, fontSize: '0.78rem', letterSpacing: 1, whiteSpace: 'nowrap', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = 0.88}
              onMouseLeave={e => e.currentTarget.style.opacity = 1}
            >GET A QUOTE</a>
          </div>

          {/* Hamburger */}
          <button className="mob-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8, zIndex: 10001 }}>
            {[0,1,2].map(n => (
              <div key={n} style={{
                width: 25, height: 2, background: textColor, margin: '5px 0', transition: '0.35s',
                transform: menuOpen ? (n===0 ? 'rotate(-45deg) translate(-5px,5px)' : n===2 ? 'rotate(45deg) translate(-5px,-5px)' : '') : '',
                opacity: menuOpen && n===1 ? 0 : 1,
              }}/>
            ))}
          </button>
        </div>

        <style jsx>{`
          .d-nav { display: flex !important; }
          .mob-toggle { display: none !important; }
          @media (max-width: 1100px) {
            .d-nav { display: none !important; }
            .mob-toggle { display: block !important; }
          }
        `}</style>
      </nav>

      {/* Mobile full-screen menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 9998,
        background: 'linear-gradient(160deg,#001228,#002B49,#003a5c)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        padding: '80px 5%',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.45s cubic-bezier(0.77,0,0.175,1)',
      }}>
        <ul style={{ listStyle: 'none', textAlign: 'center', width: '100%', padding: 0, margin: 0 }}>
          {[
            { name: 'Home', href: '/' },
            { name: 'Products & Services', href: '/products' },
            { name: 'Samples', href: '/samples' },
            { name: 'About Us', href: '/aboutus' },
            { name: 'Blog', href: '/blog' },
          ].map((link, i) => (
            <li key={link.name} style={{ margin: '1.2rem 0', animationDelay: `${i*0.06}s` }}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}
                style={{ color: '#fff', fontWeight: 900, fontSize: '1.5rem', letterSpacing: 1, display: 'block' }}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
          <img src="/iso-certified.png" alt="ISO" style={{ height: 64, filter: 'brightness(1.2)' }}/>
          <a href="https://wa.me/923054444125" target="_blank" rel="noopener noreferrer"
            style={{ background: 'linear-gradient(135deg,#0077B6,#00B4D8)', color: '#fff', padding: '15px 40px', borderRadius: '1rem', fontWeight: 900, fontSize: '1rem', letterSpacing: 1 }}>
            GET A FREE QUOTE
          </a>
        </div>
      </div>
    </>
  );
}