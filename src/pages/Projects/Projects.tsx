import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../../components/ProjectCard';
import { PageSEO } from '../../components/SEO/PageSEO';

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=450',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      githubUrl: 'https://github.com/yasinekmekci/ecommerce',
      liveUrl: 'https://ecommerce-demo.yasinekmekci.com',
    },
    {
      title: t('projects.taskmanager.title'),
      description: t('projects.taskmanager.description'),
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800&h=450',
      technologies: ['React', 'Firebase', 'Material-UI'],
      githubUrl: 'https://github.com/yasinekmekci/task-manager',
      liveUrl: 'https://tasks.yasinekmekci.com',
    },
    {
      title: t('projects.weather.title'),
      description: t('projects.weather.description'),
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800&h=450',
      technologies: ['React', 'TypeScript', 'OpenWeather API'],
      githubUrl: 'https://github.com/yasinekmekci/weather-dashboard',
      liveUrl: 'https://weather.yasinekmekci.com',
    },
  ];

  return (
    <>
      <PageSEO
        title={t('meta.projects_title')}
        description={t('meta.projects_description')}
        path="/projects"
      />
      
      <div className="py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};