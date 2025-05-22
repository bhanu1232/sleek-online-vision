import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
            <div className="relative">
                {/* Logo */}
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg shadow-blue-500/20 animate-pulse"></div>

                {/* Loading text */}
                <div className="mt-4 text-center">
                    <h2 className="text-xl font-light text-gray-800">Sleek Vision</h2>
                    <div className="mt-2 flex items-center justify-center space-x-2">
                        <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen; 