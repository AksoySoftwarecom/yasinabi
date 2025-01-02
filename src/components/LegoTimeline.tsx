import React from 'react';
import { useTranslation } from 'react-i18next';

const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <div className="relative pl-8 pb-8">
    <div className="absolute left-0 top-0 w-4 h-4 bg-yellow-400 rounded-sm transform rotate-45"></div>
    <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-200"></div>
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <span className="text-sm font-bold text-yellow-500">{year}</span>
      <h3 className="text-lg font-bold text-gray-800 mt-1">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

export const LegoTimeline = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <TimelineItem
        year="2023"
        title={t('about.timeline.2023.title')}
        description={t('about.timeline.2023.description')}
      />
      <TimelineItem
        year="2020"
        title={t('about.timeline.2020.title')}
        description={t('about.timeline.2020.description')}
      />
      <TimelineItem
        year="2018"
        title={t('about.timeline.2018.title')}
        description={t('about.timeline.2018.description')}
      />
    </div>
  );
};