
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StatCard from "@/components/StatCard";
import ScrollAnimation from "@/components/ScrollAnimation";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollAnimation direction="left">
            <div>
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">About Buildr</span>
              <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6">We build digital experiences that transform businesses</h1>
              <p className="text-gray-600 mb-8">At Buildr, we're passionate about creating web solutions that not only look amazing but drive real business results. Our talented team combines creativity with technical expertise to deliver websites that stand out from the crowd.</p>
              <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
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
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">From humble beginnings to industry leaders</h2>
              <p className="text-gray-600">Founded in 2010, Buildr has grown from a small team of passionate developers to a full-service digital agency with clients across the globe.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-company-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-company-blue font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">The Beginning</h3>
                <p className="text-gray-600 text-sm">Started in a small office with just three developers and a vision to create meaningful digital experiences.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-company-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-company-blue font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth Years</h3>
                <p className="text-gray-600 text-sm">Expanded our services to include UX design, digital marketing, and custom application development.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-company-blue-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-company-blue font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Today</h3>
                <p className="text-gray-600 text-sm">Now a team of 50+ experts delivering cutting-edge solutions to clients in 15+ countries worldwide.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">Meet the talent behind our success</h2>
            <p className="text-gray-600">Our diverse team brings together expertise across development, design, and marketing to deliver exceptional results.</p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {name: "Alex Morgan", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"},
            {name: "Sarah Chen", role: "Creative Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"},
            {name: "James Wilson", role: "Lead Developer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"},
            {name: "Mia Johnson", role: "UX Designer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"}
          ].map((member, index) => (
            <ScrollAnimation key={index} delay={0.1 * index}>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="h-64">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-company-blue text-sm">{member.role}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-company-blue bg-opacity-5 py-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard value="15+" label="Years of Experience" />
            <StatCard value="500+" label="Projects Completed" />
            <StatCard value="100+" label="Team Members" />
            <StatCard value="98%" label="Client Satisfaction" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
