import React from 'react';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import BackToTop from "@/components/BackToTop";
import { ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32 text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/1437948491/vector/customer-service-call-center-hotline-operators-with-headphones-on-laptop-screen.jpg?s=612x612&w=0&k=20&c=lxb7mAbhfXgoux1IJat33Dbpp3fFPjg-LnHdTc9RW6U=" // Add your contact page hero background image
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <ScrollAnimation direction="down">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
              Get in Touch
            </h1>
          </ScrollAnimation>
          <ScrollAnimation direction="down" delay={0.2}>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto opacity-90">
              We're here to help. Reach out to us for any questions or inquiries.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="left">
              <div className="pr-8">
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">CONTACT US</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="h-6 w-6 text-blue-600" />,
                      title: "Email Us",
                      content: "info@yourcompany.com",
                      link: "mailto:info@yourcompany.com"
                    },
                    {
                      icon: <Phone className="h-6 w-6 text-purple-600" />,
                      title: "Call Us",
                      content: "+91 7207494328",
                      link: "tel:7207494328"
                    },
                    {
                      icon: <MapPin className="h-6 w-6 text-teal-600" />,
                      title: "Visit Us",
                      content: "Tirupati Andhra pradesh",
                      link: "https://maps.google.com"
                    },
                    {
                      icon: <Clock className="h-6 w-6 text-orange-600" />,
                      title: "Business Hours",
                      content: "Monday - Friday: 9:00 AM - 6:00 PM",
                      link: null
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.2}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors duration-300"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                      Send Message <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Find quick answers to common questions about our services and support.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What services do you offer?",
                answer: "We provide comprehensive software development services including custom software development, UI/UX design, e-commerce solutions, CRM development, system integration, and technical support."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex enterprise solutions could take several months. We'll provide a detailed timeline during consultation."
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes, we provide 24/7 technical support and maintenance services to ensure your systems run smoothly. Our support team is always ready to assist you with any issues or questions."
              },
              {
                question: "What is your pricing structure?",
                answer: "Our pricing is based on project requirements and scope. We offer flexible pricing models including fixed-price projects and retainer-based services. Contact us for a detailed quote."
              }
            ].map((faq, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Let's discuss how we can help transform your business with our software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg px-8 py-6 h-auto rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-gray-200 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold text-lg px-8 py-6 h-auto rounded-full transition-all duration-300">
                    View Services
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

export default Contact;
