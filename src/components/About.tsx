import React from 'react';
import { Calendar, CheckCircle, Users } from 'lucide-react';

const milestones = [
  {
    year: 2020,
    title: 'Founded',
    description: 'Started with a vision to transform digital landscapes',
    icon: Calendar,
  },
  {
    year: 2022,
    title: '500+ Projects',
    description: 'Delivered excellence across diverse industries',
    icon: CheckCircle,
  },
  {
    year: 2023,
    title: '100+ Clients',
    description: 'Built lasting partnerships worldwide',
    icon: Users,
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From humble beginnings to industry leadership, our path has been marked by
            innovation, dedication, and continuous growth.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-blue-400" />

          {/* Timeline items */}
          <div className="space-y-20">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-center scroll-reveal ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}
                  >
                    <div className="p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800 transform transition-all duration-300 hover:scale-105">
                      <div className="flex items-center mb-4">
                        <Icon className="h-8 w-8 text-blue-500 mr-3" />
                        <span className="text-2xl font-bold text-white">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;