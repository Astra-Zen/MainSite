import React, { useEffect } from 'react';
import { ArrowRight, Rocket } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source
            src="https://cdn.pixabay.com/vimeo/328035647/digital-20077.mp4?width=1280&hash=f68fcb3b7c56f70a4b2df5e31ef7a61f7c6e416c"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-600/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="scroll-reveal text-4xl sm:text-6xl lg:text-7xl font-bold text-white">
            <span className="block animate-float">Astra Zen</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Technical Solutions
            </span>
          </h1>
          
          <p className="scroll-reveal max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300 animation-delay-2000">
            Transforming ideas into digital excellence with cutting-edge solutions
            and unparalleled expertise.
          </p>
          
          <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center animation-delay-4000">
            <button className="group inline-flex items-center px-8 py-3 text-lg font-medium text-white glossy-blue rounded-full hover:scale-105 transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group inline-flex items-center px-8 py-3 text-lg font-medium text-white border-2 border-blue-400/30 rounded-full hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
              Learn More
              <Rocket className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>
    </div>
  );
};

export default Hero;