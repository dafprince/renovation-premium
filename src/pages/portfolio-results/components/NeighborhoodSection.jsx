import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const NeighborhoodSection = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('paris-16');

  const neighborhoods = [
    {
      id: 'paris-16',
      name: 'Paris 16ème',
      region: 'Île-de-France',
      projectsCount: 127,
      averageSavings: 38,
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=800&h=600&fit=crop',
      description: `Nos interventions dans le 16ème arrondissement se concentrent sur la rénovation d'appartements haussmanniens et de maisons de ville. Nous avons développé une expertise particulière dans l'isolation thermique des bâtiments anciens tout en préservant leur caractère architectural authentique.`,
      highlights: [
        'Rénovation de 45 appartements haussmanniens',
        'Installation de 82 systèmes de chauffage écologiques',
        'Amélioration énergétique moyenne de classe E à B',
        'Satisfaction client de 98% sur ce secteur'
      ],
      recentProjects: [
        {
          title: 'Rénovation complète - Avenue Foch',
          budget: 85000,
          energyGain: 'E → A',
          image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
        },
        {
          title: 'Cuisine moderne - Rue de la Pompe',
          budget: 32000,
          energyGain: 'D → B',
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      id: 'lyon-6',
      name: 'Lyon 6ème',
      region: 'Auvergne-Rhône-Alpes',
      projectsCount: 89,
      averageSavings: 45,
      image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&h=600&fit=crop',
      description: `Dans le 6ème arrondissement de Lyon, nous intervenons principalement sur des immeubles bourgeois et des appartements contemporains.
      
      Notre approche privilégie les solutions énergétiques innovantes adaptées au climat lyonnais et aux spécificités architecturales locales.`,
      highlights: [
        'Spécialisation dans les immeubles bourgeois',
        'Installation de pompes à chaleur adaptées',
        'Rénovation de 34 salles de bains',
        'Partenariat avec les syndics locaux'
      ],
      recentProjects: [
        {
          title: 'Extension moderne - Cours Franklin Roosevelt',
          budget: 125000,
          energyGain: 'F → B',
          image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop'
        },
        {
          title: 'Rénovation énergétique - Rue Garibaldi',
          budget: 67000,
          energyGain: 'E → A',
          image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop'
        }
      ]
    },
    {
      id: 'marseille-8',
      name: 'Marseille 8ème',
      region: 'Provence-Alpes-Côte d\'Azur',
      projectsCount: 64,
      averageSavings: 41,
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
      description: `Nos réalisations dans le 8ème arrondissement de Marseille mettent l'accent sur l'adaptation au climat méditerranéen. Nous développons des solutions de climatisation naturelle et d'isolation adaptées aux fortes chaleurs estivales.`,
      highlights: [
        'Expertise climatisation naturelle','Isolation adaptée au climat méditerranéen','Rénovation de villas avec piscines','Solutions anti-humidité spécialisées'
      ],
      recentProjects: [
        {
          title: 'Villa moderne - Corniche Kennedy',budget: 180000,energyGain: 'D → A',image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop'
        },
        {
          title: 'Appartement terrasse - Avenue du Prado',budget: 95000,energyGain: 'E → B',image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop'
        }
      ]
    }
  ];

  const selectedData = neighborhoods?.find(n => n?.id === selectedNeighborhood);

  const formatBudget = (budget) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    })?.format(budget);
  };

  return (
    <div className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl lg:text-4xl text-text-primary mb-4">
            Transformations de Quartier
          </h2>
          <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto">
            Découvrez notre impact local et notre expertise régionale à travers nos réalisations dans différents quartiers de France
          </p>
        </div>

        {/* Neighborhood Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {neighborhoods?.map((neighborhood) => (
            <button
              key={neighborhood?.id}
              onClick={() => setSelectedNeighborhood(neighborhood?.id)}
              className={`px-6 py-3 rounded-xl font-cta transition-premium hover-scale ${
                selectedNeighborhood === neighborhood?.id
                  ? 'bg-primary text-primary-foreground shadow-rose'
                  : 'bg-white text-text-primary hover:bg-secondary hover:text-secondary-foreground shadow-subtle'
              }`}
            >
              <div className="text-center">
                <div className="font-cta">{neighborhood?.name}</div>
                <div className="text-xs opacity-80">{neighborhood?.projectsCount} projets</div>
              </div>
            </button>
          ))}
        </div>

        {selectedData && (
          <div className="bg-white rounded-2xl shadow-subtle overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={selectedData?.image}
                  alt={`Quartier ${selectedData?.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="font-headline text-2xl mb-2">{selectedData?.name}</h3>
                  <p className="font-body opacity-90">{selectedData?.region}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-headline text-primary mb-1">
                      {selectedData?.projectsCount}
                    </div>
                    <div className="text-sm text-text-secondary">Projets réalisés</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-headline text-success mb-1">
                      -{selectedData?.averageSavings}%
                    </div>
                    <div className="text-sm text-text-secondary">Économies moyennes</div>
                  </div>
                </div>

                <div className="prose prose-sm max-w-none mb-6">
                  <p className="text-text-secondary font-body whitespace-pre-line">
                    {selectedData?.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-cta text-lg text-text-primary mb-3">Points forts</h4>
                  <ul className="space-y-2">
                    {selectedData?.highlights?.map((highlight, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-cta text-lg text-text-primary mb-4">Projets récents</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedData?.recentProjects?.map((project, index) => (
                      <div key={index} className="border border-border rounded-lg p-4 hover:shadow-subtle transition-premium">
                        <Image
                          src={project?.image}
                          alt={project?.title}
                          className="w-full h-24 object-cover rounded mb-3"
                        />
                        <h5 className="font-accent text-sm text-text-primary mb-2 line-clamp-2">
                          {project?.title}
                        </h5>
                        <div className="flex items-center justify-between text-xs text-text-secondary">
                          <span>{formatBudget(project?.budget)}</span>
                          <span className="bg-success/10 text-success px-2 py-1 rounded">
                            {project?.energyGain}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="MapPin"
            iconPosition="left"
            iconSize={20}
            className="hover-scale"
          >
            Voir tous nos secteurs d'intervention
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodSection;