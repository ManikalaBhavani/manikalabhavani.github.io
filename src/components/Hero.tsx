import React from 'react';
import { Download, Mail, Linkedin, Github, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#f5f5dc' }}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="flex items-center justify-center min-h-[calc(100vh-8rem)]">
          {/* Centered Content */}
          <div className="text-olive-800 space-y-8 text-center max-w-4xl">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-olive-800 text-beige-200 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-beige-400 rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-olive-600">
                  Durga Bhavani
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-olive-700 font-medium">
                Data Engineer | Governance Analyst
              </p>
              
              <p className="text-lg text-olive-600 leading-relaxed max-w-3xl mx-auto">
                Transforming enterprise data challenges into strategic advantages through secure, compliant, and high-performance data solutions. 
                I help organizations unlock the full potential of their data while ensuring GDPR compliance, reducing processing time by 30%, 
                and maintaining 99% data accuracy across complex enterprise ecosystems.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:bhavanimanikala99@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-olive-700 text-beige-100 text-lg font-semibold rounded-lg hover:bg-olive-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
              </a>
              
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-olive-600 text-olive-700 text-lg font-semibold rounded-lg hover:bg-olive-700 hover:text-beige-100 transition-all duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                View Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6 pt-8">
              <a
                href="https://linkedin.com/in/dedeepya-chowdary"
                className="text-olive-600 hover:text-olive-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-olive-600 hover:text-olive-700 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-olive-600 hover:text-olive-700 transition-colors group"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-olive-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;