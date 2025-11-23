import React, { useState } from 'react';

import { 
  User, 
  Award, 
  Calendar, 
  Clock,
  Phone,
  Mail,
  GraduationCap,
  Briefcase,
  Star,
  Heart,
  Brain,
  Baby,
  Activity,
  Bone,
  Eye,
  CheckCircle
} from 'lucide-react';

export default function Doctors() {
  // ===== STATE MANAGEMENT =====
  // Track which specialty filter is active (null means show all)
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  // ===== SPECIALTIES FOR FILTERING =====
  const specialties = [
    { id: null, name: "All Doctors", icon: User },
    { id: "cardiology", name: "Cardiology", icon: Heart },
    { id: "neurology", name: "Neurology", icon: Brain },
    { id: "pediatrics", name: "Pediatrics", icon: Baby },
    { id: "orthopedics", name: "Orthopedics", icon: Bone },
    { id: "internal", name: "Internal Medicine", icon: Activity },
    { id: "ophthalmology", name: "Ophthalmology", icon: Eye }
  ];

  // ===== DOCTORS DATA =====
    const doctors = [
    {
      id: 1,
      name: "Dr. Kingsley Udochukwu",
      specialty: "cardiology",
      specialtyName: "Chief Cardiologist",
      credentials: "MD, FACC, FSCAI",
      experience: "15 years",
      education: "Harvard Medical School",
      languages: ["English", "French"],
      rating: 4.9,
      patients: "2000+",
      availability: "Mon - Fri",
      description: "Specializing in interventional cardiology with expertise in complex cardiac procedures and preventive heart care.",
      color: "from-red-400 to-pink-500",
      image: "kings.jpg" // 👈 upload here
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "neurology",
      specialtyName: "Neurologist & Neurosurgeon",
      credentials: "MD, PhD, FAANS",
      experience: "12 years",
      education: "Johns Hopkins University",
      languages: ["English", "Mandarin"],
      rating: 4.8,
      patients: "1800+",
      availability: "Tue - Sat",
      description: "Expert in treating neurological disorders including stroke, epilepsy, and neurodegenerative diseases.",
      color: "from-purple-400 to-indigo-500",
      image: "/images/doctors/michael-chen.jpg"
    },
    {
      id: 3,
      name: "Dr. Emily Williams",
      specialty: "pediatrics",
      specialtyName: "Pediatrician",
      credentials: "MD, FAAP",
      experience: "10 years",
      education: "Stanford Medical School",
      languages: ["English", "Spanish"],
      rating: 5.0,
      patients: "2500+",
      availability: "Mon - Sat",
      description: "Dedicated to providing comprehensive healthcare for children from infancy through adolescence.",
      color: "from-pink-400 to-rose-500",
      image: "/images/doctors/emily-williams.jpg"
    },
    {
      id: 4,
      name: "Dr. James Anderson",
      specialty: "orthopedics",
      specialtyName: "Orthopedic Surgeon",
      credentials: "MD, FAAOS",
      experience: "18 years",
      education: "Mayo Clinic Medical School",
      languages: ["English"],
      rating: 4.7,
      patients: "2200+",
      availability: "Mon - Fri",
      description: "Specialist in joint replacement surgery, sports medicine, and complex fracture management.",
      color: "from-orange-400 to-amber-500",
      image: "/images/doctors/james-anderson.jpg"
    },
    {
      id: 5,
      name: "Dr. Priya Patel",
      specialty: "internal",
      specialtyName: "Internal Medicine Specialist",
      credentials: "MD, FACP",
      experience: "14 years",
      education: "Columbia Medical School",
      languages: ["English", "Hindi", "Gujarati"],
      rating: 4.9,
      patients: "3000+",
      availability: "Mon - Sat",
      description: "Expert in managing chronic diseases, preventive care, and complex medical conditions in adults.",
      color: "from-blue-400 to-cyan-500",
      image: "/images/doctors/priya-patel.jpg"
    },
    {
      id: 6,
      name: "Dr. Robert Taylor",
      specialty: "ophthalmology",
      specialtyName: "Ophthalmologist",
      credentials: "MD, FACS",
      experience: "16 years",
      education: "University of Pennsylvania",
      languages: ["English", "German"],
      rating: 4.8,
      patients: "1900+",
      availability: "Tue - Sat",
      description: "Specializing in cataract surgery, LASIK, and comprehensive eye care for all ages.",
      color: "from-teal-400 to-cyan-500",
      image: "/images/doctors/robert-taylor.jpg"
    }
  ];


  // ===== FILTER DOCTORS BY SPECIALTY =====
  const filteredDoctors = selectedSpecialty 
    ? doctors.filter(doctor => doctor.specialty === selectedSpecialty)
    : doctors;

  return (
    // Add id="doctors" for navbar navigation
    <section id="doctors" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            OUR MEDICAL TEAM
          </div>
          
          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Meet Our Expert Physicians
          </h2>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our distinguished team of board-certified physicians brings decades of combined experience 
            and unwavering commitment to delivering exceptional patient care.
          </p>
        </div>

        {/* ===== SPECIALTY FILTER BUTTONS ===== */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            const isActive = selectedSpecialty === specialty.id;
            
            return (
              <button
                key={specialty.id}
                onClick={() => setSelectedSpecialty(specialty.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg'
                }`}
              >
                <Icon size={20} />
                <span>{specialty.name}</span>
              </button>
            );
          })}
        </div>

        {/* ===== DOCTORS GRID ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredDoctors.map((doctor) => (
            <div 
              key={doctor.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Doctor Header with Gradient */}
              <div className={`bg-gradient-to-br ${doctor.color} p-6 sm:p-8 text-center relative overflow-hidden`}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
                
                {/* Doctor Avatar Placeholder */}
                <div className="relative z-10 mx-auto mb-4">
                 <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full overflow-hidden shadow-2xl mx-auto flex items-center justify-center">
                    {doctor.image ? (
                    <img 
                     src={doctor.image} 
                     alt={doctor.name} 
                     className="w-full h-full object-cover"
                   />
                   ) : (
                  <User className="text-gray-400" size={48} />
                   )}
                </div>

                  
                  {/* Rating Badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                    <Star size={14} fill="currentColor" />
                    {doctor.rating}
                  </div>
                </div>

                {/* Doctor Name */}
                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                  {doctor.name}
                </h3>
                
                {/* Specialty */}
                <p className="text-white text-opacity-90 font-semibold mb-1">
                  {doctor.specialtyName}
                </p>
                
                {/* Credentials */}
                <p className="text-white text-opacity-80 text-sm">
                  {doctor.credentials}
                </p>
              </div>

              {/* Doctor Details */}
              <div className="p-6">
                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {doctor.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Briefcase className="text-blue-600" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="text-sm font-bold text-gray-900">{doctor.experience}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award className="text-blue-600" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Patients</p>
                      <p className="text-sm font-bold text-gray-900">{doctor.patients}</p>
                    </div>
                  </div>
                </div>

                {/* Education & Languages */}
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Education</p>
                      <p className="text-sm font-semibold text-gray-800">{doctor.education}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-xs text-gray-500">Languages</p>
                      <p className="text-sm font-semibold text-gray-800">{doctor.languages.join(", ")}</p>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="text-blue-600" size={18} />
                    <span className="text-sm font-semibold text-gray-700">Available: {doctor.availability}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-blue-600 text-white py-3 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <Calendar size={16} />
                    Book Now
                  </button>
                  
                  <button className="border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== CALL TO ACTION SECTION ===== */}
        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Need to Consult a Specialist?
          </h3>
          
          <p className="text-lg sm:text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Our team of expert physicians is ready to provide you with personalized care. 
            Book an appointment today and take the first step towards better health.
          </p>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-4 rounded-xl">
              <Phone size={24} />
              <div className="text-left">
                <p className="text-sm text-blue-100">Call Us</p>
                <p className="font-bold text-lg">+234 (0) 123 456 7890</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-4 rounded-xl">
              <Mail size={24} />
              <div className="text-left">
                <p className="text-sm text-blue-100">Email Us</p>
                <p className="font-bold text-lg">doctors@kingshealth.ng</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-white text-blue-600 px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Schedule Appointment Now
          </button>
        </div>

      </div>
    </section>
  );
}

