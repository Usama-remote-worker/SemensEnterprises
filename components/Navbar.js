'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import TransparentLogo from './TransparentLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 4000,
    padding: isScrolled ? '10px 0' : '20px 0',
    background: (isScrolled || isMenuOpen) ? 'rgba(255,255,255,0.98)' : 'transparent',
    backdropFilter: (isScrolled || isMenuOpen) ? 'blur(15px)' : 'none',
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
        <Link href="/" style={{ display: 'flex', alignItems: 'center', zIndex: 5000 }} onClick={() => setIsMenuOpen(false)}>
          <TransparentLogo src="/logo.png" height={isScrolled ? "60px" : "85px"} />
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
          style={{ 
            display: 'none', border: 'none', background: 'transparent', cursor: 'pointer', zIndex: 5000,
            padding: '10px'
          }}
        >
          <div style={{ width: '30px', height: '3px', background: '#111', margin: '6px 0', transition: '0.4s', transform: isMenuOpen ? 'rotate(-45deg) translate(-7px, 6px)' : '' }}></div>
          <div style={{ width: '30px', height: '3px', background: '#111', margin: '6px 0', opacity: isMenuOpen ? 0 : 1 }}></div>
          <div style={{ width: '30px', height: '3px', background: '#111', margin: '6px 0', transition: '0.4s', transform: isMenuOpen ? 'rotate(45deg) translate(-7px, -6px)' : '' }}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, left: 0,
        background: 'white', zIndex: 4500, display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
        padding: '100px 40px'
      }}>
        <ul style={{ textAlign: 'center', width: '100%' }}>
          {navLinks.map((link) => (
            <li key={link.name} style={{ margin: '2.5rem 0' }}>
              <Link href={link.href} 
                    style={{ fontSize: '2rem', fontWeight: '900', color: '#111' }}
                    onClick={() => setIsMenuOpen(false)}
              >{link.name}</Link>
            </li>
          ))}
        </ul>
        <a href="https://wa.me/923054444125" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>GET IN TOUCH</a>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
}