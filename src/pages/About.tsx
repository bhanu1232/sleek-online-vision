
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Award, Clock, TrendingUp } from "lucide-react";
import StatCard from "@/components/StatCard";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollAnimation direction="left">
            <div>
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">About Our Company</span>
              <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6">Creating stunning, high-performance websites for commercial businesses</h1>
              <p className="text-gray-600 mb-8">We specialize in creating stunning, high-performance websites that help commercial businesses grow and succeed online. We bring together cutting-edge design, smooth animations, and flawless user experiences to deliver websites that not only look beautiful but also perform at the highest level.</p>
              <Link to="/services">
                <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.2}>
            <div className="relative h-96 lg:h-auto">
              <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-company-blue-200 z-0"></div>
              <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-company-blue z-0"></div>
              <div className="relative z-10 h-full">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Team collaboration" 
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">What makes us different</h2>
              <p className="text-gray-600">We take pride in understanding your business goals and crafting a digital solution that matches your brand, speaks to your audience, and drives real results.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-company-blue-100 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="h-6 w-6 text-company-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Client-First Approach</h3>
                <p className="text-gray-600 text-sm">We believe in complete transparency and client satisfaction. You only pay once the project is fully delivered to your satisfaction.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-company-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-company-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Craftsmanship</h3>
                <p className="text-gray-600 text-sm">Our design team adds the creative touch with modern visuals and smooth, engaging animations that capture attention and keep users on your site.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-company-blue-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-company-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Long-term Support</h3>
                <p className="text-gray-600 text-sm">We offer ongoing maintenance and support to ensure your site stays updated, secure, and optimized for performance.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-company-blue text-sm uppercase font-medium tracking-wide">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">Our simple process delivers results</h2>
            <p className="text-gray-600">We start with a free consultation to understand your needs, followed by the design and development phase where we bring your website to life.</p>
          </div>
        </ScrollAnimation>

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
          {[
            {
              number: "01",
              title: "Free Consultation",
              description: "We start with understanding your business needs, goals, and target audience to create a tailored approach."
            },
            {
              number: "02",
              title: "Design & Development",
              description: "Our team designs and builds your website with a focus on modern aesthetics, functionality, and user experience."
            },
            {
              number: "03",
              title: "Review & Revisions",
              description: "We present the initial build for your feedback and make any necessary revisions until you're completely satisfied."
            },
            {
              number: "04",
              title: "Deployment & Payment",
              description: "Once approved, we handle all aspects of deployment. You only pay after your website is fully completed and live."
            }
          ].map((step, index) => (
            <ScrollAnimation key={index} delay={0.15 * index}>
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-company-blue text-white">
                  <span className="font-bold">{step.number}</span>
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-600">{step.description}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-company-blue bg-opacity-5 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Promise</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">A straightforward guarantee</h2>
              <p className="text-gray-600">We proudly stand by a simple and transparent promise — you only pay after your website is fully completed and live, ensuring you have complete confidence in the final result.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard value="100%" label="Satisfaction Guarantee" />
            <StatCard value="0" label="Upfront Fees" />
            <StatCard value="24/7" label="Support Available" />
            <StatCard value="100+" label="Happy Clients" />
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Industries</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">Who we work with</h2>
            <p className="text-gray-600">We are passionate about helping businesses across industries establish a powerful and professional online presence.</p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {title: "Retail Shops", icon: "🛍️"},
            {title: "Restaurants", icon: "🍽️"},
            {title: "Service Providers", icon: "🛠️"},
            {title: "E-commerce Brands", icon: "🛒"},
            {title: "Healthcare", icon: "⚕️"},
            {title: "Education", icon: "📚"},
            {title: "Real Estate", icon: "🏠"},
            {title: "Professional Services", icon: "💼"}
          ].map((industry, index) => (
            <ScrollAnimation key={index} delay={0.05 * index}>
              <div className="bg-white p-5 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-medium">{industry.title}</h3>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-company-blue py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to transform your business with a stunning website?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">Our goal is to make the process smooth, enjoyable, and worry-free, while delivering a final product you can be proud of.</p>
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

export default About;
