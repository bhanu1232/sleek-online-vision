
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowRight } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "analytics",
      name: "GoSilence Analytics",
      description: "A comprehensive analytics platform that helps businesses understand their customers and make data-driven decisions.",
      features: [
        "Real-time data tracking",
        "User behavior analysis",
        "Conversion funnel optimization",
        "Custom dashboards and reporting",
        "AI-powered insights"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      id: "crm",
      name: "OmniConnect CRM",
      description: "A powerful customer relationship management system that streamlines sales processes and improves customer satisfaction.",
      features: [
        "Contact management",
        "Sales pipeline tracking",
        "Task automation",
        "Email integration",
        "Performance analytics"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
    },
    {
      id: "security",
      name: "CyberGuard Security",
      description: "Enterprise-grade security solutions to protect your digital assets and customer data from threats.",
      features: [
        "Threat detection and prevention",
        "Vulnerability assessment",
        "Compliance management",
        "24/7 monitoring",
        "Incident response"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
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
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Our Products</span>
              <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6">Innovative solutions for modern businesses</h1>
              <p className="text-gray-600 mb-8">Discover our suite of products designed to help your business grow, optimize operations, and secure your digital assets.</p>
              <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                Explore Products
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Products Tabs Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <Tabs defaultValue="analytics" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="analytics">GoSilence Analytics</TabsTrigger>
              <TabsTrigger value="crm">OmniConnect CRM</TabsTrigger>
              <TabsTrigger value="security">CyberGuard Security</TabsTrigger>
            </TabsList>
            
            {products.map((product) => (
              <TabsContent key={product.id} value={product.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
                    <p className="text-gray-600 mb-8">{product.description}</p>
                    
                    <div className="space-y-4 mb-8">
                      <h3 className="font-semibold text-xl">Key Features</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="h-5 w-5 rounded-full bg-company-blue-100 flex items-center justify-center mt-0.5">
                              <svg className="h-3 w-3 text-company-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
                        Request Demo
                      </Button>
                      <Button variant="outline" className="border-company-blue text-company-blue hover:bg-company-blue-50">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative h-96 lg:h-auto">
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-company-blue-200 z-0"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-company-blue z-0"></div>
                    <div className="relative z-10 h-full">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollAnimation>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Pricing</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">Simple, transparent pricing</h2>
              <p className="text-gray-600">Choose the plan that works best for your business needs.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$99",
                description: "Perfect for small businesses just getting started",
                features: [
                  "Basic analytics dashboard",
                  "5 user accounts",
                  "Data storage up to 3 months",
                  "Email support"
                ]
              },
              {
                name: "Professional",
                price: "$299",
                description: "Ideal for growing businesses with more complex needs",
                features: [
                  "Advanced analytics dashboard",
                  "15 user accounts",
                  "Data storage up to 12 months",
                  "Priority email & phone support",
                  "Custom reporting"
                ],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations with specific requirements",
                features: [
                  "Full-featured analytics platform",
                  "Unlimited user accounts",
                  "Unlimited data storage",
                  "24/7 dedicated support",
                  "Custom integration",
                  "On-premise deployment available"
                ]
              }
            ].map((plan, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <div className={`rounded-lg p-8 h-full ${plan.highlighted ? 'bg-company-blue text-white ring-4 ring-company-blue ring-offset-2' : 'bg-white'}`}>
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className={`ml-1 ${plan.highlighted ? 'text-white/80' : 'text-gray-500'}`}>/month</span>}
                  </div>
                  <p className={`text-sm mb-6 ${plan.highlighted ? 'text-white/80' : 'text-gray-600'}`}>{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <svg className={`h-5 w-5 ${plan.highlighted ? 'text-white' : 'text-company-blue'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.highlighted 
                      ? 'bg-white text-company-blue hover:bg-gray-100' 
                      : 'bg-company-blue text-white hover:bg-company-blue-700'}`}
                  >
                    Get Started
                  </Button>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <div className="bg-company-blue/10 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Not sure which product is right for you?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Our team of experts is ready to help you find the perfect solution for your business needs.</p>
            <Button className="bg-company-blue hover:bg-company-blue-700 text-white">
              Schedule a Consultation
            </Button>
          </div>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
