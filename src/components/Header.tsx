import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-beige-50/95 backdrop-blur-md shadow-lg border-b border-beige-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-olive-800' : 'text-beige-100'
              }`}
            >
              Durga Bhavani
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-beige-600 ${
                  isScrolled ? 'text-olive-700' : 'text-beige-200'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="mailto:bhavanimanikala99@gmail.com"
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors ${
                isScrolled
                  ? 'text-olive-800 bg-beige-100 hover:bg-beige-200'
                  : 'text-olive-800 bg-beige-100 hover:bg-beige-200'
              }`}
            >
              <Mail className="w-4 h-4 mr-2 text-olive-600" />
              Contact
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 bg-beige-500 text-olive-800 text-sm font-medium rounded-md hover:bg-beige-600 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${
                isScrolled ? 'text-olive-700 hover:bg-beige-100' : 'text-beige-200 hover:bg-beige-100/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-beige-50 border-t border-beige-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-olive-700 hover:text-beige-600 hover:bg-beige-100 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 pb-2 border-t border-beige-200">
                <a
                  href="mailto:m.b.durgabhavani@gmail.com"
                  className="flex items-center px-3 py-2 text-base font-medium text-olive-700 hover:text-beige-600 hover:bg-beige-100 rounded-md transition-colors"
                >
                  <Mail className="w-5 h-5 mr-3 text-olive-600" />
                  Contact
                </a>
                <a
                  href="#"
                  className="flex items-center px-3 py-2 text-base font-medium text-olive-700 hover:text-beige-600 hover:bg-beige-100 rounded-md transition-colors"
                >
                  <Download className="w-5 h-5 mr-3 text-olive-600" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
