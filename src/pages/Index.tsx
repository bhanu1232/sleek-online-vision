import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ScrollAnimation from "@/components/ScrollAnimation";
import BackToTop from "@/components/BackToTop";
import { ArrowRight, Rocket, Award, ShieldCheck, Clock, Users, TrendingUp, Code, Palette, ShoppingCart, MessageSquare, Settings, Headphones, Zap, Layers, TrendingUpIcon, UserCheck, Compass, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://emeritus.org/wp-content/uploads/2022/08/c12-768x402.png" // Add your hero background image
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <ScrollAnimation direction="down">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Empower Your Business with Our Software Solutions
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="down" delay={0.2}>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto opacity-90">
              Streamline operations, boost productivity, and achieve your goals with our cutting-edge technology.
            </p>
          </ScrollAnimation>
          <ScrollAnimation direction="down" delay={0.4}>
            <div className="flex justify-center space-x-4">
              <Link to="/contact">
                <Button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border border-white text-white hover:bg-white hover:text-blue-700 font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">FEATURES</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 leading-tight tracking-tight text-gray-900">Unlock the Power of Our Software</h2>
              <p className="text-gray-600 text-lg leading-relaxed">Discover how our solution can transform your workflow and drive innovation.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[ /* Adapted content from original Services/Why Choose Us */
              {
                icon: <Zap className="h-7 w-7 text-teal-500" />,
                title: "Lightning Fast Performance",
                description: "Experience unparalleled speed and efficiency in all your tasks."
              },
              {
                icon: <Layers className="h-7 w-7 text-blue-500" />,
                title: "Scalable Solutions",
                description: "Grow your operations without limits, our software scales with you."
              },
              {
                icon: <ShieldCheck className="h-7 w-7 text-green-500" />,
                title: "Ironclad Security",
                description: "Protect your data with our robust and state-of-the-art security measures."
              },
              {
                icon: <TrendingUpIcon className="h-7 w-7 text-purple-500" />,
                title: "Data-Driven Insights",
                description: "Make informed decisions with powerful analytics and reporting."
              },
              {
                icon: <UserCheck className="h-7 w-7 text-orange-500" />,
                title: "Intuitive User Experience",
                description: "Easy to use interface designed for maximum productivity and minimal training."
              },
              {
                icon: <Compass className="h-7 w-7 text-red-500" />,
                title: "Dedicated Support",
                description: "Our team is here 24/7 to ensure you get the most out of our software."
              }
            ].map((feature, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 h-full transform hover:translate-y-1 transition-all duration-300">
                  <div className="mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-base">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-24 bg-gray-100">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">HOW IT WORKS</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 leading-tight tracking-tight text-gray-900">Simple Steps to Get Started</h2>
              <p className="text-gray-600 text-lg leading-relaxed">Follow our straightforward process to implement and start benefiting from our software.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[ /* Using original How It Works data */
              {
                step: "01",
                title: "Free Consultation",
                description: "We discuss your needs and how our software can help.",
                icon: <MessageSquare className="h-7 w-7 text-blue-600" />
              },
              {
                step: "02",
                title: "Custom Setup",
                description: "Our team configures the software to fit your specific requirements.",
                icon: <Settings2 className="h-7 w-7 text-teal-600" />
              },
              {
                step: "03",
                title: "Training & Onboarding",
                description: "We ensure your team is fully equipped to use the software effectively.",
                icon: <Users className="h-7 w-7 text-purple-600" />
              },
              {
                step: "04",
                title: "Ongoing Support",
                description: "Receive continuous support and updates to maximize your investment.",
                icon: <Headphones className="h-7 w-7 text-orange-600" />
              }
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={0.15 * index}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 h-full relative overflow-hidden">
                  <div className="text-6xl font-bold text-gray-100 absolute -top-4 -right-4 opacity-50">{item.step}</div>
                  <div className="mb-4 text-blue-600 relative z-10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 relative z-10">{item.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed relative z-10">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="text-gray-400 h-8 w-8" />
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Testimonials Intro */}
            <ScrollAnimation direction="left" className="lg:col-span-4">
              <div className="pr-8">
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">TESTIMONIALS</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 leading-tight tracking-tight text-gray-900">What Our Clients Say</h2>
                <p className="text-gray-600 text-lg leading-relaxed">Hear from businesses like yours who have achieved great results with our software.</p>
              </div>
            </ScrollAnimation>

            {/* Testimonial Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* Using original TestimonialCard component with potentially updated styling */}
                <ScrollAnimation delay={0.1}>
                  <TestimonialCard
                    quote="Our productivity has increased significantly since implementing this software. The intuitive interface and powerful features have made a real difference."
                    author="Michael S."
                    position="CEO"
                    company="Tech Solutions Inc."
                  />
                </ScrollAnimation>

                <ScrollAnimation delay={0.2}>
                  <TestimonialCard
                    quote="The support team is incredibly responsive and helpful. We were able to get up and running quickly, and any questions we had were answered promptly."
                    author="Sarah P."
                    position="Operations Manager"
                    company="Innovate Ltd."
                  />
                </ScrollAnimation>
                {/* Add more testimonials as needed */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Updated Design */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* CTA Content */}
            <div className="lg:col-span-7">
              <ScrollAnimation direction="left">
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
                  <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">GET STARTED</span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 mb-8">
                    Join thousands of satisfied customers who have revolutionized their workflow with our cutting-edge software solution.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact">
                      <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                        Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link to="/services">
                      <Button variant="outline" className="w-full sm:w-auto border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold text-lg px-8 py-6 h-auto rounded-full transition-all duration-300">
                        View service
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* CTA Visual */}
            <div className="lg:col-span-5">
              <ScrollAnimation direction="right" delay={0.2}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-2xl"></div>
                  <div className="relative bg-white rounded-2xl p-4 shadow-xl">
                    <img
                      src="https://media.istockphoto.com/id/1428470293/vector/business-reporting-dashboard-concept-illustration.jpg?s=612x612&w=0&k=20&c=5kq8vvEkXEfxjWZLVCMIbCf-x3XSvXYQsE-BkWpeH0U=" // Add your dashboard/software interface image
                      alt="Software Dashboard Preview"
                      className="w-full h-auto rounded-xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">Live Demo Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>
      <BackToTop />
    </div>
  );
};

export default Index;
