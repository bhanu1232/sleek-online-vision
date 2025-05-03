
import React from 'react';

type TestimonialCardProps = {
  quote: string;
  author: string;
  position: string;
  company: string;
  imageSrc?: string;
};

const TestimonialCard = ({ quote, author, position, company, imageSrc }: TestimonialCardProps) => {
  return (
    <div className="bg-company-blue/10 p-6 rounded-lg">
      <p className="text-gray-800 mb-6 text-sm">{quote}</p>
      <div className="flex items-center space-x-3">
        <div className="h-10 w-10 bg-gray-300 rounded-full overflow-hidden">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={author} 
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-company-blue text-white">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-medium text-company-dark">{author}</p>
          <p className="text-xs text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
