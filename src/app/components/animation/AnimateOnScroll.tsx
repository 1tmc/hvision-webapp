// components/animation/AnimateOnScroll.tsx

'use client'; 

import { motion, HTMLMotionProps, Variants } from 'framer-motion';
import { ReactNode } from 'react'; 

// 1. Define the props interface and export it
export interface AnimateOnScrollProps extends HTMLMotionProps<'div'> {
  /** The content to be wrapped and animated. */
  children: ReactNode; 
  
  /** Optional classes to be applied to the animated div. */
  className?: string; 
  
  /** Optional delay in seconds for the animation. */
  delay?: number;
}

// 2. Define the variants and explicitly apply the 'Variants' type
const variants: Variants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 1, 
      ease: 'easeOut' // Standard string easing is accepted here
    } 
  },
};

// 3. Define the component function and apply the interface for prop typing
export default function AnimateOnScroll({ children, className, delay = 0 }: AnimateOnScrollProps) {

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible" 
      // viewport is essential for triggering the animation when scrolled into view
      viewport={{ 
        once: true, // Animation only plays the first time it enters the viewport
        amount: 0.4 // Starts when 40% of the element is visible
      }} 
      // Apply the delay to the transition
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}