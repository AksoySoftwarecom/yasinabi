import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <LanguageSwitcher variant="footer" />
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/yasinekmekci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-500 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/yasinekmekci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/yasinekmekci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-500 transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © {currentYear} Yasin Ekmekci. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};