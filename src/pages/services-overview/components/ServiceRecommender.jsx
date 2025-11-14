import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const ServiceRecommender = ({ onRecommendation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    propertyType: '',
    budget: '',
    priorities: [],
    timeline: '',
    energyGoals: ''
  });

  const questions = [
    {
      id: 'propertyType',
      title: 'Quel type de bien souhaitez-vous rénover ?',
      type: 'single',
      options: [
        { value: 'apartment', label: 'Appartement', icon: 'Building' },
        { value: 'house', label: 'Maison individuelle', icon: 'Home' },
        { value: 'commercial', label: 'Local commercial', icon: 'Store' }
      ]
    },
    {
      id: 'budget',
      title: 'Quel est votre budget approximatif ?',
      type: 'single',
      options: [
        { value: 'small', label: 'Moins de 20 000€', icon: 'Euro' },
        { value: 'medium', label: '20 000€ - 50 000€', icon: 'Euro' },
        { value: 'large', label: '50 000€ - 100 000€', icon: 'Euro' },
        { value: 'premium', label: 'Plus de 100 000€', icon: 'Euro' }
      ]
    },
    {
      id: 'priorities',
      title: 'Quelles sont vos priorités ? (plusieurs choix possibles)',
      type: 'multiple',
      options: [
        { value: 'energy', label: 'Économies d\'énergie', icon: 'Zap' },
        { value: 'comfort', label: 'Confort thermique', icon: 'Thermometer' },
        { value: 'aesthetics', label: 'Esthétique', icon: 'Palette' },
        { value: 'value', label: 'Valorisation du bien', icon: 'TrendingUp' },
        { value: 'space', label: 'Optimisation de l\'espace', icon: 'Maximize' }
      ]
    },
    {
      id: 'timeline',
      title: 'Dans quels délais souhaitez-vous réaliser les travaux ?',
      type: 'single',
      options: [
        { value: 'urgent', label: 'Dans les 3 mois', icon: 'Clock' },
        { value: 'normal', label: '3 à 6 mois', icon: 'Calendar' },
        { value: 'flexible', label: 'Plus de 6 mois', icon: 'CalendarDays' }
      ]
    },
    {
      id: 'energyGoals',
      title: 'Quel est votre objectif énergétique ?',
      type: 'single',
      options: [
        { value: 'basic', label: 'Amélioration modérée', icon: 'Leaf' },
        { value: 'significant', label: 'Réduction importante', icon: 'TreePine' },
        { value: 'maximum', label: 'Performance maximale', icon: 'Award' }
      ]
    }
  ];

  const handleAnswer = (questionId, value, isMultiple = false) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: isMultiple 
        ? prev?.[questionId]?.includes(value)
          ? prev?.[questionId]?.filter(v => v !== value)
          : [...prev?.[questionId], value]
        : value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions?.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRecommendation();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateRecommendation = () => {
    // Simple recommendation logic based on answers
    let recommendedServices = [];
    
    if (answers?.priorities?.includes('energy') || answers?.energyGoals === 'maximum') {
      recommendedServices?.push('renovation-energetique');
    }
    
    if (answers?.budget === 'large' || answers?.budget === 'premium') {
      recommendedServices?.push('renovation-complete');
    }
    
    if (answers?.priorities?.includes('space') || answers?.priorities?.includes('aesthetics')) {
      recommendedServices?.push('amenagement-interieur');
    }
    
    if (answers?.propertyType === 'house') {
      recommendedServices?.push('renovation-exterieure');
    }

    onRecommendation(recommendedServices, answers);
  };

  const currentQuestion = questions?.[currentStep];
  const isLastStep = currentStep === questions?.length - 1;
  const canProceed = currentQuestion?.type === 'multiple' 
    ? answers?.[currentQuestion?.id]?.length > 0
    : answers?.[currentQuestion?.id] !== '';

  return (
    <div className="bg-white rounded-xl shadow-rose p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-headline text-2xl text-text-primary">
            Trouvez vos services idéaux
          </h3>
          <div className="text-sm text-text-secondary font-accent">
            {currentStep + 1} / {questions?.length}
          </div>
        </div>
        
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / questions?.length) * 100}%` }}
          />
        </div>
      </div>
      <div className="mb-8">
        <h4 className="font-cta text-xl text-text-primary mb-6">
          {currentQuestion?.title}
        </h4>

        <div className="space-y-3">
          {currentQuestion?.options?.map((option) => (
            <div key={option?.value}>
              {currentQuestion?.type === 'single' ? (
                <button
                  onClick={() => handleAnswer(currentQuestion?.id, option?.value)}
                  className={`w-full p-4 rounded-lg border-2 transition-premium text-left flex items-center space-x-3 hover-scale ${
                    answers?.[currentQuestion?.id] === option?.value
                      ? 'border-primary bg-gradient-rose-hero' :'border-border hover:border-primary/50'
                  }`}
                >
                  <Icon name={option?.icon} size={20} className="text-primary" />
                  <span className="font-body text-text-primary">{option?.label}</span>
                </button>
              ) : (
                <div
                  className={`p-4 rounded-lg border-2 transition-premium flex items-center space-x-3 ${
                    answers?.[currentQuestion?.id]?.includes(option?.value)
                      ? 'border-primary bg-gradient-rose-hero' :'border-border'
                  }`}
                >
                  <Checkbox
                    checked={answers?.[currentQuestion?.id]?.includes(option?.value)}
                    onChange={() => handleAnswer(currentQuestion?.id, option?.value, true)}
                  />
                  <Icon name={option?.icon} size={20} className="text-primary" />
                  <span className="font-body text-text-primary">{option?.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          iconName="ChevronLeft"
          iconPosition="left"
          iconSize={16}
        >
          Précédent
        </Button>

        <Button
          variant="default"
          onClick={handleNext}
          disabled={!canProceed}
          iconName={isLastStep ? "CheckCircle" : "ChevronRight"}
          iconPosition="right"
          iconSize={16}
        >
          {isLastStep ? 'Voir mes recommandations' : 'Suivant'}
        </Button>
      </div>
    </div>
  );
};

export default ServiceRecommender;