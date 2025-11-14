import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceDiscovery = () => {
  const navigate = useNavigate();
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 'renovation-complete',
      title: 'Rénovation Complète',
      description: 'Transformation totale de votre habitat avec gestion de projet clé en main',
      icon: 'Home',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      priceRange: '15 000€ - 80 000€',
      duration: '4-12 semaines',
      subServices: [
        'Démolition et gros œuvre',
        'Électricité et plomberie',
        'Isolation thermique',
        'Revêtements et finitions'
      ],
      features: [
        'Devis détaillé gratuit',
        'Suivi de chantier 24/7',
        'Garantie décennale',
        'Financement possible'
      ]
    },
    {
      id: 'cuisine-salle-bain',
      title: 'Cuisine & Salle de Bain',
      description: 'Modernisation des espaces de vie avec optimisation fonctionnelle',
      icon: 'ChefHat',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      priceRange: '8 000€ - 35 000€',
      duration: '2-6 semaines',
      subServices: [
        'Conception 3D personnalisée',
        'Plomberie et électricité',
        'Carrelage et faïence',
        'Mobilier sur mesure'
      ],
      features: [
        'Design personnalisé',
        'Équipements haut de gamme',
        'Installation professionnelle',
        'SAV 5 ans'
      ]
    },
    {
      id: 'efficacite-energetique',
      title: 'Efficacité Énergétique',
      description: 'Solutions durables pour réduire votre consommation et valoriser votre bien',
      icon: 'Zap',
      image: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=600',
      priceRange: '5 000€ - 25 000€',
      duration: '1-4 semaines',
      subServices: [
        'Isolation thermique',
        'Pompe à chaleur',
        'Panneaux solaires',
        'Ventilation VMC'
      ],
      features: [
        'Audit énergétique gratuit',
        'Aides financières',
        'Certification RGE',
        'Économies garanties'
      ]
    },
    {
      id: 'extension-amenagement',
      title: 'Extension & Aménagement',
      description: 'Agrandissement et optimisation de vos espaces de vie',
      icon: 'Expand',
      image: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600',
      priceRange: '20 000€ - 100 000€',
      duration: '6-16 semaines',
      subServices: [
        'Étude de faisabilité',
        'Permis de construire',
        'Gros œuvre',
        'Aménagement intérieur'
      ],
      features: [
        'Étude architecturale',
        'Démarches administratives',
        'Respect des délais',
        'Garantie constructeur'
      ]
    },
    {
      id: 'maintenance-depannage',
      title: 'Maintenance & Dépannage',
      description: 'Interventions rapides et maintenance préventive de votre habitat',
      icon: 'Wrench',
      image: 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=600',
      priceRange: '80€ - 2 000€',
      duration: '1 jour - 1 semaine',
      subServices: [
        'Dépannage urgent 24/7',
        'Maintenance préventive',
        'Petites réparations',
        'Diagnostic technique'
      ],
      features: [
        'Intervention sous 2h',
        'Devis transparent',
        'Pièces garanties',
        'Contrat maintenance'
      ]
    },
    {
      id: 'decoration-amenagement',
      title: 'Décoration & Finitions',
      description: 'Personnalisation et embellissement de vos intérieurs',
      icon: 'Palette',
      image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600',
      priceRange: '2 000€ - 15 000€',
      duration: '1-3 semaines',
      subServices: [
        'Conseil en décoration',
        'Peinture et revêtements',
        'Éclairage design',
        'Mobilier et accessoires'
      ],
      features: [
        'Conseil déco gratuit',
        'Matériaux premium',
        'Réalisation soignée',
        'Satisfaction garantie'
      ]
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Compass" size={16} className="text-primary" />
            <span className="text-sm font-accent text-primary">
              Découvrez Nos Services
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            Votre projet de{' '}
            <span className="text-primary">rénovation</span>
          </h2>

          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            De la simple réparation à la transformation complète, 
            nos experts vous accompagnent dans tous vos projets avec 
            transparence et excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="group relative bg-white rounded-2xl shadow-subtle hover:shadow-rose-hover transition-premium overflow-hidden cursor-pointer hover-lift"
              onMouseEnter={() => setHoveredService(service?.id)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => navigate('/services-overview')}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service?.image}
                  alt={service?.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-premium"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Service Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                  <Icon name={service?.icon} size={24} className="text-primary" />
                </div>

                {/* Price Range */}
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-accent">
                  {service?.priceRange}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="font-headline text-xl text-text-primary mb-2 group-hover:text-primary transition-premium">
                    {service?.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service?.description}
                  </p>
                </div>

                {/* Duration */}
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="Clock" size={16} className="text-text-secondary" />
                  <span className="text-sm text-text-secondary font-accent">
                    Durée: {service?.duration}
                  </span>
                </div>

                {/* Hover Content */}
                <div className={`transition-all duration-300 ${
                  hoveredService === service?.id 
                    ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
                }`}>
                  <div className="border-t border-border pt-4 space-y-4">
                    {/* Sub Services */}
                    <div>
                      <h4 className="font-accent text-sm text-text-primary mb-2">
                        Services inclus:
                      </h4>
                      <ul className="space-y-1">
                        {service?.subServices?.map((subService, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <Icon name="Check" size={12} className="text-success" />
                            <span className="text-xs text-text-secondary">
                              {subService}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-accent text-sm text-text-primary mb-2">
                        Avantages:
                      </h4>
                      <ul className="space-y-1">
                        {service?.features?.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <Icon name="Star" size={12} className="text-primary" />
                            <span className="text-xs text-text-secondary">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-4 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="ArrowRight"
                    iconPosition="right"
                    iconSize={16}
                    className="w-full font-accent group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-premium"
                  >
                    En savoir plus
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-rose p-8 max-w-2xl mx-auto">
            <h3 className="font-headline text-2xl text-text-primary mb-4">
              Besoin d'un conseil personnalisé ?
            </h3>
            <p className="text-text-secondary mb-6">
              Nos experts analysent votre projet et vous proposent 
              la solution la plus adaptée à vos besoins et votre budget.
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
                Consultation Gratuite
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                iconSize={20}
                onClick={() => navigate('/services-overview')}
                className="font-cta hover-scale"
              >
                Simulateur de Prix
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDiscovery;