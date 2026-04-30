'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import TransparentLogo from './TransparentLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoHeight, setLogoHeight] = useState("85px");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (window.scrollY > 20) {
        setLogoHeight(mobile ? "50px" : "60px");
      } else {
        setLogoHeight(mobile ? "65px" : "85px");
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Also update logo height when isScrolled changes
    const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
    setLogoHeight(isScrolled ? (mobile ? "50px" : "60px") : (mobile ? "65px" : "85px"));
  }, [isScrolled]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000000,
    padding: '15px 0',
    background: '#ffffff',
    transition: 'all 0.3s ease',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  };

  const navLinks = [
    { name: 'HOME', href: '/' },
    { 
      name: 'PRODUCTS & SERVICES', 
      href: '/products',
      dropdown: [
        { name: 'Textile Solutions', href: '/products' },
        { name: 'Management Systems', href: '/products' },
        { name: 'Industrial Plant Solutions', href: '/products' },
        { name: 'Engineering Services', href: '/products' },
        { name: 'Specialized Cleaning Chemicals', href: '/products' },
      ]
    },
    { name: 'SAMPLES', href: '/samples' },
    { name: 'ABOUT US', href: '/aboutus' },
    { name: 'BLOG', href: '/blog' },
  ];

  return (
    <nav style={navStyle}>
      <div className="container" style={{ 
        display: 'grid', 
        gridTemplateColumns: typeof window !== 'undefined' && window.innerWidth < 1024 ? '1fr auto' : '1fr auto 1fr', 
        alignItems: 'center', 
        maxWidth: '1400px' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', zIndex: 1000002 }} onClick={() => setIsMenuOpen(false)}>
            <div style={{ 
              background: 'transparent', 
              padding: '0', 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}>
              <TransparentLogo src="/logo.png" height={isScrolled ? "60px" : "80px"} />
            </div>
          </Link>
        </div>

        {/* Desktop Links - Centered */}
        <div className="desktop-nav" style={{ display: 'flex', justifyContent: 'center' }}>
          <ul style={{ display: 'flex', gap: '2.5rem', fontWeight: '800', fontSize: '0.85rem', color: '#111' }}>
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item" style={{ position: 'relative' }}>
                <Link href={link.href} style={{ transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '5px', color: '#111' }}
                      onMouseEnter={e => e.target.style.color = '#00A19D'}
                      onMouseLeave={e => e.target.style.color = '#111'}
                >
                  {link.name}
                  {link.dropdown && <span style={{ fontSize: '0.6rem' }}>▼</span>}
                </Link>
                {link.dropdown && (
                  <ul className="dropdown" style={{
                    position: 'absolute', top: '100%', left: '0', background: 'white',
                    minWidth: '280px', padding: '15px 0', borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)', border: '1px solid #eee',
                    display: 'none', flexDirection: 'column', marginTop: '10px'
                  }}>
                    {link.dropdown.map(sub => (
                      <li key={sub.name}>
                        <Link href={sub.href} style={{ 
                          display: 'block', padding: '10px 25px', color: '#555', 
                          fontSize: '0.85rem', fontWeight: '700', transition: '0.3s' 
                        }}
                        onMouseEnter={e => { e.target.style.background = '#f8fafa'; e.target.style.color = '#00A19D'; }}
                        onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#555'; }}
                        >{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="desktop-nav" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <img src="/iso-certified.png" alt="ISO 9001:2015 Certified" style={{ 
            height: isScrolled ? '50px' : '65px', 
            width: 'auto',
            filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.1))',
            transition: 'all 0.4s ease'
          }} />
        </div>

        {/* Hamburger Icon */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          style={{ 
            display: 'none', border: 'none', background: 'transparent', cursor: 'pointer', zIndex: 1000002,
            padding: '10px', marginLeft: 'auto'
          }}
        >
          <div style={{ width: '28px', height: '2.5px', background: '#111', margin: '5px 0', transition: '0.4s', transform: isMenuOpen ? 'rotate(-45deg) translate(-6px, 5px)' : '' }}></div>
          <div style={{ width: '28px', height: '2.5px', background: '#111', margin: '5px 0', opacity: isMenuOpen ? 0 : 1 }}></div>
          <div style={{ width: '28px', height: '2.5px', background: '#111', margin: '5px 0', transition: '0.4s', transform: isMenuOpen ? 'rotate(45deg) translate(-6px, -5px)' : '' }}></div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, left: 0,
        backgroundColor: '#ffffff', zIndex: 1000001, display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        padding: '80px 30px'
      }}>
        <ul style={{ textAlign: 'center', width: '100%' }}>
          {navLinks.map((link) => (
            <li key={link.name} style={{ margin: '1.5rem 0' }}>
              <Link href={link.href} 
                    style={{ fontSize: '1.6rem', fontWeight: '900', color: '#111', textTransform: 'uppercase' }}
                    onClick={() => setIsMenuOpen(false)}
              >{link.name}</Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '2rem' }}>
          <img src="/iso-certified.png" alt="ISO 9001:2015 Certified" style={{ height: '80px', width: 'auto' }} />
        </div>
      </div>

      <style jsx>{`
        .nav-item:hover .dropdown {
          display: flex !important;
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        :global(button.mobile-toggle) {
          background-color: transparent !important;
          background: transparent !important;
          border: none !important;
        }
      `}</style>
    </nav>
  );
}