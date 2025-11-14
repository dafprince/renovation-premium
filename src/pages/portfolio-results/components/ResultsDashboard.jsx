import React from 'react';
import Icon from '../../../components/AppIcon';

const ResultsDashboard = () => {
  const metrics = [
    {
      id: 1,
      title: "Économies d\'énergie moyennes",
      value: "42%",
      change: "+5%",
      trend: "up",
      icon: "Zap",
      color: "success",
      description: "Réduction moyenne de la consommation énergétique"
    },
    {
      id: 2,
      title: "Satisfaction client",
      value: "96%",
      change: "+2%",
      trend: "up",
      icon: "Heart",
      color: "primary",
      description: "Taux de satisfaction basé sur 847 avis clients"
    },
    {
      id: 3,
      title: "Délai moyen de réalisation",
      value: "12 sem",
      change: "-1 sem",
      trend: "up",
      icon: "Clock",
      color: "warning",
      description: "Temps moyen de completion des projets"
    },
    {
      id: 4,
      title: "Réclamations garantie",
      value: "0.8%",
      change: "-0.3%",
      trend: "up",
      icon: "Shield",
      color: "success",
      description: "Taux de réclamations sous garantie"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary/10 text-primary border-primary/20',
      success: 'bg-success/10 text-success border-success/20',
      warning: 'bg-warning/10 text-warning border-warning/20'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  const getIconBgClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary text-primary-foreground',
      success: 'bg-success text-success-foreground',
      warning: 'bg-warning text-warning-foreground'
    };
    return colorMap?.[color] || colorMap?.primary;
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle p-8">
      <div className="text-center mb-8">
        <h2 className="font-headline text-3xl text-text-primary mb-3">
          Tableau de Bord des Résultats
        </h2>
        <p className="text-text-secondary font-body max-w-2xl mx-auto">
          Découvrez nos performances et l'impact de nos rénovations sur la satisfaction client et l'efficacité énergétique
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics?.map((metric) => (
          <div
            key={metric?.id}
            className={`relative p-6 rounded-xl border transition-premium hover-scale ${getColorClasses(metric?.color)}`}
          >
            {/* Icon */}
            <div className={`w-12 h-12 rounded-lg ${getIconBgClasses(metric?.color)} flex items-center justify-center mb-4`}>
              <Icon name={metric?.icon} size={24} />
            </div>

            {/* Value and Change */}
            <div className="flex items-end justify-between mb-2">
              <div className="text-3xl font-headline text-text-primary">
                {metric?.value}
              </div>
              <div className="flex items-center space-x-1">
                <Icon
                  name={metric?.trend === 'up' ? 'TrendingUp' : 'TrendingDown'}
                  size={16}
                  className={metric?.trend === 'up' ? 'text-success' : 'text-destructive'}
                />
                <span className={`text-sm font-accent ${
                  metric?.trend === 'up' ? 'text-success' : 'text-destructive'
                }`}>
                  {metric?.change}
                </span>
              </div>
            </div>

            {/* Title */}
            <h3 className="font-cta text-lg text-text-primary mb-2">
              {metric?.title}
            </h3>

            {/* Description */}
            <p className="text-text-secondary text-sm">
              {metric?.description}
            </p>

            {/* Decorative Element */}
            <div className="absolute top-4 right-4 opacity-10">
              <Icon name={metric?.icon} size={32} />
            </div>
          </div>
        ))}
      </div>
      {/* Additional Stats */}
      <div className="mt-8 pt-8 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-headline text-primary mb-2">847</div>
            <div className="text-text-secondary font-body">Projets réalisés</div>
          </div>
          <div>
            <div className="text-2xl font-headline text-primary mb-2">15 ans</div>
            <div className="text-text-secondary font-body">D'expérience</div>
          </div>
          <div>
            <div className="text-2xl font-headline text-primary mb-2">€2.4M</div>
            <div className="text-text-secondary font-body">Économies générées</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDashboard;