
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ServiceCardProps = {
  title: string;
  description: string;
  features: string[];
};

const ServiceCard = ({ title, description, features }: ServiceCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: 0.1 + i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardVariants}
      className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm">{description}</p>
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            className="flex items-start gap-2 text-sm"
            custom={index}
            variants={featureVariants}
          >
            <CheckIcon className="h-4 w-4 text-company-blue mt-0.5 flex-shrink-0" />
            <p className="text-gray-700">{feature}</p>
          </motion.div>
        ))}
      </div>
      <Button className="bg-company-blue hover:bg-company-blue-700 text-white w-full" size="sm">
        Learn More
      </Button>
    </motion.div>
  );
};

export default ServiceCard;
