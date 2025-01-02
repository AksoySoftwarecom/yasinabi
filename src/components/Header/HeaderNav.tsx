import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, Briefcase, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface NavItem {
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const getNavItems = (t: (key: string) => string, lang: string): NavItem[] => [
  { path: `/${lang}/about`, label: t('nav.about'), icon: User },
  { path: `/${lang}/projects`, label: t('nav.projects'), icon: Briefcase },
  { path: `/${lang}/contact`, label: t('nav.contact'), icon: Mail },
];

interface HeaderNavProps {
  currentPath: string;
}

export const HeaderNav = ({ currentPath }: HeaderNavProps) => {
  const { t, i18n } = useTranslation();
  const navItems = getNavItems(t, i18n.language);

  return (
    <nav className="hidden sm:flex items-center space-x-6">
      {navItems.map(({ path, label, icon: Icon }) => (
        <Link
          key={path}
          to={path}
          className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
            currentPath === path
              ? 'text-yellow-500 bg-yellow-50'
              : 'text-gray-600 hover:text-yellow-500 hover:bg-yellow-50'
          }`}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
  );
};