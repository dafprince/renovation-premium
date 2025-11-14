import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSection = () => {
  const certifications = [
    {
      id: 1,
      name: 'RGE Qualibat',
      description: 'Reconnu Garant de l\'Environnement',
      icon: 'Award',
      badge: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=200',
      validUntil: '2025'
    },
    {
      id: 2,
      name: 'Assurance Décennale',
      description: 'Garantie constructeur 10 ans',
      icon: 'Shield',
      badge: 'https://images.pexels.com/photos/5699479/pexels-photo-5699479.jpeg?auto=compress&cs=tinysrgb&w=200',
      validUntil: '2025'
    },
    {
      id: 3,
      name: 'Artisan Certifié',
      description: 'Chambre des Métiers et de l\'Artisanat',
      icon: 'Hammer',
      badge: 'https://images.pexels.com/photos/5699465/pexels-photo-5699465.jpeg?auto=compress&cs=tinysrgb&w=200',
      validUntil: '2025'
    },
    {
      id: 4,
      name: 'Éco-Artisan',
      description: 'Spécialiste rénovation énergétique',
      icon: 'Leaf',
      badge: 'https://images.pexels.com/photos/5699482/pexels-photo-5699482.jpeg?auto=compress&cs=tinysrgb&w=200',
      validUntil: '2025'
    }
  ];

  const stats = [
    {
      id: 1,
      number: '523',
      label: 'Projets Réalisés',
      icon: 'Home',
      increment: '+15 ce mois'
    },
    {
      id: 2,
      number: '98.5%',
      label: 'Clients Satisfaits',
      icon: 'Heart',
      increment: 'Note moyenne 4.9/5'
    },
    {
      id: 3,
      number: '15',
      label: 'Années d\'Expérience',
      icon: 'Calendar',
      increment: 'Depuis 2009'
    },
    {
      id: 4,
      number: '24h',
      label: 'Délai de Réponse',
      icon: 'Clock',
      increment: 'Devis gratuit'
    }
  ];

  const insuranceDetails = [
    {
      id: 1,
      type: 'Responsabilité Civile',
      company: 'AXA Pro',
      amount: '2 000 000€',
      icon: 'Users'
    },
    {
      id: 2,
      type: 'Décennale',
      company: 'Allianz Construction',
      amount: '1 500 000€',
      icon: 'Shield'
    },
    {
      id: 3,
      type: 'Dommages Ouvrage',
      company: 'MAAF Assurances',
      amount: '500 000€',
      icon: 'Home'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 px-4 py-2 rounded-full mb-6">
            <Icon name="ShieldCheck" size={16} className="text-success" />
            <span className="text-sm font-accent text-success">
              Confiance & Sécurité
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            Votre{' '}
            <span className="text-primary">tranquillité d'esprit</span>
            {' '}avant tout
          </h2>

          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Certifications professionnelles, assurances complètes et garanties étendues 
            pour vous offrir une sécurité totale sur tous vos projets de rénovation.
          </p>
        </div>

        {/* Live Counter */}
        <div className="bg-gradient-rose-hero rounded-2xl p-8 mb-16 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats?.map((stat) => (
              <div key={stat?.id} className="space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={stat?.icon} size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-headline text-3xl lg:text-4xl text-text-primary mb-1">
                    {stat?.number}
                  </div>
                  <div className="font-accent text-text-primary mb-1">
                    {stat?.label}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat?.increment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="font-headline text-2xl text-text-primary text-center mb-8">
            Nos Certifications Professionnelles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert) => (
              <div
                key={cert?.id}
                className="bg-surface rounded-xl p-6 text-center hover:shadow-rose transition-premium hover-lift"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-lg overflow-hidden shadow-subtle">
                  <Image
                    src={cert?.badge}
                    alt={cert?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert?.icon} size={24} className="text-primary" />
                </div>
                
                <h4 className="font-headline text-lg text-text-primary mb-2">
                  {cert?.name}
                </h4>
                
                <p className="text-sm text-text-secondary mb-3">
                  {cert?.description}
                </p>
                
                <div className="inline-flex items-center space-x-1 bg-success/10 px-3 py-1 rounded-full">
                  <Icon name="CheckCircle" size={14} className="text-success" />
                  <span className="text-xs font-accent text-success">
                    Valide jusqu'en {cert?.validUntil}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Documentation */}
        <div className="bg-surface rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-headline text-2xl text-text-primary mb-6">
                Couverture Assurance Complète
              </h3>
              
              <p className="text-text-secondary mb-8">
                Toutes nos interventions sont couvertes par des assurances 
                professionnelles complètes pour votre protection et votre sérénité.
              </p>

              <div className="space-y-4">
                {insuranceDetails?.map((insurance) => (
                  <div
                    key={insurance?.id}
                    className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-subtle"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={insurance?.icon} size={20} className="text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-accent text-text-primary">
                        {insurance?.type}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {insurance?.company}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <div className="font-headline text-lg text-primary">
                        {insurance?.amount}
                      </div>
                      <div className="text-xs text-text-secondary">
                        Couverture
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Guarantee Card */}
              <div className="bg-white rounded-xl p-6 shadow-rose border border-primary/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xl text-text-primary">
                      Garantie Décennale
                    </h4>
                    <p className="text-text-secondary">
                      Protection 10 ans
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-text-secondary">
                      Gros œuvre et structure
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-text-secondary">
                      Équipements indissociables
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-text-secondary">
                      Étanchéité et isolation
                    </span>
                  </div>
                </div>
              </div>

              {/* Quality Promise */}
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Heart" size={24} className="text-primary" />
                  <h4 className="font-headline text-lg text-text-primary">
                    Notre Engagement Qualité
                  </h4>
                </div>
                
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-primary" />
                    <span className="text-sm text-text-secondary">
                      Matériaux certifiés et durables
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-primary" />
                    <span className="text-sm text-text-secondary">
                      Artisans qualifiés et expérimentés
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-primary" />
                    <span className="text-sm text-text-secondary">
                      Suivi de chantier rigoureux
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-primary" />
                    <span className="text-sm text-text-secondary">
                      Service après-vente réactif
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;