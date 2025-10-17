'use client';
import React from 'react';
import { motion } from 'framer-motion';

// États d'animation
const titleTransition = {
  type: 'spring',
  stiffness: 240,
  damping: 18,
  mass: 0.4,
};
const titleHover = {
  initial: {
    y: 0,
    textShadow: 'none',
    filter: 'none',
    boxShadow: '0 0 0 rgba(0,0,0,0)',
  },
  whileHover: {
    y: -2,
    textShadow: '0 0 14px rgba(245,190,60,.15)',
    filter: 'brightness(1.03)',
    boxShadow: '0 0 0 1px rgba(245,190,60,.10)',
  },
};

// Transition séparée

type MotionTitleProps = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
};

export default function MotionTitle({
  as: Tag = 'h2',
  className = '',
  children,
}: MotionTitleProps) {
  const Component = Tag as keyof React.JSX.IntrinsicElements;

  return (
    <motion.div
      initial={titleHover.initial}
      whileHover={titleHover.whileHover}
      className="inline-block rounded-lg"
    >
      {React.createElement(Component, { className }, children)}
    </motion.div>
  );
}
