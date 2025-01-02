import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderNav } from './HeaderNav';
import { HeaderLogo } from './HeaderLogo';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible
          ? 'transform translate-y-0 opacity-100'
          : 'transform -translate-y-full opacity-0'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <HeaderLogo />
            <div className="flex items-center space-x-4">
              <HeaderNav currentPath={location.pathname} />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};