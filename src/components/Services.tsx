import React from 'react';
import { Globe, TrendingUp, Settings } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Custom web solutions built with cutting-edge technologies and best practices for optimal performance and user experience.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Strategic digital marketing campaigns that drive growth, engage audiences, and deliver measurable results.',
  },
  {
    icon: Settings,
    title: 'Online Business Management',
    description:
      'Comprehensive business management solutions to streamline operations and maximize efficiency.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your digital presence and drive
            business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="scroll-reveal group p-8 glossy-blue rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;