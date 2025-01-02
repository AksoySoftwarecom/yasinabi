import React from 'react';
import { Header } from '../Header';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {children}
      </main>
      <Navigation />
      <Footer />
    </div>
  );
};