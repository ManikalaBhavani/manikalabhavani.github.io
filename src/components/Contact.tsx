import React, { useState } from 'react';
import { Mail, Linkedin, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "bhavanimanikala99@gmail.com",
      link: "mailto:bhavanimanikala99@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/dedeepya-chowdary",
      link: "https://linkedin.com/in/dedeepya-chowdary",
      description: "Let's connect professionally"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Available for Remote Work",
      link: "#",
      description: "Open to global opportunities"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-olive-800 to-olive-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-beige-500 text-olive-800 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-beige-100 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-beige-200 max-w-2xl mx-auto">
            Ready to bring data engineering excellence to your team? 
            Let's discuss how we can build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-beige-100 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-4 bg-beige-100/10 backdrop-blur-sm rounded-xl hover:bg-beige-100/20 transition-all duration-300 group"
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <div className="w-12 h-12 bg-beige-500 rounded-lg flex items-center justify-center text-olive-800 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-beige-100 font-semibold mb-1">{info.title}</h4>
                      <p className="text-beige-300 mb-1">{info.value}</p>
                      <p className="text-beige-400 text-sm">{info.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Why Work With Me */}
            <div className="bg-beige-100/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold text-beige-100 mb-4">Why Work With Me?</h4>
              <ul className="space-y-3 text-beige-200">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3"></div>
                  2+ years of enterprise data engineering experience
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-olive-400 rounded-full mr-3"></div>
                  Proven track record in GDPR compliance & governance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3"></div>
                  Strong collaboration and communication skills
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-olive-400 rounded-full mr-3"></div>
                  Passionate about clean, scalable solutions
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-beige-50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-olive-800 mr-3" />
              <h3 className="text-2xl font-bold text-olive-800">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-olive-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:ring-2 focus:ring-beige-500 focus:border-beige-500 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-olive-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:ring-2 focus:ring-beige-500 focus:border-beige-500 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-olive-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:ring-2 focus:ring-beige-500 focus:border-beige-500 transition-colors"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-olive-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-beige-300 rounded-lg focus:ring-2 focus:ring-beige-500 focus:border-beige-500 transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-beige-500 text-olive-800 font-semibold py-4 rounded-lg hover:bg-beige-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-beige-200 text-center">
              <p className="text-olive-600 text-sm">
                Prefer email? Reach out directly at{' '}
                <a
                  href="mailto:bhavanimanikala99@gmail.com"
                  className="text-beige-600 hover:text-beige-700 font-medium"
                >
                  bhavanimanikala99@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;