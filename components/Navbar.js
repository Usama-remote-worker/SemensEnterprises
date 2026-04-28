'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import TransparentLogo from './TransparentLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 3000,
    padding: isScrolled ? '10px 0' : '20px 0',
    background: isScrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(15px)' : 'none',
    transition: 'all 0.4s ease',
    borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
  };

  return (
    <nav style={navStyle}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <TransparentLogo src="/logo.png" height="115px" />
        </Link>

        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <ul style={{ display: 'flex', gap: '2rem', fontWeight: '800', fontSize: '0.95rem', color: '#111' }}>
            {['HOME', 'PRODUCTS', 'SAMPLES', 'ABOUT US', 'BLOG'].map((item) => (
              <li key={item}>
                <Link href={item === 'HOME' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                      onMouseEnter={e => e.target.style.color = '#00A19D'}
                      onMouseLeave={e => e.target.style.color = '#111'}
                >{item}</Link>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/923054444125" className="btn btn-primary" style={{ padding: '12px 28px', borderRadius: '50px', fontWeight: '800' }}>GET IN TOUCH</a>
        </div>
      </div>
    </nav>
  );
}