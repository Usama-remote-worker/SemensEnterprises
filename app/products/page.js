'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ProductsPage() {
  const [filter, setFilter] = useState('ALL');

  const categories = [
    { id: 'ALL', name: 'ALL PRODUCTS' },
    { id: 'TEXTILE', name: 'TEXTILE SOLUTIONS' },
    { id: 'WATER', name: 'MANAGEMENT SYSTEMS' },
    { id: 'BOILERS', name: 'INDUSTRIAL PLANT SOLUTIONS' },
    { id: 'PARTS', name: 'ENGINEERING SERVICES' },
    { id: 'CLEANING', name: 'CLEANING CHEMICALS' },
  ];

  const products = [
    { id: 1, cat: 'TEXTILE', name: 'High-Performance Sizing Agents', desc: 'Formulated for optimal film-forming properties, strengthening yarn to minimize breakage and maximize loom efficiency.', img: '/products/cat-textile.png' },
    { id: 2, cat: 'TEXTILE', name: 'Specialized Dyeing & Printing Agents', desc: 'Ensures deep, uniform coloration and brilliant prints with advanced leveling agents and fixing thickeners.', img: '/products/cat-textile.png' },
    { id: 3, cat: 'TEXTILE', name: 'Innovative Finishing Agents', desc: 'From luxury softeners to weight enhancers, designed to meet precise final specifications and enhance market value.', img: '/products/cat-textile.png' },
    { id: 4, cat: 'WATER', name: 'High-Efficiency Cooling Towers', desc: 'Robust systems that manage waste heat and maintain optimal temperatures, preventing equipment overheating while conserving water.', img: '/projects/project-cooling.png' },
    { id: 5, cat: 'WATER', name: 'Industrial-Grade Chillers', desc: 'Precise temperature control solutions, from air-cooled to water-cooled models, essential for plastics and food processing.', img: '/projects/project-pipes.png' },
    { id: 6, cat: 'WATER', name: 'Advanced Reverse Osmosis (RO) Plants', desc: 'Turnkey RO systems designed to remove dissolved solids and contaminants, providing high-purity water for boilers and manufacturing.', img: '/products/cat-water.png' },
    { id: 7, cat: 'BOILERS', name: 'Precision Air Humidification Plants', desc: 'Achieve precise atmospheric control critical for textile elasticity, printing quality, and data center stability.', img: '/products/cat-boilers.png' },
    { id: 8, cat: 'BOILERS', name: 'High-Efficiency Industrial Boilers', desc: 'Reliable, uninterrupted steam source perfect for process heating, sterilization, and power generation with low environmental footprint.', img: '/products/cat-boilers.png' },
    { id: 9, cat: 'PARTS', name: 'High-Quality Parts & Machineries Supply', desc: 'Reliable supply chain for high-grade components for a wide range of equipment, ensuring peak production performance.', img: '/products/cat-parts.png' },
    { id: 10, cat: 'PARTS', name: 'Turnkey Plant Erection & Commissioning', desc: 'Complete project management from initial planning and civil work to final installation and commissioning to highest standards.', img: '/projects/project-tanks.png' },
    { id: 11, cat: 'PARTS', name: 'Strategic Machinery Upgradations', desc: 'Retrofitting older equipment with modern technology to improve performance, increase output, and reduce energy consumption.', img: '/products/cat-parts.png' },
    { id: 12, cat: 'CLEANING', name: 'Specialized Industrial Cleaning Chemicals', desc: 'Professional formulations for heavy-duty industrial cleaning, degreasing, and maintenance of high-precision equipment.', img: '/products/cat-textile.png' },
  ];

  const filteredProducts = filter === 'ALL' ? products : products.filter(p => p.cat === filter);

  return (
    <main style={{ background: '#fcfcfc', minHeight: '100vh' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ 
        padding: '180px 0 100px', 
        background: 'linear-gradient(135deg, #001e3c 0%, #003366 100%)', 
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <span style={{ color: '#00A19D', fontWeight: '800', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Industrial Portfolio</span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: '950', marginTop: '1rem', lineHeight: 1.1 }}>Premium <span style={{ color: '#00A19D' }}>Products</span></h1>
          <p style={{ maxWidth: '600px', margin: '1.5rem auto 0', fontSize: '1.1rem', opacity: 0.8 }}>
            Engineered solutions for textile processing, water treatment, and industrial machinery.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section style={{ padding: '40px 0', borderBottom: '1px solid #eee', background: 'white', position: 'sticky', top: '70px', zIndex: 100 }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            {categories.map(c => (
              <button 
                key={c.id}
                onClick={() => setFilter(c.id)}
                style={{
                  padding: '12px 25px',
                  borderRadius: '30px',
                  border: '1px solid',
                  borderColor: filter === c.id ? '#00A19D' : '#eee',
                  background: filter === c.id ? '#00A19D' : 'white',
                  color: filter === c.id ? 'white' : '#555',
                  fontWeight: '800',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card card-hover" style={{ 
                background: 'white', 
                borderRadius: '24px', 
                overflow: 'hidden', 
                border: '1px solid #eee',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
              }}>
                <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                  <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ 
                    position: 'absolute', top: '20px', left: '20px', 
                    background: '#00A19D', color: 'white', 
                    padding: '6px 15px', borderRadius: '20px', 
                    fontSize: '0.7rem', fontWeight: '900',
                    textTransform: 'uppercase'
                  }}>
                    {product.cat}
                  </div>
                </div>
                <div style={{ padding: '30px' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#001e3c', fontWeight: '950', marginBottom: '10px' }}>{product.name}</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>{product.desc}</p>
                  <button style={{ 
                    padding: '12px 0', width: '100%', 
                    background: 'transparent', border: '2px solid #001e3c', 
                    color: '#001e3c', borderRadius: '12px', 
                    fontWeight: '900', fontSize: '0.9rem',
                    cursor: 'pointer', transition: 'all 0.3s'
                  }}
                  onMouseEnter={e => { e.target.style.background = '#001e3c'; e.target.style.color = 'white'; }}
                  onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#001e3c'; }}
                  >VIEW DETAILS</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .container { max-width: 1300px; margin: 0 auto; padding: 0 20px; }
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 40px;
        }
        .card-hover { transition: all 0.4s ease; }
        .card-hover:hover { transform: translateY(-10px); boxShadow: 0 30px 60px rgba(0,0,0,0.08); }
        @media (max-width: 640px) {
          .products-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
}