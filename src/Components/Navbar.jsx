import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Heart, Menu, X, Stethoscope } from 'lucide-react';
import HippocratesLogo from "../assets/hippocrates.webp";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Our Doctors' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);

    if (pageId === 'home') {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
      return;
    }

    const section = document.getElementById(pageId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth', // Smooth animation
        block: 'start' // Align to top of viewport
      });
    }
  };

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 sm:py-3 hidden md:block">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-300" />
                <span className="font-medium">+234 (0) 810 517 2640</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-300" />
                <span className="font-medium">contact@kingshealth.ng</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-blue-300" />
              <span className="font-medium">24/7 Emergency Services Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVIGATION BAR ===== */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white py-4 sm:py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center gap-8">

            {/* ===== LOGO SECTION ===== */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              
              {/* Logo Icon with Heart and Stethoscope SIDE BY SIDE */}
              <div className="relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute justify-end inset-0 bg-white opacity-10 rounded-xl">
                    
                  </div>
                  
                  {/* Icons side by side */}
                  <div className="flex items-center justify-center gap-1 sm:gap-2 relative z-10">
                    
                    <Heart
                      className="text-white"
                      size={26}
                      fill="white"
                    />
                    <Stethoscope
                      className="text-blue-100"
                      size={28}
                    />
                  </div>
                </div>

                {/* Decorative Badge */}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-blue-300 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Logo Text */}
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                  Kings Health
                </h1>
                <p className="text-xs sm:text-sm text-blue-600 font-semibold tracking-wider">
                  MEDICAL CENTER
                </p>
              </div>
            </div>

            {/* ===== DESKTOP NAVIGATION ===== */}
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="flex gap-10 xl:gap-14">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`text-base xl:text-lg font-semibold transition-all duration-300 pb-1 px-2 ${
                        activePage === item.id
                          ? 'text-blue-600 border-b-3 border-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* ===== RIGHT ACTIONS ===== */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button className="hidden sm:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                Book Appointment
              </button>

              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-gray-700" />
                ) : (
                  <Menu size={24} className="text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* ===== MOBILE MENU ===== */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="container mx-auto px-4 py-4 bg-gray-50 mt-4 rounded-lg">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      activePage === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-blue-100'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Book Appointment
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
