import React from 'react';
import { Link } from 'react-router-dom';
import { Blocks } from 'lucide-react';

export const HeaderLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center space-x-2 text-gray-900 hover:text-yellow-500 transition-colors"
    >
      <Blocks className="w-8 h-8" />
      <span className="font-bold text-lg">Yasin Ekmekci</span>
    </Link>
  );
};