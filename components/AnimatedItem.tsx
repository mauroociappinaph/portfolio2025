import React, { useRef, useEffect, useState } from 'react';

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  as?: React.ElementType;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, className, delay = 0, as: Component = 'div' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationActive, setAnimationActive] = useState(true);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        rootMargin: '0px 0px -10% 0px', // Trigger when 10% from bottom is visible
        threshold: 0
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationDuration = 600; // Corresponds to 0.6s animation

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimationActive(false);
      }, delay + animationDuration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);


  return (
    <Component
      ref={ref}
      className={`${className || ''} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${animationActive ? 'pointer-events-none' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
};

export default AnimatedItem;