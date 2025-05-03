
import React from 'react';

type StatCardProps = {
  value: string;
  label: string;
};

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="flex flex-col items-start">
      <p className="text-4xl font-bold text-company-dark">{value}</p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;
