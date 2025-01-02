import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-yellow-400 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">contact@yasinekmekci.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-yellow-400 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">+90 555 123 4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">Istanbul, Turkey</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};