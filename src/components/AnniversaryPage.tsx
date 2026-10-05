import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { timelineData, getTotalMemories } from '../utils/timeline';
import { Hero } from './Hero';
import { TimelineMonth } from './TimelineMonth';
import { Footer } from './Footer';
import { ParticleBackground } from './ParticleBackground';
import { NeumorphicCard } from './NeumorphicCard';

gsap.registerPlugin(ScrollTrigger);

export function AnniversaryPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const main = mainRef.current;
    const progress = progressRef.current;
    if (!main) return;

    const ctx = gsap.context(() => {
      // Scroll progress indicator
      ScrollTrigger.create({
        trigger: main,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const progress = self.progress;
          setScrollProgress(progress);
          if (progressRef.current) {
            progressRef.current.style.width = `${progress * 100}%`;
          }
          setShowScrollBtn(progress > 0.1);
        },
      });

      // Smooth scroll for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(anchor.getAttribute('href')!);
          if (target) {
            gsap.to(window, {
              duration: 1.5,
              scrollTo: { y: target, offsetY: 80 },
              ease: 'power3.inOut',
            });
          }
        });
      });
    }, main);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: 0 },
      ease: 'power3.inOut',
    });
  };

  const scrollToTimeline = () => {
    const timeline = document.getElementById('timeline');
    if (timeline) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: timeline, offsetY: 80 },
        ease: 'power3.inOut',
      });
    }
  };

  const totalMemories = getTotalMemories();

  return (
    <>
      <ParticleBackground />
      
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #ff6b9d, #f7c948, #88b5a3, #b8a9e8)' }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progreso de la página"
      >
        <div
          ref={progressRef}
          className="h-full rounded-r-full"
          style={{
            width: '0%',
            background: 'linear-gradient(90deg, #ff6b9d, #f7c948, #88b5a3, #b8a9e8)',
            boxShadow: '0 0 10px #ff6b9d, 0 0 20px #f7c948',
          }}
        />
      </div>

      <main
        ref={mainRef}
        id="main"
        className="relative z-10"
      >
        <Hero onScrollDown={scrollToTimeline} />

        {/* Timeline section */}
        <section
          id="timeline"
          className="relative py-10 px-4"
          aria-labelledby="timeline-title"
        >
          <div className="max-w-4xl mx-auto">
            {/* Timeline title */}
            <div className="text-center mb-12 relative" id="timeline-title">
              <NeumorphicCard className="px-8 py-4 inline-block">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl" aria-hidden="true">📖</span>
                  <h2 className="font-display font-bold" style={{ color: '#2d3748', fontSize: 'clamp(1.5rem, 5vw, 2rem)' }}>
                    Nuestra Línea del Tiempo
                  </h2>
                  <span className="text-2xl" aria-hidden="true">📖</span>
                </div>
              </NeumorphicCard>
              <p className="mt-4 text-center max-w-xl mx-auto" style={{ color: '#718096' }}>
                {timelineData.length} meses, {totalMemories} recuerdos, un amor infinito.
                Arrastra para viajar en el tiempo ⏳
              </p>
            </div>

            {/* Timeline container */}
            <div className="relative">
              {/* Vertical line background */}
              <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full" style={{
                  background: 'linear-gradient(180deg, #ff6b9d22, #f7c94822, #88b5a322, #b8a9e822, #ff6b9d22)',
                }} />
              </div>

              {timelineData.map((month, index) => (
                <TimelineMonth
                  key={`${month.year}-${month.month}`}
                  month={month}
                  index={index}
                  isLast={index === timelineData.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>

      {/* Scroll to top button */}
      {showScrollBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-neumorph-accent transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, #ff6b9d, #f7c948)',
            boxShadow: '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff, 0 0 20px rgba(255, 107, 157, 0.4)',
          }}
          aria-label="Volver al inicio"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}

      {/* Music toggle (easter egg) */}
      <button
        className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-neumorph transition-all duration-300 hover:scale-110"
        aria-label="Activar/desactivar música ambiental"
        title="Música ambiental 🎵"
      >
        <span className="text-2xl" aria-hidden="true">🎵</span>
      </button>

      {/* Reduce motion indicator */}
      <div className="sr-only" aria-live="polite">
        Página de aniversario de Marcela Dávila. {timelineData.length} meses de recuerdos, {totalMemories} momentos especiales.
      </div>
    </>
  );
}