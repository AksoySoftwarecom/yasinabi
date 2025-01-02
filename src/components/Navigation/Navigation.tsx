import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from './navigationItems';

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-2">
      <div className="flex space-x-2">
        {navigationItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              location.pathname === path
                ? 'bg-yellow-400 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-yellow-100'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="sr-only">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};