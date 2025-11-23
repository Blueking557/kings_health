import { useState, useEffect } from "react";
import {ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import emergencyImg from '../assets/emergency.jpg';
import cardiologyImg from '../assets/cardiology.jpg';
import pediatricsImg from '../assets/Imaging.jpg';
import surgicalImg from '../assets/surgical.jpg';
import diagnosticImg from '../assets/pediatrics.jpg';

function Hero() {
  
  const slides = [
    { title:'Emergency Department',
      description:'Our 24/7 Emergency Department is equipped with state-of-the-art facilities and staffed by experienced emergency physicians ready to handle any critical situation with speed and precision.',
      gradient: 'from-blue-300 to-cyan-300',
      image: emergencyImg,
    },
    { title:'Cardiology Center',
      description:'Advanced cardiac care featuring cutting-edge diagnostic equipment and interventional procedures. Our heart specialists provide comprehensive treatment for all cardiovascular conditions.',
      gradient: 'from-blue-300 to-cyan-300',
      image: cardiologyImg,
    },
    {
      title:'Pediatrics Ward',
      description:'A child-friendly environment designed to make young patients feel comfortable and safe. Our pediatric team specializes in providing compassionate care for infants, children, and adolescents',
      gradient: 'from-blue-300 to-cyan-300',
      image: diagnosticImg,
    },
    {
      title:'Surgical Site',
      description:'Modern operating theaters equipped with advanced surgical technology. Our skilled surgical teams perform complex procedures with the highest standards of safety and precision.',
      gradient: 'from-blue-300 to-cyan-300',
      image: surgicalImg,
    },
    {
      title:'Diagnostic Imaging',
      description:'Comprehensive imaging services including MRI, CT scans, X-rays, and ultrasound. Our radiologists utilize the latest technology to provide accurate and timely diagnoses.',
      gradient: 'from-blue-300 to-cyan-300',
      image: pediatricsImg,
    },

  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState(0);

  useEffect(() =>{
    const timer = setInterval(()=>{
      setCurrentSlide((prev) => (prev + 1) % slides.length )
    }, 5000);
    return() => clearInterval(timer);
  }, [slides.length]);

   const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        
        {/* Carousel Content */}
        <div className="relative h-full z-20">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              
              {/* Gradient Overlay on top of image */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-40`}></div>
              
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black opacity-20"></div>
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6">
                  <div className="max-w-4xl">
                    {/* Slide Number Indicator */}
                    <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-xs sm:text-sm font-bold mb-4 sm:mb-6">
                      {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </div>
                    
                    {/* Title with Animation */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
                      {slide.title}
                    </h1>
                    
                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white text-opacity-90 mb-6 sm:mb-8 md:mb-12 leading-relaxed max-w-3xl">
                      {slide.description}
                    </p>
                    
                    {/* Call to Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <button className="bg-white text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl text-sm sm:text-base">
                        Explore Department <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                      </button>
                      <button className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm sm:text-base">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 group"
        >
          <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={20} />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 group"
        >
          <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={20} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 sm:w-12 h-2 sm:h-3 bg-white'
                  : 'w-2 sm:w-3 h-2 sm:h-3 bg-white bg-opacity-40 hover:bg-opacity-60'
              }`}
            />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-white opacity-5 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-white opacity-5 rounded-full blur-3xl z-0"></div>
      </section>

      {/* Quick Stats Bar */}
      
    </div>
  );
}export default Hero;