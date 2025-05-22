import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import BackToTop from "@/components/BackToTop";
import { ArrowRight, Users, Award, Globe, Heart, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/520eab84e4b02d5660581bbb/1560950545124-RA8X0JEJ1322MT58RTBV/matt-anderson-illustration-ecosystems-animation-keyframes-abc-company.png" // Add your about page hero background image
            alt="About Us Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <ScrollAnimation direction="down">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              About Our Company
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="down" delay={0.2}>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto opacity-90">
              We're a team of passionate innovators dedicated to transforming businesses through technology.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="pr-8">
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">OUR MISSION</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                  Empowering Businesses Through Innovation
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our mission is to provide cutting-edge software solutions that help businesses streamline their operations, enhance productivity, and achieve sustainable growth in the digital age.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Lightbulb className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation First</h3>
                      <p className="text-gray-600">Constantly pushing boundaries to deliver the best solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Success</h3>
                      <p className="text-gray-600">Your success is our top priority and driving force.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-xl">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1400/0*57WulFyKoXg_KTvM.jpg" // Add your team image
                    alt="Team Collaboration"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">OUR VALUES</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                What Drives Us Forward
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our core values shape everything we do and guide us in delivering exceptional results.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Collaboration",
                description: "We believe in the power of teamwork and collective intelligence."
              },
              {
                icon: <Award className="h-8 w-8 text-purple-600" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from code to customer service."
              },
              {
                icon: <Globe className="h-8 w-8 text-teal-600" />,
                title: "Global Impact",
                description: "We're committed to making a positive impact on businesses worldwide."
              }
            ].map((value, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <div className="mb-6 text-blue-600">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
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
                Join Our Journey
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Be part of our mission to transform businesses through innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                    Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold text-lg px-8 py-6 h-auto rounded-full transition-all duration-300">
                    View Careers
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

export default About;
