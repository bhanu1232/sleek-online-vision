
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ScrollAnimationProps = {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
};

const ScrollAnimation = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = '',
  once = true,
}: ScrollAnimationProps) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const initial = {
    opacity: 0,
    ...directionMap[direction],
  };

  const animate = {
    opacity: inView ? 1 : 0,
    x: inView ? 0 : directionMap[direction].x,
    y: inView ? 0 : directionMap[direction].y,
    transition: {
      duration: duration,
      delay: delay,
      ease: 'easeOut',
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
