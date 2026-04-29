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
    padding: isScrolled ? '8px 0' : (typeof window !== 'undefined' && window.innerWidth < 768 ? '12px 0' : '20px 0'),
    background: (isScrolled || isMenuOpen) ? '#ffffff' : 'transparent',
    transition: 'all 0.4s ease',
    borderBottom: (isScrolled || isMenuOpen) ? '1px solid rgba(0,0,0,0.05)' : 'none',
    boxShadow: (isScrolled || isMenuOpen) ? '0 4px 30px rgba(0,0,0,0.08)' : 'none',
  };

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'PRODUCTS', href: '/products' },
    { name: 'SAMPLES', href: '/samples' },
    { name: 'ABOUT US', href: '/aboutus' },
    { name: 'BLOG', href: '/blog' },
  ];

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', zIndex: 1000002 }} onClick={() => setIsMenuOpen(false)}>
          <TransparentLogo src="/logo.png" height={logoHeight} />
        </Link>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <ul style={{ display: 'flex', gap: '2.2rem', fontWeight: '800', fontSize: '0.9rem', color: '#111' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} style={{ transition: 'color 0.3s' }}
                      onMouseEnter={e => e.target.style.color = '#00A19D'}
                      onMouseLeave={e => e.target.style.color = '#111'}
                >{link.name}</Link>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/923054444125" className="btn btn-primary" style={{ padding: '12px 28px', borderRadius: '50px' }}>GET IN TOUCH</a>
        </div>

        {/* Hamburger Icon */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          style={{ 
            display: 'none', border: 'none', background: 'transparent', cursor: 'pointer', zIndex: 1000002,
            padding: '10px', boxShadow: 'none', outline: 'none', backgroundColor: 'transparent'
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
        <a href="https://wa.me/923054444125" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem', maxWidth: '280px' }} onClick={() => setIsMenuOpen(false)}>GET IN TOUCH</a>
      </div>

      <style jsx>{`
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