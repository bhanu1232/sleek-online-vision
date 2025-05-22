
import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowRight, Code, Database, School, ShieldCheck, Rocket, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />

      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col items-center">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-company-dark">Transforming Ideas Into Scalable Web Solutions</h1>
            <p className="text-gray-600 text-lg mb-8">
              Welcome to the future of digital presence. We specialize in crafting high-performance, 
              scalable web applications tailored to your business needs. From sleek portfolio sites 
              to powerful platforms that support thousands of users, we bring your vision to life through technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-company-blue hover:bg-company-blue-700 text-white px-8 py-3 text-base">
                  Get Started
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" className="border-company-blue text-company-blue hover:bg-company-blue-50 px-8 py-3 text-base">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-company-blue text-sm uppercase font-semibold tracking-wide">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-company-dark">Who We Are</h2>
              <p className="text-gray-600 text-lg">
                We are a cutting-edge web solutions startup founded by Chowdam Bhanu Prakash, 
                a seasoned full stack developer with over two years of experience building 
                scalable, robust web applications using React, Next.js, Firebase, Node.js, and more.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="relative h-96 lg:h-auto">
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-company-blue-200 z-0"></div>
                <div className="relative z-10 h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="Developer working" 
                    className="h-full w-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right" delay={0.2}>
              <div>
                <p className="text-gray-600 mb-6">
                  With a portfolio that includes solutions for educational institutions, 
                  fitness professionals, and event management platforms, we pride ourselves 
                  on delivering digital excellence.
                </p>
                
                <h3 className="text-xl font-bold mb-4 text-company-dark">Our Mission</h3>
                <p className="text-gray-600 mb-8">
                  To empower businesses, educators, and entrepreneurs with innovative digital 
                  solutions that drive engagement, efficiency, and growth.
                </p>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <Link to="/about">
                    <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                      Learn More About Us
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-company-blue text-sm uppercase font-semibold tracking-wide">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-company-dark">What We Offer</h2>
            <p className="text-gray-600 text-lg">
              We provide comprehensive web solutions tailored to your specific needs,
              from custom development to scalable systems.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ScrollAnimation delay={0.1}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-company-blue/10 rounded-full flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-company-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-dark">Custom Web Development</h3>
              <p className="text-gray-600 mb-4">
                We build blazing-fast websites and web apps using modern frameworks like React, 
                Next.js, and Node.js.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.2}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-company-blue/10 rounded-full flex items-center justify-center mb-6">
                <Database className="h-6 w-6 text-company-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-dark">Scalable Backend Systems</h3>
              <p className="text-gray-600 mb-4">
                Whether it's Firebase, MongoDB, or SQL-based architecture, we ensure your backend 
                can grow with you.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.3}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-company-blue/10 rounded-full flex items-center justify-center mb-6">
                <School className="h-6 w-6 text-company-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-dark">School/Institution Portals</h3>
              <p className="text-gray-600 mb-4">
                From attendance and events to results and communication—our education portals 
                handle it all.
              </p>
            </div>
          </ScrollAnimation>
          
          <Link to="/services" className="md:col-span-2 lg:col-span-3 text-center mt-8">
            <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-company-blue text-sm uppercase font-semibold tracking-wide">Portfolio</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-company-dark">Our Work</h2>
              <p className="text-gray-600 text-lg">
                Take a look at some of the projects we've built that deliver real results for our clients.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation direction="left">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-52 overflow-hidden rounded-md mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1581092335397-9fa62be26dae" 
                    alt="Kalyan Battersetty website" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-company-dark">kalyanbattersetty.com</h3>
                <p className="text-gray-600 mb-4">
                  Built for a gym trainer to manage a growing user base of 30k+ users, this platform 
                  offers real-time interactions, bookings, and responsive UI. Powered by React + Firebase.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-52 overflow-hidden rounded-md mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1501504905252-473c47e087f8" 
                    alt="JCRS Eduvalley School website" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-company-dark">jcrseduvalleyschool.com</h3>
                <p className="text-gray-600 mb-4">
                  A robust school website that boosted engagement by 40% with seamless UI, content 
                  management, and updates. Developed using React and Firebase.
                </p>
              </div>
            </ScrollAnimation>
            
            <Link to="/portfolio" className="md:col-span-2 text-center mt-6">
              <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-company-blue text-sm uppercase font-semibold tracking-wide">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-company-dark">Our Advantages</h2>
            <p className="text-gray-600 text-lg">
              We combine technical expertise with a client-focused approach to deliver solutions 
              that exceed expectations.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScrollAnimation delay={0.1}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-company-blue/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-company-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-dark">Performance-First Designs</h3>
              <p className="text-gray-600">
                We optimize every aspect of your web application for maximum speed and responsiveness.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.2}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-company-blue/10 rounded-full flex items-center justify-center mb-6">
                <Rocket className="h-6 w-6 text-company-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-dark">Scalable Architecture</h3>
              <p className="text-gray-600">
                Our solutions are built to grow with your business, handling increased traffic and features.
              </p>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.3}>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-company-blue/10 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-company-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-company-dark">Secure & Reliable Code</h3>
              <p className="text-gray-600">
                We implement best practices for security and reliability in every project we build.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-company-blue text-sm uppercase font-semibold tracking-wide">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-company-dark">What Our Clients Say</h2>
              <p className="text-gray-600 text-lg">
                Our clients' success is our success. Here's what they have to say about working with us.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollAnimation delay={0.1}>
              <TestimonialCard 
                quote="Bhanuprakash's team delivered a seamless experience for our gym website—lightweight, fast, and scalable."
                author="Kalyan Battersetty"
                position="Fitness Trainer"
              />
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <TestimonialCard 
                quote="We saw a 40% jump in parent and student interaction post-launch. Truly a game-changer."
                author="JCRS Eduvalley School"
                position="Administration"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <div className="bg-company-blue rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Together</h2>
            <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto">
              Have an idea? A vision? A digital dream? Let's bring it to life. 
              Get in touch today for a free consultation.
            </p>
            <Link to="/contact">
              <Button className="bg-white text-company-blue hover:bg-gray-100 px-8 py-3 text-base">
                Get in Touch
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
