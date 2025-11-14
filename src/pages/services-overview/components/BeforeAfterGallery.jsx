import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const BeforeAfterGallery = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  const currentProject = projects?.[selectedProject];

  const handlePrevious = () => {
    setSelectedProject(prev => prev === 0 ? projects?.length - 1 : prev - 1);
    setShowBefore(true);
  };

  const handleNext = () => {
    setSelectedProject(prev => prev === projects?.length - 1 ? 0 : prev + 1);
    setShowBefore(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-rose overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-headline text-xl text-text-primary mb-1">
              Nos réalisations
            </h3>
            <p className="text-text-secondary text-sm">
              Découvrez nos transformations réussies
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-lg border border-border hover:border-primary transition-premium"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <span className="text-sm text-text-secondary font-accent px-2">
              {selectedProject + 1} / {projects?.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg border border-border hover:border-primary transition-premium"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="h-80 overflow-hidden relative">
          <Image
            src={showBefore ? currentProject?.beforeImage : currentProject?.afterImage}
            alt={`${currentProject?.title} - ${showBefore ? 'Avant' : 'Après'}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          <div className="absolute bottom-4 left-4 text-white">
            <h4 className="font-cta text-lg mb-1">{currentProject?.title}</h4>
            <p className="text-white/90 text-sm">{currentProject?.location}</p>
          </div>

          <div className="absolute top-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-1 flex">
              <button
                onClick={() => setShowBefore(true)}
                className={`px-3 py-1 rounded text-sm font-accent transition-premium ${
                  showBefore 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-text-primary hover:bg-muted'
                }`}
              >
                Avant
              </button>
              <button
                onClick={() => setShowBefore(false)}
                className={`px-3 py-1 rounded text-sm font-accent transition-premium ${
                  !showBefore 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-text-primary hover:bg-muted'
                }`}
              >
                Après
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-cta text-text-primary mb-3">Détails du projet</h5>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Surface:</span>
                  <span className="font-accent text-text-primary">{currentProject?.surface}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Durée:</span>
                  <span className="font-accent text-text-primary">{currentProject?.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Budget:</span>
                  <span className="font-accent text-text-primary">{currentProject?.budget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Année:</span>
                  <span className="font-accent text-text-primary">{currentProject?.year}</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-cta text-text-primary mb-3">Améliorations</h5>
              <div className="space-y-2">
                {currentProject?.improvements?.map((improvement, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={14} className="text-success" />
                    <span className="text-sm text-text-secondary">{improvement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              {currentProject?.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {currentProject?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-rose-hero text-primary text-xs font-accent rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-muted">
        <div className="flex flex-wrap gap-2 justify-center">
          {projects?.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedProject(index)}
              className={`w-3 h-3 rounded-full transition-premium ${
                index === selectedProject 
                  ? 'bg-primary' :'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;