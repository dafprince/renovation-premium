import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const ProcessPhase = ({ phase, index, isActive, onToggle }) => {
  const getPhaseIcon = (phaseKey) => {
    const icons = {
      consultation: 'MessageCircle',
      study: 'FileText',
      planning: 'Calendar',
      realization: 'Hammer',
      followup: 'CheckCircle'
    };
    return icons?.[phaseKey] || 'Circle';
  };

  const getPhaseColor = (phaseKey) => {
    const colors = {
      consultation: 'text-blue-600',
      study: 'text-purple-600',
      planning: 'text-orange-600',
      realization: 'text-primary',
      followup: 'text-green-600'
    };
    return colors?.[phaseKey] || 'text-gray-600';
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      {index < 4 && (
        <div className="absolute left-6 top-16 w-0.5 h-24 bg-border hidden md:block"></div>
      )}
      <div className={`bg-card rounded-xl border transition-premium hover-lift ${
        isActive ? 'border-primary shadow-rose' : 'border-border hover:border-primary/30'
      }`}>
        {/* Phase Header */}
        <button
          onClick={onToggle}
          className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-xl"
        >
          <div className="flex items-start space-x-4">
            <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center ${getPhaseColor(phase?.key)}`}>
              <Icon name={getPhaseIcon(phase?.key)} size={24} strokeWidth={2} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-headline text-xl text-text-primary mb-2">
                  {phase?.title}
                </h3>
                <Icon 
                  name={isActive ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-text-secondary transition-transform duration-200" 
                />
              </div>
              
              <p className="text-text-secondary font-body mb-3">
                {phase?.subtitle}
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="font-accent text-text-secondary">{phase?.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-primary" />
                  <span className="font-accent text-text-secondary">{phase?.team}</span>
                </div>
              </div>
            </div>
          </div>
        </button>

        {/* Expandable Content */}
        {isActive && (
          <div className="px-6 pb-6 border-t border-border mt-4 pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Description */}
              <div>
                <h4 className="font-cta text-lg text-text-primary mb-3">Description détaillée</h4>
                <p className="text-text-secondary font-body leading-relaxed mb-4">
                  {phase?.description}
                </p>
                
                {phase?.highlights && (
                  <div className="space-y-2">
                    {phase?.highlights?.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary font-body">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Requirements & Deliverables */}
              <div>
                <h4 className="font-cta text-lg text-text-primary mb-3">Documents requis</h4>
                <div className="space-y-2 mb-4">
                  {phase?.requirements?.map((req, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Icon name="FileText" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-text-secondary font-body">{req}</span>
                    </div>
                  ))}
                </div>

                {phase?.deliverables && (
                  <>
                    <h4 className="font-cta text-lg text-text-primary mb-3">Livrables</h4>
                    <div className="space-y-2">
                      {phase?.deliverables?.map((deliverable, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Icon name="Package" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-text-secondary font-body">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Quality Controls */}
            {phase?.qualityControls && (
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                <h4 className="font-cta text-lg text-green-800 mb-3 flex items-center space-x-2">
                  <Icon name="Shield" size={20} className="text-green-600" />
                  <span>Contrôles qualité</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {phase?.qualityControls?.map((control, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-green-800 font-body">{control}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessPhase;