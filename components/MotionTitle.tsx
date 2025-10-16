'use client';
import { motion } from 'framer-motion';

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: keyof JSX.IntrinsicElements;
};

export default function MotionTitle({ as: Tag = 'h2', className, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <Tag className={className} {...rest}>{children}</Tag>
    </motion.div>
  );
}
