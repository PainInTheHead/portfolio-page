import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from 'gsap';

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  triggerOffset?: number;
  delay?: number;
  onComplete?: () => void;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  scale = 1.1,
  delay = 0.3,
  distance = 500,
  threshold = 0,
  triggerOffset = 100,
  duration = 0.8,
  reverse = false,
  initialOpacity = 0,
  ease = "power3.out",
  animateOpacity = true,
  direction = 'horizontal',
  onComplete
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === 'horizontal' ? 'x' : 'y';
    const offset = reverse ? -distance : distance;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: 'hidden'
    });

    // Формируем rootMargin: сдвигаем "нижнюю границу" вверх на triggerOffset
    const rootMargin = `0px 0px -${triggerOffset}px 0px`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(el, {
            [axis]: 0,
            scale: 1,
            opacity: 1,
            visibility: 'visible',
            duration,
            ease,
            delay,
            onComplete
          });
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(el);
    };
  }, [
    distance, direction, reverse, duration, ease,
    initialOpacity, animateOpacity, scale, threshold, triggerOffset, delay, onComplete
  ]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedContent;