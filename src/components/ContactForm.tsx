import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div className="relative">
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          placeholder={t('contact.form.name')}
          required
        />
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-sm transform rotate-45"></div>
      </div>
      
      <div className="relative">
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          placeholder={t('contact.form.email')}
          required
        />
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-sm transform rotate-45"></div>
      </div>
      
      <div className="relative">
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-white rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          placeholder={t('contact.form.message')}
          rows={4}
          required
        ></textarea>
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-green-500 rounded-sm transform rotate-45"></div>
      </div>
      
      <button
        type="submit"
        className="w-full px-6 py-3 bg-yellow-400 text-white rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center space-x-2"
      >
        <span>{t('contact.form.send')}</span>
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};