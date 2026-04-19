import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function IntroScreen() {
  const overlayRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const progressFillRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Only show if not already played this session
    if (sessionStorage.getItem('rexforge_intro_done')) {
      setVisible(false);
      return;
    }

    // Lock scroll while intro plays
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline();

    // Logo in
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      0.2
    );

    // Tagline in
    tl.fromTo(
      taglineRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      0.5
    );

    // Progress bar fill
    tl.fromTo(
      progressFillRef.current,
      { width: '0%' },
      { width: '100%', duration: 1.8, ease: 'none' },
      0.3
    );

    // Exit: fade out overlay
    tl.to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          document.body.style.overflow = '';
          sessionStorage.setItem('rexforge_intro_done', '1');
          setVisible(false);
        },
      },
      2.2
    );

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        background: '#fafaf8',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'all',
      }}
    >
      {/* Centered content */}
      <div style={{ textAlign: 'center', userSelect: 'none' }}>
        {/* Logo wordmark */}
        <div
          ref={logoRef}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(36px, 6vw, 64px)',
            color: '#1a1a2e',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            opacity: 0,
          }}
        >
          Rexforge<span style={{ color: '#e85d26' }}>.</span>
        </div>

        {/* Tagline */}
        <p
          ref={taglineRef}
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 14,
            color: '#6b7280',
            marginTop: 14,
            letterSpacing: '0.01em',
            opacity: 0,
          }}
        >
          Innovating the Future, One Pixel at a Time.
        </p>
      </div>

      {/* Progress bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 2,
          background: '#e0ddd8',
        }}
      >
        <div
          ref={progressFillRef}
          style={{
            height: '100%',
            width: '0%',
            background: '#e85d26',
          }}
        />
      </div>
    </div>
  );
}
