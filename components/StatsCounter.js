'use client';
import { useState, useEffect, useRef } from 'react';

export default function StatsCounter({ target, label, suffix }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => { if (countRef.current) observer.unobserve(countRef.current); };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={countRef} className="stat-card">
      <div className="stat-number">{count}{suffix}</div>
      <div className="stat-label">{label}</div>
      
      <style jsx>{`
        .stat-card {
          padding: 10px;
        }
        .stat-number {
          font-size: clamp(2.5rem, 8vw, 3.5rem);
          font-weight: 800;
          color: #00A19D;
          font-family: 'Montserrat', sans-serif;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: clamp(0.8rem, 3vw, 0.95rem);
          font-weight: 600;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        @media (max-width: 768px) {
          .stat-number { margin-bottom: 5px; }
        }
      `}</style>
    </div>
  );
}