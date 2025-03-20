
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  threshold?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  once = true,
  delay = 0,
  threshold = 0.1
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!textRef.current) return;
    
    if (once && hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (textRef.current) {
                textRef.current.style.opacity = '1';
                textRef.current.style.transform = 'translateY(0)';
                hasAnimated.current = true;
              }
            }, delay);
            
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            if (textRef.current) {
              textRef.current.style.opacity = '0';
              textRef.current.style.transform = 'translateY(20px)';
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
    };
  }, [once, delay, threshold]);

  return (
    <span
      ref={textRef}
      className={cn("inline-block transition-all duration-700 opacity-0 transform translate-y-[20px]", className)}
    >
      {text}
    </span>
  );
};

export default AnimatedText;
