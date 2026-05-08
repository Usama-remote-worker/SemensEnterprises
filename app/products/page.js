'use client';
import { useState } from 'react';

const categories = [
  { id:'ALL',      name:'All Services' },
  { id:'WATER',    name:'Water Treatment' },
  { id:'TEXTILE',  name:'Textile Solutions' },
  { id:'BOILERS',  name:'Boiler & Humidification' },
  { id:'PARTS',    name:'Engineering & Machinery' },
  { id:'CLEANING', name:'Cleaning Chemicals' },
];

const products = [
  { id:1,  cat:'WATER',    name:'Reverse Osmosis Systems',             desc:'Turnkey RO plants engineered to remove dissolved salts, contaminants, and suspended matter — delivering high-purity process water on demand.',                                    img:'/products/cat-water.png' },
  { id:2,  cat:'WATER',    name:'Cooling Tower Treatment',             desc:'Complete chemical programs for open and closed recirculating systems, controlling scale, corrosion, and biological fouling to sustain peak thermal efficiency year-round.',       img:'/projects/project-cooling.png' },
  { id:3,  cat:'WATER',    name:'Filtration Technology (UF / NF)',     desc:'Advanced Ultrafiltration and Nanofiltration membrane systems delivering superior removal of particles, bacteria, and viruses for dependable industrial water quality.',         img:'/products/cat-water.png' },
  { id:4,  cat:'WATER',    name:'Chemical Dosing Systems',             desc:'State-of-the-art automated dosing units for accurate, consistent chemical application — minimising waste, reducing manual intervention, and ensuring compliance.',                img:'/projects/project-pipes.png' },
  { id:5,  cat:'TEXTILE',  name:'Sizing & Weaving Agents',             desc:'High-performance sizing formulations that strengthen yarn, minimise loom breakage, and maximise weaving efficiency across cotton, polyester, and blended fabrics.',             img:'/products/cat-textile.png' },
  { id:6,  cat:'TEXTILE',  name:'Dyeing & Printing Auxiliaries',       desc:'Advanced leveling agents, fixing thickeners, and dispersants ensuring deep, uniform coloration and brilliant prints — compliant with GOTS and ZDHC Level 3.0.',                img:'/products/cat-textile.png' },
  { id:7,  cat:'TEXTILE',  name:'Finishing Agents',                    desc:'Softeners, weight enhancers, and anti-crease agents designed to meet precise final fabric specifications and maximise market value.',                                            img:'/products/cat-textile.png' },
  { id:8,  cat:'BOILERS',  name:'Industrial Boiler Treatment',         desc:'Specialised feed-water treatment programs preventing scale, corrosion, and carryover — extending asset life and sustaining peak steam generation efficiency on every shift.',    img:'/products/cat-boilers.png' },
  { id:9,  cat:'BOILERS',  name:'Air Humidification Plants',           desc:'Precision atmospheric control systems critical for textile elasticity, printing quality, and maintaining optimal production environments.',                                       img:'/products/cat-boilers.png' },
  { id:10, cat:'BOILERS',  name:'Biological Effluent Treatment',       desc:'Microorganism-driven treatment that biochemically decomposes industrial waste streams to stable, compliant end products — meeting discharge standards without heavy chemistry.',  img:'/products/cat-boilers.png' },
  { id:11, cat:'PARTS',    name:'Turnkey Plant Erection',              desc:'Complete project management from planning and civil works to final installation and commissioning — delivered to the highest engineering standards on time.',                      img:'/projects/project-tanks.png' },
  { id:12, cat:'PARTS',    name:'Machinery Supply & Upgradation',      desc:'Reliable supply chain for high-grade industrial components plus strategic retrofitting of older equipment to improve performance and reduce energy consumption.',               img:'/products/cat-parts.png' },
  { id:13, cat:'CLEANING', name:'Specialized Cleaning Chemicals',      desc:'Professional heavy-duty industrial cleaning formulations for degreasing, passivation, and surface treatment across the most demanding plant environments.',                      img:'/products/cat-textile.png' },
];

export default function ProductsPage() {
  const [filter, setFilter] = useState('ALL');
  const filtered = filter === 'ALL' ? products : products.filter(p => p.cat === filter);

  return (
    <div style={{ background:'#f5f8fb', minHeight:'100vh' }}>
      <div style={{ height:90 }}/>

      {/* ─── PAGE HERO ─── */}
      <section style={{ padding:'80px 0 60px', background:'linear-gradient(180deg,#001830,#002B49)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(rgba(72,202,228,0.06) 1px,transparent 1px)', backgroundSize:'28px 28px' }}/>
        <div style={{ maxWidth:1300, margin:'0 auto', padding:'0 5%', position:'relative', zIndex:2, textAlign:'center' }}>
          <p style={{ color:'#48CAE4', fontWeight:700, fontSize:'1rem', marginBottom:'0.5rem' }}>Industrial Portfolio</p>
          <h1 style={{ fontSize:'clamp(2.2rem,5vw,3.2rem)', fontWeight:900, color:'#fff', marginBottom:'0.8rem' }}>Products & Services</h1>
          <div style={{ width:55, height:4, background:'#0077B6', borderRadius:2, margin:'0 auto 1.2rem' }}/>
          <p style={{ color:'rgba(255,255,255,0.7)', maxWidth:560, margin:'0 auto', fontSize:'1rem', lineHeight:1.75 }}>
            Engineered solutions for water treatment, textile processing, and industrial plant operations.
          </p>
        </div>
      </section>

      {/* ─── FILTER BAR ─── */}
      <section style={{ padding:'28px 0', background:'#fff', borderBottom:'1px solid #e8edf2', position:'sticky', top:80, zIndex:100, boxShadow:'0 2px 12px rgba(0,43,73,0.07)' }}>
        <div style={{ maxWidth:1300, margin:'0 auto', padding:'0 5%', display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap' }}>
          {categories.map(c => (
            <button key={c.id} onClick={() => setFilter(c.id)} style={{
              padding:'10px 22px', borderRadius:50, border:`1.5px solid ${filter===c.id ? '#0077B6' : '#dde4ed'}`,
              background: filter===c.id ? '#0077B6' : '#fff',
              color: filter===c.id ? '#fff' : '#4A6580',
              fontWeight:700, fontSize:'0.8rem', cursor:'pointer', transition:'all 0.25s', letterSpacing:0.5,
            }}
              onMouseEnter={e=>{ if(filter!==c.id){ e.currentTarget.style.borderColor='#0077B6'; e.currentTarget.style.color='#0077B6'; } }}
              onMouseLeave={e=>{ if(filter!==c.id){ e.currentTarget.style.borderColor='#dde4ed'; e.currentTarget.style.color='#4A6580'; } }}
            >{c.name}</button>
          ))}
        </div>
      </section>

      {/* ─── PRODUCTS GRID ─── */}
      <section style={{ padding:'70px 0' }}>
        <div style={{ maxWidth:1300, margin:'0 auto', padding:'0 5%' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:28 }}>
            {filtered.map(p => (
              <div key={p.id} style={{ background:'#fff', borderRadius:12, overflow:'hidden', border:'1px solid #e8edf2', boxShadow:'0 4px 20px rgba(0,43,73,0.05)', transition:'transform 0.3s,box-shadow 0.3s' }}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 16px 50px rgba(0,43,73,0.12)';}}
                onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='0 4px 20px rgba(0,43,73,0.05)';}}>
                <div style={{ height:220, overflow:'hidden', position:'relative' }}>
                  <img src={p.img} alt={p.name} style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                  <div style={{ position:'absolute', top:16, left:16, background:'#0077B6', color:'#fff', padding:'4px 14px', borderRadius:50, fontSize:'0.7rem', fontWeight:800, letterSpacing:1 }}>
                    {categories.find(c=>c.id===p.cat)?.name}
                  </div>
                </div>
                <div style={{ padding:'26px 24px' }}>
                  <h3 style={{ fontSize:'1.08rem', fontWeight:900, color:'#002B49', marginBottom:'0.5rem' }}>{p.name}</h3>
                  <p style={{ color:'#555', fontSize:'0.88rem', lineHeight:1.72, marginBottom:'1.4rem' }}>{p.desc}</p>
                  <a href="https://wa.me/923054444125" target="_blank" rel="noopener noreferrer" style={{ display:'block', textAlign:'center', padding:'11px 0', border:'1.5px solid #0077B6', color:'#0077B6', borderRadius:8, fontWeight:700, fontSize:'0.85rem', transition:'all 0.25s' }}
                    onMouseEnter={e=>{e.currentTarget.style.background='#0077B6';e.currentTarget.style.color='#fff';}}
                    onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='#0077B6';}}>
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ background:'linear-gradient(135deg,#001830,#0077B6)', padding:'70px 0', color:'#fff', textAlign:'center' }}>
        <div style={{ maxWidth:700, margin:'0 auto', padding:'0 5%' }}>
          <h2 style={{ fontSize:'clamp(1.8rem,4vw,2.4rem)', fontWeight:900, marginBottom:'1rem' }}>Need a Custom Industrial Solution?</h2>
          <p style={{ opacity:0.8, fontSize:'1rem', marginBottom:'2rem', lineHeight:1.8 }}>
            Our engineers will assess your plant requirements and recommend the most cost-effective solution.
          </p>
          <a href="https://wa.me/923054444125" target="_blank" rel="noopener noreferrer"
            style={{ display:'inline-block', background:'#fff', color:'#002B49', padding:'14px 40px', borderRadius:50, fontWeight:900, fontSize:'0.95rem' }}
            onMouseEnter={e=>e.currentTarget.style.opacity='0.9'}
            onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}