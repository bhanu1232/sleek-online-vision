
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import ScrollAnimation from "@/components/ScrollAnimation";

const Services = () => {
  const services = [
    {
      title: "GoSilence Analytics Platform",
      description: "Powerful analytics solution for understanding user behavior and optimizing conversion paths.",
      features: [
        "Real-time user tracking",
        "Heat maps for user interaction",
        "Advanced filtering capabilities",
        "Intuitive dashboards"
      ]
    },
    {
      title: "OmniConnect CRM Suite",
      description: "Comprehensive customer relationship management system built for modern businesses.",
      features: [
        "Full contact management",
        "Sales pipeline tracking",
        "Task management system",
        "Performance analytics"
      ]
    },
    {
      title: "CyberGuard Security Suite",
      description: "Enterprise-grade security solutions to protect your digital assets and customer data.",
      features: [
        "Penetration testing",
        "Vulnerability scanning",
        "24/7 Security monitoring",
        "Compliance certification"
      ]
    },
    {
      title: "WebForge Platform",
      description: "Custom web development solutions tailored to meet your specific business needs.",
      features: [
        "Responsive web design",
        "E-commerce functionality",
        "Content management",
        "Performance optimization"
      ]
    },
    {
      title: "BrandAlign Marketing",
      description: "Digital marketing strategies that help your business grow and reach new audiences.",
      features: [
        "SEO optimization",
        "Social media management",
        "Content marketing",
        "Conversion rate optimization"
      ]
    },
    {
      title: "DesignFusion Studio",
      description: "Creative design services that bring your brand to life across all digital touchpoints.",
      features: [
        "UI/UX design",
        "Brand identity design",
        "Illustration and iconography",
        "Motion graphics"
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
              <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6">Transformative digital solutions for modern businesses</h1>
              <p className="text-gray-600 mb-8">We offer a wide range of services designed to help your business thrive in the digital landscape, from web development to analytics and security.</p>
              <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                Get Started
              </Button>
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

      {/* Process Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">How we deliver exceptional results</h2>
              <p className="text-gray-600">Our proven process ensures we deliver solutions that meet your business objectives and exceed your expectations.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {step: "01", title: "Discovery", description: "We learn about your business, goals, and challenges."},
              {step: "02", title: "Strategy", description: "We develop a tailored approach to address your specific needs."},
              {step: "03", title: "Execution", description: "Our team brings the strategy to life with precision and care."},
              {step: "04", title: "Refinement", description: "We measure results and optimize for continuous improvement."}
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <div className="bg-company-blue rounded-lg p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to transform your business?</h2>
                <p className="text-white/90 mb-6">Contact us today to discuss how our services can help you achieve your business goals.</p>
                <Button className="bg-white text-company-blue hover:bg-gray-100">
                  Get in Touch
                </Button>
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
