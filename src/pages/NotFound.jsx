import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';

export default function NotFound() {
  const numRef = useRef(null);
  const headRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(numRef.current,  { opacity: 0 },           { opacity: 1, duration: 0.6 })
      .fromTo(headRef.current, { opacity: 0, y: 24 },    { opacity: 1, y: 0, duration: 0.55 }, '-=0.3')
      .fromTo(subRef.current,  { opacity: 0, y: 16 },    { opacity: 1, y: 0, duration: 0.5  }, '-=0.25')
      .fromTo(btnRef.current,  { opacity: 0, y: 12 },    { opacity: 1, y: 0, duration: 0.45 }, '-=0.2');
  }, []);

  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Rexforge</title>
        <meta name="description" content="This page does not exist. Head back to the Rexforge homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div
        style={{
          minHeight: '100vh',
          background: '#fafaf8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Background blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px] pointer-events-none blob" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet/5 rounded-full blur-[120px] pointer-events-none blob" style={{ animationDelay: '3s' }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 520 }}>
          {/* Badge */}
          <div style={{
            display: 'inline-block',
            background: '#e85d26',
            color: '#fff',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            padding: '6px 16px',
            borderRadius: 999,
            marginBottom: 20,
          }}>
            Page Not Found
          </div>

          {/* Giant 404 decorative number */}
          <div
            ref={numRef}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(80px, 20vw, 160px)',
              color: 'rgba(232, 93, 38, 0.12)',
              lineHeight: 1,
              marginBottom: -20,
              opacity: 0,
              userSelect: 'none',
            }}
          >
            404
          </div>

          {/* Headline */}
          <h1
            ref={headRef}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(24px, 4vw, 42px)',
              color: '#1a1a2e',
              lineHeight: 1.2,
              marginBottom: 16,
              opacity: 0,
            }}
          >
            Looks Like You're Lost
          </h1>

          {/* Subtext */}
          <p
            ref={subRef}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: '#6b7280',
              fontSize: 16,
              lineHeight: 1.7,
              maxWidth: 400,
              margin: '0 auto 36px',
              opacity: 0,
            }}
          >
            The page you are looking for does not exist or may have been moved. Let us take you back.
          </p>

          {/* Buttons */}
          <div
            ref={btnRef}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', opacity: 0 }}
          >
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 32px',
                background: '#e85d26',
                color: '#fff',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                borderRadius: 999,
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(232,93,38,0.3)',
                transition: 'background 0.25s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#cf4f1d'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#e85d26'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Go Back Home
            </Link>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 32px',
                background: 'transparent',
                color: '#1a1a2e',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                borderRadius: 999,
                border: '2px solid #1a1a2e',
                textDecoration: 'none',
                transition: 'background 0.25s, color 0.25s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1a1a2e'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1a1a2e'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
