import React from 'react';
import { useTranslation } from 'react-i18next';
import { LegoAvatar } from '../../components/LegoAvatar';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { PageSEO } from '../../components/SEO/PageSEO';

export const Home = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <PageSEO
        title={t('meta.title')}
        description={t('meta.description')}
        path="/"
      />
      
      <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
        <LegoAvatar />
        
        <h1 className="mt-8 text-4xl font-bold text-gray-800">
          Yasin Ekmekci
        </h1>
        
        <p className="mt-4 text-xl text-gray-600 max-w-2xl text-center">
          {t('home.title')}. {t('home.subtitle')}.
        </p>
        
        <div className="mt-8 flex space-x-6">
          <a
            href="https://github.com/yasinekmekci"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/yasinekmekci"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/yasinekmekci"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  );
};