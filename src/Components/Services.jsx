import React from 'react';
import { 
  Heart, 
  Activity, 
  Stethoscope, 
  Syringe, 
  Baby, 
  Brain, 
  Bone, 
  Eye, 
  Pill, 
  Microscope,
  Ambulance,
  Scissors,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function ServicesSection() {
  // ===== MAIN SERVICES DATA =====
  // These are the primary services offered by the hospital
  const mainServices = [
    {
      icon: Heart,
      title: "Obstetrics and Gynaecology",
      description: "We offer feto-maternal services and comprehensive well-woman care",
      features: ["Antenatal and Postnatal Care services", "Family Planning", "Cervical Cancer Sreening", "Gynaecological Surgeries"],
      color: "from-red-400 to-pink-500",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Eye,
      title: "Ophthalmology",
      description: "Expert diagnosis and treatment of Acute and Chronic Eye Diseases",
      features: ["Regular Eye Check up", "Fundoscopy", "Fluorescein Angiography", "Eye Surgeries"],
      color: "from-green-400 to-green-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Bone,
      title: "Orthopedics",
      description: "Specialized care for bones, joints, ligaments, tendons, and muscles with advanced surgical techniques.",
      features: ["Joint Replacement", "Sports Medicine", "Fracture Care", "Rehabilitation"],
      color: "from-orange-400 to-amber-500",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Baby,
      title: "Pediatrics",
      description: "Dedicated healthcare for infants, children, and adolescents in a child-friendly environment.",
      features: ["Newborn Care", "Vaccinations", "Growth Monitoring", "Child Development"],
      color: "from-pink-400 to-rose-500",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600"
    },
    {
      icon: Activity,
      title: "Internal Medicine",
      description: "Comprehensive care for adult health conditions with focus on prevention and wellness.",
      features: ["Chronic Disease Management", "Preventive Care", "Health Screenings", "Wellness Programs"],
      color: "from-blue-400 to-cyan-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Scissors,
      title: "General Surgery",
      description: "Advanced surgical procedures performed by experienced surgeons using state-of-the-art technology.",
      features: ["Minimally Invasive Surgery", "Emergency Surgery", "Outpatient Procedures", "Post-Op Care"],
      color: "from-teal-400 to-cyan-500",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600"
    }
  ];

  // ===== ADDITIONAL SERVICES =====
  // Quick list of other services offered
  const additionalServices = [
    { icon: Ambulance, name: "24/7 Emergency Care" },
    { icon: Microscope, name: "Laboratory Services" },
    { icon: Eye, name: "Ophthalmology" },
    { icon: Pill, name: "Pharmacy Services" },
    { icon: Stethoscope, name: "General Consultation" },
    { icon: Syringe, name: "Vaccination Center" }
  ];

  // ===== WHY CHOOSE OUR SERVICES =====
  const whyChooseUs = [
    "Board-certified medical professionals",
    "State-of-the-art medical equipment",
    "Personalized treatment plans",
    "Affordable healthcare packages",
    "24/7 emergency services",
    "Patient-centered care approach"
  ];

  return (
    // ===== MAIN SERVICES SECTION =====
    // Add id="services" for navbar navigation
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            OUR SERVICES
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Comprehensive Healthcare Services
          </h2>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From preventive care to specialized treatments, we offer a complete range of medical services 
            designed to meet all your healthcare needs under one roof.
          </p>
        </div>

        {/* ===== MAIN SERVICES GRID ===== */}
        {/* Grid of detailed service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-br ${service.color} p-6 relative overflow-hidden`}>
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-2xl flex items-center justify-center mb-4">
                      <Icon className="text-gray-800" size={32} />
                    </div>
                    
                    {/* Service Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                      What We Offer:
                    </p>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-sm text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Learn More 
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== ADDITIONAL SERVICES SECTION ===== */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 sm:p-12 mb-16 sm:mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10 sm:mb-12">
            Additional Services
          </h3>

          {/* Grid of quick service items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  
                  {/* Service Name */}
                  <p className="text-sm font-bold text-gray-800">
                    {service.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== WHY CHOOSE US SECTION ===== */}
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services?
              </h3>
              
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                At Kings Health, we combine medical excellence with compassionate care. 
                Our commitment to quality and patient satisfaction sets us apart.
              </p>

              {/* Features Checklist */}
              <div className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-white" size={16} />
                    </div>
                    <span className="text-base sm:text-lg text-gray-700 font-medium">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - CTA Card */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 sm:p-10 text-white">
              <h4 className="text-2xl sm:text-3xl font-bold mb-4">
                Need a Consultation?
              </h4>
              
              <p className="text-blue-50 mb-6 leading-relaxed">
                Book an appointment with our specialists today and take the first step 
                towards better health and wellness.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📞</span>
                  </div>
                  <span className="font-semibold">+234 (0) 810 517 2640</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">✉️</span>
                  </div>
                  <span className="font-semibold">contact@kingshealth.ng</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Book Appointment Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

