import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const CostCalculator = ({ serviceType, onCalculate }) => {
  const [formData, setFormData] = useState({
    surface: '',
    propertyType: '',
    qualityLevel: '',
    additionalServices: []
  });

  const [result, setResult] = useState(null);

  const propertyTypeOptions = [
    { value: 'apartment', label: 'Appartement' },
    { value: 'house', label: 'Maison individuelle' },
    { value: 'commercial', label: 'Local commercial' }
  ];

  const qualityLevelOptions = [
    { value: 'standard', label: 'Standard - Matériaux de base' },
    { value: 'premium', label: 'Premium - Matériaux de qualité' },
    { value: 'luxury', label: 'Luxe - Matériaux haut de gamme' }
  ];

  const additionalServicesOptions = [
    { value: 'design', label: 'Conseil en design (+15%)', price: 0.15 },
    { value: 'express', label: 'Délai express (+20%)', price: 0.20 },
    { value: 'warranty', label: 'Garantie étendue (+8%)', price: 0.08 },
    { value: 'maintenance', label: 'Contrat maintenance (+12%)', price: 0.12 }
  ];

  const basePrices = {
    'renovation-energetique': {
      standard: 150,
      premium: 220,
      luxury: 350
    },
    'renovation-complete': {
      standard: 800,
      premium: 1200,
      luxury: 1800
    },
    'amenagement-interieur': {
      standard: 400,
      premium: 650,
      luxury: 950
    },
    'renovation-exterieure': {
      standard: 200,
      premium: 320,
      luxury: 480
    }
  };

  const calculateCost = () => {
    if (!formData?.surface || !formData?.propertyType || !formData?.qualityLevel) {
      return;
    }

    const surface = parseFloat(formData?.surface);
    const basePrice = basePrices?.[serviceType]?.[formData?.qualityLevel] || 150;
    
    let totalPrice = surface * basePrice;

    // Property type multiplier
    const propertyMultiplier = {
      apartment: 1.0,
      house: 1.15,
      commercial: 1.25
    };
    
    totalPrice *= propertyMultiplier?.[formData?.propertyType] || 1.0;

    // Additional services
    formData?.additionalServices?.forEach(serviceId => {
      const service = additionalServicesOptions?.find(s => s?.value === serviceId);
      if (service) {
        totalPrice *= (1 + service?.price);
      }
    });

    const estimatedResult = {
      basePrice: Math.round(surface * basePrice),
      totalPrice: Math.round(totalPrice),
      pricePerSqm: Math.round(totalPrice / surface),
      surface: surface,
      breakdown: {
        materials: Math.round(totalPrice * 0.6),
        labor: Math.round(totalPrice * 0.35),
        permits: Math.round(totalPrice * 0.05)
      }
    };

    setResult(estimatedResult);
    onCalculate && onCalculate(estimatedResult);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAdditionalServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev?.additionalServices?.includes(serviceId)
        ? prev?.additionalServices?.filter(id => id !== serviceId)
        : [...prev?.additionalServices, serviceId]
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-rose p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon name="Calculator" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="font-headline text-xl text-text-primary">
            Calculateur de coût
          </h3>
          <p className="text-text-secondary text-sm">
            Obtenez une estimation personnalisée
          </p>
        </div>
      </div>
      <div className="space-y-4 mb-6">
        <Input
          label="Surface à rénover (m²)"
          type="number"
          placeholder="Ex: 80"
          value={formData?.surface}
          onChange={(e) => handleInputChange('surface', e?.target?.value)}
          required
        />

        <Select
          label="Type de bien"
          options={propertyTypeOptions}
          value={formData?.propertyType}
          onChange={(value) => handleInputChange('propertyType', value)}
          placeholder="Sélectionnez le type de bien"
        />

        <Select
          label="Niveau de qualité"
          options={qualityLevelOptions}
          value={formData?.qualityLevel}
          onChange={(value) => handleInputChange('qualityLevel', value)}
          placeholder="Choisissez le niveau de finition"
        />

        <div>
          <label className="block text-sm font-accent text-text-primary mb-3">
            Services additionnels (optionnel)
          </label>
          <div className="space-y-2">
            {additionalServicesOptions?.map((service) => (
              <div
                key={service?.value}
                className={`p-3 rounded-lg border cursor-pointer transition-premium ${
                  formData?.additionalServices?.includes(service?.value)
                    ? 'border-primary bg-gradient-rose-hero' :'border-border hover:border-primary/50'
                }`}
                onClick={() => handleAdditionalServiceToggle(service?.value)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-body text-text-primary">
                    {service?.label}
                  </span>
                  <div className="w-4 h-4 rounded border border-primary flex items-center justify-center">
                    {formData?.additionalServices?.includes(service?.value) && (
                      <Icon name="Check" size={12} className="text-primary" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button
        variant="default"
        onClick={calculateCost}
        disabled={!formData?.surface || !formData?.propertyType || !formData?.qualityLevel}
        iconName="Calculator"
        iconPosition="left"
        iconSize={16}
        fullWidth
        className="mb-6"
      >
        Calculer l'estimation
      </Button>
      {result && (
        <div className="bg-gradient-rose-hero rounded-lg p-6">
          <h4 className="font-cta text-lg text-text-primary mb-4">
            Estimation de coût
          </h4>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Surface:</span>
              <span className="font-accent text-text-primary">{result?.surface} m²</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-text-secondary">Prix au m²:</span>
              <span className="font-accent text-text-primary">{result?.pricePerSqm?.toLocaleString('fr-FR')} €</span>
            </div>
            <div className="border-t border-border pt-3">
              <div className="flex justify-between items-center">
                <span className="font-cta text-text-primary">Total estimé:</span>
                <span className="font-headline text-2xl text-primary">
                  {result?.totalPrice?.toLocaleString('fr-FR')} €
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/50 rounded-lg p-4 mb-4">
            <h5 className="font-accent text-sm text-text-primary mb-2">Répartition des coûts:</h5>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-text-secondary">Matériaux (60%):</span>
                <span className="text-text-primary">{result?.breakdown?.materials?.toLocaleString('fr-FR')} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Main d'œuvre (35%):</span>
                <span className="text-text-primary">{result?.breakdown?.labor?.toLocaleString('fr-FR')} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Permis & admin (5%):</span>
                <span className="text-text-primary">{result?.breakdown?.permits?.toLocaleString('fr-FR')} €</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-text-secondary text-center">
            *Estimation indicative. Un devis personnalisé sera établi après visite technique.
          </p>
        </div>
      )}
    </div>
  );
};

export default CostCalculator;