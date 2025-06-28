import React from 'react';

const Skills = () => {
  const allSkills = [
    {
      name: "SQL",
      category: "Database",
      icon: "🗄️",
      description: "Advanced database querying and optimization"
    },
    {
      name: "SSIS",
      category: "ETL",
      icon: "🔄",
      description: "SQL Server Integration Services for data pipelines"
    },
    {
      name: "Python",
      category: "Programming",
      icon: "🐍",
      description: "Automation scripts and data processing"
    },
    {
      name: "ServiceNow",
      category: "Platform",
      icon: "⚙️",
      description: "IT service management and workflow automation"
    },
    {
      name: "Tableau",
      category: "Visualization",
      icon: "📊",
      description: "Business intelligence and data visualization"
    },
    {
      name: "SSMS",
      category: "Database",
      icon: "💾",
      description: "SQL Server Management Studio"
    },
    {
      name: "Cognos",
      category: "Reporting",
      icon: "📈",
      description: "Enterprise reporting and analytics"
    },
    {
      name: "PowerBI",
      category: "Visualization",
      icon: "⚡",
      description: "Microsoft business analytics solution"
    },
    {
      name: "GDPR Compliance",
      category: "Governance",
      icon: "🛡️",
      description: "Data protection and privacy regulations"
    },
    {
      name: "Data Quality",
      category: "Governance",
      icon: "✅",
      description: "Data validation and quality assurance"
    },
    {
      name: "ETL Pipelines",
      category: "Engineering",
      icon: "🔗",
      description: "Extract, Transform, Load data processes"
    },
    {
      name: "API Integration",
      category: "Integration",
      icon: "🔌",
      description: "System integration and data exchange"
    }
  ];

  const categories = [
    { name: "Database", color: "bg-olive-100 text-olive-700" },
    { name: "ETL", color: "bg-beige-100 text-beige-700" },
    { name: "Programming", color: "bg-olive-100 text-olive-700" },
    { name: "Platform", color: "bg-beige-100 text-beige-700" },
    { name: "Visualization", color: "bg-olive-100 text-olive-700" },
    { name: "Reporting", color: "bg-beige-100 text-beige-700" },
    { name: "Governance", color: "bg-olive-100 text-olive-700" },
    { name: "Engineering", color: "bg-beige-100 text-beige-700" },
    { name: "Integration", color: "bg-olive-100 text-olive-700" }
  ];

  const getCategoryColor = (category) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : "bg-olive-100 text-olive-700";
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-beige-50 to-olive-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-olive-800 text-beige-100 rounded-full text-sm font-medium mb-6">
            Core Competencies
          </div>
          <h2 className="text-4xl font-bold text-olive-800 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-olive-600 max-w-2xl mx-auto">
            Comprehensive technical skills across data engineering, governance, and business intelligence
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {allSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-beige-50 rounded-2xl p-6 shadow-sm border border-beige-200 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Skill Header */}
              <div className="text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-olive-800 mb-3">{skill.name}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(skill.category)}`}>
                  {skill.category}
                </span>
                
                {/* Description */}
                <p className="text-sm text-olive-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="bg-beige-50 rounded-2xl p-8 shadow-sm border border-beige-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-olive-800 mb-2">Professional Experience</h3>
            <p className="text-olive-600">Years of hands-on experience with enterprise data systems</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-beige-500 mb-2">2+</div>
              <div className="text-sm text-olive-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-olive-500 mb-2">15+</div>
              <div className="text-sm text-olive-600">Internal Systems</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-beige-500 mb-2">99%</div>
              <div className="text-sm text-olive-600">Data Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-olive-500 mb-2">100%</div>
              <div className="text-sm text-olive-600">GDPR Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;