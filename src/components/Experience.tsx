import React from 'react';
import { Building2, Calendar, ChevronRight, Database, Settings } from 'lucide-react';

const Experience = () => {
  const companyExperience = {
    company: "Accenture",
    totalDuration: "September 2022 - Present",
    totalYears: "2+ years",
    companyLogo: <Building2 className="w-8 h-8" />,
    roles: [
      {
        id: 1,
        title: "Data Engineer, Management & Governance Analyst",
        duration: "November 2024 - Present",
        type: "Current Role",
        achievements: [
          "Designed ETL workflows to automate file extraction, transformation, and loading into staging and core tables.",
          "Developed, optimized, and deployed stored procedures to implement complex business logic and transformation rules.",
          "Designed SQL tables, views, and stored procedures aligned with business data requirements",
          "Improved ETL process performance by optimizing SQL queries, indexing, and removing bottlenecks.",
          "Performed data extraction from heterogeneous data sources, conducted cleansing, validation, and reconciliation",
          "Created technical documentation including requirements, test cases, and production support artifacts."
        ],
        technologies: ["SSIS", "SQL", "Python", "GDPR", "Data Governance"],
        icon: <Database className="w-5 h-5" />
      },
      {
        id: 2,
        title: "Associate Data Engineer",
        duration: "September 2022 - October 2024",
        type: "Previous Role",
        achievements: [
          "Managed and validated operational and transactional datasets to maintain high data accuracy and consistency.",
          "Optimized SQL queries and stored procedures for improved performance and faster data retrieval.",
          "Troubleshot database objects and reporting views using SSMS to ensure smooth data operations.",
          "Built and maintained Cognos Framework Manager models for reporting and metadata management.",
          "Developed BI dashboards and reports to provide insights for operations and business teams.",
          "Delivered ad-hoc SQL analysis for business investigations, anomaly detection, and data insights.",
          "Ensured data consistency, quality, and integrity across multiple reporting layers."
        ],
        technologies: ["SQL", "SSMS", "ServiceNow", "Data Quality", "IBM Cognos"],
        icon: <Settings className="w-5 h-5" />
      }
    ]
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-beige-50 to-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-olive-800 text-beige-100 rounded-full text-sm font-medium mb-4">
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-olive-800 mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-olive-600 max-w-2xl mx-auto">
            Building enterprise-scale internal data solutions and governance frameworks at Accenture
          </p>
        </div>

        {/* Company Block */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-beige-50 rounded-3xl shadow-xl border border-beige-200 overflow-hidden">
            {/* Company Header */}
            <div className="bg-olive-800 px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-beige-500 rounded-2xl flex items-center justify-center text-olive-800">
                    {companyExperience.companyLogo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-beige-100">{companyExperience.company}</h3>
                    <p className="text-beige-200 font-medium">{companyExperience.totalYears}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-beige-200 mb-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{companyExperience.totalDuration}</span>
                  </div>
                  <span className="px-3 py-1 bg-beige-500 text-olive-800 rounded-full text-xs font-medium">
                    Data Engineering
                  </span>
                </div>
              </div>
            </div>

            {/* Roles */}
            <div className="p-8">
              <div className="space-y-8">
                {companyExperience.roles.map((role, index) => (
                  <div key={role.id} className="relative">
                    {/* Timeline connector */}
                    {index < companyExperience.roles.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-beige-200"></div>
                    )}
                    
                    <div className="flex items-start space-x-6">
                      {/* Role Icon */}
                      <div className="w-12 h-12 bg-beige-100 rounded-xl flex items-center justify-center text-beige-600 flex-shrink-0">
                        {role.icon}
                      </div>

                      {/* Role Content */}
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-bold text-olive-800 mb-1">{role.title}</h4>
                            <div className="flex items-center text-olive-600">
                              <Calendar className="w-4 h-4 mr-2" />
                              <span className="text-sm">{role.duration}</span>
                              <span className={`ml-3 px-2 py-1 rounded-full text-xs font-medium ${
                                role.type === 'Current Role' 
                                  ? 'bg-beige-100 text-beige-700' 
                                  : 'bg-olive-100 text-olive-600'
                              }`}>
                                {role.type}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h5 className="font-semibold text-olive-800 mb-3">Key Achievements:</h5>
                          <ul className="space-y-2">
                            {role.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <ChevronRight className="w-4 h-4 text-beige-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-olive-700 leading-relaxed text-sm">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className="font-semibold text-olive-800 mb-3">Technologies & Tools:</h5>
                          <div className="flex flex-wrap gap-2">
                            {role.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-olive-50 text-olive-700 rounded-full text-sm font-medium border border-olive-200 hover:bg-olive-100 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Divider between roles */}
                    {index < companyExperience.roles.length - 1 && (
                      <div className="mt-8 pt-8 border-t border-beige-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;