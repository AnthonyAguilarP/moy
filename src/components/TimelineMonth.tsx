import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { TimelineMonth as TimelineMonthData } from '../utils/timeline';
import { MemoryCard } from './MemoryCard';
import { NeumorphicCard } from './NeumorphicCard';

gsap.registerPlugin(ScrollTrigger);

interface TimelineMonthProps {
  month: TimelineMonthData;
  index: number;
  isLast?: boolean;
}

export function TimelineMonth({ month, index, isLast = false }: TimelineMonthProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    const dot = dotRef.current;
    const header = headerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        line,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.3,
        }
      );

      gsap.fromTo(
        dot,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.8,
        }
      );

      gsap.to(dot, {
        scale: 1.3,
        boxShadow: `0 0 20px ${month.color}, 0 0 40px ${month.color}88`,
        duration: 2,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      });

      gsap.to(header, {
        y: -10,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, container);

    return () => ctx.revert();
  }, [index, month.color]);

  const isCurrentMonth = month.month === 10 && month.year === 2026;

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center"
      style={{ minHeight: 'auto' }}
    >
      <div
        ref={lineRef}
        className="absolute left-1/2 top-0 -translate-x-1/2 w-1"
        style={{
          height: isLast ? '0' : 'calc(100% + 2rem)',
          background: `linear-gradient(180deg, ${month.color}00, ${month.color}44, ${month.color}00)`,
        }}
      />

      <div
        ref={headerRef}
        className="relative z-10 w-full max-w-sm mx-auto mb-6"
      >
        <NeumorphicCard
          className="p-4 text-center relative overflow-hidden"
          glow={isCurrentMonth}
          style={{
            background: `linear-gradient(135deg, ${month.color}11, ${month.color}22)`,
            border: `1px solid ${month.color}33`,
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl" aria-hidden="true">{month.icon}</span>
            <div className="text-left">
              <p className="font-display font-bold text-lg" style={{ color: month.color }}>
                {month.label}
              </p>
              <p className="text-xs opacity-60" style={{ color: month.color }}>
                {month.memories.length} recuerdo{month.memories.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          
          {isCurrentMonth && (
            <div className="absolute inset-0 bg-gradient-to-r from-neumorph-accent/10 via-transparent to-neumorph-gold/10 animate-shimmer pointer-events-none" />
          )}
          
          <div className="flex items-center justify-center gap-2 mt-3">
            {month.memories.map((m, i) => (
              <div
                key={m.id}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: m.type === 'milestone' ? month.color : `${month.color}88`,
                  transform: m.type === 'milestone' ? 'scale(1.3)' : 'scale(1)',
                }}
                title={`${m.title} - ${getTypeLabel(m.type)}`}
              />
            ))}
          </div>
        </NeumorphicCard>
      </div>

      <div
        ref={dotRef}
        className="absolute left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full flex items-center justify-center"
        style={{
          top: 'calc(100% - 2.5rem)',
          background: month.gradient,
          boxShadow: `0 0 0 4px #e0e5ec, 0 0 20px ${month.color}88`,
        }}
        aria-hidden="true"
      >
        <span className="text-xs" style={{ transform: 'scale(0.7)' }}>{month.icon}</span>
      </div>

      <div className="relative z-10 w-full px-4 pb-8">
        <div className="space-y-6">
          {month.memories.map((memory, i) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              index={i}
              monthColor={month.color}
              monthGradient={month.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function getTypeLabel(type: string): string {
  switch (type) {
    case 'photo': return 'Foto';
    case 'note': return 'Nota';
    case 'milestone': return 'Hito';
    case 'surprise': return 'Sorpresa';
    default: return 'Recuerdo';
  }
}