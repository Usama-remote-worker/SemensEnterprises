'use client';
import { useState, useEffect, useRef } from 'react';

export default function StatsCounter({ target, label, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div className="stat-card" ref={ref}>
      <span className="stat-number" style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--primary)', fontFamily: 'Montserrat, sans-serif', display: 'block' }}>{count}{suffix}</span>
      <span className="stat-label" style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</span>
    </div>
  );
}
