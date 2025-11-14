import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceAreas = () => {
  const [selectedArea, setSelectedArea] = useState('paris');

  const serviceAreas = [
    {
      id: 'paris',
      name: 'Paris & Petite Couronne',
      zones: ['Paris (75)', 'Hauts-de-Seine (92)', 'Seine-Saint-Denis (93)', 'Val-de-Marne (94)'],
      teamLead: 'Marc Dubois',
      experience: '15 ans',
      specialties: ['Rénovation haussmannienne', 'Appartements anciens', 'Isolation phonique'],
      projects: 247,
      satisfaction: 98,
      responseTime: '1-2h',
      coordinates: { lat: 48.8566, lng: 2.3522 }
    },
    {
      id: 'ouest',
      name: 'Ouest Parisien',
      zones: ['Yvelines (78)', 'Essonne (91)', 'Val-d\'Oise (95)'],
      teamLead: 'Sophie Martin',
      experience: '12 ans',
      specialties: ['Maisons individuelles', 'Extensions', 'Rénovation énergétique'],
      projects: 189,
      satisfaction: 97,
      responseTime: '2-3h',
      coordinates: { lat: 48.7589, lng: 2.0908 }
    },
    {
      id: 'est',
      name: 'Est Parisien',
      zones: ['Seine-et-Marne (77)', 'Marne-la-Vallée'],
      teamLead: 'Thomas Leroy',
      experience: '10 ans',
      specialties: ['Constructions récentes', 'Domotique', 'Terrasses'],
      projects: 156,
      satisfaction: 96,
      responseTime: '2-4h',
      coordinates: { lat: 48.8738, lng: 2.6775 }
    }
  ];

  const currentArea = serviceAreas?.find(area => area?.id === selectedArea);

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl text-text-primary mb-4">
            Nos zones d'intervention
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Une équipe locale dédiée dans chaque secteur pour un service de proximité 
            et une connaissance parfaite des spécificités régionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Area Selection */}
          <div className="lg:col-span-1">
            <h3 className="font-headline text-xl text-text-primary mb-6">
              Sélectionnez votre zone
            </h3>
            
            <div className="space-y-3">
              {serviceAreas?.map((area) => (
                <button
                  key={area?.id}
                  onClick={() => setSelectedArea(area?.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-premium hover-scale ${
                    selectedArea === area?.id
                      ? 'bg-primary text-primary-foreground border-primary shadow-rose'
                      : 'bg-white border-border hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-accent text-sm mb-1">
                        {area?.name}
                      </h4>
                      <p className={`text-xs ${
                        selectedArea === area?.id ? 'text-primary-foreground/80' : 'text-text-secondary'
                      }`}>
                        {area?.zones?.length} départements
                      </p>
                    </div>
                    <Icon 
                      name={selectedArea === area?.id ? "CheckCircle" : "Circle"} 
                      size={20} 
                      className={selectedArea === area?.id ? 'text-primary-foreground' : 'text-text-secondary'}
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border border-border">
              <div className="flex items-center space-x-3 mb-3">
                <Icon name="Info" size={20} className="text-primary" />
                <h4 className="font-accent text-sm text-text-primary">
                  Zone non couverte ?
                </h4>
              </div>
              <p className="text-xs text-text-secondary mb-3">
                Nous étudions chaque demande. Contactez-nous pour vérifier la faisabilité.
              </p>
              <Button variant="outline" size="sm" className="w-full font-cta">
                Nous contacter
              </Button>
            </div>
          </div>

          {/* Area Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-subtle border border-border overflow-hidden">
              {/* Map */}
              <div className="h-64 bg-muted relative">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={currentArea?.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${currentArea?.coordinates?.lat},${currentArea?.coordinates?.lng}&z=11&output=embed`}
                  className="rounded-t-xl"
                />
                
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg border border-border">
                  <p className="font-accent text-sm text-text-primary">
                    {currentArea?.name}
                  </p>
                </div>
              </div>

              {/* Area Info */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Team Lead */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-accent text-text-primary mb-1">
                        Chef d'équipe
                      </h4>
                      <p className="font-headline text-lg text-text-primary mb-1">
                        {currentArea?.teamLead}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {currentArea?.experience} d'expérience
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="font-headline text-2xl text-primary mb-1">
                        {currentArea?.projects}
                      </div>
                      <p className="text-xs text-text-secondary">
                        Projets réalisés
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="font-headline text-2xl text-success mb-1">
                        {currentArea?.satisfaction}%
                      </div>
                      <p className="text-xs text-text-secondary">
                        Satisfaction
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="font-headline text-2xl text-accent mb-1">
                        {currentArea?.responseTime}
                      </div>
                      <p className="text-xs text-text-secondary">
                        Réponse
                      </p>
                    </div>
                  </div>
                </div>

                {/* Zones Covered */}
                <div className="mb-6">
                  <h4 className="font-accent text-text-primary mb-3">
                    Départements couverts
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentArea?.zones?.map((zone, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {zone}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-accent text-text-primary mb-3">
                    Spécialités locales
                  </h4>
                  <div className="space-y-2">
                    {currentArea?.specialties?.map((specialty, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success" />
                        <span className="text-sm text-text-secondary">
                          {specialty}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <Button
                  variant="default"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  className="w-full font-cta hover-scale shadow-rose"
                >
                  Contacter l'équipe {currentArea?.name}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;