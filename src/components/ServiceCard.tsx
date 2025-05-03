
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  features: string[];
};

const ServiceCard = ({ title, description, features }: ServiceCardProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg transition-all hover:shadow-md">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 text-sm">{description}</p>
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2 text-sm">
            <CheckIcon className="h-4 w-4 text-company-blue mt-0.5 flex-shrink-0" />
            <p className="text-gray-700">{feature}</p>
          </div>
        ))}
      </div>
      <Button className="bg-company-blue hover:bg-company-blue-700 text-white w-full" size="sm">
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;
