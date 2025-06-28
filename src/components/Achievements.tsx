import React from 'react';
import { Trophy, Star, Award, Target, TrendingUp, Users } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "TechExpress Way Merit Holder",
      description: "Awarded during Accenture Training for exceptional performance and technical excellence",
      category: "Recognition"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "High-Impact Contributor",
      description: "Consistently recognized for delivering secure internal data solutions and process improvements",
      category: "Performance"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Process Optimization Expert",
      description: "Achieved 30% improvement in internal ETL processing speed through innovative pipeline design",
      category: "Technical Excellence"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration Leader",
      description: "Positive reviews from managers for outstanding collaboration and automation mindset",
      category: "Leadership"
    }
  ];

  const metrics = [
    {
      value: "30%",
      label: "ETL Speed Improvement",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      value: "45%",
      label: "Error Reduction",
      icon: <Target className="w-6 h-6" />
    },
    {
      value: "100%",
      label: "GDPR Compliance",
      icon: <Award className="w-6 h-6" />
    },
    {
      value: "15+",
      label: "Internal Systems",
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-beige-100 to-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-beige-500 text-olive-800 rounded-full text-sm font-medium mb-4">
            Achievements & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-olive-800 mb-4">
            Proven Track Record
          </h2>
          <p className="text-lg text-olive-600 max-w-2xl mx-auto">
            Recognition for excellence in data engineering, governance, and team collaboration
          </p>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-beige-50 rounded-xl p-6 text-center shadow-sm border border-beige-200 hover:shadow-md transition-all duration-300"
            >
              <div className="text-beige-500 mb-3 flex justify-center">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-olive-800 mb-1">{metric.value}</div>
              <div className="text-sm text-olive-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-beige-50 rounded-2xl p-8 shadow-lg border border-beige-200 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-beige-500 rounded-xl flex items-center justify-center text-olive-800 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-olive-100 text-olive-700 rounded-full text-xs font-medium">
                      {achievement.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-olive-800 mb-3 group-hover:text-beige-600 transition-colors">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-olive-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-beige-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-olive-400 rounded-full opacity-60"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-olive-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-beige-100 mb-4">
              Ready to Make an Impact Together?
            </h3>
            <p className="text-beige-200 mb-6 max-w-2xl mx-auto">
              Let's discuss how my proven track record in data engineering and governance 
              can drive results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:bhavanimanikala99@gmail.com"
                className="inline-flex items-center px-8 py-3 bg-beige-500 text-olive-800 font-semibold rounded-lg hover:bg-beige-600 transition-all duration-200 transform hover:scale-105"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Let's Connect
              </a>
              <a
                href="#"
                className="inline-flex items-center px-8 py-3 border-2 border-beige-200 text-beige-100 font-semibold rounded-lg hover:bg-beige-100 hover:text-olive-800 transition-all duration-200"
              >
                <Award className="w-5 h-5 mr-2" />
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;