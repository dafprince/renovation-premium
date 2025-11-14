import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RenovationShowcase = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('before-after');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const renovationGallery = [
    {
      id: 1,
      category: 'Cuisine',
      title: 'Rénovation Cuisine Contemporaine',
      before: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      budget: '25 000€',
      duration: '4 semaines',
      surface: '15 m²',
      location: 'Paris 16e',
      improvements: [
        'Optimisation de l\'espace +30%',
        'Éclairage LED moderne',
        'Électroménager encastrable',
        'Plan de travail quartz'
      ]
    },
    {
      id: 2,
      category: 'Salle de Bain',
      title: 'Transformation Salle de Bain Zen',
      before: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800',
      budget: '18 000€',
      duration: '3 semaines',
      surface: '8 m²',
      location: 'Neuilly-sur-Seine',
      improvements: [
        'Douche italienne spacieuse',
        'Carrelage grand format',
        'VMC hygroréglable',
        'Meuble vasque suspendu'
      ]
    },
    {
      id: 3,
      category: 'Salon',
      title: 'Rénovation Salon Lumineux',
      before: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      after: 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=800',
      budget: '22 000€',
      duration: '5 semaines',
      surface: '35 m²',
      location: 'Boulogne-Billancourt',
      improvements: [
        'Ouverture sur la cuisine',
        'Parquet chêne massif',
        'Isolation phonique',
        'Éclairage d\'ambiance'
      ]
    }
  ];

  const renovationProcess = [
    {
      step: 1,
      title: 'Étude & Conception',
      description: 'Analyse de vos besoins, prise de mesures et conception 3D',
      icon: 'PenTool',
      duration: '1-2 semaines',
      deliverables: ['Plans détaillés', 'Visualisation 3D', 'Devis précis']
    },
    {
      step: 2,
      title: 'Préparation & Démolition',
      description: 'Protection des espaces, démolition sélective et évacuation',
      icon: 'HardHat',
      duration: '2-5 jours',
      deliverables: ['Mise en sécurité', 'Démolition propre', 'Évacuation déchets']
    },
    {
      step: 3,
      title: 'Gros Œuvre & Techniques',
      description: 'Maçonnerie, électricité, plomberie et isolation',
      icon: 'Zap',
      duration: '1-3 semaines',
      deliverables: ['Structure rénovée', 'Réseaux refaits', 'Isolation optimale']
    },
    {
      step: 4,
      title: 'Revêtements & Finitions',
      description: 'Pose des revêtements, peinture et finitions soignées',
      icon: 'Paintbrush',
      duration: '1-2 semaines',
      deliverables: ['Revêtements posés', 'Peintures réalisées', 'Finitions parfaites']
    }
  ];

  const professionalFeatures = [
    {
      title: 'Suivi de Chantier Digital',
      description: 'Application mobile pour suivre l\'avancement en temps réel',
      icon: 'Smartphone',
      features: ['Photos quotidiennes', 'Planning actualisé', 'Messagerie directe']
    },
    {
      title: 'Matériaux Premium',
      description: 'Sélection rigoureuse de matériaux durables et esthétiques',
      icon: 'Award',
      features: ['Garantie constructeur', 'Origine certifiée', 'Performance énergétique']
    },
    {
      title: 'Artisans Qualifiés',
      description: 'Équipe d\'artisans certifiés et expérimentés',
      icon: 'Users',
      features: ['Certification RGE', '15 ans d\'expérience', 'Formation continue']
    },
    {
      title: 'Service Client Expert',
      description: 'Accompagnement personnalisé du projet à la réception',
      icon: 'HeadphonesIcon',
      features: ['Conseiller dédié', 'Support 6j/7', 'SAV 5 ans']
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % renovationGallery?.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [renovationGallery?.length]);

  const tabs = [
    { id: 'before-after', label: 'Avant/Après', icon: 'RefreshCw' },
    { id: 'process', label: 'Notre Méthode', icon: 'Settings' },
    { id: 'expertise', label: 'Expertise Pro', icon: 'Award' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-surface via-white to-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Hammer" size={16} className="text-primary" />
            <span className="text-sm font-accent text-primary">
              Excellence en Rénovation
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            Découvrez nos{' '}
            <span className="text-primary">réalisations</span>
            {' '}d'exception
          </h2>

          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Plus de 500 projets réussis avec la même exigence de qualité, 
            de la conception à la réalisation finale.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-subtle">
            <div className="flex space-x-2">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-accent transition-premium ${
                    activeTab === tab?.id
                      ? 'bg-primary text-white shadow-rose'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'before-after' && (
          <div className="space-y-16">
            {/* Featured Before/After */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-rose">
              <div className="grid lg:grid-cols-2">
                {/* Before/After Images */}
                <div className="relative">
                  <div className="grid grid-cols-2 h-64 sm:h-80 lg:h-96">
                    <div className="relative overflow-hidden">
                      <Image
                        src={renovationGallery?.[currentImageIndex]?.before}
                        alt="Avant rénovation"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        Avant
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <Image
                        src={renovationGallery?.[currentImageIndex]?.after}
                        alt="Après rénovation"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                        Après
                      </div>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {renovationGallery?.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-premium ${
                          index === currentImageIndex ? 'bg-primary' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-accent mb-4">
                      {renovationGallery?.[currentImageIndex]?.category}
                    </div>
                    <h3 className="font-headline text-2xl lg:text-3xl text-text-primary mb-4">
                      {renovationGallery?.[currentImageIndex]?.title}
                    </h3>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-surface rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Euro" size={16} className="text-primary" />
                        <span className="text-sm font-accent text-text-secondary">Budget</span>
                      </div>
                      <div className="font-headline text-lg text-text-primary">
                        {renovationGallery?.[currentImageIndex]?.budget}
                      </div>
                    </div>
                    <div className="bg-surface rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span className="text-sm font-accent text-text-secondary">Durée</span>
                      </div>
                      <div className="font-headline text-lg text-text-primary">
                        {renovationGallery?.[currentImageIndex]?.duration}
                      </div>
                    </div>
                    <div className="bg-surface rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="Square" size={16} className="text-primary" />
                        <span className="text-sm font-accent text-text-secondary">Surface</span>
                      </div>
                      <div className="font-headline text-lg text-text-primary">
                        {renovationGallery?.[currentImageIndex]?.surface}
                      </div>
                    </div>
                    <div className="bg-surface rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="MapPin" size={16} className="text-primary" />
                        <span className="text-sm font-accent text-text-secondary">Lieu</span>
                      </div>
                      <div className="font-headline text-lg text-text-primary">
                        {renovationGallery?.[currentImageIndex]?.location}
                      </div>
                    </div>
                  </div>

                  {/* Improvements */}
                  <div className="mb-6">
                    <h4 className="font-accent text-text-primary mb-3">Améliorations réalisées:</h4>
                    <ul className="space-y-2">
                      {renovationGallery?.[currentImageIndex]?.improvements?.map((improvement, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-success" />
                          <span className="text-text-secondary text-sm">{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant="outline"
                    iconName="Eye"
                    iconPosition="left"
                    iconSize={16}
                    onClick={() => navigate('/portfolio-results')}
                    className="hover-scale"
                  >
                    Voir Plus de Réalisations
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="font-headline text-2xl lg:text-3xl text-text-primary mb-4">
                Notre Méthode Éprouvée
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Un processus rodé en 4 étapes pour garantir la qualité 
                et le respect des délais sur chaque projet.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {renovationProcess?.map((step, index) => (
                <div key={step?.step} className="relative">
                  {/* Connector Line */}
                  {index < renovationProcess?.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0"></div>
                  )}

                  <div className="relative bg-white rounded-2xl p-6 shadow-subtle hover:shadow-rose-hover transition-premium hover-lift z-10">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-headline text-sm">
                      {step?.step}
                    </div>

                    {/* Step Icon */}
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mt-4">
                      <Icon name={step?.icon} size={24} className="text-primary" />
                    </div>

                    <h4 className="font-headline text-lg text-text-primary mb-2">
                      {step?.title}
                    </h4>

                    <p className="text-text-secondary text-sm mb-4">
                      {step?.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center space-x-2 mb-4 text-primary">
                      <Icon name="Clock" size={14} />
                      <span className="text-xs font-accent">{step?.duration}</span>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h5 className="font-accent text-xs text-text-primary mb-2">Livrables:</h5>
                      <ul className="space-y-1">
                        {step?.deliverables?.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center space-x-1">
                            <Icon name="Check" size={10} className="text-success" />
                            <span className="text-xs text-text-secondary">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'expertise' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h3 className="font-headline text-2xl lg:text-3xl text-text-primary mb-4">
                Notre Expertise Professionnelle
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Les outils et méthodes qui font la différence 
                pour un résultat exceptionnel et durable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {professionalFeatures?.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-subtle hover:shadow-rose-hover transition-premium hover-lift"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={feature?.icon} size={24} className="text-primary" />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-headline text-xl text-text-primary mb-3">
                        {feature?.title}
                      </h4>
                      <p className="text-text-secondary mb-4">
                        {feature?.description}
                      </p>

                      <ul className="space-y-2">
                        {feature?.features?.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <Icon name="Star" size={14} className="text-primary" />
                            <span className="text-sm text-text-secondary">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
              <h3 className="font-headline text-2xl text-text-primary mb-4">
                Prêt à transformer votre habitat ?
              </h3>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                Bénéficiez de notre expertise pour concrétiser votre projet 
                avec les meilleurs standards de qualité.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  iconSize={20}
                  onClick={() => navigate('/contact-quote')}
                  className="font-cta hover-scale"
                >
                  Étude Gratuite
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  iconName="FolderOpen"
                  iconPosition="left"
                  iconSize={20}
                  onClick={() => navigate('/portfolio-results')}
                  className="font-cta hover-scale"
                >
                  Portfolio Complet
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RenovationShowcase;