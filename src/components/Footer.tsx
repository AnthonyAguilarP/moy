import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NeumorphicCard } from './NeumorphicCard';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        footer,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  const reasons = [
    { icon: '💝', text: 'Tu risa ilumina mis días más grises' },
    { icon: '🤝', text: 'Tu mano en la mía es mi lugar favorito' },
    { icon: '🌟', text: 'Haces que lo ordinario sea extraordinario' },
    { icon: '💭', text: 'Pienso en ti en cada decisión que tomo' },
    { icon: '🎵', text: 'Nuestra canción suena en mi cabeza todo el día' },
    { icon: '🏠', text: 'Contigo, cualquier lugar se siente como casa' },
    { icon: '🌈', text: 'Eres mi calma en la tormenta y mi tormenta en la calma' },
    { icon: '♾️', text: 'Te elijo hoy, mañana y en cada vida siguiente' },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative py-20 px-4"
      role="contentinfo"
    >
      <div className="max-w-4xl mx-auto">
        {/* Final message card */}
        <NeumorphicCard
          className="p-8 mb-12 text-center relative overflow-hidden"
          glow
          style={{
            background: 'linear-gradient(135deg, #ff6b9d11, #f7c94811, #88b5a311)',
            border: '1px solid #ff6b9d33',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neumorph-accent/5 via-transparent to-neumorph-gold/5 animate-shimmer pointer-events-none" />
          
          <div className="relative z-10">
            <p className="font-hand text-3xl mb-4" style={{ color: '#ff6b9d' }}>
              Para mi Marcela hermosa 💕
            </p>
            
            <div className="prose max-w-none mx-auto text-center" style={{ color: '#2d3748' }}>
              <p className="text-lg leading-relaxed mb-4 font-serif italic">
                "Gracias por este año increíble. Por cada café compartido, por cada abrazo largo,
                por cada 'te quiero' susurrado, por cada risa hasta que duele el estómago,
                por cada silencio cómodo, por cada aventura improvisada."
              </p>
              <p className="text-lg leading-relaxed mb-4 font-serif italic">
                "No sé qué depara el futuro, pero sé que quiero que estés en él.
                Todos los días. Todas las versiones. Todos los universos."
              </p>
              <p className="font-display font-bold text-xl" style={{ color: '#ff6b9d' }}>
                Te amo infinitamente. ❤️
              </p>
              <p className="text-sm opacity-60 mt-4">
                — Tu persona favorita
              </p>
            </div>
          </div>
        </NeumorphicCard>

        {/* Reasons grid */}
        <div className="mb-12">
          <h2 className="font-display font-bold text-center mb-8" style={{ color: '#2d3748', fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
            365 razones (y solo 8 caben aquí) ✨
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((reason, i) => (
              <NeumorphicCard
                key={i}
                className="p-4 text-center transition-all duration-300 hover:scale-[1.02]"
                style={{ minHeight: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              >
                <span className="text-3xl mb-2" aria-hidden="true">{reason.icon}</span>
                <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>
                  {reason.text}
                </p>
              </NeumorphicCard>
            ))}
          </div>
        </div>

        {/* Signature */}
        <div className="text-center">
          <NeumorphicCard className="px-8 py-6 inline-block">
            <div className="flex flex-col items-center gap-2">
              <p className="font-hand text-2xl" style={{ color: '#ff6b9d' }}>
                Con todo mi amor 💖
              </p>
              <div className="flex items-center gap-3">
                <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #ff6b9d, transparent)' }} />
                <span className="text-sm opacity-60">05 de octubre de 2026</span>
                <div className="w-16 h-px" style={{ background: 'linear-gradient(90deg, transparent, #ff6b9d, transparent)' }} />
              </div>
              <p className="font-display font-medium" style={{ color: '#2d3748' }}>
                Nuestro primer año de los infinitos que vendrán ♾️
              </p>
            </div>
          </NeumorphicCard>
        </div>

        {/* Easter egg */}
        <div className="mt-12 text-center">
          <p className="text-xs opacity-40 font-hand" style={{ color: '#88b5a3' }}>
            P.D. Si encontraste este mensaje, ya ganaste mi corazón hace 365 días 😉
          </p>
        </div>
      </div>
    </footer>
  );
}