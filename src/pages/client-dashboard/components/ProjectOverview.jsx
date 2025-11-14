import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProjectOverview = ({ currentProject }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'En cours': return 'text-warning';
      case 'Terminé': return 'text-success';
      case 'En attente': return 'text-text-secondary';
      default: return 'text-primary';
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-success';
    if (progress >= 50) return 'bg-warning';
    return 'bg-primary';
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-headline text-text-primary">Projet Actuel</h2>
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={20} className="text-text-secondary" />
          <span className="text-sm text-text-secondary">Mis à jour le 05/09/2025</span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Project Details */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-cta text-text-primary mb-2">{currentProject?.name}</h3>
            <p className="text-text-secondary">{currentProject?.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-sm font-accent text-text-secondary">Adresse</span>
              </div>
              <p className="text-sm text-text-primary">{currentProject?.address}</p>
            </div>

            <div className="bg-surface rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="User" size={16} className="text-primary" />
                <span className="text-sm font-accent text-text-secondary">Chef de Projet</span>
              </div>
              <p className="text-sm text-text-primary">{currentProject?.projectManager}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Activity" size={20} className={getStatusColor(currentProject?.status)} />
              <span className={`font-accent ${getStatusColor(currentProject?.status)}`}>
                {currentProject?.status}
              </span>
            </div>
            <span className="text-2xl font-headline text-text-primary">
              {currentProject?.progress}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-border rounded-full h-3">
            <div 
              className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(currentProject?.progress)}`}
              style={{ width: `${currentProject?.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Project Image */}
        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden">
            <Image
              src={currentProject?.image}
              alt={`Projet ${currentProject?.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
            <span className="text-sm font-accent text-text-primary">
              Phase: {currentProject?.currentPhase}
            </span>
          </div>
        </div>
      </div>
      {/* Timeline Preview */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="text-lg font-cta text-text-primary mb-4">Prochaines Étapes</h4>
        <div className="space-y-3">
          {currentProject?.upcomingMilestones?.map((milestone, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-3 h-3 bg-primary rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <p className="text-sm font-accent text-text-primary">{milestone?.title}</p>
                <p className="text-xs text-text-secondary">{milestone?.date}</p>
              </div>
              <Icon name="ChevronRight" size={16} className="text-text-secondary" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;