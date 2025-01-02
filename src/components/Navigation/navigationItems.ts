import { Blocks, User, Briefcase, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NavigationItem {
  path: string;
  icon: LucideIcon;
  label: string;
}

export const navigationItems: NavigationItem[] = [
  { path: '/', icon: Blocks, label: 'Home' },
  { path: '/about', icon: User, label: 'About' },
  { path: '/projects', icon: Briefcase, label: 'Projects' },
  { path: '/contact', icon: Mail, label: 'Contact' }
];