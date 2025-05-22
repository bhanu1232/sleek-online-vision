
import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowRight, Rocket, Award, ShieldCheck, Clock, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Main headline */}
          <ScrollAnimation direction="left" className="col-span-1 md:col-span-2 p-6 md:p-12 bg-gray-100 rounded-lg">
            <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Professional Web Development</span>
            <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6">Creating stunning, high-performance websites for commercial businesses</h1>
            <p className="text-gray-600 mb-4">We bring together cutting-edge design, smooth animations, and flawless user experiences to help your business grow online.</p>
          </ScrollAnimation>

          {/* Blue box with quote */}
          <ScrollAnimation direction="down" delay={0.2} className="col-span-1 bg-company-blue text-white rounded-lg p-6 md:p-8 flex flex-col justify-center relative overflow-hidden grid-pattern">
            <div className="flex space-x-3 items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-white/20"></div>
              <div className="flex-1"></div>
            </div>
            <p className="text-white/90 text-sm mb-4">
              "You only pay after your website is fully completed and live, ensuring you have complete confidence in the final result."
            </p>
            <h4 className="font-semibold">Our Promise</h4>
          </ScrollAnimation>
          
          {/* Bottom left image */}
          <ScrollAnimation direction="left" delay={0.3} className="col-span-1 bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Technology" 
              className="w-full h-full object-cover"
            />
          </ScrollAnimation>

          {/* Middle image with person */}
          <ScrollAnimation direction="up" delay={0.4} className="col-span-1 bg-gray-100 rounded-lg p-4 flex items-end h-64 md:h-auto relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Business professional" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </ScrollAnimation>

          {/* Dark blue stat box */}
          <ScrollAnimation direction="right" delay={0.5} className="col-span-1 bg-company-blue text-white rounded-lg p-6 md:p-8 flex flex-col justify-center relative grid-pattern">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">100%</h2>
            <p className="text-white/90 text-sm">Satisfaction Guarantee - Pay only when you're satisfied</p>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ScrollAnimation direction="left">
            <div>
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">About us</span>
              <h2 className="text-3xl md:text-4xl font-semibold my-4">Understanding your business goals and crafting digital solutions</h2>
              <p className="text-gray-600 mb-8">At our company, we take pride in understanding your business goals and crafting a digital solution that matches your brand, speaks to your audience, and drives real results. Our custom development services focus on building responsive, scalable websites that work perfectly across devices.</p>
              
              <div className="flex space-x-12">
                <StatCard value="100%" label="Client Satisfaction" />
                <StatCard value="0" label="Upfront Fees" />
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="right" delay={0.2}>
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
          </ScrollAnimation>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <ScrollAnimation>
          <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">Comprehensive web solutions for your business</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">From custom website development and eye-catching UI/UX design to seamless deployment and long-term maintenance, our team is dedicated to bringing your digital vision to life.</p>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            title="Custom Website Development"
            description="We build responsive, scalable websites that work perfectly across all devices and platforms."
            features={[
              "Responsive design",
              "Cross-browser compatibility",
              "Fast loading times",
              "SEO-friendly structure"
            ]}
          />
          
          <ServiceCard 
            title="UI/UX Design"
            description="Our design team adds the creative touch with modern visuals and smooth, engaging animations."
            features={[
              "Modern aesthetics",
              "Intuitive navigation",
              "Eye-catching animations",
              "Brand-aligned visuals"
            ]}
          />
          
          <ServiceCard 
            title="E-Commerce Solutions"
            description="Set up a fully functional online store with a smooth checkout experience to reach more customers."
            features={[
              "Secure payment processing",
              "Inventory management",
              "Mobile-friendly shopping",
              "Customer account features"
            ]}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">How it all works</h2>
              <p className="text-gray-600">We make the process simple, transparent, and effective to deliver websites that exceed your expectations.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01", 
                title: "Free Consultation", 
                description: "We start with understanding your needs and business goals.",
                icon: <Users className="h-6 w-6 text-company-blue mb-2" />
              },
              {
                step: "02", 
                title: "Design & Development", 
                description: "Our team brings your website vision to life with precision.",
                icon: <Rocket className="h-6 w-6 text-company-blue mb-2" />
              },
              {
                step: "03", 
                title: "Review & Revisions", 
                description: "We refine the website based on your feedback until perfect.",
                icon: <Award className="h-6 w-6 text-company-blue mb-2" />
              },
              {
                step: "04", 
                title: "Deployment & Support", 
                description: "We handle launch and provide ongoing maintenance.",
                icon: <ShieldCheck className="h-6 w-6 text-company-blue mb-2" />
              }
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={0.15 * index}>
                <div className="relative bg-white p-6 rounded-lg shadow-sm">
                  {item.icon}
                  <div className="text-4xl font-bold text-company-blue/20 absolute top-4 right-4">{item.step}</div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2">
                      <ArrowRight className="text-company-blue/30" />
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScrollAnimation direction="left">
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
          </ScrollAnimation>
          
          <ScrollAnimation direction="right" delay={0.2}>
            <div>
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">What sets us apart?</h2>
              <p className="text-gray-600 mb-8">Our commitment to transparency and client satisfaction. With us, there are no upfront fees or hidden charges — you only pay once the project is fully delivered to your satisfaction.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-company-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Fast Turnaround</h3>
                    <p className="text-gray-600 text-sm">Quick delivery without compromising quality</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-company-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Pay After Completion</h3>
                    <p className="text-gray-600 text-sm">No upfront fees, pay when satisfied</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-company-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Performance Focused</h3>
                    <p className="text-gray-600 text-sm">Websites that drive real business results</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-company-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Ongoing Support</h3>
                    <p className="text-gray-600 text-sm">Continuous maintenance and assistance</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-8">
                <Link to="/contact">
                  <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                    Get Started
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-company-blue text-company-blue hover:bg-company-blue-50">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <ScrollAnimation direction="left" className="md:w-1/3">
            <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">What our clients say about us</h2>
            <p className="text-gray-600 mb-4">Don't just take our word for it. Here's what some of our satisfied clients have to say about their experience working with us.</p>
          </ScrollAnimation>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollAnimation delay={0.1}>
              <TestimonialCard 
                quote="They transformed our online presence with a website that perfectly captures our brand. The no-upfront-fee policy gave us confidence in their commitment to quality."
                author="Michael S."
                position="CEO"
                company="Retail Solutions Inc."
              />
            </ScrollAnimation>
            
            <ScrollAnimation delay={0.2}>
              <TestimonialCard 
                quote="The team's attention to detail and responsiveness made the process enjoyable. Our e-commerce site has significantly increased our online sales since launch."
                author="Sarah P."
                position="Marketing Director"
                company="Artisan Creations"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation direction="left">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                  Ready to transform your business with a stunning website?
                </h2>
                <p className="text-gray-600 mb-8">Reach out today for a free consultation. Together, let's build something incredible that sets your business apart and drives real success.</p>
                <Link to="/contact">
                  <Button className="bg-company-blue hover:bg-company-blue-700 text-white self-start">
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="Technology" 
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
