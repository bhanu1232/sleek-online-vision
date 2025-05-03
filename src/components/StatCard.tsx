
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type StatCardProps = {
  value: string;
  label: string;
};

const StatCard = ({ value, label }: StatCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="flex flex-col items-start"
    >
      <p className="text-4xl font-bold text-company-dark">{value}</p>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

export default StatCard;
