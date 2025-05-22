import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCard from "@/components/StatCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowRight, Rocket, Award, ShieldCheck, Clock, Users, TrendingUp, Code, Palette, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Main headline */}
          <ScrollAnimation direction="left" className="col-span-1 md:col-span-2 p-8 md:p-12 bg-gray-50/50 rounded-2xl">
            <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">Professional Web Development</span>
            <h1 className="text-4xl md:text-5xl font-normal mt-4 mb-6 leading-tight text-gray-800">Creating stunning, high-performance websites for commercial businesses</h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">We bring together cutting-edge design, smooth animations, and flawless user experiences to help your business grow online.</p>
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-6 h-auto group">
                Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </ScrollAnimation>

          {/* Blue box with quote */}
          <ScrollAnimation direction="down" delay={0.2} className="col-span-1 bg-blue-600/90 text-white rounded-2xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden grid-pattern">
            <div className="flex space-x-3 items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="flex-1"></div>
            </div>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              "You only pay after your website is fully completed and live, ensuring you have complete confidence in the final result."
            </p>
            <h4 className="font-normal text-xl">Our Promise</h4>
          </ScrollAnimation>

          {/* Bottom left image */}
          <ScrollAnimation direction="left" delay={0.3} className="col-span-1 bg-gray-50 rounded-2xl overflow-hidden h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Technology"
              className="w-full h-full object-cover"
            />
          </ScrollAnimation>

          {/* Middle image with person */}
          <ScrollAnimation direction="up" delay={0.4} className="col-span-1 bg-gray-50 rounded-2xl p-4 flex items-end h-64 md:h-auto relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
              alt="Business professional"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </ScrollAnimation>

          {/* Dark blue stat box */}
          <ScrollAnimation direction="right" delay={0.5} className="col-span-1 bg-blue-600/90 text-white rounded-2xl p-8 md:p-10 flex flex-col justify-center relative grid-pattern">
            <h2 className="text-5xl md:text-6xl font-normal mb-4">100%</h2>
            <p className="text-white/90 text-lg">Satisfaction Guarantee - Pay only when you're satisfied</p>
          </ScrollAnimation>
        </div>
      </section>

      {/* About Us Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollAnimation direction="left">
            <div>
              <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">About us</span>
              <h2 className="text-3xl md:text-4xl font-normal mt-4 mb-6 leading-tight text-gray-800">Understanding your business goals and crafting digital solutions</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">At our company, we take pride in understanding your business goals and crafting a digital solution that matches your brand, speaks to your audience, and drives real results. Our custom development services focus on building responsive, scalable websites that work perfectly across devices.</p>

              <div className="flex space-x-12">
                <StatCard value="100%" label="Client Satisfaction" />
                <StatCard value="0" label="Upfront Fees" />
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.2}>
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-600 z-0 rounded-2xl"></div>
              <div className="relative z-10 h-full">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Professional on phone"
                  className="h-full w-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-normal mt-4 mb-6 leading-tight text-gray-800">Comprehensive web solutions for your business</h2>
            <p className="text-gray-600 text-lg leading-relaxed">From custom website development and eye-catching UI/UX design to seamless deployment and long-term maintenance, our team is dedicated to bringing your digital vision to life.</p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Custom Website Development"
            description="We build responsive, scalable websites that work perfectly across all devices and platforms."
            features={[
              "Responsive design",
              "Cross-browser compatibility",
              "Fast loading times",
              "SEO-friendly structure"
            ]}
            icon={<Code className="h-6 w-6 text-blue-600" />}
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
            icon={<Palette className="h-6 w-6 text-blue-600" />}
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
            icon={<ShoppingCart className="h-6 w-6 text-blue-600" />}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50/50 py-16 md:py-28">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-normal mt-4 mb-6 leading-tight text-gray-800">How it all works</h2>
              <p className="text-gray-600 text-lg leading-relaxed">We make the process simple, transparent, and effective to deliver websites that exceed your expectations.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description: "We start with understanding your needs and business goals.",
                icon: <Users className="h-6 w-6 text-blue-600" />,
                color: "bg-blue-50"
              },
              {
                step: "02",
                title: "Design & Development",
                description: "Our team brings your website vision to life with precision.",
                icon: <Rocket className="h-6 w-6 text-blue-600" />,
                color: "bg-purple-50"
              },
              {
                step: "03",
                title: "Review & Revisions",
                description: "We refine the website based on your feedback until perfect.",
                icon: <Award className="h-6 w-6 text-blue-600" />,
                color: "bg-green-50"
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "We handle launch and provide ongoing maintenance.",
                icon: <ShieldCheck className="h-6 w-6 text-blue-600" />,
                color: "bg-orange-50"
              }
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={0.15 * index}>
                <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className={`absolute top-0 left-0 w-full h-1 ${item.color} rounded-t-2xl`}></div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`h-12 w-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div className="text-4xl font-normal text-gray-100 group-hover:text-blue-600/20 transition-colors duration-300">{item.step}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-normal mb-2 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2">
                      <ArrowRight className="text-blue-600/30 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left">
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-600/10 z-0 rounded-2xl"></div>
              <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-600/20 z-0 rounded-2xl"></div>
              <div className="relative z-10 h-full">
                <img
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                  alt="Team collaboration"
                  className="h-full w-full object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.2}>
            <div>
              <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-normal mt-4 mb-6 leading-tight text-gray-800">What sets us apart?</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">Our commitment to transparency and client satisfaction. With us, there are no upfront fees or hidden charges — you only pay once the project is fully delivered to your satisfaction.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Clock className="h-5 w-5 text-blue-600" />,
                    title: "Fast Turnaround",
                    description: "Quick delivery without compromising quality",
                    color: "bg-blue-50"
                  },
                  {
                    icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
                    title: "Pay After Completion",
                    description: "No upfront fees, pay when satisfied",
                    color: "bg-purple-50"
                  },
                  {
                    icon: <TrendingUp className="h-5 w-5 text-blue-600" />,
                    title: "Performance Focused",
                    description: "Websites that drive real business results",
                    color: "bg-green-50"
                  },
                  {
                    icon: <Users className="h-5 w-5 text-blue-600" />,
                    title: "Ongoing Support",
                    description: "Continuous maintenance and assistance",
                    color: "bg-orange-50"
                  }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className={`h-12 w-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-normal text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                        <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-8">
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-6 h-auto group">
                    Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-base px-8 py-6 h-auto group">
                    Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          <ScrollAnimation direction="left" className="md:w-1/3">
            <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-normal mt-4 mb-6 leading-tight text-gray-800">What our clients say about us</h2>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">Don't just take our word for it. Here's what some of our satisfied clients have to say about their experience working with us.</p>
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
      <section className="bg-gray-50/50 py-16 md:py-28">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation direction="left">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-normal mb-6 leading-tight text-gray-800">
                  Ready to transform your business with a stunning website?
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">Reach out today for a free consultation. Together, let's build something incredible that sets your business apart and drives real success.</p>
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-6 h-auto group">
                    Get Started Now <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative h-64 md:h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
                  alt="Technology"
                  className="h-full w-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
