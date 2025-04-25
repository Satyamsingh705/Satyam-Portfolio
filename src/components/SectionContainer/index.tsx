import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
}) => {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;