'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: keyof React.JSX.IntrinsicElements;
};

export default function MotionTitle({
  as: Tag = 'h2',
  className,
  children,
  ...rest
}: Props) {
  const Component = Tag as keyof React.JSX.IntrinsicElements;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.6 }}
    >
      {React.createElement(Component, { className, ...rest }, children)}
    </motion.div>
  );
}
