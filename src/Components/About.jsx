import React from 'react';
import { Heart, Award, Users, Target, Eye, Shield, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  // ===== DATA ARRAYS =====
  
  // Core values of the hospital
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every patient with empathy, respect, and genuine care for their well-being."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards of medical practice and continuous improvement."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold ethical principles and transparency in all our interactions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work as a unified team to deliver comprehensive patient-centered care."
    }
  ];

  // Hospital statistics
  const statistics = [
    { number: "25+", label: "Years of Excellence", color: "from-blue-500 to-blue-700" },
    { number: "50+", label: "Medical Specialists", color: "from-cyan-500 to-blue-600" },
    { number: "150K+", label: "Patients Served", color: "from-blue-400 to-cyan-500" },
    { number: "98%", label: "Satisfaction Rate", color: "from-sky-500 to-blue-600" }
  ];

  // Key achievements and features
  const achievements = [
    "JCI Accredited Healthcare Facility",
    "24/7 Emergency Medical Services",
    "State-of-the-art Medical Equipment",
    "Board-Certified Medical Professionals",
    "Patient-Centered Care Approach",
    "Advanced Diagnostic Capabilities"
  ];

  return (
    // ===== MAIN ABOUT SECTION =====
    // Add id="about" so navbar can scroll to this section
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Small badge above title */}
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            ABOUT US
          </div>
          
          {/* Main title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Building Healthier Communities
          </h2>
          
          {/* Subtitle/Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over two decades, Kings Health has been at the forefront of medical excellence, 
            combining cutting-edge technology with compassionate care to serve our community.
          </p>
        </div>

        {/* ===== STATISTICS BAR ===== */}
        {/* Grid of 4 statistics with gradient backgrounds */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 sm:p-8 text-center text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              {/* Big number */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              {/* Label */}
              <div className="text-xs sm:text-sm md:text-base font-semibold opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ===== VISION AND MISSION CARDS ===== */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 sm:mb-20">
          
          {/* VISION CARD */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border-t-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300">
            {/* Icon */}
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="text-blue-600" size={32} />
            </div>
            
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              To be the most trusted healthcare provider in Nigeria, setting the standard for quality, 
              innovation, and patient-centered care. We envision a future where every individual has 
              access to world-class medical services that promote health, prevent disease, and restore wellness.
            </p>
            
            {/* Decorative element */}
            <div className="flex items-center gap-3 text-blue-600 font-semibold">
              <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
              <span>Leading Healthcare Innovation</span>
            </div>
          </div>

          {/* MISSION CARD */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 sm:p-10 text-white hover:shadow-2xl transition-shadow duration-300">
            {/* Icon */}
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            
            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Our Mission
            </h3>
            
            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed mb-6 text-blue-50">
              To deliver exceptional healthcare services through a combination of skilled professionals, 
              advanced medical technology, and unwavering commitment to patient well-being and satisfaction. 
              We strive to make quality healthcare accessible, affordable, and effective for all.
            </p>
            
            {/* Decorative element */}
            <div className="flex items-center gap-3 font-semibold">
              <div className="w-12 h-1 bg-white rounded-full"></div>
              <span>Excellence in Every Interaction</span>
            </div>
          </div>
        </div>

        {/* ===== CORE VALUES SECTION ===== */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          
          {/* Grid of 4 value cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
                >
                  {/* Icon in colored circle */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-xl font-bold text-gray-900 text-center mb-3">
                    {value.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== ACHIEVEMENTS LIST ===== */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 sm:p-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Why Choose Kings Health?
          </h3>
          
          {/* Two-column list of achievements */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Checkmark icon */}
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                
                {/* Achievement text */}
                <span className="text-base sm:text-lg font-semibold text-gray-800">
                  {achievement}
                </span>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-10">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Schedule Your Visit Today
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}


