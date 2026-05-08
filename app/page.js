'use client';
import { useEffect } from 'react';
import PartnerMarquee from '@/components/PartnerMarquee';
import StatsCounter from '@/components/StatsCounter';

function useReveal() {
  useEffect(() => {
    // Scroll-reveal for general sections
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('rv'); obs.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('[data-rv]').forEach(el => obs.observe(el));

    // Card flip-in animation for service cards
    const cardObs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); cardObs.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.sc-anim').forEach(el => cardObs.observe(el));

    return () => { obs.disconnect(); cardObs.disconnect(); };
  }, []);
}

const SVC = [
  { title: 'Reverse Osmosis',      desc: 'Processes that remove contaminants include physical processes (settling and filtration), chemical processes (disinfection, coagulation) and advanced membrane separation for industrial-grade purity.',
    svg: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg> },
  { title: 'Cooling Treatment',     desc: 'In a recirculating open cooling system, the flow of water rejects the waste heat from the process or equipment, and cools by evaporating and sensibly exchanging heat with comprehensive chemical programs.',
    svg: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2l3 3-3 3-3-3z"/><path d="M12 22l3-3-3-3-3 3z"/><path d="M2 12l3 3 3-3-3-3z"/><path d="M22 12l-3 3-3-3 3-3z"/></svg> },
  { title: 'Filtration Technology', desc: 'Advanced filtration technologies, such as Ultrafiltration (UF) and Nanofiltration (NF), designed to deliver clean and safe water for a wide range of industrial and commercial applications.',
    svg: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg> },
  { title: 'RO Plants',             desc: 'Seamens delivers high-efficiency Reverse Osmosis systems meticulously engineered to remove dissolved salts, contaminants, and other impurities — ensuring a reliable supply of high-purity water.',
    svg: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/><line x1="12" y1="14" x2="12" y2="18"/></svg> },
  { title: 'Boiler Treatment',      desc: 'A boiler feed water treatment system purifies the water used for hot water heat exchange and steam generation in industrial and commercial steam and hot water heating systems.',
    svg: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg> },
  { title: 'Biological Treatment',  desc: 'Biological treatment methods use microorganisms, mostly bacteria, in the biochemical decomposition of wastewaters to stable end products — meeting discharge compliance standards.',
    svg: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16.1A5 5 0 0 1 5.5 20M2 12.1A9 9 0 0 1 9.5 20M2 8.1A13 13 0 0 1 13.5 20"/><path d="M22 16.1A5 5 0 0 0 18.5 20M22 12.1A9 9 0 0 0 14.5 20M22 8.1A13 13 0 0 0 10.5 20"/></svg> },
  { title: 'Chemical Dosing',       desc: 'Seamens provides state-of-the-art automated dosing systems engineered for accurate and consistent chemical application in water treatment operations — reducing waste and ensuring compliance.',
    svg: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H6l-3 9h18l-3-9h-3"/><path d="M3 12v9h18v-9"/><line x1="9" y1="3" x2="9" y2="12"/><line x1="15" y1="3" x2="15" y2="12"/></svg> },
  { title: 'Ultra Filtration',      desc: 'Our state-of-the-art Ultrafiltration systems are engineered to deliver superior removal of suspended particles, bacteria, and viruses — ensuring a dependable supply of high-quality water.',
    svg: <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0077B6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/></svg> },
];

export default function Home() {
  useReveal();
  return (
    <div>

      {/* ─── HERO ─── */}
      <section style={{ minHeight:'100vh', background:'linear-gradient(180deg,#001830 0%,#002B49 55%,#0077B6 100%)', position:'relative', overflow:'hidden', display:'flex', alignItems:'center', paddingTop:80 }}>
        {/* water ripple rings */}
        {[260,440,620,800].map((s,i)=>(
          <div key={i} style={{ position:'absolute', top:'35%', left:'50%', width:s, height:s, borderRadius:'50%', border:'1px solid rgba(72,202,228,0.15)', transform:'translateX(-50%)', animation:`ripple ${4+i}s ease-out infinite`, animationDelay:`${i*0.7}s` }}/>
        ))}
        <div style={{ maxWidth:1300, margin:'0 auto', padding:'60px 5%', display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center', position:'relative', zIndex:2, width:'100%' }}>
          {/* LEFT */}
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, border:'1px solid rgba(255,255,255,0.25)', borderRadius:50, padding:'6px 18px', marginBottom:'1.6rem' }}>
              <span style={{ width:7, height:7, borderRadius:'50%', background:'#48CAE4', display:'inline-block' }}/>
              <span style={{ color:'rgba(255,255,255,0.85)', fontSize:'0.78rem', fontWeight:700, letterSpacing:1.5 }}>Where Efficiency Meets Quality</span>
            </div>
            <h1 style={{ fontSize:'clamp(2.6rem,4.5vw,3.8rem)', fontWeight:900, color:'#fff', lineHeight:1.1, letterSpacing:'-1.5px', marginBottom:'1.2rem' }}>
              Think <span style={{ color:'#48CAE4', borderBottom:'3px solid rgba(72,202,228,0.5)', paddingBottom:2 }}>Differently...</span><br/>Do Perfectly...
            </h1>
            <p style={{ fontSize:'1rem', color:'rgba(255,255,255,0.72)', lineHeight:1.85, marginBottom:'2.2rem', maxWidth:480 }}>
              With a focus on precision and performance, Seamens Enterprises delivers engineered water treatment systems, expert consulting, and ongoing technical support to ensure optimal plant efficiency and compliance.
            </p>
            <a href="/products" style={{ display:'inline-block', background:'transparent', border:'2px solid #fff', color:'#fff', padding:'12px 34px', borderRadius:4, fontWeight:700, fontSize:'0.9rem', letterSpacing:0.5 }}
              onMouseEnter={e=>{e.currentTarget.style.background='#fff';e.currentTarget.style.color='#002B49';}}
              onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='#fff';}}>
              Explore Services
            </a>
          </div>
          {/* RIGHT — machine image */}
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
            <img src="/projects/project-ro.png" alt="Seamens Industrial Plant" style={{ width:'100%', maxWidth:520, objectFit:'cover', height:420, borderRadius:8, boxShadow:'0 30px 80px rgba(0,0,0,0.5)' }}/>
          </div>
        </div>
        {/* White wave at bottom */}
        <div style={{ position:'absolute', bottom:0, left:0, right:0, lineHeight:0 }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:80 }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fff"/>
          </svg>
        </div>
        <style jsx>{`
          @keyframes ripple { 0%{opacity:0.5;transform:translateX(-50%) scale(1)} 100%{opacity:0;transform:translateX(-50%) scale(1.4)} }
          @media(max-width:860px){ section > div { grid-template-columns:1fr !important; } }
        `}</style>
      </section>

      {/* ─── ABOUT US ─── */}
      <section style={{ padding:'80px 0 70px', background:'#fff' }}>
        <div style={{ maxWidth:1300, margin:'0 auto', padding:'0 5%' }} data-rv>
          <p style={{ color:'#0077B6', fontWeight:700, fontSize:'1rem', marginBottom:'0.5rem' }}>About Us</p>
          <h2 style={{ fontSize:'clamp(1.8rem,4vw,2.6rem)', fontWeight:900, color:'#111', marginBottom:'0.6rem' }}>About Seamens Enterprises</h2>
          <div style={{ width:55, height:4, background:'#0077B6', borderRadius:2, marginBottom:'1.8rem' }}/>
          <p style={{ fontSize:'1.05rem', color:'#444', lineHeight:1.9, maxWidth:880, marginBottom:'2.2rem' }}>
            "Seamens Enterprises is a specialist industrial solutions company dedicated to delivering value-added chemical and engineering services for critical market applications. With over 15 years of collective experience, the company operates across major cities and serves a wide range of industries, including oil and gas, textiles, sugar, cement, captive power plants, IPPs, and other industrial sectors."
          </p>
          <a href="/aboutus" style={{ display:'inline-block', background:'#0077B6', color:'#fff', padding:'11px 30px', borderRadius:50, fontWeight:700, fontSize:'0.9rem', transition:'background 0.25s' }}
            onMouseEnter={e=>e.currentTarget.style.background='#005f91'}
            onMouseLeave={e=>e.currentTarget.style.background='#0077B6'}>
            Learn More
          </a>
        </div>
      </section>

      {/* ─── SERVICES WE OFFER ─── */}
      <section style={{ background:'linear-gradient(180deg,#001228 0%,#002040 50%,#002B49 100%)', padding:'80px 0 100px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize:'28px 28px' }}/>
        <div style={{ maxWidth:1300, margin:'0 auto', padding:'0 5%', position:'relative', zIndex:2 }}>
          <div style={{ textAlign:'center', marginBottom:52 }} data-rv>
            <p style={{ color:'#48CAE4', fontWeight:700, fontSize:'1rem', marginBottom:'0.5rem' }}>Services We Offer</p>
            <h2 style={{ fontSize:'clamp(1.8rem,4vw,2.5rem)', fontWeight:900, color:'#fff', marginBottom:'0.6rem' }}>Engineered Solutions for Industrial Excellence</h2>
            <div style={{ width:55, height:4, background:'#0077B6', borderRadius:2, margin:'0 auto' }}/>
          </div>

          {/* 8 cards — Perfect 4×2 equal layout with interactive 3D flip & pop-up on cursor hover */}
          <div className="svc-grid">
            {SVC.map((s, i) => (
              <div key={i} className={`sc sc-anim sc-d${i}`}>
                <div className="si">{s.svg}</div>
                <h3 className="st">{s.title}</h3>
                <p className="sd">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          /* Grid */
          .svc-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }

          /* Base card with 3D context - Cropped sLightly for a sleeker profile */
          .sc {
            background: #fff;
            border-radius: 8px;
            padding: 22px 20px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(0, 119, 182, 0.08);
            transform-style: preserve-3d;
            perspective: 1000px;
            transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), 
                        box-shadow 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), 
                        border-color 0.4s ease;
          }

          /* Dynamic multi-axis rotation & popup hover animation */
          .sc:hover {
            transform: translateY(-12px) rotateX(6deg) rotateY(12deg) rotateZ(1.5deg) scale(1.04) !important;
            box-shadow: 0 28px 55px rgba(0, 180, 216, 0.28), 0 12px 24px rgba(0, 0, 0, 0.12) !important;
            border-color: #00B4D8;
          }

          /* Inner shine effect on hover */
          .sc::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(72, 202, 228, 0.1), transparent);
            opacity: 0;
            transition: opacity 0.3s;
            pointer-events: none;
          }
          .sc:hover::after { opacity: 1; }

          /* Scroll-triggered reveal entry animations */
          .sc-anim {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
          }

          /* Triggered — visible */
          .sc-anim.in {
            opacity: 1;
            transform: translateY(0);
          }

          /* Staggered entry delays */
          .sc-d0.in  { transition-delay: 0.00s; }
          .sc-d1.in  { transition-delay: 0.06s; }
          .sc-d2.in  { transition-delay: 0.12s; }
          .sc-d3.in  { transition-delay: 0.18s; }
          .sc-d4.in  { transition-delay: 0.24s; }
          .sc-d5.in  { transition-delay: 0.30s; }
          .sc-d6.in  { transition-delay: 0.36s; }
          .sc-d7.in  { transition-delay: 0.42s; }

          .si { margin-bottom: 12px; transition: transform 0.4s ease; }
          .sc:hover .si { transform: translateZ(25px) scale(1.1) rotate(8deg); } /* Pop-up and rotate inner icon */
          
          /* Bolder typography content for extreme high-contrast professional look */
          .st { font-size: 1.05rem; font-weight: 900; color: #000; margin-bottom: 8px; line-height: 1.3; transition: transform 0.4s ease; }
          .sc:hover .st { transform: translateZ(15px); }
          
          .sd { font-size: 0.83rem; color: #1a1a1a; font-weight: 600; line-height: 1.65; transition: transform 0.4s ease; }
          .sc:hover .sd { transform: translateZ(8px); }

          @media(max-width:1024px) {
            .svc-grid { grid-template-columns: repeat(2, 1fr); }
            .sc:hover { transform: translateY(-8px) scale(1.02) !important; }
          }
          @media(max-width:580px) { .svc-grid { grid-template-columns: 1fr; } }
        `}</style>
      </section>

      {/* ─── PARTNER MARQUEE ─── */}
      <PartnerMarquee />

      {/* ─── VISION / MISSION ─── */}
      <section style={{ padding:'80px 0', background:'#fff' }}>
        <div style={{ maxWidth:1300, margin:'0 auto', padding:'0 5%', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }} data-rv>
          <div>
            <p style={{ color:'#0077B6', fontWeight:700, fontSize:'1rem', marginBottom:'0.5rem' }}>Company Vision & Mission</p>
            <h2 style={{ fontSize:'clamp(1.8rem,4vw,2.5rem)', fontWeight:900, color:'#111', marginBottom:'0.5rem' }}>Company Business Vision</h2>
            <div style={{ width:55, height:4, background:'#0077B6', borderRadius:2, marginBottom:'1.6rem' }}/>
            <p style={{ color:'#555', lineHeight:1.85, fontSize:'0.98rem', marginBottom:'2rem' }}>
              Seamens Enterprises aspires to be your first choice for industrial chemical and engineering solutions by combining excellent products with years of technical expertise and an exceptional service ethic. Seamens has the best sales & after-sales technical team in order to provide clients with the most cost-effective industrial solution.
            </p>
            <h3 style={{ fontSize:'1.35rem', fontWeight:900, color:'#111', marginBottom:'0.4rem' }}>Our Mission</h3>
            <div style={{ width:55, height:4, background:'#0077B6', borderRadius:2, marginBottom:'1.2rem' }}/>
            <p style={{ color:'#555', lineHeight:1.85, fontSize:'0.98rem', marginBottom:'2rem' }}>
              Deliver premium, competitively priced industrial solutions that preserve resources, boost productivity, and create enduring bonds with clients.
            </p>
            <h3 style={{ fontSize:'1.35rem', fontWeight:900, color:'#111', marginBottom:'0.4rem' }}>Our Vision</h3>
            <div style={{ width:55, height:4, background:'#0077B6', borderRadius:2, marginBottom:'1.2rem' }}/>
            <p style={{ color:'#555', lineHeight:1.85, fontSize:'0.98rem' }}>
              To be the go-to option for industrial solutions, offering our customers unparalleled experience, innovative solutions, and first-rate service.
            </p>
          </div>
          <div>
            <div style={{ height:520, borderRadius:12, overflow:'hidden', boxShadow:'0 20px 60px rgba(0,43,73,0.15)' }}>
              <img src="/cooling-expertise.png" alt="Seamens Team" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
            </div>
          </div>
        </div>
        <style jsx>{`@media(max-width:860px){ section > div{grid-template-columns:1fr!important;gap:40px!important} }`}</style>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ padding:'70px 0', background:'linear-gradient(135deg,#002B49,#004D7A)' }}>
        <div style={{ maxWidth:1300, margin:'0 auto', padding:'0 5%', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:40, textAlign:'center' }}>
          <StatsCounter target={15}  label="Years of Expertise"  suffix="+"/>
          <StatsCounter target={500} label="Projects Delivered"  suffix="+"/>
          <StatsCounter target={20}  label="Industries Served"   suffix="+"/>
          <StatsCounter target={95}  label="Client Retention"    suffix="%"/>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section style={{ background:'#ffffff', padding:'80px 0' }}>
        <div style={{ maxWidth:1300, margin:'0 auto', padding:'0 5%', position:'relative', zIndex:2 }}>
          <div style={{ textAlign:'center', marginBottom:50 }} data-rv>
            <p style={{ color:'#0077B6', fontWeight:700, fontSize:'1rem', marginBottom:'0.5rem' }}>Industries Served by Seamens Solutions</p>
            <p style={{ color:'#444', fontSize:'1.05rem', lineHeight:1.7, fontWeight:600, maxWidth:600, margin:'0 auto' }}>
              "Thank you to all who trust Seamens' solutions in driving their continued success."
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:16, marginBottom:50 }} data-rv>
            {['Textile','Sugar','Cement','Power Plants','Oil & Gas','Food & Beverage'].map((name,i)=>(
              <div key={i} style={{ 
                border:'1px solid rgba(0, 119, 182, 0.12)', 
                borderRadius:8, 
                padding:'28px 12px', 
                textAlign:'center', 
                color:'#002B49', 
                background:'#fafbfc',
                fontWeight:700, 
                fontSize:'0.88rem', 
                transition:'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)', 
                cursor:'default',
                boxShadow:'0 4px 6px rgba(0,0,0,0.02)'
              }}
                onMouseEnter={e=>{
                  e.currentTarget.style.background='#0077B6';
                  e.currentTarget.style.borderColor='#0077B6';
                  e.currentTarget.style.color='#fff';
                  e.currentTarget.style.transform='translateY(-5px)';
                  e.currentTarget.style.boxShadow='0 12px 24px rgba(0, 119, 182, 0.2)';
                }}
                onMouseLeave={e=>{
                  e.currentTarget.style.background='#fafbfc';
                  e.currentTarget.style.borderColor='rgba(0, 119, 182, 0.12)';
                  e.currentTarget.style.color='#002B49';
                  e.currentTarget.style.transform='translateY(0)';
                  e.currentTarget.style.boxShadow='0 4px 6px rgba(0,0,0,0.02)';
                }}>
                {name}
              </div>
            ))}
          </div>
          <div style={{ textAlign:'center' }} data-rv>
            <p style={{ color:'#555', maxWidth:620, margin:'0 auto 1.8rem', lineHeight:1.8, fontSize:'0.98rem' }}>
              Collaborate with experts at Seamens to deliver sustainable solutions that serve industries worldwide.
            </p>
            <a href="https://wa.me/923054444125" target="_blank" rel="noopener noreferrer"
              style={{ display:'inline-block', background:'#0077B6', color:'#fff', padding:'12px 36px', borderRadius:50, fontWeight:700, fontSize:'0.9rem' }}
              onMouseEnter={e=>e.currentTarget.style.background='#005f91'}
              onMouseLeave={e=>e.currentTarget.style.background='#0077B6'}>
              Learn More
            </a>
          </div>
        </div>
        <style jsx>{`@media(max-width:900px){ section > div > div:nth-child(2){grid-template-columns:repeat(3,1fr)!important} }`}</style>
      </section>

    </div>
  );
}