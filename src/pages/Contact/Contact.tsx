import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '../../components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PageSEO } from '../../components/SEO/PageSEO';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageSEO
        title={t('meta.contact_title')}
        description={t('meta.contact_description')}
        path="/contact"
      />
      
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">{t('contact.title')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">{t('contact.email')}</h3>
                  <p className="text-gray-600">contact@yasinekmekci.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">{t('contact.phone')}</h3>
                  <p className="text-gray-600">+90 555 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">{t('contact.location')}</h3>
                  <p className="text-gray-600">{t('contact.address')}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};