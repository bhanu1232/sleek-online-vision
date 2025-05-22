
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, projectType: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll be in touch shortly.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">Contact Us</span>
              <h1 className="text-4xl md:text-5xl font-semibold mt-3 mb-6">Let's build something incredible together</h1>
              <p className="text-gray-600 mb-8">Have questions about our services or ready to start your project? Reach out to us today for a free consultation. We're here to help transform your business with a stunning website.</p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <ScrollAnimation direction="left" className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
              <p className="text-gray-600 mb-8">Our team is ready to answer any questions you might have and discuss how we can help your business grow online.</p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-company-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-company-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">hello@yourcompany.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-company-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-company-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-company-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-company-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-company-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-company-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600">123 Business Street, Suite 100<br />City, State 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Contact Form */}
          <ScrollAnimation direction="right" delay={0.2} className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type*</label>
                  <Select onValueChange={handleSelectChange} value={formData.projectType} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new-website">New Website</SelectItem>
                      <SelectItem value="redesign">Website Redesign</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Website</SelectItem>
                      <SelectItem value="maintenance">Website Maintenance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project needs and goals..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-company-blue hover:bg-company-blue-700 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 md:px-8">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-company-blue text-sm uppercase font-medium tracking-wide">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600">Answers to common questions about our services and process.</p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How long does it take to build a website?",
                answer: "The timeline varies depending on the complexity of the project. A basic website might take 2-3 weeks, while more complex sites with custom functionality could take 6-8 weeks or more."
              },
              {
                question: "How much does a website cost?",
                answer: "Our pricing is based on the specific requirements of each project. We offer different packages starting from $1,499. Contact us for a personalized quote."
              },
              {
                question: "Do I really only pay after the website is complete?",
                answer: "Yes! We believe in our work and want you to be completely satisfied. You only pay once the website is fully completed and you're happy with the result."
              },
              {
                question: "Will my website work on mobile devices?",
                answer: "Absolutely. All our websites are fully responsive and optimized for all devices including smartphones, tablets, and desktop computers."
              },
              {
                question: "Can you help with website maintenance after launch?",
                answer: "Yes, we offer ongoing maintenance and support packages to keep your website secure, updated, and performing optimally."
              },
              {
                question: "What information do you need to get started?",
                answer: "To begin, we'll need to understand your business goals, target audience, design preferences, and any specific functionality requirements. We'll guide you through this process during our initial consultation."
              }
            ].map((faq, index) => (
              <ScrollAnimation key={index} delay={0.1 * index}>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <ScrollAnimation>
          <div className="bg-company-blue rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to transform your business?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">Get in touch today for a free consultation. We'll help you create a stunning website that drives real results for your business.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-company-blue hover:bg-gray-100">
                Call Us: (123) 456-7890
              </Button>
              <Button className="bg-transparent border border-white text-white hover:bg-white/10">
                Email: hello@yourcompany.com
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </section>

    </div>
  );
};

export default Contact;
