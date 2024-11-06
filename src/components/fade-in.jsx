'use client';

// components/ui/FadeIn.js
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useEffect } from 'react';

export default function FadeIn({ children, delay = 0 }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={controls}
      transition={{ duration: 0.6, delay }}
      variants={{
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
        hidden: { opacity: 0, y: 20, filter: 'blur(8px)' }, // Adjust blur value as needed
      }}
    >
      {children}
    </motion.div>
  );
}
