import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import BackToTop from "@/components/BackToTop";
import { ArrowRight, Code, Palette, ShoppingCart, MessageSquare, Settings, Headphones, Zap, Layers, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://img.freepik.com/free-vector/concept-brainstorming-landing-page_52683-24924.jpg?semt=ais_hybrid&w=740" // Add your services page hero background image
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <ScrollAnimation direction="down">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Our Services
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="down" delay={0.2}>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto opacity-90">
              Comprehensive software solutions tailored to your business needs
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">WHAT WE OFFER</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                Comprehensive Software Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We provide end-to-end software development services to help your business thrive in the digital age.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-blue-600" />,
                title: "Custom Software Development",
                description: "Tailored software solutions designed to meet your specific business requirements and challenges."
              },
              {
                icon: <Palette className="h-8 w-8 text-purple-600" />,
                title: "UI/UX Design",
                description: "Intuitive and engaging user interfaces that enhance user experience and drive engagement."
              },
              {
                icon: <ShoppingCart className="h-8 w-8 text-teal-600" />,
                title: "E-commerce Solutions",
                description: "Robust online shopping platforms with secure payment processing and inventory management."
              },
              {
                icon: <MessageSquare className="h-8 w-8 text-orange-600" />,
                title: "CRM Development",
                description: "Custom customer relationship management systems to streamline your business operations."
              },
              {
                icon: <Settings className="h-8 w-8 text-red-600" />,
                title: "System Integration",
                description: "Seamless integration of various software systems to create a unified business ecosystem."
              },
              {
                icon: <Headphones className="h-8 w-8 text-green-600" />,
                title: "Technical Support",
                description: "24/7 technical support and maintenance services to ensure your systems run smoothly."
              }
            ].map((service, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="mb-6 text-blue-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
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
                      icon: <Zap className="h-6 w-6 text-blue-600" />,
                      title: "Fast Development",
                      description: "Quick turnaround times without compromising on quality"
                    },
                    {
                      icon: <Layers className="h-6 w-6 text-purple-600" />,
                      title: "Scalable Solutions",
                      description: "Future-proof software that grows with your business"
                    },
                    {
                      icon: <ShieldCheck className="h-6 w-6 text-teal-600" />,
                      title: "Secure & Reliable",
                      description: "Enterprise-grade security and 99.9% uptime guarantee"
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
                    src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148884662.jpg" // Add your services feature image
                    alt="Our Services"
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
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's discuss how our software solutions can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
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

export default Services;
