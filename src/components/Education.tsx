import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-beige-50 to-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-olive-800 text-beige-100 rounded-full text-sm font-medium mb-4">
            Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-olive-800 mb-4">
            Academic Foundation
          </h2>
          <p className="text-lg text-olive-600 max-w-2xl mx-auto">
            Building strong technical foundations through comprehensive computer science education
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-beige-500"></div>
            
            {/* Education Card */}
            <div className="relative flex items-center justify-center">
              <div className="bg-beige-50 rounded-2xl shadow-lg border border-beige-200 p-8 max-w-2xl w-full relative z-10">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-beige-500 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-olive-800" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-olive-800">
                        Bachelor of Technology - Computer Science
                      </h3>
                      <div className="flex items-center text-beige-600 font-medium">
                        <Calendar className="w-4 h-4 mr-2" />
                        2018 - 2022
                      </div>
                    </div>
                    
                    <p className="text-beige-600 font-semibold mb-3 italic">
                      International School of Technology and Sciences for Women
                    </p>
                    
                    <div className="flex items-center mb-4">
                      <Award className="w-5 h-5 text-olive-500 mr-2" />
                      <span className="text-lg font-semibold text-olive-800">CGPA: 7.53</span>
                    </div>
                    
                    <div className="space-y-3">
                      <p className="text-olive-600 leading-relaxed">
                        Comprehensive computer science curriculum focusing on software engineering principles, 
                        database management systems, and system design fundamentals.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-olive-800">Core Subjects:</h4>
                          <ul className="text-sm text-olive-600 space-y-1">
                            <li>• Data Structures & Algorithms</li>
                            <li>• Database Management Systems</li>
                            <li>• Software Engineering</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-olive-800">Specialized Areas:</h4>
                          <ul className="text-sm text-olive-600 space-y-1">
                            <li>• System Design</li>
                            <li>• Web Technologies</li>
                            <li>• Project Management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-beige-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-olive-400 rounded-full opacity-60"></div>
              </div>
            </div>
            
            {/* Timeline Dot */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-beige-50 border-4 border-beige-500 rounded-full z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;