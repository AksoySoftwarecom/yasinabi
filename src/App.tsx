import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components';
import { Home, About, Projects, Contact } from './pages';
import { useTranslation } from 'react-i18next';
import { languages } from './components/LanguageSwitcher/LanguageSwitcher';

function App() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Language-specific routes */}
            {languages.map(({ code }) => (
              <React.Fragment key={code}>
                <Route path={`/${code}`} element={<Home />} />
                <Route path={`/${code}/about`} element={<About />} />
                <Route path={`/${code}/projects`} element={<Projects />} />
                <Route path={`/${code}/contact`} element={<Contact />} />
              </React.Fragment>
            ))}

            {/* Default routes - redirect to current language */}
            <Route path="/" element={<Navigate to={`/${currentLang}`} replace />} />
            <Route path="/about" element={<Navigate to={`/${currentLang}/about`} replace />} />
            <Route path="/projects" element={<Navigate to={`/${currentLang}/projects`} replace />} />
            <Route path="/contact" element={<Navigate to={`/${currentLang}/contact`} replace />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;