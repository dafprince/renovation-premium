import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      location: 'Paris 15ème',
      project: 'Rénovation complète appartement 85m²',
      rating: 5,
      satisfaction: 98,
      timeline: '6 semaines',
      budget: '45 000€',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      videoThumbnail: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
      testimonial: `Équipe exceptionnelle ! RénoVision Pro a transformé notre appartement au-delà de nos espérances. La communication était parfaite, les délais respectés et la qualité irréprochable. Je recommande vivement !`,
      highlights: [
        'Respect des délais',
        'Qualité exceptionnelle',
        'Communication parfaite',
        'Budget maîtrisé'
      ],
      beforeAfter: {
        before: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    },
    {
      id: 2,
      name: 'Jean-Pierre Martin',
      location: 'Boulogne-Billancourt',
      project: 'Rénovation énergétique maison 120m²',
      rating: 5,
      satisfaction: 96,
      timeline: '8 semaines',
      budget: '32 000€',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      videoThumbnail: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      testimonial: `Projet de rénovation énergétique parfaitement réalisé. L'équipe a su nous conseiller sur les meilleures solutions. Nos factures de chauffage ont diminué de 40% ! Un investissement rentable.`,
      highlights: [
        'Économies d\'énergie',
        'Conseils experts',
        'Aides financières',
        'ROI rapide'
      ],
      beforeAfter: {
        before: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    },
    {
      id: 3,
      name: 'Sophie Leroy',
      location: 'Neuilly-sur-Seine',
      project: 'Cuisine et salle de bain sur mesure',
      rating: 5,
      satisfaction: 99,
      timeline: '4 semaines',
      budget: '28 000€',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      videoThumbnail: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600',
      testimonial: `Design exceptionnel et réalisation impeccable ! L'équipe a su créer des espaces fonctionnels et esthétiques. La cuisine est devenue le cœur de notre maison. Merci pour ce travail remarquable !`,
      highlights: [
        'Design personnalisé','Fonctionnalité optimale','Finitions parfaites','Équipe créative'
      ],
      beforeAfter: {
        before: 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=400',after: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    },
    {
      id: 4,
      name: 'Michel Rousseau',location: 'Vincennes',project: 'Extension et aménagement combles',rating: 5,satisfaction: 97,timeline: '10 semaines',budget: '65 000€',avatar: 'https://randomuser.me/api/portraits/men/52.jpg',videoThumbnail: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=600',testimonial: `Projet complexe parfaitement maîtrisé ! L'extension a ajouté 35m² à notre maison. Gestion administrative impeccable, travaux de qualité et respect du budget. Une équipe de vrais professionnels.`,
      highlights: [
        'Gestion administrative',
        'Travaux complexes',
        'Gain d\'espace',
        'Plus-value immobilière'
      ],
      beforeAfter: {
        before: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400',
        after: 'https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentClient = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-rose-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="MessageSquare" size={16} className="text-primary" />
            <span className="text-sm font-accent text-primary">
              Témoignages Clients
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            Ils nous font{' '}
            <span className="text-primary">confiance</span>
          </h2>

          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Découvrez les retours de nos clients sur leurs projets de rénovation. 
            Leur satisfaction est notre plus belle récompense.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-white rounded-2xl shadow-rose-hover overflow-hidden mb-12">
          <div className="grid lg:grid-cols-2">
            {/* Video/Image Section */}
            <div className="relative">
              <div className="aspect-video lg:aspect-square relative overflow-hidden">
                <Image
                  src={currentClient?.videoThumbnail}
                  alt={`Projet de ${currentClient?.name}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-rose transition-premium hover-scale"
                    aria-label="Lire la vidéo témoignage"
                  >
                    <Icon 
                      name={isPlaying ? "Pause" : "Play"} 
                      size={32} 
                      className="text-primary ml-1" 
                    />
                  </button>
                </div>

                {/* Project Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <h4 className="font-headline text-lg mb-1">
                      {currentClient?.project}
                    </h4>
                    <p className="text-white/80 text-sm">
                      {currentClient?.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Before/After Mini Gallery */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-subtle">
                  <Image
                    src={currentClient?.beforeAfter?.before}
                    alt="Avant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-subtle">
                  <Image
                    src={currentClient?.beforeAfter?.after}
                    alt="Après"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              {/* Client Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-subtle">
                  <Image
                    src={currentClient?.avatar}
                    alt={currentClient?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h3 className="font-headline text-xl text-text-primary">
                    {currentClient?.name}
                  </h3>
                  <p className="text-text-secondary">
                    {currentClient?.location}
                  </p>
                </div>

                {/* Rating */}
                <div className="ml-auto">
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={i < currentClient?.rating ? "text-warning fill-current" : "text-gray-300"}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-text-secondary text-right">
                    {currentClient?.rating}/5
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <blockquote className="text-text-primary text-lg leading-relaxed mb-6 italic">
                "{currentClient?.testimonial}"
              </blockquote>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-surface rounded-lg">
                  <div className="font-headline text-lg text-primary">
                    {currentClient?.satisfaction}%
                  </div>
                  <div className="text-xs text-text-secondary">
                    Satisfaction
                  </div>
                </div>
                
                <div className="text-center p-3 bg-surface rounded-lg">
                  <div className="font-headline text-lg text-primary">
                    {currentClient?.timeline}
                  </div>
                  <div className="text-xs text-text-secondary">
                    Durée
                  </div>
                </div>
                
                <div className="text-center p-3 bg-surface rounded-lg">
                  <div className="font-headline text-lg text-primary">
                    {currentClient?.budget}
                  </div>
                  <div className="text-xs text-text-secondary">
                    Budget
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <h4 className="font-accent text-text-primary mb-3">
                  Points forts du projet:
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentClient?.highlights?.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={14} className="text-success" />
                      <span className="text-sm text-text-secondary">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation & Thumbnails */}
        <div className="flex items-center justify-between">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white hover:bg-primary hover:text-white rounded-full flex items-center justify-center shadow-subtle transition-premium hover-scale"
            aria-label="Témoignage précédent"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          {/* Testimonial Thumbnails */}
          <div className="flex space-x-4 overflow-x-auto px-4">
            {testimonials?.map((testimonial, index) => (
              <button
                key={testimonial?.id}
                onClick={() => setCurrentTestimonial(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-3 transition-premium hover-scale ${
                  index === currentTestimonial 
                    ? 'border-primary shadow-rose' 
                    : 'border-white/50 hover:border-primary/50'
                }`}
              >
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white hover:bg-primary hover:text-white rounded-full flex items-center justify-center shadow-subtle transition-premium hover-scale"
            aria-label="Témoignage suivant"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials?.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-premium ${
                index === currentTestimonial 
                  ? 'w-8 bg-primary' :'w-2 bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;