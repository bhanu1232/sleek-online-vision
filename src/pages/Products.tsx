import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import BackToTop from "@/components/BackToTop";
import { ArrowRight, CheckCircle, Star, Shield, Zap, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, imageSrc, features, price }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
          <Link to="/contact">
            <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold px-6 py-3 rounded-full transition-all duration-300">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
          <span className="text-lg font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full">{price}</span>
        </div>
        <p className="text-gray-600 mb-6 line-clamp-2">{description}</p>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-blue-600" />
              </div>
              <p className="text-gray-700 text-sm">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const websiteProducts = [
    {
      title: "Business Essential",
      description: "A professional website perfect for small to medium businesses looking to establish an online presence.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      features: [
        "5-7 Pages",
        "Mobile Responsive",
        "Contact Form",
        "SEO Basics"
      ],
      price: "Starting at $1,499"
    },
    {
      title: "E-Commerce Standard",
      description: "A complete online store solution with everything you need to start selling products online.",
      imageSrc: "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
      features: [
        "Product Catalog",
        "Secure Checkout",
        "Inventory Management",
        "Payment Processing"
      ],
      price: "Starting at $2,499"
    },
    {
      title: "Premium Brand Experience",
      description: "A fully customized website with advanced features and animations for established brands.",
      imageSrc: "https://images.unsplash.com/photo-1547658719-da2b51169166",
      features: [
        "Custom Design",
        "Advanced Animations",
        "Content Management",
        "Analytics Integration"
      ],
      price: "Starting at $3,999"
    },
    {
      title: "Service Professional",
      description: "Ideal for service-based businesses needing to showcase their expertise and generate leads.",
      imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      features: [
        "Portfolio Display",
        "Testimonial System",
        "Appointment Booking",
        "Lead Generation Forms"
      ],
      price: "Starting at $1,999"
    },
    {
      title: "Restaurant & Cafe",
      description: "Specialized website for restaurants, cafes and food businesses with menu and ordering capabilities.",
      imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      features: [
        "Menu Display",
        "Reservation System",
        "Location Map",
        "Mobile Ordering Option"
      ],
      price: "Starting at $1,799"
    },
    {
      title: "Real Estate Pro",
      description: "Comprehensive website solution for real estate agents and property management companies.",
      imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      features: [
        "Property Listings",
        "Virtual Tours",
        "Search Functionality",
        "Lead Capture Forms"
      ],
      price: "Starting at $2,299"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Products Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <ScrollAnimation direction="down">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Our Products
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="down" delay={0.2}>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto opacity-90">
              Discover our range of website solutions tailored for your industry
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="down" delay={0.4}>
            <Link to="/contact">
              <Button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">OUR SOLUTIONS</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                Website Solutions for Every Business
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Choose from our range of pre-built solutions or get a custom website tailored to your specific needs.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteProducts.map((product, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <ProductCard
                  title={product.title}
                  description={product.description}
                  imageSrc={product.imageSrc}
                  features={product.features}
                  price={product.price}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="pr-8">
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">WHY CHOOSE US</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                  Excellence in Every Project
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We combine technical expertise with industry best practices to deliver exceptional results for every client.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Star className="h-6 w-6 text-blue-600" />,
                      title: "Premium Quality",
                      description: "High-quality code and design that sets you apart"
                    },
                    {
                      icon: <Shield className="h-6 w-6 text-purple-600" />,
                      title: "Secure & Reliable",
                      description: "Enterprise-grade security and 99.9% uptime"
                    },
                    {
                      icon: <Zap className="h-6 w-6 text-teal-600" />,
                      title: "Fast Performance",
                      description: "Optimized for speed and excellent user experience"
                    },
                    {
                      icon: <Clock className="h-6 w-6 text-orange-600" />,
                      title: "Quick Delivery",
                      description: "Efficient development process without compromising quality"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Our Process"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimation>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Contact us today for a free consultation. Remember, you only pay after your website is fully completed and live.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                    Get a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold text-lg px-8 py-6 h-auto rounded-full transition-all duration-300">
                    View Services
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <BackToTop />
    </div>
  );
};

export default Products;
