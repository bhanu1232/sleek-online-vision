
import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900">
            <div className="relative text-center">
                {/* Logo */}
                <div className="h-14 w-14 sm:h-16 sm:w-16 mx-auto bg-gradient-to-br from-company-blue-400 to-company-blue-600 rounded-xl shadow-lg shadow-company-blue-500/20 animate-pulse"></div>

                {/* Loading text */}
                <div className="mt-4">
                    <h2 className="text-xl font-medium text-white">Sleek Vision</h2>
                    <div className="mt-2 flex items-center justify-center space-x-2">
                        <div className="h-2 w-2 bg-company-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="h-2 w-2 bg-company-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="h-2 w-2 bg-company-blue-400 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
