import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function WhatsAppButton() {
  const btnRef = useRef(null);
  const tooltipRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    // Bounce animation every 4 seconds
    function bounce() {
      gsap.to(btn, {
        y: -6,
        duration: 0.4,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          gsap.delayedCall(4, bounce);
        },
      });
    }

    const delay = gsap.delayedCall(2, bounce);

    return () => {
      delay.kill();
      gsap.killTweensOf(btn);
    };
  }, []);

  function handleMouseEnter() {
    setHovered(true);
    gsap.to(btnRef.current, { scale: 1.1, duration: 0.25, ease: 'power2.out' });
    gsap.to(btnRef.current, {
      boxShadow: '0 6px 32px rgba(37,211,102,0.65)',
      duration: 0.25,
    });
  }

  function handleMouseLeave() {
    setHovered(false);
    gsap.to(btnRef.current, { scale: 1, duration: 0.25, ease: 'power2.out' });
    gsap.to(btnRef.current, {
      boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
      duration: 0.25,
    });
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}
      className="sm:bottom-[28px] sm:right-[28px]"
    >
      {/* Tooltip */}
      <div
        ref={tooltipRef}
        style={{
          background: '#fff',
          color: '#1a1a2e',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 13,
          fontWeight: 600,
          padding: '7px 14px',
          borderRadius: 10,
          boxShadow: '0 4px 18px rgba(26,26,46,0.12)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          transition: 'opacity 0.2s, transform 0.2s',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(6px)',
        }}
      >
        Chat with us
      </div>

      {/* Button */}
      <a
        ref={btnRef}
        href="https://wa.me/2347065356471"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label="Chat with us on WhatsApp"
        style={{
          width: 58,
          height: 58,
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
          flexShrink: 0,
          textDecoration: 'none',
        }}
      >
        {/* WhatsApp SVG */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.37.633 4.693 1.84 6.733L2.667 29.333l6.773-1.773A13.28 13.28 0 0016.004 29.333c7.364 0 13.329-5.965 13.329-13.333 0-7.364-5.965-13.333-13.329-13.333zm0 24c-1.99 0-3.955-.519-5.684-1.504l-.407-.24-4.02 1.053 1.073-3.907-.267-.427A10.614 10.614 0 015.334 16c0-5.88 4.788-10.667 10.67-10.667 5.883 0 10.667 4.787 10.667 10.667S21.887 26.667 16.004 26.667zm5.86-7.987c-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.987 1.147-.16.16-.32.186-.64.027-.32-.16-1.347-.497-2.56-1.573-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.14-.14.32-.36.48-.547.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.527-.533-.72-.547-.187-.013-.4-.016-.613-.016-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667s1.147 3.093 1.307 3.307c.16.213 2.253 3.44 5.453 4.827.76.333 1.353.533 1.817.68.76.24 1.453.207 2 .127.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
        </svg>
      </a>
    </div>
  );
}
