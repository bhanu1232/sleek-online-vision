import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './index.css';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { StrictMode } from "react";

const queryClient = new QueryClient();

// ScrollToTop component - scrolls to top when route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Preload critical resources
        await Promise.all([
          // Add any critical resources that need to be preloaded
          new Promise(resolve => setTimeout(resolve, 1000)), // Minimum loading time
        ]);

        setIsInitialized(true);
      } catch (error) {
        console.error('Error initializing app:', error);
        setIsInitialized(true); // Still set to true to prevent infinite loading
      }
    };

    initializeApp();
  }, []);

  useEffect(() => {
    if (isInitialized) {
      // Add a small delay before hiding the loading screen
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Add a small delay before showing the page content
        setTimeout(() => {
          setIsPageLoaded(true);
        }, 100);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isInitialized]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router>
            <div className="min-h-screen flex flex-col bg-gray-50">
              <Navbar />
              <main className="flex-grow pt-16">
                <ScrollToTop />
                <Toaster />
                <Sonner />
                <div className={`page-transition ${isPageLoaded ? 'loaded' : ''}`}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </main>
              <Footer />
            </div>
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
