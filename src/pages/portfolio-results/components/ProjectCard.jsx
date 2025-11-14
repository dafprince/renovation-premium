import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === project?.images?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.images?.length - 1 : prev - 1
    );
  };

  const formatBudget = (budget) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    })?.format(budget);
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle hover:shadow-rose transition-premium hover-lift cursor-pointer group">
      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <Image
          src={project?.images?.[currentImageIndex]}
          alt={`${project?.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Image Navigation */}
        {project?.images?.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-premium opacity-0 group-hover:opacity-100"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-premium opacity-0 group-hover:opacity-100"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {project?.images?.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-premium ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Project Type Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-accent">
            {project?.type}
          </span>
        </div>

        {/* Energy Rating Badge */}
        {project?.energyRating && (
          <div className="absolute top-3 right-3">
            <div className="bg-success text-success-foreground px-2 py-1 rounded text-xs font-accent flex items-center space-x-1">
              <Icon name="Zap" size={12} />
              <span>{project?.energyRating}</span>
            </div>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-cta text-lg text-text-primary line-clamp-2 flex-1">
            {project?.title}
          </h3>
          <div className="flex items-center space-x-1 ml-2">
            <Icon name="Star" size={16} className="text-warning fill-current" />
            <span className="text-sm font-accent text-text-primary">
              {project?.rating}
            </span>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Project Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={14} className="text-text-secondary" />
            <span className="text-xs text-text-secondary">{project?.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Calendar" size={14} className="text-text-secondary" />
            <span className="text-xs text-text-secondary">{project?.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Euro" size={14} className="text-text-secondary" />
            <span className="text-xs text-text-secondary">{formatBudget(project?.budget)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="TrendingUp" size={14} className="text-success" />
            <span className="text-xs text-success">-{project?.energySavings}%</span>
          </div>
        </div>

        {/* Client Satisfaction */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" size={14} className="text-primary" />
            <span className="text-xs text-text-secondary">Satisfaction client</span>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)]?.map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={12}
                className={i < Math.floor(project?.satisfaction / 20) ? 'text-warning fill-current' : 'text-gray-300'}
              />
            ))}
            <span className="text-xs text-text-primary ml-1">{project?.satisfaction}%</span>
          </div>
        </div>

        {/* Action Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onViewDetails(project)}
          iconName="Eye"
          iconPosition="left"
          iconSize={14}
          className="w-full hover-scale"
        >
          Voir le projet
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;