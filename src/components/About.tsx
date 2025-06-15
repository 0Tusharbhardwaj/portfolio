import React, { useState, useEffect, useRef } from 'react';
import { PenTool, FileText, User, Lightbulb, Target } from 'lucide-react';

const About: React.FC = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const textLines = [
    "I'm a passionate technologist who thrives at the intersection of Web3 and Cloud Engineering.",
    "My journey began with traditional web development, but I quickly found myself drawn to the revolutionary potential of blockchain technology.",
    "When I'm not architecting decentralized applications or optimizing cloud deployments, you'll find me exploring smart contracts and AWS services.",
    "I believe technology should be accessible, scalable, and transformative. Every line of code I write is guided by these principles."
  ];

  const fullText = textLines.join(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isVisible, fullText]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-800 relative overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-6 animate-pulse-glow">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Who I Am
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Passionate about building the future of technology
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Animation Side */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-gray-700/50 relative overflow-hidden">
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-green-500/5 animate-pulse"></div>
                
                {/* Floating Paper Animation */}
                <div className="relative mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-all duration-500 border border-white/20 shadow-xl relative overflow-hidden">
                    {/* Paper Lines */}
                    <div className="space-y-3 mb-6">
                      <div className="h-2 bg-gray-600/50 rounded animate-pulse"></div>
                      <div className="h-2 bg-gray-700/50 rounded w-3/4 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="h-2 bg-gray-600/50 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      <div className="h-2 bg-gray-700/50 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                    
                    {/* Floating Document Icon */}
                    <div className="absolute top-4 right-4">
                      <FileText className="w-8 h-8 text-cyan-400 animate-float" />
                    </div>
                    
                    {/* Writing Effect */}
                    <div className="absolute bottom-4 right-4">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>

                {/* Animated Pen */}
                <div className="flex items-center justify-center relative">
                  <div className="relative group">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-purple-500/50">
                      <PenTool className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Writing Trail */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-500/20 rounded-full filter blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-purple-500/20 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Enhanced Text Content */}
            <div className="space-y-8">
              {/* Main Text Container */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 animate-pulse"></div>
                
                <div className="relative z-10">
                  <div className="text-gray-300 text-lg leading-relaxed font-light">
                    {text}
                    {isVisible && text.length < fullText.length && (
                      <span className="animate-pulse text-cyan-400 ml-1">|</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '5+', label: 'Years Learning', color: 'from-cyan-500/20 to-blue-600/20', border: 'border-cyan-500/30', icon: Target },
                  { value: '50+', label: 'Projects Built', color: 'from-purple-500/20 to-pink-600/20', border: 'border-purple-500/30', icon: FileText },
                  { value: '24/7', label: 'Always Growing', color: 'from-green-500/20 to-emerald-600/20', border: 'border-green-500/30', icon: Lightbulb },
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className={`text-center p-6 bg-gradient-to-br ${stat.color} backdrop-blur-sm rounded-xl border ${stat.border} hover:scale-105 transition-all duration-300 group`}>
                      <div className="mb-3">
                        <IconComponent className="w-6 h-6 mx-auto text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-cyan-400" />
                  My Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To bridge the gap between traditional web development and the decentralized future, 
                  creating solutions that are not just innovative, but accessible and impactful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;