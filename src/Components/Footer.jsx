import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Stethoscope,
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Doctors', id: 'doctors' },
    { name: 'Contact', id: 'contact' }
  ];

  const services = [
    'Emergency Care',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Internal Medicine'
  ];

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                  <Heart className="text-white" size={24} fill="white" />
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Stethoscope className="text-white" size={24} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Kings Health</h3>
              <p className="text-blue-200 leading-relaxed mb-6">
                Committed to delivering world-class healthcare services with compassion, integrity, and excellence. Your trusted partner in health and wellness.
              </p>
              
              <div className="flex gap-3">
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook size={20} />
                </button>
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram size={20} />
                </button>
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin size={20} />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-blue-300">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button 
                      onClick={() => handleLinkClick(link.id)}
                      className="text-blue-200 hover:text-white transition-colors text-base font-medium flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-3 transition-all"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-blue-300">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button className="text-blue-200 hover:text-white transition-colors text-base font-medium flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full group-hover:w-3 transition-all"></span>
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6 text-blue-300">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-blue-200 leading-relaxed">
                      123 Health Boulevard, Medical District<br />
                      Awka, Anambra State<br />
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-white font-semibold">+234 (0) 810 517 2640</p>
                    <p className="text-blue-200 text-sm">Mon - Sat: 8AM - 6PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-white font-semibold">contact@kingshealth.ng</p>
                    <p className="text-blue-200 text-sm">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-white font-semibold">Emergency Services</p>
                    <p className="text-blue-200 text-sm">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-200 text-center md:text-left">
                &copy; 2025 Kings Health Medical Center. All rights reserved.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
                <button className="hover:text-white transition-colors">Privacy Policy</button>
                <button className="hover:text-white transition-colors">Terms of Service</button>
                <button className="hover:text-white transition-colors">Patient Rights</button>
                <button className="hover:text-white transition-colors">Careers</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
}