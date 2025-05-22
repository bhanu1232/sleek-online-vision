
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      {/* Main Footer */}
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-gradient-to-br from-company-blue-400 to-company-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">SV</span>
              </div>
              <span className="text-xl font-medium text-white">Sleek Vision</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into scalable web solutions. We specialize in crafting high-performance, 
              scalable web applications tailored to your business needs.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: <Github className="h-4 w-4" />, href: "https://github.com", label: "GitHub" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-company-blue-400 transition-colors duration-300 bg-gray-800/80 p-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-5 border-b border-gray-800 pb-2">Navigation</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/products' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-company-blue-400 text-sm transition-colors duration-300 inline-flex items-center group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:mt-0 mt-2">
            <h3 className="text-lg font-medium text-white mb-5 border-b border-gray-800 pb-2">Services</h3>
            <ul className="space-y-3">
              {[
                { name: 'Custom Web Development', path: '/services' },
                { name: 'Scalable Backend Systems', path: '/services' },
                { name: 'School/Institution Portals', path: '/services' },
                { name: 'E-commerce Solutions', path: '/services' },
                { name: 'Event Management Systems', path: '/services' }
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-company-blue-400 text-sm transition-colors duration-300 inline-flex items-center group"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-2 opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium text-white mb-5 border-b border-gray-800 pb-2">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:bchowdamfam@gmail.com" className="text-gray-400 hover:text-company-blue-400 text-sm flex items-start transition-colors duration-300">
                  <Mail className="h-5 w-5 mr-3 mt-0.5 text-company-blue-400 flex-shrink-0" />
                  <span>bchowdamfam@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+917207494328" className="text-gray-400 hover:text-company-blue-400 text-sm flex items-start transition-colors duration-300">
                  <Phone className="h-5 w-5 mr-3 mt-0.5 text-company-blue-400 flex-shrink-0" />
                  <span>+91 72074 94328</span>
                </a>
              </li>
              <li className="text-gray-400 text-sm flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-company-blue-400 flex-shrink-0" />
                <span>Tirupati, India</span>
              </li>
              <li className="pt-2">
                <a href="https://cbhanuprakash.great-site.net" target="_blank" rel="noopener noreferrer" className="text-company-blue-400 hover:text-company-blue-300 text-sm flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="break-all">cbhanuprakash.great-site.net</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sleek Vision. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0 justify-center">
              {[
                { name: 'Privacy Policy', path: '#' },
                { name: 'Terms of Service', path: '#' },
                { name: 'Sitemap', path: '#' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-company-blue-400 text-sm transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
