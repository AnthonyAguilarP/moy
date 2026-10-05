import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NeumorphicCard } from './NeumorphicCard';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onScrollDown: () => void;
}

export function Hero({ onScrollDown }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const heartsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    const hearts = heartsRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        title,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2 }
      )
        .fromTo(
          subtitle,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          button,
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
          '-=0.4'
        )
        .fromTo(
          hearts,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: 'elastic.out(1, 0.5)' },
          '-=0.6'
        );

      // Floating animation for title
      gsap.to(title, {
        y: -15,
        duration: 4,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Floating animation for hearts
      gsap.to(hearts, {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Parallax on scroll
      gsap.to(hero, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  const handleButtonClick = () => {
    const button = buttonRef.current;
    if (button) {
      gsap.to(button, {
        scale: 0.92,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
        onComplete: onScrollDown,
      });
    } else {
      onScrollDown();
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16"
      aria-labelledby="hero-title"
    >
      {/* Floating hearts background */}
      <div
        ref={heartsRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <span
            key={i}
            className="absolute text-2xl opacity-30 animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`,
              color: i % 2 === 0 ? '#ff6b9d' : '#f7c948',
            }}
          >
            {i % 3 === 0 ? '💖' : i % 3 === 1 ? '✨' : '💫'}
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-xl">
        <h1
          ref={titleRef}
          id="hero-title"
          className="font-display font-bold mb-6 leading-tight"
          style={{
            fontSize: 'clamp(2.5rem, 12vw, 4.5rem)',
            background: 'linear-gradient(135deg, #ff6b9d 0%, #f7c948 50%, #88b5a3 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Feliz Aniversario
          <br />
          <span className="font-hand" style={{ fontSize: 'clamp(1.8rem, 8vw, 3rem)' }}>
            Marcela Dávila ❤️
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="font-serif italic text-lg mb-10 max-w-md mx-auto leading-relaxed"
          style={{ color: '#4a5568', fontSize: 'clamp(1rem, 4vw, 1.2rem)' }}
        >
          "Un año contigo vale más que una vida sin ti.
          <br />
          Gracias por hacer de cada día un regalo."
        </p>

        <NeumorphicCard
          ref={buttonRef}
          className="px-10 py-4 inline-flex items-center gap-3"
          onClick={handleButtonClick}
          glow
          style={{ cursor: 'pointer' }}
        >
          <span className="font-medium text-lg" style={{ color: '#2d3748' }}>
            Ver nuestra historia
          </span>
          <span className="text-2xl animate-bounce" aria-hidden="true">⬇️</span>
        </NeumorphicCard>

        {/* Date indicator */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <NeumorphicCard className="px-6 py-3">
            <p className="text-xs font-medium opacity-60">Nuestro inicio</p>
            <p className="font-display font-bold" style={{ color: '#ff6b9d' }}>05/10/2025</p>
          </NeumorphicCard>
          <NeumorphicCard className="px-6 py-3" glow>
            <p className="text-xs font-medium opacity-60">Hoy celebramos</p>
            <p className="font-display font-bold" style={{ color: '#f7c948' }}>05/10/2026</p>
          </NeumorphicCard>
          <NeumorphicCard className="px-6 py-3">
            <p className="text-xs font-medium opacity-60">Días juntos</p>
            <p className="font-display font-bold" style={{ color: '#88b5a3' }}>365</p>
          </NeumorphicCard>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: '#ff6b9d' }}
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}