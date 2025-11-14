import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const certifications = [
    {
      name: 'RGE Qualibat',
      description: 'Reconnu Garant de l\'Environnement',
      icon: 'Award',
      color: 'text-success'
    },
    {
      name: 'Assurance Décennale',
      description: 'Garantie 10 ans sur tous travaux',
      icon: 'Shield',
      color: 'text-primary'
    },
    {
      name: 'Artisan Certifié',
      description: 'Qualification professionnelle',
      icon: 'Star',
      color: 'text-warning'
    },
    {
      name: 'Éco-Artisan',
      description: 'Spécialiste rénovation énergétique',
      icon: 'Leaf',
      color: 'text-success'
    }
  ];

  const guarantees = [
    {
      title: 'Devis gratuit et sans engagement',
      description: 'Estimation détaillée de votre projet sans aucun frais',
      icon: 'FileText'
    },
    {
      title: 'Réponse garantie sous 2h',
      description: 'Nous nous engageons à vous répondre rapidement',
      icon: 'Clock'
    },
    {
      title: 'Confidentialité totale',
      description: 'Vos données personnelles sont protégées et sécurisées',
      icon: 'Lock'
    },
    {
      title: 'Suivi personnalisé',
      description: 'Un interlocuteur dédié pour votre projet',
      icon: 'UserCheck'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Dupont',
      location: 'Paris 15ème',
      rating: 5,
      comment: `Équipe très professionnelle et réactive. Le devis était détaillé et transparent. Travaux réalisés dans les délais avec un résultat parfait !`,
      project: 'Rénovation cuisine',
      date: '2025-01-15'
    },
    {
      name: 'Jean-Pierre Martin',
      location: 'Boulogne-Billancourt',
      rating: 5,
      comment: `Excellent accompagnement du début à la fin. L'équipe a su nous conseiller et respecter notre budget. Je recommande vivement !`,project: 'Isolation thermique',date: '2025-01-10'
    },
    {
      name: 'Sophie Leroy',location: 'Vincennes',
      rating: 5,
      comment: `Service client exceptionnel. Réponse immédiate à nos questions et travaux de qualité. Notre salle de bain est magnifique !`,
      project: 'Rénovation salle de bain',date: '2025-01-08'
    }
  ];

  const stats = [
    { value: '2 847', label: 'Projets réalisés', icon: 'Home' },
    { value: '98%', label: 'Clients satisfaits', icon: 'ThumbsUp' },
    { value: '15', label: 'Années d\'expérience', icon: 'Calendar' },
    { value: '24h', label: 'Délai de réponse moyen', icon: 'Clock' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-surface via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl text-text-primary mb-4">
            Votre confiance, notre priorité
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Découvrez pourquoi plus de 2 800 clients nous ont fait confiance 
            pour leurs projets de rénovation.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-subtle mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="font-headline text-3xl text-text-primary mb-2">
                {stat?.value}
              </div>
              <p className="text-sm text-text-secondary font-accent">
                {stat?.label}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="font-headline text-2xl text-text-primary text-center mb-8">
            Nos certifications et garanties
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications?.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-border hover-lift transition-premium hover:shadow-rose"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface mb-4 ${cert?.color}`}>
                  <Icon name={cert?.icon} size={28} />
                </div>
                <h4 className="font-headline text-lg text-text-primary mb-2">
                  {cert?.name}
                </h4>
                <p className="text-sm text-text-secondary">
                  {cert?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-16">
          <h3 className="font-headline text-2xl text-text-primary text-center mb-8">
            Nos engagements envers vous
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guarantees?.map((guarantee, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-border hover-lift transition-premium"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={guarantee?.icon} size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg text-text-primary mb-2">
                      {guarantee?.title}
                    </h4>
                    <p className="text-text-secondary">
                      {guarantee?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Testimonials */}
        <div>
          <h3 className="font-headline text-2xl text-text-primary text-center mb-8">
            Témoignages récents
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials?.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-border hover-lift transition-premium"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-accent text-text-primary">
                      {testimonial?.name}
                    </h4>
                    <p className="text-sm text-text-secondary">
                      {testimonial?.location}
                    </p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  "{testimonial?.comment}"
                </p>
                
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {testimonial?.project}
                  </span>
                  <span>
                    {new Date(testimonial.date)?.toLocaleDateString('fr-FR')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/10 border border-rose/20 rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <Icon name="Shield" size={24} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-headline text-lg text-text-primary mb-2">
                Protection de vos données personnelles
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed">
                Conformément au RGPD, vos informations personnelles sont traitées de manière sécurisée 
                et ne sont utilisées que dans le cadre de votre demande de devis. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données à tout moment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;