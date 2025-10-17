'use client';
import { motion } from 'framer-motion';

export default function GoldenWipe({ route = '' }: { route?: string }) {
  return (
    <motion.div
      key={`wipe-${route}`}
      initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
      animate={{
        clipPath: 'inset(0 0% 0 0)',
        opacity: 1,
        transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
      }}
      exit={{
        clipPath: 'inset(0 0% 0 100%)',
        opacity: 1,
        transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
      }}
      className="fixed inset-0 pointer-events-none"
      style={{
        background:
          'linear-gradient(100deg, rgba(245,190,60,0.00) 0%, rgba(245,190,60,0.06) 35%, rgba(253,224,71,0.08) 50%, rgba(245,190,60,0.06) 65%, rgba(245,190,60,0.00) 100%)',
        mixBlendMode: 'screen',
        zIndex: 35,
      }}
    />
  );
}
