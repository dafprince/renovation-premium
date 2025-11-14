import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.images?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
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

  const tabs = [
    { id: 'overview', label: 'Aperçu', icon: 'Eye' },
    { id: 'details', label: 'Détails', icon: 'FileText' },
    { id: 'testimonial', label: 'Témoignage', icon: 'MessageSquare' },
    { id: 'energy', label: 'Performance', icon: 'Zap' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal */}
        <div className="inline-block w-full max-w-6xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h2 className="font-headline text-2xl text-text-primary">{project?.title}</h2>
              <p className="text-text-secondary font-body">{project?.location} • {project?.duration}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-text-secondary hover:text-text-primary hover:bg-muted rounded-lg transition-premium"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Gallery */}
            <div className="relative">
              <div className="relative h-96 lg:h-[600px]">
                <Image
                  src={project?.images?.[currentImageIndex]}
                  alt={`${project?.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation */}
                {project?.images?.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-premium"
                    >
                      <Icon name="ChevronLeft" size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-premium"
                    >
                      <Icon name="ChevronRight" size={20} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {project?.images?.length}
                </div>
              </div>

              {/* Thumbnail Strip */}
              <div className="p-4 bg-muted">
                <div className="flex space-x-2 overflow-x-auto">
                  {project?.images?.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-premium ${
                        index === currentImageIndex ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col">
              {/* Tabs */}
              <div className="flex border-b border-border">
                {tabs?.map((tab) => (
                  <button
                    key={tab?.id}
                    onClick={() => setActiveTab(tab?.id)}
                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-accent transition-premium ${
                      activeTab === tab?.id
                        ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-text-secondary hover:text-text-primary hover:bg-muted'
                    }`}
                  >
                    <Icon name={tab?.icon} size={16} />
                    <span>{tab?.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="flex-1 p-6 overflow-y-auto">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-cta text-lg text-text-primary mb-3">Description du projet</h3>
                      <p className="text-text-secondary font-body leading-relaxed">
                        {project?.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Euro" size={16} className="text-primary" />
                          <span className="text-sm text-text-secondary">Budget</span>
                        </div>
                        <div className="text-xl font-headline text-text-primary">
                          {formatBudget(project?.budget)}
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                          <Icon name="Calendar" size={16} className="text-primary" />
                          <span className="text-sm text-text-secondary">Durée</span>
                        </div>
                        <div className="text-xl font-headline text-text-primary">
                          {project?.duration}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-success/10 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="TrendingUp" size={24} className="text-success" />
                        <div>
                          <div className="font-cta text-text-primary">Économies d'énergie</div>
                          <div className="text-sm text-text-secondary">Réduction de consommation</div>
                        </div>
                      </div>
                      <div className="text-2xl font-headline text-success">
                        -{project?.energySavings}%
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-cta text-lg text-text-primary mb-4">Spécifications techniques</h3>
                      <div className="space-y-3">
                        {project?.specifications?.map((spec, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                            <span className="text-text-secondary text-sm">{spec}</span>
                          </div>
                        )) || (
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span className="text-text-secondary text-sm">Isolation thermique par l'extérieur (ITE)</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span className="text-text-secondary text-sm">Installation pompe à chaleur air-eau</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span className="text-text-secondary text-sm">Remplacement menuiseries double vitrage</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                              <span className="text-text-secondary text-sm">Système de ventilation VMC double flux</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-cta text-lg text-text-primary mb-4">Matériaux utilisés</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-muted p-3 rounded-lg">
                          <div className="font-accent text-text-primary">Isolation</div>
                          <div className="text-sm text-text-secondary">Laine de roche 140mm</div>
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <div className="font-accent text-text-primary">Chauffage</div>
                          <div className="text-sm text-text-secondary">Pompe à chaleur Daikin</div>
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <div className="font-accent text-text-primary">Menuiseries</div>
                          <div className="text-sm text-text-secondary">PVC triple vitrage</div>
                        </div>
                        <div className="bg-muted p-3 rounded-lg">
                          <div className="font-accent text-text-primary">Ventilation</div>
                          <div className="text-sm text-text-secondary">VMC Zehnder</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'testimonial' && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon name="Quote" size={32} className="text-primary" />
                      </div>
                      <div className="flex items-center justify-center space-x-1 mb-4">
                        {[...Array(5)]?.map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={20}
                            className="text-warning fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-text-primary font-body text-lg leading-relaxed text-center italic">
                      "{project?.testimonial || `Nous sommes absolument ravis du travail réalisé par RénoVision Pro. L'équipe a été professionnelle, respectueuse des délais et le résultat dépasse nos attentes. Nos factures d'énergie ont diminué de ${project?.energySavings}% dès le premier mois !`}"
                    </blockquote>

                    <div className="text-center pt-4 border-t border-border">
                      <div className="font-cta text-text-primary">{project?.clientName || 'Marie et Pierre Dubois'}</div>
                      <div className="text-text-secondary text-sm">{project?.location}</div>
                      <div className="text-text-secondary text-sm">Projet réalisé en {project?.completionDate || '2024'}</div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-text-secondary text-sm">Satisfaction globale</span>
                        <span className="font-cta text-text-primary">{project?.satisfaction}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${project?.satisfaction}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'energy' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-cta text-lg text-text-primary mb-4">Performance énergétique</h3>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-destructive/10 rounded-lg">
                          <div className="text-2xl font-headline text-destructive mb-2">E</div>
                          <div className="text-sm text-text-secondary">Avant rénovation</div>
                          <div className="text-xs text-text-secondary mt-1">285 kWh/m²/an</div>
                        </div>
                        <div className="text-center p-4 bg-success/10 rounded-lg">
                          <div className="text-2xl font-headline text-success mb-2">{project?.energyRating || 'B'}</div>
                          <div className="text-sm text-text-secondary">Après rénovation</div>
                          <div className="text-xs text-text-secondary mt-1">95 kWh/m²/an</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-cta text-text-primary mb-3">Économies annuelles</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Icon name="Zap" size={16} className="text-warning" />
                            <span className="text-text-secondary">Électricité</span>
                          </div>
                          <span className="font-cta text-success">-€890/an</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Icon name="Flame" size={16} className="text-primary" />
                            <span className="text-text-secondary">Chauffage</span>
                          </div>
                          <span className="font-cta text-success">-€1,240/an</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg border border-success/20">
                          <div className="flex items-center space-x-2">
                            <Icon name="TrendingUp" size={16} className="text-success" />
                            <span className="font-cta text-text-primary">Total économisé</span>
                          </div>
                          <span className="font-headline text-xl text-success">-€2,130/an</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-cta text-text-primary mb-3">Impact environnemental</h4>
                      <div className="bg-success/5 p-4 rounded-lg border border-success/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <Icon name="Leaf" size={24} className="text-success" />
                          <div>
                            <div className="font-cta text-text-primary">Réduction CO₂</div>
                            <div className="text-sm text-text-secondary">Émissions évitées par an</div>
                          </div>
                        </div>
                        <div className="text-2xl font-headline text-success">-2.8 tonnes CO₂</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border bg-muted">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-warning fill-current" />
                      <span className="font-accent text-text-primary">{project?.rating}</span>
                    </div>
                    <div className="text-text-secondary text-sm">
                      Projet réalisé en {project?.completionDate || '2024'}
                    </div>
                  </div>
                  <Button
                    variant="default"
                    size="sm"
                    iconName="MessageCircle"
                    iconPosition="left"
                    iconSize={16}
                    className="hover-scale"
                  >
                    Projet similaire
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;