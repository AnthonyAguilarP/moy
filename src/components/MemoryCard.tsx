import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { Memory } from '../utils/timeline';
import { NeumorphicCard } from './NeumorphicCard';

gsap.registerPlugin(ScrollTrigger);

interface MemoryCardProps {
  memory: Memory;
  index: number;
  monthColor: string;
  monthGradient: string;
}

export function MemoryCard({ memory, index, monthColor, monthGradient }: MemoryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    const img = imageRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      { opacity: 0, y: 60, rotateY: memory.position === 'left' ? -15 : memory.position === 'right' ? 15 : 0 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        delay: index * 0.15,
      }
    );

    // Parallax on scroll
    gsap.to(card, {
      y: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === card) st.kill();
      });
    };
  }, [index, memory.position]);

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(true);
  };

  const handleCloseExpanded = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  const getTypeIcon = () => {
    switch (memory.type) {
      case 'photo': return '📸';
      case 'note': return '💌';
      case 'milestone': return '⭐';
      case 'surprise': return '🎁';
      default: return '✨';
    }
  };

  const getTypeLabel = () => {
    switch (memory.type) {
      case 'photo': return 'Foto';
      case 'note': return 'Nota';
      case 'milestone': return 'Hito';
      case 'surprise': return 'Sorpresa';
      default: return 'Recuerdo';
    }
  };

  return (
    <>
      <NeumorphicCard
        ref={cardRef}
        className={`relative overflow-hidden p-6 ${
          memory.position === 'left' ? 'ml-auto mr-4 max-w-[85%]' :
          memory.position === 'right' ? 'mr-auto ml-4 max-w-[85%]' :
          'mx-auto max-w-[90%]'
        }`}
        style={{
          borderLeft: memory.position === 'center' ? `4px solid ${monthColor}` : 'none',
          borderRight: memory.position === 'center' ? `4px solid ${monthColor}` : 'none',
        }}
        glow={memory.type === 'milestone'}
      >
        {/* Type badge */}
        <div
          className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium"
          style={{
            background: `linear-gradient(135deg, ${monthColor}22, ${monthColor}44)`,
            color: monthColor,
            border: `1px solid ${monthColor}44`,
          }}
        >
          <span>{getTypeIcon()}</span>
          <span>{getTypeLabel()}</span>
        </div>

        {/* Date */}
        <div
          className="mb-3 text-xs font-medium tracking-wider"
          style={{ color: monthColor }}
        >
          {memory.date}
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-semibold mb-3" style={{ color: '#2d3748' }}>
          {memory.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: '0.95rem' }}>
          {memory.description}
        </p>

        {/* Image placeholder/area */}
        {memory.image && (
          <div
            ref={imageRef}
            className="relative overflow-hidden rounded-[16px] mb-4 cursor-pointer"
            style={{
              aspectRatio: '16/10',
              background: `linear-gradient(135deg, ${monthColor}11, ${monthColor}22)`,
              border: `1px dashed ${monthColor}44`,
            }}
            onClick={handleImageClick}
          >
            {!imageLoaded ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-4" style={{ color: monthColor }}>
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-sm">Toca para agregar foto</p>
                  <p className="text-xs mt-1 opacity-60">{memory.image}</p>
                </div>
              </div>
            ) : (
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-white text-sm font-medium">Ver en grande</span>
            </div>
          </div>
        )}

        {/* Quote */}
        {memory.quote && (
          <div
            className="relative pl-4 border-l-2 italic text-sm leading-relaxed"
            style={{
              borderColor: monthColor,
              color: '#4a5568',
              background: `linear-gradient(90deg, ${monthColor}11, transparent)`,
              paddingLeft: '1rem',
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
              borderRadius: '0 12px 12px 0',
            }}
          >
            <span className="text-xl opacity-50" style={{ color: monthColor }}>"</span>
            {memory.quote}
            <span className="text-xl opacity-50" style={{ color: monthColor }}>"</span>
          </div>
        )}

        {/* Decorative corner */}
        <div
          className="absolute bottom-0 right-0 w-12 h-12 opacity-10 pointer-events-none"
          style={{
            background: monthGradient,
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
          }}
        />
      </NeumorphicCard>

      {/* Expanded image modal */}
      {isExpanded && memory.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleCloseExpanded}
          role="dialog"
          aria-modal="true"
          aria-label={`Imagen ampliada: ${memory.title}`}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] rounded-[20px] overflow-hidden"
            style={{
              boxShadow: '0 0 0 1px rgba(255,255,255,0.1), 0 25px 50px -12px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseExpanded}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white"
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
              aria-label="Cerrar imagen"
            >
              ✕
            </button>
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-auto"
              style={{ maxHeight: '85vh' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
              <p className="font-display font-medium">{memory.title}</p>
              <p className="text-sm opacity-75 mt-1">{memory.date}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}