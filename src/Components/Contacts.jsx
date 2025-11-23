import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  User,
  MessageSquare,
  Calendar,
  CheckCircle,
  Send,
  Ambulance
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            GET IN TOUCH
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Contact Kings Health
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Book your appointment or reach out to us. We're here to provide you with the best healthcare services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Ambulance size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">24/7 Emergency Line</h3>
                <p className="text-red-100 mb-3">For urgent medical assistance, call our emergency hotline immediately</p>
                <a href="tel:+2340123456789" className="inline-block bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300">
                  +234 (0) 123 456 7891
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Book an Appointment</h3>
            
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h4>
                <p className="text-gray-600 text-lg">
                  Your appointment request has been submitted. We'll contact you shortly to confirm.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-300 rounded-xl pl-12 pr-4 py-4 text-base focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-300 rounded-xl pl-12 pr-4 py-4 text-base focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-300 rounded-xl pl-12 pr-4 py-4 text-base focus:border-blue-600 focus:outline-none transition-colors"
                      placeholder="+234 XXX XXX XXXX"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-xl px-4 py-4 text-base focus:border-blue-600 focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Consultation</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="emergency">Emergency Care</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full border-2 border-gray-300 rounded-xl pl-12 pr-4 py-4 text-base focus:border-blue-600 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2 text-sm uppercase tracking-wide">
                    Additional Notes
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full border-2 border-gray-300 rounded-xl pl-12 pr-4 py-4 text-base focus:border-blue-600 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your symptoms or concerns..."
                    ></textarea>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Submit Appointment Request
                  <Send size={20} />
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}