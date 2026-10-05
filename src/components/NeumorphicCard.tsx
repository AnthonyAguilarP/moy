import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface NeumorphicCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  pressed?: boolean;
  hoverScale?: number;
  glow?: boolean;
  style?: React.CSSProperties;
}

export function NeumorphicCard({
  children,
  className = '',
  onClick,
  pressed = false,
  hoverScale = 1.02,
  glow = false,
  style,
}: NeumorphicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      isHovered.current = true;
      gsap.to(card, {
        scale: hoverScale,
        y: -4,
        boxShadow: glow
          ? '16px 16px 32px #a3b1c6, -16px -16px 32px #ffffff, 0 0 30px rgba(255, 107, 157, 0.4)'
          : '16px 16px 32px #a3b1c6, -16px -16px 32px #ffffff',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      isHovered.current = false;
      gsap.to(card, {
        scale: 1,
        y: 0,
        boxShadow: pressed
          ? 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff'
          : '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
        duration: 0.4,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    const handleMouseDown = () => {
      gsap.to(card, {
        scale: 0.98,
        boxShadow: 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff',
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    const handleMouseUp = () => {
      if (isHovered.current) {
        handleMouseEnter();
      } else {
        handleMouseLeave();
      }
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    card.addEventListener('mousedown', handleMouseDown);
    card.addEventListener('mouseup', handleMouseUp);
    card.addEventListener('touchstart', handleMouseDown, { passive: true });
    card.addEventListener('touchend', handleMouseUp, { passive: true });

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      card.removeEventListener('mousedown', handleMouseDown);
      card.removeEventListener('mouseup', handleMouseUp);
      card.removeEventListener('touchstart', handleMouseDown);
      card.removeEventListener('touchend', handleMouseUp);
    };
  }, [hoverScale, glow, pressed]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (pressed) {
      gsap.set(card, {
        boxShadow: 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff',
        scale: 0.99,
      });
    }
  }, [pressed]);

  return (
    <div
      ref={cardRef}
      className={`bg-neumorph-bg rounded-[24px] transition-all duration-300 cursor-pointer select-none ${className}`}
      style={{
        boxShadow: pressed
          ? 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff'
          : '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
        ...style,
      }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {children}
    </div>
  );
}