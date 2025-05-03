
import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Main headline */}
          <div className="col-span-1 md:col-span-2 p-6 md:p-12 bg-gray-100 rounded-lg">
            <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Purpose built for you</span>
            <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6">We spend one-third of our life at work.</h1>
          </div>

          {/* Blue box with quote */}
          <div className="col-span-1 bg-company-blue text-white rounded-lg p-6 md:p-8 flex flex-col justify-center relative overflow-hidden grid-pattern">
            <div className="flex space-x-3 items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-white/20"></div>
              <div className="flex-1"></div>
            </div>
            <p className="text-white/90 text-sm mb-4">
              "Our site visitors now convert 3x more frequently since we implemented their recommendations."
            </p>
            <h4 className="font-semibold">Jane Cooper</h4>
          </div>
          
          {/* Bottom left image */}
          <div className="col-span-1 bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Technology" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle image with person */}
          <div className="col-span-1 bg-gray-100 rounded-lg p-4 flex items-end h-64 md:h-auto relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Business professional" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Dark blue stat box */}
          <div className="col-span-1 bg-company-blue text-white rounded-lg p-6 md:p-8 flex flex-col justify-center relative grid-pattern">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">3.2x</h2>
            <p className="text-white/90 text-sm">Average Revenue Growth per Customer / Year</p>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <span className="text-company-blue text-sm uppercase font-medium tracking-wide">About us</span>
            <h2 className="text-3xl md:text-4xl font-semibold my-4">We are at the forefront of technological innovation.</h2>
            <p className="text-gray-600 mb-8">Our team of experts combines creativity and technical expertise to deliver web solutions that not only look stunning but also drive real business results. We're committed to pushing boundaries and setting new standards in web development.</p>
            
            <div className="flex space-x-12">
              <StatCard value="15+" label="Years of Experience" />
              <StatCard value="5000+" label="Satisfied Clients" />
            </div>
          </div>
          
          <div className="relative h-96 lg:h-auto">
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-company-blue-200 z-0"></div>
            <div className="relative z-10 h-full">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Professional on phone" 
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Services</span>
        <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">We spend one-third of our life at work.</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">Our services are designed to maximize your online potential, driving growth and delivering exceptional user experiences that convert visitors into loyal customers.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            title="GoSilence Analytics Platform"
            description="Powerful analytics solution for understanding user behavior and optimizing conversion paths."
            features={[
              "Real-time user tracking",
              "Heat maps for user interaction",
              "Advanced filtering capabilities",
              "Intuitive dashboards"
            ]}
          />
          
          <ServiceCard 
            title="OmniConnect CRM Suite"
            description="Comprehensive customer relationship management system built for modern businesses."
            features={[
              "Full contact management",
              "Sales pipeline tracking",
              "Task management system",
              "Performance analytics"
            ]}
          />
          
          <ServiceCard 
            title="CyberGuard Security Suite"
            description="Enterprise-grade security solutions to protect your digital assets and customer data."
            features={[
              "Penetration testing",
              "Vulnerability scanning",
              "24/7 Security monitoring",
              "Compliance certification"
            ]}
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-80 lg:h-auto">
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-company-blue z-0"></div>
            <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-company-blue-200 z-0"></div>
            <div className="relative z-10 h-full">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                alt="Team collaboration" 
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div>
            <span className="text-company-blue text-sm uppercase font-medium tracking-wide">What we do</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">Driving Your Success Through Innovation and Expertise</h2>
            <p className="text-gray-600 mb-8">Our team of experts is dedicated to helping your business thrive in the digital landscape. We create custom solutions that address your unique challenges and capitalize on opportunities specific to your industry.</p>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                Get Started
              </Button>
              <Button variant="outline" className="border-company-blue text-company-blue hover:bg-company-blue-50">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-1/3">
            <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">Client Success Stories: What Our Partners Say</h2>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <TestimonialCard 
              quote="Working with this team has transformed our online presence. Their strategic approach and technical excellence delivered results far beyond our expectations."
              author="David J."
              position="CEO"
              company="TechVision Inc."
            />
            
            <TestimonialCard 
              quote="Their attention to detail and commitment to understanding our business made them true partners in our success. Would highly recommend to anyone looking for exceptional web services."
              author="Sarah P."
              position="Marketing Director"
              company="Global Solutions"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                We spend one-third of our life at work.
              </h2>
              <Button className="bg-company-blue hover:bg-company-blue-700 text-white self-start">
                Get Started Now
              </Button>
            </div>
            
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                alt="Technology" 
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
