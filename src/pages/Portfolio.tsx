
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const PortfolioItem = ({ title, description, imageSrc, technologies, link }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="h-60 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-company-dark">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center text-company-blue hover:text-company-blue-700 transition-colors">
              Visit site <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Kalyan Battersetty",
      description: "Built for a gym trainer to manage a growing user base of 30k+ users, this platform offers real-time interactions, bookings, and responsive UI.",
      imageSrc: "https://images.unsplash.com/photo-1581092335397-9fa62be26dae",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      link: "https://kalyanbattersetty.com"
    },
    {
      title: "JCRS Eduvalley School",
      description: "A robust school website that boosted engagement by 40% with seamless UI, content management, and updates.",
      imageSrc: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      technologies: ["React", "Firebase", "Material UI"],
      link: "https://jcrseduvalleyschool.com"
    },
    {
      title: "SV University Tech Fest",
      description: "SV University's Tech Fest Website optimized for speed and mobile-first design, this project saw a 40% traffic increase.",
      imageSrc: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      technologies: ["Next.js", "Firebase", "Framer Motion"],
      link: "https://cunosure2k25.vercel.app"
    },
    {
      title: "Smart Event Manager",
      description: "An event registration platform capable of handling 5,000+ registrations per event with streamlined backend processes.",
      imageSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      technologies: ["React", "MongoDB", "Node.js", "Tailwind CSS"],
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-company-blue text-sm uppercase font-semibold tracking-wide">Portfolio</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-company-dark">Our Work</h1>
              <p className="text-gray-600 text-lg mb-8">Explore our collection of projects that demonstrate our capability to build scalable, performant web applications across different industries.</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <ScrollAnimation key={index} delay={0.1 * index}>
              <PortfolioItem 
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                technologies={item.technologies}
                link={item.link}
              />
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-company-blue text-sm uppercase font-semibold tracking-wide">Our Process</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 text-company-dark">How We Work</h2>
              <p className="text-gray-600 text-lg">
                Our structured approach ensures we deliver quality results that meet your business objectives.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {step: "01", title: "Discovery", description: "We learn about your business, goals, and requirements."},
              {step: "02", title: "Planning", description: "We create a detailed roadmap for your project."},
              {step: "03", title: "Development", description: "We build your solution with careful attention to detail."},
              {step: "04", title: "Launch & Support", description: "We deploy your project and provide ongoing support."}
            ].map((item, index) => (
              <ScrollAnimation key={index} delay={0.15 * index}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-company-blue/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2 text-company-dark">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your project?</h2>
                <p className="text-white/90 mb-6">
                  Contact us today to discuss how we can help bring your vision to life with a customized web solution.
                </p>
                <Link to="/contact">
                  <Button className="bg-white text-company-blue hover:bg-gray-100">
                    Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
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

export default Portfolio;
