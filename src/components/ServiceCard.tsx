import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckIcon, ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type ServiceCardProps = {
  title: string;
  description: string;
  features: string[];
  icon?: React.ReactNode;
};

const ServiceCard = ({ title, description, features, icon }: ServiceCardProps) => {
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
      className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
    >
      {icon && (
        <div className="h-12 w-12 bg-company-blue/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-company-blue/20 transition-colors duration-300">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold mb-3 text-company-dark group-hover:text-company-blue transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{description}</p>

      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3 text-sm"
            custom={index}
            variants={featureVariants}
          >
            <div className="h-5 w-5 rounded-full bg-company-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckIcon className="h-3 w-3 text-company-blue" />
            </div>
            <p className="text-gray-700">{feature}</p>
          </motion.div>
        ))}
      </div>

      <Button
        className="w-full bg-company-blue hover:bg-company-blue-700 text-white font-medium group-hover:translate-y-[-2px] transition-all duration-300"
        size="sm"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Button>
    </motion.div>
  );
};

export default ServiceCard;
