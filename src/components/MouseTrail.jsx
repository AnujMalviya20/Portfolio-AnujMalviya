import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MouseTrail = () => {
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);

  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  // Adjust to center the orb on the cursor
  const x = useTransform(smoothX, (latest) => latest - 300);
  const y = useTransform(smoothY, (latest) => latest - 300);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-0"
      style={{
        x,
        y,
        width: 600,
        height: 600,
        background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, rgba(124,58,237,0) 70%)',
        borderRadius: '50%',
      }}
    />
  );
};

export default MouseTrail;
