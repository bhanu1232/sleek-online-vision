
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div 
      className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-md w-full text-center bg-white p-8 sm:p-12 rounded-2xl shadow-lg">
        <div className="relative inline-block">
          <div className="text-9xl font-bold text-gray-200">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-company-blue-500 to-company-blue-700">404</div>
          </div>
        </div>
        
        <h1 className="mt-6 text-2xl font-medium text-gray-900">Page not found</h1>
        <p className="mt-3 text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
        
        <Link to="/" className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-company-blue-500 to-company-blue-700 hover:from-company-blue-600 hover:to-company-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-company-blue-500 transition-all duration-300 group">
          <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          Go back home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
