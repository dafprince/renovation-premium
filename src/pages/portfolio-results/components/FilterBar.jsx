import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ filters, onFilterChange, onClearFilters }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const filterOptions = {
    type: [
      { value: 'all', label: 'Tous les projets' },
      { value: 'renovation-complete', label: 'Rénovation complète' },
      { value: 'cuisine', label: 'Cuisine' },
      { value: 'salle-de-bain', label: 'Salle de bain' },
      { value: 'isolation', label: 'Isolation thermique' },
      { value: 'chauffage', label: 'Chauffage' },
      { value: 'extension', label: 'Extension' }
    ],
    budget: [
      { value: 'all', label: 'Tous budgets' },
      { value: '0-20000', label: '0 - 20 000€' },
      { value: '20000-50000', label: '20 000 - 50 000€' },
      { value: '50000-100000', label: '50 000 - 100 000€' },
      { value: '100000+', label: '100 000€+' }
    ],
    timeline: [
      { value: 'all', label: 'Toutes durées' },
      { value: '1-4', label: '1-4 semaines' },
      { value: '1-3', label: '1-3 mois' },
      { value: '3-6', label: '3-6 mois' },
      { value: '6+', label: '6+ mois' }
    ],
    region: [
      { value: 'all', label: 'Toutes régions' },
      { value: 'ile-de-france', label: 'Île-de-France' },
      { value: 'provence', label: 'Provence-Alpes-Côte d\'Azur' },
      { value: 'rhone-alpes', label: 'Auvergne-Rhône-Alpes' },
      { value: 'nouvelle-aquitaine', label: 'Nouvelle-Aquitaine' }
    ]
  };

  const handleFilterChange = (category, value) => {
    onFilterChange({ ...filters, [category]: value });
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters)?.filter(value => value !== 'all')?.length;
  };

  return (
    <div className="bg-white border border-border rounded-xl p-6 shadow-subtle">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Icon name="Filter" size={20} className="text-primary" />
          <h3 className="font-cta text-lg text-text-primary">Filtrer les projets</h3>
          {getActiveFiltersCount() > 0 && (
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-accent">
              {getActiveFiltersCount()}
            </span>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-text-secondary hover:text-primary"
          >
            Réinitialiser
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
            iconSize={16}
            className="lg:hidden"
          >
            {isExpanded ? 'Masquer' : 'Afficher'}
          </Button>
        </div>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${!isExpanded ? 'hidden lg:grid' : ''}`}>
        {Object.entries(filterOptions)?.map(([category, options]) => (
          <div key={category} className="space-y-2">
            <label className="block text-sm font-accent text-text-secondary capitalize">
              {category === 'type' ? 'Type de projet' : 
               category === 'budget' ? 'Budget' :
               category === 'timeline' ? 'Durée' : 'Région'}
            </label>
            <select
              value={filters?.[category]}
              onChange={(e) => handleFilterChange(category, e?.target?.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-white text-text-primary font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-premium"
            >
              {options?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;