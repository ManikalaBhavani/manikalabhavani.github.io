import React from 'react';
import { Code2, Database, Shield, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "Building scalable ETL pipelines and data architectures"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Governance",
      description: "Ensuring GDPR compliance and data security protocols"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "System Integration",
      description: "Seamless integration across enterprise systems"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Cross-functional teamwork and stakeholder alignment"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-beige-50 to-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-olive-100 text-olive-600 rounded-full text-sm font-medium">
                About Me
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-olive-800 leading-tight">
                Transforming Data Into 
                <span className="text-beige-500"> Strategic Assets</span>
              </h2>
              
              <div className="space-y-4 text-lg text-olive-700 leading-relaxed">
                <div className="border-l-4 border-beige-500 pl-6">
                  <p>
                    I'm Durga Bhavani, a results-oriented Data Engineer with hands-on experience in building and maintaining enterprise-scale data pipelines. At Accenture, I work on data governance, security compliance (GDPR), data ingestion, and validation automation.
                  </p>
                </div>
                
                <p>
                  I thrive on clean architecture, resilient systems, and collaborating across teams to turn messy data into meaningful insights. My passion lies in system integrity, user trust, and community development—both in code and through corporate social responsibility initiatives.
                </p>
                
                <p>
                  With a strong foundation in SQL, SSIS, Python, and ServiceNow, I help enterprises make data-driven decisions by ensuring data quality, secure pipelines, and scalable integration solutions.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-beige-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-olive-800">2+</div>
                <div className="text-sm text-olive-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-olive-800">15+</div>
                <div className="text-sm text-olive-600">Internal Systems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-olive-800">99%</div>
                <div className="text-sm text-olive-600">Data Accuracy</div>
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6">
            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-beige-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-beige-200 hover:border-beige-300"
                >
                  <div className="text-beige-500 mb-3">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-olive-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-olive-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Professional Summary Card */}
            <div className="bg-olive-50 p-8 rounded-2xl border border-olive-200">
              <h3 className="text-xl font-bold text-olive-800 mb-4">Professional Focus</h3>
              <ul className="space-y-3 text-olive-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3"></div>
                  Building scalable SSIS ETL pipelines with 30% performance improvement
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-olive-400 rounded-full mr-3"></div>
                  GDPR compliance & data governance frameworks
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3"></div>
                  Cross-platform data integration using ServiceNow & SQL Server
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-olive-400 rounded-full mr-3"></div>
                  Data quality assurance & validation processes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;