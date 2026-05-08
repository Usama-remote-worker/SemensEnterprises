'use client';
import { useEffect } from 'react';

// Scroll reveal animation hook for smooth premium transitions
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('rv'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('[data-rv]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function About() {
  useReveal();

  useEffect(() => {
    // Dynamic metadata setting for SEO
    document.title = "About Us - Seamens Enterprises | Industrial Chemical & Water Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn about Seamens Enterprises, a specialist in high-performance industrial chemical services, water treatment systems, and engineering solutions since 2008.");
    }
  }, []);

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'inherit' }}>
      <div style={{ height: 90 }} />

      {/* ─── PAGE HERO ─── */}
      <section style={{ padding: '90px 0 70px', background: 'linear-gradient(180deg,#001830,#002B49)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(72,202,228,0.06) 1px,transparent 1px)', backgroundSize: '28px 28px' }}/>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <span style={{ color: '#48CAE4', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '0.5rem', display: 'inline-block' }}>Corporate Profile</span>
          <h1 style={{ fontSize: 'clamp(2.4rem,6vw,3.6rem)', fontWeight: 900, color: '#ffffff', marginBottom: '0.8rem', letterSpacing: '-1.5px', lineHeight: 1.15 }}>About Seamens Enterprises</h1>
          <div style={{ width: 65, height: 4, background: '#0077B6', borderRadius: 2, margin: '0 auto' }}/>
        </div>
      </section>

      {/* ─── OUR STORY & WHO WE ARE ─── */}
      <section style={{ padding: '90px 0 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 5%', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 70, alignItems: 'start' }} data-rv>
          
          {/* Left Column: Brand Story & Mission statement */}
          <div>
            <p style={{ color: '#0077B6', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Story</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#002B49', marginBottom: '1.2rem', lineHeight: 1.2 }}>Over 15 Years of Industrial Leadership</h2>
            <div style={{ width: 55, height: 4, background: '#0077B6', borderRadius: 2, marginBottom: '1.8rem' }}/>
            
            <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#333333', marginBottom: '1.5rem', fontWeight: 500 }}>
              Founded in 2008, Seamens Enterprises has established itself as a premier, specialist industrial solutions provider in Pakistan, dedicated to delivering state-of-the-art chemical formulations, reverse osmosis systems, and engineering consulting.
            </p>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.8, color: '#555555', marginBottom: '1.5rem' }}>
              What began as a specialized chemical service operation has scaled into a comprehensive, multi-disciplinary engineering provider. Today, we deliver value-added services across major industrial hubs, addressing critical client needs in water purification, utilities treatment, thermal cooling systems, and specialized chemical sourcing.
            </p>
            <p style={{ fontSize: '0.96rem', lineHeight: 1.8, color: '#555555', marginBottom: '2.4rem' }}>
              We merge deep technical expertise with advanced eco-friendly practices to optimize manufacturing efficiency, reduce water wastage, and ensure client plants strictly comply with national and international environmental standards.
            </p>
            
            <a href="https://wa.me/923054444125" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0077B6', color: '#ffffff', padding: '13px 36px', borderRadius: 50, fontWeight: 700, fontSize: '0.9rem', transition: 'background 0.25s', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.background = '#005f91'}
              onMouseLeave={e => e.currentTarget.style.background = '#0077B6'}>
              Connect With Our Engineers
            </a>
          </div>

          {/* Right Column: Highlights Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                { title: 'ISO 9001:2015', desc: 'Certified Quality Management System aligning with global compliance.' },
                { title: 'Global Standards', desc: 'Formulated chemicals adhering to GOTS & ZDHC Level 3 protocols.' },
                { title: '500+ Projects', desc: 'Successfully executed and maintained across various sectors.' },
                { title: '20+ Industries', desc: 'Textiles, oil & gas, sugar, cement, power plants, and food processing.' },
              ].map(c => (
                <div key={c.title} style={{ padding: '24px 20px', background: '#fafbfc', borderRadius: 12, border: '1px solid rgba(0, 119, 182, 0.08)', borderLeft: '4px solid #0077B6', boxShadow: '0 4px 12px rgba(0, 43, 73, 0.02)' }}>
                  <h4 style={{ margin: '0 0 8px', color: '#002B49', fontSize: '1.1rem', fontWeight: 800 }}>{c.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#555555', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Industrial Plant Operations Image mockup */}
            <div style={{ height: 260, borderRadius: 12, overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,43,73,0.1)' }}>
              <img src="/projects/project-water.png" alt="Seamens Operations" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            </div>
          </div>

        </div>
      </section>

      {/* ─── STATS COUNTER ─── */}
      <section style={{ padding: '70px 0', background: 'linear-gradient(135deg,#001830,#002B49)' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 5%', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40, textAlign: 'center' }}>
          {[
            { num: '15+', label: 'Years of Expertise' },
            { num: '500+', label: 'Projects Delivered' },
            { num: '20+', label: 'Industries Served' },
            { num: '80+', label: 'Cities Covered' }
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 'clamp(2.2rem,5vw,3.2rem)', fontWeight: 900, color: '#48CAE4', marginBottom: '0.3rem' }}>{s.num}</div>
              <div style={{ color: 'rgba(255,255,255,0.78)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OUR CORE VALUES (New & Fully Optimized) ─── */}
      <section style={{ padding: '90px 0 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 5%' }} data-rv>
          
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ color: '#0077B6', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Operational Foundations</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#002B49', marginBottom: '0.6rem' }}>Our Core Values</h2>
            <p style={{ color: '#555555', fontSize: '1rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
              At Seamens Enterprises, our core values define how we build relationships, formulate solutions, and support industrial development.
            </p>
            <div style={{ width: 55, height: 4, background: '#0077B6', borderRadius: 2, margin: '1.2rem auto 0' }}/>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { t: '1. Integrity', d: 'We conduct all operations with complete honesty, absolute transparency, and the highest standard of corporate ethics.' },
              { t: '2. Innovation', d: 'Continuous research enables us to develop smart, eco-friendly formulations to solve complex industrial issues.' },
              { t: '3. Quality', d: 'Rigorous laboratory analysis and testing ensure we supply chemical formulations of consistent premium standards.' },
              { t: '4. Customer Focus', d: 'Our clients are at the center of our engineering. We actively listen, diagnose problems, and deliver targeted solutions.' },
              { t: '5. Sustainability', d: 'We formulate green chemistries and implement energy-efficient water treatment technologies that protect environmental resources.' },
              { t: '6. Technical Teamwork', d: 'Our sales and after-sales support networks integrate seamlessly to provide responsive, cost-effective service.' },
            ].map((v, i) => (
              <div key={i} style={{ 
                background: '#fafbfc', 
                borderRadius: 12, 
                padding: '32px 28px', 
                border: '1px solid rgba(0, 119, 182, 0.08)',
                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.01)',
                cursor: 'default'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 119, 182, 0.12)';
                  e.currentTarget.style.borderColor = 'rgba(0, 119, 182, 0.25)';
                  e.currentTarget.style.background = '#ffffff';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.01)';
                  e.currentTarget.style.borderColor = 'rgba(0, 119, 182, 0.08)';
                  e.currentTarget.style.background = '#fafbfc';
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#002B49', marginBottom: '0.8rem' }}>{v.t}</h3>
                <p style={{ color: '#555555', lineHeight: 1.7, fontSize: '0.92rem', margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── OUR DIRECTIONS (Vision & Mission) ─── */}
      <section style={{ padding: '90px 0 80px', background: '#f5f8fb' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 5%' }} data-rv>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ color: '#0077B6', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Corporate Philosophy</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#002B49', marginBottom: '0.5rem' }}>Vision & Mission</h2>
            <div style={{ width: 55, height: 4, background: '#0077B6', borderRadius: 2, margin: '1.2rem auto 0' }}/>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            <div style={{ background: '#ffffff', borderRadius: 12, padding: '40px 36px', borderTop: '4px solid #0077B6', boxShadow: '0 10px 30px rgba(0,43,73,0.04)' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#002B49', marginBottom: '0.5rem' }}>Our Mission</h3>
              <div style={{ width: 40, height: 3, background: '#0077B6', borderRadius: 2, marginBottom: '1.4rem' }}/>
              <p style={{ color: '#555555', lineHeight: 1.85, fontSize: '0.98rem', margin: 0 }}>
                Deliver premium, competitively priced industrial solutions that preserve resources, boost productivity, and create enduring bonds with our clients through transparency and engineering excellence. We strive to provide consistent quality formulations that maintain compliance and boost client profitability.
              </p>
            </div>
            <div style={{ background: '#ffffff', borderRadius: 12, padding: '40px 36px', borderTop: '4px solid #0077B6', boxShadow: '0 10px 30px rgba(0,43,73,0.04)' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#002B49', marginBottom: '0.5rem' }}>Our Vision</h3>
              <div style={{ width: 40, height: 3, background: '#0077B6', borderRadius: 2, marginBottom: '1.4rem' }}/>
              <p style={{ color: '#555555', lineHeight: 1.85, fontSize: '0.98rem', margin: 0 }}>
                To be the go-to partner for industrial chemical and engineering solutions, offering unparalleled technical experience, innovative problem-solving, and first-rate service to every client we serve. We aim to drive sustainable water stewardship practices across industrial ecosystems globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR PROFESSIONAL TEAM (New & Fully Optimized) ─── */}
      <section style={{ padding: '90px 0 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 5%', display: 'grid', gridTemplateColumns: '1fr 1.12fr', gap: 70, alignItems: 'center' }} data-rv>
          
          {/* Left Column: Team operations graphic mockup */}
          <div>
            <div style={{ height: 480, borderRadius: 12, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,43,73,0.12)' }}>
              <img src="/cooling-expertise.png" alt="Seamens Technical Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            </div>
          </div>

          {/* Right Column: Narrative of expertise */}
          <div>
            <p style={{ color: '#0077B6', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Technical Backbone</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#002B49', marginBottom: '1.2rem', lineHeight: 1.2 }}>Our Professional Team</h2>
            <div style={{ width: 55, height: 4, background: '#0077B6', borderRadius: 2, marginBottom: '1.8rem' }}/>
            
            <p style={{ fontSize: '1.02rem', lineHeight: 1.85, color: '#333333', marginBottom: '1.5rem', fontWeight: 500 }}>
              At Seamens Enterprises, our technical force is the core driver of our success. Comprising highly qualified chemical engineers, certified technicians, and industrial water experts.
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#555555', marginBottom: '1.8rem' }}>
              We bring over fifteen years of collective operational expertise to solve high-pressure, critical site complications. Driven by strict performance standards, each project is handled with extreme technical precision—ensuring zero downtime and peak water and utility system optimization.
            </p>

            {/* List of engineering specializations */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 24px' }}>
              {[
                'On-site Water Auditing & Diagnostics',
                'Custom Chemical Formulations',
                'Reverse Osmosis Plant Commissioning',
                'Boiler & Cooling Tower Audits',
                'Quality Control Lab Testing',
                '24/7 Support & Site Maintenance'
              ].map((spec, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: '#444444', fontWeight: 600 }}>
                  <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(0,119,182,0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#0077B6', fontSize: '0.7rem', fontWeight: 900 }}>✓</span>
                  {spec}
                </li>
              ))}
            </ul>

            <a href="https://wa.me/923054444125" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#002B49', color: '#ffffff', padding: '12px 34px', borderRadius: 50, fontWeight: 700, fontSize: '0.9rem', transition: 'background 0.25s', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.background = '#001a30'}
              onMouseLeave={e => e.currentTarget.style.background = '#002B49'}>
              Schedule Technical Consultation
            </a>
          </div>

        </div>
      </section>

      {/* ─── BRANCH NETWORK & LOCATIONS (New & Highly Professional) ─── */}
      <section style={{ padding: '90px 0 80px', background: '#f5f8fb' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 5%' }} data-rv>
          
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ color: '#0077B6', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Nationwide Operations</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#002B49', marginBottom: '0.6rem' }}>Our Branch Network</h2>
            <p style={{ color: '#555555', fontSize: '1rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
              Serving industrial sectors across Pakistan through a well-coordinated office and factory infrastructure.
            </p>
            <div style={{ width: 55, height: 4, background: '#0077B6', borderRadius: 2, margin: '1.2rem auto 0' }}/>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { city: 'Lahore Office', address: '290-D, Phase 2, New Lahore City, Lahore, Punjab, Pakistan.' },
              { city: 'Faisalabad Office', address: '2nd Floor, Faheem Dogar Super Mart, Ahmed Town, Jaranwala Road, Khurrianwala.' },
              { city: 'Multan Office', address: '552-Mujtaba Canal View, Main Qaimpur Canal Road, Multan.' },
              { city: 'Faisalabad Factory', address: '108-I, Tufailabad Industrial Estate, Multan Road, Faisalabad.' }
            ].map((b, i) => (
              <div key={i} style={{ 
                background: '#ffffff', 
                borderRadius: 12, 
                padding: '28px 24px', 
                border: '1px solid rgba(0, 119, 182, 0.08)',
                boxShadow: '0 4px 15px rgba(0, 43, 73, 0.02)'
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(0,119,182,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <h4 style={{ margin: '0 0 8px', color: '#002B49', fontSize: '1.1rem', fontWeight: 800 }}>{b.city}</h4>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: 1.6 }}>{b.address}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── COMMITMENTS CHOSEN BY CLIENTS ─── */}
      <section style={{ padding: '90px 0 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 5%' }} data-rv>
          
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ color: '#0077B6', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Why Choose Seamens</p>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.5rem)', fontWeight: 900, color: '#002B49', marginBottom: '0.5rem' }}>Our Core Commitment</h2>
            <div style={{ width: 55, height: 4, background: '#0077B6', borderRadius: 2, margin: '1.2rem auto 0' }}/>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
            {[
              { t: 'Innovation', d: 'Our technical team continuously develops advanced formulations for water treatment and industrial processes, staying ahead of evolving plant requirements.', img: '/products/cat-textile.png' },
              { t: 'Reliability', d: 'Strict quality control at every stage of supply and service ensures consistent, dependable results — batch after batch, project after project.', img: '/products/cat-parts.png' },
              { t: 'Partnership', d: 'We work closely with our industrial clients to diagnose, prescribe, and track solutions — building relationships built on results, not just transactions.', img: '/projects/project-boilers.png' },
            ].map(item => (
              <div key={item.t} style={{ background: '#ffffff', borderRadius: 12, border: '1px solid #eee', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,43,73,0.04)', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ height: 180, overflow: 'hidden' }}>
                  <img src={item.img} alt={item.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                </div>
                <div style={{ padding: '28px 24px' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#002B49', marginBottom: '0.6rem' }}>{item.t}</h3>
                  <p style={{ color: '#555555', lineHeight: 1.75, fontSize: '0.92rem', margin: 0 }}>{item.d}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background: 'linear-gradient(135deg,#001830,#0077B6)', padding: '80px 0', color: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 5%' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.4rem)', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.5px' }}>Ready to Optimise Your Operations?</h2>
          <p style={{ opacity: 0.85, fontSize: '1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
            Contact our team for a comprehensive company profile, on-site diagnostics, and a tailored technical consultation.
          </p>
          <a href="https://wa.me/923054444125" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ffffff', color: '#002B49', padding: '14px 44px', borderRadius: 50, fontWeight: 900, fontSize: '0.95rem', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Contact Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}