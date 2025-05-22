import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                onClick={scrollToTop}
                className={`bg-gradient-to-b from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-600 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Back to top"
            >
                <ArrowUp className="h-5 w-5" />
            </Button>
        </div>
    );
};

export default BackToTop; 