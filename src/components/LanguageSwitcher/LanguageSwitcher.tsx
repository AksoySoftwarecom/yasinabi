import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ja', name: '日本語' }
];

interface LanguageSwitcherProps {
  variant?: 'header' | 'footer';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'header' }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = async (code: string) => {
    try {
      // Change language in i18next
      await i18n.changeLanguage(code);
      localStorage.setItem('i18nextLng', code);

      // Update URL to reflect language change
      const currentPath = location.pathname;
      const pathWithoutLang = currentPath.split('/').slice(2).join('/');
      const newPath = `/${code}${pathWithoutLang ? `/${pathWithoutLang}` : ''}`;
      navigate(newPath);
    } catch (error) {
      console.error('Failed to change language:', error);
    }
  };

  if (variant === 'footer') {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {languages.map(({ code, name }) => (
          <button
            key={code}
            onClick={() => handleLanguageChange(code)}
            className={`text-sm ${
              i18n.language === code
                ? 'text-yellow-500 font-semibold'
                : 'text-gray-600 hover:text-yellow-500'
            }`}
          >
            {name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative group">
      <button 
        className="flex items-center space-x-1 px-3 py-2 rounded-md text-gray-600 hover:text-yellow-500 hover:bg-yellow-50"
        aria-label="Select language"
      >
        <Globe className="w-5 h-5" />
        <span>{languages.find(lang => lang.code === i18n.language)?.name || 'Language'}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1" role="menu">
          {languages.map(({ code, name }) => (
            <button
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                i18n.language === code
                  ? 'bg-yellow-50 text-yellow-500 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              role="menuitem"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};