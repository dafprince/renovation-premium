import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const TimelineCalculator = () => {
  const [projectType, setProjectType] = useState('');
  const [projectSize, setProjectSize] = useState('');
  const [startSeason, setStartSeason] = useState('');
  const [calculatedTimeline, setCalculatedTimeline] = useState(null);

  const projectTypes = [
    { value: 'renovation-complete', label: 'Rénovation complète' },
    { value: 'cuisine', label: 'Rénovation cuisine' },
    { value: 'salle-de-bain', label: 'Rénovation salle de bain' },
    { value: 'isolation', label: 'Isolation thermique' },
    { value: 'extension', label: 'Extension de maison' },
    { value: 'toiture', label: 'Réfection toiture' }
  ];

  const projectSizes = [
    { value: 'small', label: 'Petit (< 50m²)' },
    { value: 'medium', label: 'Moyen (50-100m²)' },
    { value: 'large', label: 'Grand (100-200m²)' },
    { value: 'xlarge', label: 'Très grand (> 200m²)' }
  ];

  const seasons = [
    { value: 'spring', label: 'Printemps (Mars-Mai)' },
    { value: 'summer', label: 'Été (Juin-Août)' },
    { value: 'autumn', label: 'Automne (Sept-Nov)' },
    { value: 'winter', label: 'Hiver (Déc-Fév)' }
  ];

  const calculateTimeline = () => {
    if (!projectType || !projectSize || !startSeason) return;

    // Base durations in weeks
    const baseDurations = {
      'renovation-complete': { small: 8, medium: 16, large: 24, xlarge: 36 },
      'cuisine': { small: 3, medium: 4, large: 6, xlarge: 8 },
      'salle-de-bain': { small: 2, medium: 3, large: 4, xlarge: 6 },
      'isolation': { small: 2, medium: 4, large: 6, xlarge: 10 },
      'extension': { small: 6, medium: 12, large: 20, xlarge: 28 },
      'toiture': { small: 1, medium: 2, large: 3, xlarge: 4 }
    };

    // Seasonal multipliers
    const seasonalFactors = {
      spring: 1.0,
      summer: 0.9,
      autumn: 1.1,
      winter: 1.3
    };

    const baseDuration = baseDurations?.[projectType]?.[projectSize];
    const seasonalDuration = Math.ceil(baseDuration * seasonalFactors?.[startSeason]);
    
    const startDate = new Date();
    const endDate = new Date(startDate.getTime() + (seasonalDuration * 7 * 24 * 60 * 60 * 1000));

    const phases = [
      { name: 'Consultation & Étude', duration: Math.ceil(seasonalDuration * 0.15), color: 'blue' },
      { name: 'Planification', duration: Math.ceil(seasonalDuration * 0.10), color: 'purple' },
      { name: 'Réalisation', duration: Math.ceil(seasonalDuration * 0.70), color: 'rose' },
      { name: 'Finitions & Suivi', duration: Math.ceil(seasonalDuration * 0.05), color: 'green' }
    ];

    setCalculatedTimeline({
      totalWeeks: seasonalDuration,
      startDate,
      endDate,
      phases,
      seasonalNote: startSeason === 'winter' ? 'Délais prolongés en hiver (conditions météo)' :
                   startSeason === 'summer' ? 'Conditions optimales pour les travaux' :
                   startSeason === 'autumn' ? 'Léger retard possible (météo variable)' :
                   'Conditions favorables au démarrage'
    });
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="bg-gradient-rose-hero rounded-xl p-6 border border-rose">
      <div className="text-center mb-6">
        <h3 className="font-headline text-2xl text-text-primary mb-2">
          Calculateur de Timeline
        </h3>
        <p className="text-text-secondary font-body">
          Estimez la durée de votre projet selon le type et la saison
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Select
          label="Type de projet"
          options={projectTypes}
          value={projectType}
          onChange={setProjectType}
          placeholder="Sélectionnez le type"
        />

        <Select
          label="Taille du projet"
          options={projectSizes}
          value={projectSize}
          onChange={setProjectSize}
          placeholder="Sélectionnez la taille"
        />

        <Select
          label="Saison de début"
          options={seasons}
          value={startSeason}
          onChange={setStartSeason}
          placeholder="Sélectionnez la saison"
        />
      </div>
      <div className="text-center mb-6">
        <Button
          variant="default"
          size="lg"
          iconName="Calculator"
          iconPosition="left"
          onClick={calculateTimeline}
          disabled={!projectType || !projectSize || !startSeason}
          className="font-cta"
        >
          Calculer la Timeline
        </Button>
      </div>
      {calculatedTimeline && (
        <div className="bg-white rounded-lg p-6 border border-border shadow-subtle">
          <div className="text-center mb-6">
            <h4 className="font-headline text-xl text-text-primary mb-2">
              Estimation de votre projet
            </h4>
            <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary">
              <span>Début: {formatDate(calculatedTimeline?.startDate)}</span>
              <Icon name="ArrowRight" size={16} />
              <span>Fin: {formatDate(calculatedTimeline?.endDate)}</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="text-3xl font-headline text-primary mb-1">
                {calculatedTimeline?.totalWeeks}
              </div>
              <div className="text-sm text-text-secondary font-accent">
                Semaines totales
              </div>
            </div>

            <div className="text-center p-4 bg-accent/5 rounded-lg">
              <div className="text-3xl font-headline text-accent mb-1">
                {calculatedTimeline?.phases?.length}
              </div>
              <div className="text-sm text-text-secondary font-accent">
                Phases principales
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <h5 className="font-cta text-lg text-text-primary">Répartition par phases</h5>
            {calculatedTimeline?.phases?.map((phase, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full bg-${phase?.color}-500`}></div>
                  <span className="font-accent text-text-primary">{phase?.name}</span>
                </div>
                <span className="text-sm text-text-secondary">
                  {phase?.duration} semaine{phase?.duration > 1 ? 's' : ''}
                </span>
              </div>
            ))}
          </div>

          {calculatedTimeline?.seasonalNote && (
            <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <Icon name="AlertCircle" size={16} className="text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h6 className="font-cta text-orange-800 mb-1">Note saisonnière</h6>
                  <p className="text-sm text-orange-700 font-body">
                    {calculatedTimeline?.seasonalNote}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TimelineCalculator;