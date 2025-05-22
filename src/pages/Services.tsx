import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Smartphone, Palette, BarChart3, ShoppingCart, Search, Shield, Rocket, Award, Clock, Users } from 'lucide-react';
import ScrollAnimation from "@/components/ScrollAnimation";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Main headline */}
          <ScrollAnimation direction="left" className="col-span-1 md:col-span-2 p-8 md:p-12 bg-gray-50/50 rounded-2xl">
            <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-normal mt-4 mb-6 leading-tight text-gray-800">Comprehensive digital solutions for your business growth</h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">From custom website development and eye-catching UI/UX design to seamless deployment and long-term maintenance, our team is dedicated to bringing your digital vision to life.</p>
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
                <Shield className="h-6 w-6" />
              </div>
              <div className="flex-1"></div>
            </div>
            <p className="text-white/90 text-lg mb-6 leading-relaxed">
              "We deliver high-quality solutions with a focus on performance, security, and user experience."
            </p>
            <h4 className="font-normal text-xl">Our Promise</h4>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <ScrollAnimation>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-normal mt-4 mb-6 leading-tight text-gray-800">Comprehensive digital solutions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">Tailored services to help your business thrive in the digital world.</p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainServices.map((service, index) => (
            <ScrollAnimation key={index} delay={0.1 * index}>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-normal mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50/50 py-16 md:py-28">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-normal mt-4 mb-6 leading-tight text-gray-800">How we deliver exceptional results</h2>
              <p className="text-gray-600 text-lg leading-relaxed">A streamlined approach to ensure your project's success.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <ScrollAnimation key={index} delay={0.15 * index}>
                <div className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group">
                  <div className={`absolute top-0 left-0 w-full h-1 ${step.color} rounded-t-2xl`}></div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`h-12 w-12 ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                    <div className="text-4xl font-normal text-gray-100 group-hover:text-blue-600/20 transition-colors duration-300">{step.step}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-normal mb-2 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
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

      {/* Additional Services Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollAnimation direction="left">
            <div>
              <span className="text-blue-600 text-sm font-normal tracking-wider uppercase">Additional Services</span>
              <h2 className="text-3xl md:text-4xl font-normal mt-4 mb-6 leading-tight text-gray-800">Enhance your digital presence</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">Specialized solutions to help your business grow and succeed online.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {additionalServices.map((service, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                      <div className={`h-12 w-12 ${service.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-normal text-lg mb-1 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                        <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.2}>
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-600/10 z-0 rounded-2xl"></div>
              <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-blue-600/20 z-0 rounded-2xl"></div>
              <div className="relative z-10 h-full">
                <img
                  src="/images/services/illustration.webp"
                  alt="Digital Services"
                  className="h-full w-full object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50/50 py-16 md:py-28">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollAnimation direction="left">
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-normal mb-6 leading-tight text-gray-800">
                  Ready to transform your digital presence?
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">Let's discuss how our services can help you achieve your business goals with a stunning, high-performance website.</p>
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
                  src="/images/services/cta.webp"
                  alt="Digital Transformation"
                  className="h-full w-full object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </div>
  );
};

const mainServices = [
  {
    icon: <Code2 className="h-6 w-6 text-blue-600" />,
    title: "Web Development",
    description: "Custom websites built with modern technologies and best practices.",
    link: "/services#web-development"
  },
  {
    icon: <Smartphone className="h-6 w-6 text-blue-600" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    link: "/services#mobile-apps"
  },
  {
    icon: <Palette className="h-6 w-6 text-blue-600" />,
    title: "UI/UX Design",
    description: "User-centered design that creates engaging digital experiences.",
    link: "/services#ui-ux"
  },
  {
    icon: <ShoppingCart className="h-6 w-6 text-blue-600" />,
    title: "E-Commerce Solutions",
    description: "Powerful online stores that drive sales and growth.",
    link: "/services#ecommerce"
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    title: "Digital Marketing",
    description: "Strategic marketing solutions to grow your online presence.",
    link: "/services#marketing"
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: "Website Maintenance",
    description: "Ongoing support and updates to keep your website running smoothly.",
    link: "/services#maintenance"
  }
];

const additionalServices = [
  {
    icon: <Search className="h-6 w-6 text-blue-600" />,
    title: "SEO Optimization",
    description: "Improve your website's visibility in search engines and drive organic traffic.",
    color: "bg-blue-50"
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-600" />,
    title: "Analytics & Reporting",
    description: "Track and analyze your website's performance with detailed reports and insights.",
    color: "bg-purple-50"
  }
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business goals and requirements.",
    icon: <Users className="h-6 w-6 text-blue-600" />,
    color: "bg-blue-50"
  },
  {
    step: "02",
    title: "Planning",
    description: "We create a detailed roadmap for your project's success.",
    icon: <Rocket className="h-6 w-6 text-blue-600" />,
    color: "bg-purple-50"
  },
  {
    step: "03",
    title: "Development",
    description: "Our team brings your vision to life with expert implementation.",
    icon: <Award className="h-6 w-6 text-blue-600" />,
    color: "bg-green-50"
  },
  {
    step: "04",
    title: "Launch",
    description: "We ensure a smooth deployment and provide ongoing support.",
    icon: <Clock className="h-6 w-6 text-blue-600" />,
    color: "bg-orange-50"
  }
];

export default Services;
