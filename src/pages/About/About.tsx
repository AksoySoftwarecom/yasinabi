import React from 'react';
import { useTranslation } from 'react-i18next';
import { LegoTimeline } from '../../components/LegoTimeline';
import { PageSEO } from '../../components/SEO/PageSEO';

export const About = () => {
  const { t } = useTranslation();
  
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Docker', level: 70 },
  ];

  return (
    <>
      <PageSEO
        title={t('meta.about_title')}
        description={t('meta.about_description')}
        path="/about"
      />
      
      <div className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">{t('about.title')}</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{t('about.experience')}</h3>
          <LegoTimeline />
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">{t('about.skills')}</h3>
          <div className="space-y-4">
            {skills.map(({ name, level }) => (
              <div key={name} className="relative">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{name}</span>
                  <span className="text-gray-600">{level}%</span>
                </div>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                    style={{ width: `${level}%` }}
                  >
                    {Array.from({ length: Math.floor(level / 10) }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-0 w-2 h-4 bg-yellow-500"
                        style={{ left: `${i * 10}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};