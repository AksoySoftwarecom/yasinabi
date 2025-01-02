import React from 'react';
import { Link } from 'react-router-dom';
import { Blocks } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HeaderLogo = () => {
  const { i18n } = useTranslation();
  
  return (
    <Link
      to={`/${i18n.language}`}
      className="flex items-center space-x-2 text-gray-900 hover:text-yellow-500 transition-colors"
    >
      <Blocks className="w-8 h-8" />
      <span className="font-bold text-lg">Yasin Ekmekci</span>
    </Link>
  );
};