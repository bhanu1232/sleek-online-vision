
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Link } from "react-router-dom";

const ProductCard = ({ title, description, imageSrc, features, price }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-company-blue">✓</span>
              <p className="text-sm text-gray-700">{feature}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-company-blue">{price}</span>
          <Link to="/contact">
            <Button variant="outline" size="sm" className="border-company-blue text-company-blue hover:bg-company-blue-50">
              Learn More
            </Button>
          </Link>
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
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Products</span>
              <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6">Website solutions tailored for your industry</h1>
              <p className="text-gray-600 mb-8">Discover our range of website products designed to meet the specific needs of different businesses and industries. Each solution is customizable to match your brand and requirements.</p>
              <Link to="/contact">
                <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websiteProducts.map((product, index) => (
            <ScrollAnimation key={index} delay={0.05 * index}>
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
      </section>

      {/* Custom Solution Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="relative h-96 lg:h-auto">
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-company-blue-200 z-0"></div>
                <div className="relative z-10 h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                    alt="Custom web development" 
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right" delay={0.2}>
              <div>
                <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Custom Solutions</span>
                <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">Need something more specific?</h2>
                <p className="text-gray-600 mb-6">Don't see exactly what you need? We specialize in creating custom website solutions tailored to your unique business requirements. Our team will work closely with you to understand your goals and build a website that perfectly aligns with your vision.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-company-blue font-bold">✓</span>
                    <p className="text-gray-700">Fully customized design and functionality</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-company-blue font-bold">✓</span>
                    <p className="text-gray-700">Unique features specific to your business needs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-company-blue font-bold">✓</span>
                    <p className="text-gray-700">Scalable solution that grows with your business</p>
                  </div>
                </div>
                
                <Link to="/contact">
                  <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                    Discuss Your Project
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">What our clients say</h2>
            <p className="text-gray-600">Hear from businesses that have transformed their online presence with our website solutions.</p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: "The e-commerce website they built increased our online sales by 200% in just three months.",
              author: "Robert K.",
              company: "Fashion Boutique Owner"
            },
            {
              quote: "Our new website perfectly captures our brand identity and has significantly improved user engagement.",
              author: "Lisa M.",
              company: "Marketing Director"
            },
            {
              quote: "The booking system they integrated into our restaurant website has streamlined our reservations process.",
              author: "James P.",
              company: "Restaurant Owner"
            }
          ].map((testimonial, index) => (
            <ScrollAnimation key={index} delay={0.1 * index}>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-800 mb-6 text-sm italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-medium text-company-dark">{testimonial.author}</p>
                  <p className="text-xs text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-company-blue py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to get started with your project?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">Contact us today for a free consultation. Remember, you only pay after your website is fully completed and live.</p>
            <Link to="/contact">
              <Button className="bg-white text-company-blue hover:bg-gray-100">
                Get a Free Consultation
              </Button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
