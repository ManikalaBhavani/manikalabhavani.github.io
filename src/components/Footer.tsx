import React from 'react';
import { Heart, Code, Coffee, Linkedin, Mail, Download } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/durgabhavanimanikala/',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: 'Email',
      href: 'mailto:m.b.durgabhavani@gmail.com',
      icon: <Mail className="w-5 h-5" />
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-olive-900 text-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold">Durga Bhavani Manikala</h3>
            <p className="text-beige-200 leading-relaxed max-w-md">
              Data Engineer passionate about building secure, scalable data systems that drive business decisions. 
              Let's transform your data challenges into competitive advantages.
            </p>
            
            <div className="flex items-center space-x-6 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-beige-300 hover:text-beige-400 transition-colors p-2 rounded-lg hover:bg-beige-100/10"
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-beige-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-beige-300 hover:text-beige-100 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-beige-300">Get Started</h4>
            <div className="space-y-3">
              <a
                href="mailto:bhavanimanikala99@gmail.com"
                className="flex items-center text-beige-300 hover:text-beige-100 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                bhavanimanikala99@gmail.com
              </a>
              <a
                href="#"
                className="flex items-center text-beige-300 hover:text-beige-100 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>

            <div className="mt-6 p-4 bg-beige-100/10 rounded-lg">
              <p className="text-sm text-beige-200 mb-2">Available for:</p>
              <ul className="text-sm space-y-1">
                <li className="text-beige-300">• Full-time positions</li>
                <li className="text-beige-300">• Data engineering projects</li>
                <li className="text-beige-300">• Consulting opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-olive-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-beige-300 text-sm">
              <span>© {currentYear} Durga Bhavani Manikala. All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-2 text-beige-300 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-beige-400" />
              <span>using</span>
              <Code className="w-4 h-4 text-beige-400" />
              <span>React & Tailwind CSS</span>
            </div>
          </div>

{/*           {/* Decorative Elements */}
          <div className="mt-6 pt-6 border-t border-olive-800">
            <div className="flex items-center justify-center space-x-4 text-xs text-beige-400">
              <div className="flex items-center space-x-1">
                <Coffee className="w-3 h-3" />
                <span>Fueled by coffee and data</span>
              </div>
              <span>•</span>
              <span>Making data-driven decisions accessible</span>
              <span>•</span>
              <span>Building for the future</span>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
