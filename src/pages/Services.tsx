
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Link } from "react-router-dom";
import { ShieldCheck, Award, Clock, TrendingUp, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Custom Website Development",
      description: "We build responsive, scalable websites that work perfectly across all devices and platforms.",
      features: [
        "Responsive design for all devices",
        "Cross-browser compatibility",
        "Fast loading times",
        "SEO-friendly structure"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Our design team adds creative touches with modern visuals and smooth, engaging animations.",
      features: [
        "Modern, attractive interfaces",
        "Intuitive user experience",
        "Eye-catching animations",
        "Brand-aligned visuals"
      ]
    },
    {
      title: "E-Commerce Solutions",
      description: "Set up a fully functional online store with smooth checkout experience to increase sales.",
      features: [
        "Secure payment processing",
        "Inventory management",
        "Mobile-friendly shopping",
        "Customer account features"
      ]
    },
    {
      title: "Website Deployment",
      description: "We handle all aspects of deployment, from hosting setup to domain configuration.",
      features: [
        "Server configuration",
        "Domain setup and DNS",
        "SSL certificate installation",
        "Performance optimization"
      ]
    },
    {
      title: "Ongoing Maintenance",
      description: "Keep your site updated, secure, and optimized with our continuous support services.",
      features: [
        "Regular security updates",
        "Performance monitoring",
        "Content updates",
        "Technical support"
      ]
    },
    {
      title: "SEO & Marketing",
      description: "Improve your site's visibility and drive more targeted traffic to grow your business.",
      features: [
        "On-page SEO optimization",
        "Content strategy",
        "Analytics setup",
        "Conversion optimization"
      ]
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
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Services</span>
              <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6">Comprehensive web solutions for your business growth</h1>
              <p className="text-gray-600 mb-8">From custom website development and eye-catching UI/UX design to seamless deployment and long-term maintenance, our team is dedicated to bringing your digital vision to life.</p>
              <Link to="/contact">
                <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                  Get a Free Consultation
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollAnimation key={index} delay={0.05 * index}>
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                features={service.features} 
              />
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div>
                <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Approach</span>
                <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">Crafting digital experiences with purpose</h2>
                <p className="text-gray-600 mb-8">Our custom development services focus on building responsive, scalable websites that work perfectly across devices, while our design team adds the creative touch with modern visuals and smooth, engaging animations that capture attention and keep users on your site.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-company-blue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Client-Focused Development</h3>
                      <p className="text-gray-600 text-sm">We build solutions tailored to your specific business needs and goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-company-blue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Quality Over Everything</h3>
                      <p className="text-gray-600 text-sm">We never compromise on the quality of our deliverables</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-company-blue mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Results-Driven Strategy</h3>
                      <p className="text-gray-600 text-sm">Every feature is designed with your business growth in mind</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative h-96 lg:h-auto">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-company-blue-200 z-0"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-company-blue z-0"></div>
                <div className="relative z-10 h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1581092335397-9fa62be26dae" 
                    alt="Web development process" 
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">How we deliver exceptional results</h2>
            <p className="text-gray-600">Our proven process ensures we deliver solutions that meet your business objectives and exceed your expectations.</p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {step: "01", title: "Discovery", description: "We learn about your business, goals, and challenges through a free consultation."},
            {step: "02", title: "Strategy", description: "We develop a tailored approach to address your specific needs and objectives."},
            {step: "03", title: "Execution", description: "Our team brings the strategy to life with precision and attention to detail."},
            {step: "04", title: "Refinement", description: "We measure results and optimize for continuous improvement after launch."}
          ].map((item, index) => (
            <ScrollAnimation key={index} delay={0.15 * index}>
              <div className="relative">
                <div className="text-5xl font-bold text-company-blue opacity-20">{item.step}</div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2">
                    <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6H38.5M38.5 6L33.5 1M38.5 6L33.5 11" stroke="#0e4bef" strokeWidth="2" />
                    </svg>
                  </div>
                )}
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Pay After Completion Section */}
      <section className="bg-company-blue bg-opacity-5 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <ScrollAnimation direction="left">
              <div className="relative h-96 lg:h-auto">
                <div className="relative z-10 h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                    alt="Handshake" 
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation direction="right" delay={0.2}>
              <div>
                <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Promise</span>
                <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">Pay only when you're completely satisfied</h2>
                <p className="text-gray-600 mb-6">What truly sets us apart is our commitment to transparency and client satisfaction. With us, there are no upfront fees or hidden charges — you only pay once the project is fully delivered to your satisfaction.</p>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-full bg-company-blue/10 flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-company-blue" />
                  </div>
                  <p className="text-gray-800 font-medium">Get peace of mind with our satisfaction guarantee</p>
                </div>
                
                <Link to="/contact">
                  <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <div className="bg-company-blue rounded-lg p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to transform your business?</h2>
                <p className="text-white/90 mb-6">Contact us today to discuss how our services can help you achieve your business goals with a stunning, high-performance website.</p>
                <Link to="/contact">
                  <Button className="bg-white text-company-blue hover:bg-gray-100">
                    Get in Touch
                  </Button>
                </Link>
              </div>
              <div className="hidden md:flex justify-end">
                <div className="h-64 w-64 rounded-full bg-white/10 flex items-center justify-center">
                  <div className="h-48 w-48 rounded-full bg-white/20"></div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
