'use client';
import { useState } from 'react';

const inputStyle = {
  padding: '13px 16px',
  borderRadius: 8,
  border: '1.5px solid #dde4ed',
  outline: 'none',
  fontSize: '0.93rem',
  color: '#111',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  transition: 'border-color 0.25s',
};

export default function SamplesPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div style={{ background: '#f5f8fb', minHeight: '100vh' }}>
      <div style={{ height: 90 }} />

      {/* ─── PAGE HERO ─── */}
      <section style={{ padding: '80px 0 60px', background: 'linear-gradient(180deg,#001830,#002B49)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(72,202,228,0.06) 1px,transparent 1px)', backgroundSize: '28px 28px' }} />
        <div style={{ maxWidth: 1300, margin: '0 auto', padding: '0 5%', position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <p style={{ color: '#48CAE4', fontWeight: 700, fontSize: '1rem', marginBottom: '0.5rem' }}>Quality Assurance</p>
          <h1 style={{ fontSize: 'clamp(2.2rem,5vw,3.2rem)', fontWeight: 900, color: '#fff', marginBottom: '0.8rem' }}>Request a Sample</h1>
          <div style={{ width: 55, height: 4, background: '#0077B6', borderRadius: 2, margin: '0 auto 1.2rem' }} />
          <p style={{ color: 'rgba(255,255,255,0.72)', maxWidth: 540, margin: '0 auto', fontSize: '1rem', lineHeight: 1.8 }}>
            Experience Seamens quality firsthand. We provide technical samples of our water treatment and industrial chemical solutions for evaluation and testing.
          </p>
        </div>
      </section>

      {/* ─── SPLIT: WHY SAMPLES + FORM ─── */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5%', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60, alignItems: 'start' }}>

          {/* Left: why request */}
          <div>
            <p style={{ color: '#0077B6', fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>Why Request a Sample?</p>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.1rem)', fontWeight: 900, color: '#111', marginBottom: '0.5rem' }}>Test Before You Commit</h2>
            <div style={{ width: 45, height: 4, background: '#0077B6', borderRadius: 2, marginBottom: '1.4rem' }} />
            <p style={{ color: '#555', lineHeight: 1.85, fontSize: '0.97rem', marginBottom: '2rem' }}>
              We understand that changing your chemical or treatment program is a significant decision. Our sample program lets your technical team evaluate product performance in your own plant conditions — at no cost and with no obligation.
            </p>
            {[
              { t: 'Lab-Certified Quality', d: 'Every sample batch is tested against our ISO 9001:2015 quality standards before dispatch.' },
              { t: 'Technical Support', d: 'A Seamens engineer will guide your team through evaluation protocols and review results.' },
              { t: 'Fast Turnaround', d: 'Samples dispatched within 48 hours of request confirmation across all major cities.' },
              { t: 'Zero Obligation', d: 'No purchase commitment required. We earn your trust through performance, not pressure.' },
            ].map(item => (
              <div key={item.t} style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0077B6', flexShrink: 0, marginTop: 7 }} />
                <div>
                  <div style={{ fontWeight: 800, color: '#002B49', fontSize: '0.95rem', marginBottom: 3 }}>{item.t}</div>
                  <div style={{ color: '#666', fontSize: '0.87rem', lineHeight: 1.65 }}>{item.d}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div style={{ background: '#fff', borderRadius: 12, padding: '44px 40px', boxShadow: '0 8px 40px rgba(0,43,73,0.09)', border: '1px solid #e8edf2' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg,#0077B6,#00B4D8)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.4rem' }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#002B49', marginBottom: '0.6rem' }}>Request Submitted!</h3>
                <p style={{ color: '#666', lineHeight: 1.8, fontSize: '0.95rem' }}>Our team will contact you within 24 hours to confirm your sample and arrange dispatch.</p>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#002B49', marginBottom: '0.5rem' }}>Sample Request Form</h2>
                <div style={{ width: 40, height: 4, background: '#0077B6', borderRadius: 2, marginBottom: '1.8rem' }} />
                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  {[
                    { label: 'Full Name', type: 'text', placeholder: 'Muhammad Ali', col: 1 },
                    { label: 'Company Name', type: 'text', placeholder: 'Your Company Ltd', col: 1 },
                    { label: 'Email Address', type: 'email', placeholder: 'you@company.com', col: 1 },
                    { label: 'Phone Number', type: 'tel', placeholder: '+92 300 0000000', col: 1 },
                  ].map(f => (
                    <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <label style={{ fontWeight: 700, color: '#4A6580', fontSize: '0.78rem', letterSpacing: 0.5 }}>{f.label.toUpperCase()}</label>
                      <input type={f.type} placeholder={f.placeholder} required style={inputStyle}
                        onFocus={e => e.currentTarget.style.borderColor = '#0077B6'}
                        onBlur={e => e.currentTarget.style.borderColor = '#dde4ed'} />
                    </div>
                  ))}
                  <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontWeight: 700, color: '#4A6580', fontSize: '0.78rem', letterSpacing: 0.5 }}>PRODUCT CATEGORY</label>
                    <select required style={{ ...inputStyle }}>
                      <option value="">Select a category...</option>
                      <option>Water Treatment Chemicals</option>
                      <option>Cooling Tower Treatment</option>
                      <option>Boiler Treatment Chemicals</option>
                      <option>Textile Auxiliaries</option>
                      <option>Specialized Cleaning Chemicals</option>
                    </select>
                  </div>
                  <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontWeight: 700, color: '#4A6580', fontSize: '0.78rem', letterSpacing: 0.5 }}>SPECIFIC REQUIREMENTS / NOTES</label>
                    <textarea rows={4} placeholder="Describe your plant conditions, current chemistry, or any specific evaluation criteria..." required
                      style={{ ...inputStyle, resize: 'none' }}
                      onFocus={e => e.currentTarget.style.borderColor = '#0077B6'}
                      onBlur={e => e.currentTarget.style.borderColor = '#dde4ed'} />
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <button type="submit" style={{ width: '100%', padding: '14px', background: '#0077B6', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer', letterSpacing: 0.5, transition: 'background 0.25s' }}
                      onMouseEnter={e => e.currentTarget.style.background = '#005f91'}
                      onMouseLeave={e => e.currentTarget.style.background = '#0077B6'}>
                      SUBMIT REQUEST
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
        <style jsx>{`@media(max-width:860px){ section > div{grid-template-columns:1fr!important;gap:40px!important} }`}</style>
      </section>

      {/* ─── CTA STRIP ─── */}
      <section style={{ background: 'linear-gradient(135deg,#001830,#0077B6)', padding: '60px 0', color: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 5%' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem,4vw,2.2rem)', fontWeight: 900, marginBottom: '0.8rem' }}>Prefer to Talk Directly?</h2>
          <p style={{ opacity: 0.8, fontSize: '1rem', marginBottom: '1.8rem', lineHeight: 1.8 }}>
            WhatsApp our technical team for an instant conversation about your requirements.
          </p>
          <a href="https://wa.me/923054444125" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#fff', color: '#002B49', padding: '13px 38px', borderRadius: 50, fontWeight: 900, fontSize: '0.92rem' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  );
}