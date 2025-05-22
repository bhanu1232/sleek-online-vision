
import React from 'react';

type TestimonialCardProps = {
  quote: string;
  author: string;
  position: string;
  company?: string;
  imageSrc?: string;
};

const TestimonialCard = ({ quote, author, position, company, imageSrc }: TestimonialCardProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <p className="text-gray-800 mb-6 text-base leading-relaxed italic">{quote}</p>
      <div className="flex items-center space-x-3">
        <div className="h-12 w-12 bg-gray-300 rounded-full overflow-hidden">
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={author} 
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-company-blue text-white font-medium">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-semibold text-company-dark">{author}</p>
          <p className="text-sm text-gray-600">{position}{company && `, ${company}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
