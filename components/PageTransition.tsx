'use client';
import { AnimatePresence, motion, cubicBezier } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import GoldenWipe from './Wipe';

const easeIn = cubicBezier(0.22, 0.61, 0.36, 1);
const easeOut = cubicBezier(0.4, 0, 1, 1);

const pageVariants: Variants = {
  initial: { opacity: 0, y: 18, filter: 'blur(8px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: easeIn },
  },
  exit: {
    opacity: 0,
    y: -18,
    filter: 'blur(8px)',
    transition: { duration: 0.35, ease: easeOut },
  },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ perspective: 1000 }}
      >
        <GoldenWipe route={pathname} />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
