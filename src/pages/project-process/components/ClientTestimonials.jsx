import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      location: "Lyon, 69000",
      project: "Rénovation complète appartement 85m²",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
      date: "Novembre 2024",
      quote: `La transparence de RénoVision Pro m'a immédiatement rassurée. Dès le premier contact, j'ai su exactement à quoi m'attendre : délais, étapes, coûts... Tout était clair et respecté à la lettre.`,fullTestimonial: `Après plusieurs devis décevants, RénoVision Pro a été une révélation. Leur processus structuré m'a donné confiance dès le départ. L'équipe m'a accompagnée à chaque étape, du choix des matériaux jusqu'aux finitions.\n\nLe suivi en temps réel via leur plateforme client était fantastique - je pouvais voir l'avancement quotidien avec photos à l'appui. Aucune surprise, aucun dépassement, que de la sérénité.\n\nMon appartement est maintenant magnifique et économe en énergie. Je recommande vivement !`,
      highlights: [
        "Respect total des délais annoncés",
        "Communication transparente quotidienne",
        "Qualité des finitions exceptionnelle",
        "Aucun dépassement budgétaire"
      ],
      beforeAfter: {
        before: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400",
        after: "https://images.pexels.com/photos/6474472/pexels-photo-6474472.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    },
    {
      id: 2,
      name: "Pierre Martin",
      location: "Marseille, 13000",
      project: "Extension maison + isolation thermique",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
      date: "Octobre 2024",
      quote: `J'étais sceptique au début, mais leur méthode de travail m'a bluffé. Chaque phase était planifiée au jour près, et ils ont tenu tous leurs engagements. Un vrai professionnalisme !`,
      fullTestimonial: `En tant qu'ingénieur, j'apprécie la rigueur et la méthode. RénoVision Pro a dépassé mes attentes sur ces aspects. Leur planning détaillé, leurs contrôles qualité systématiques, tout était parfaitement orchestré.\n\nL'extension de 30m² a été réalisée en 8 semaines exactement comme prévu. L'isolation thermique a réduit ma facture énergétique de 40%. Un investissement rentable et bien exécuté.\n\nLeur équipe est composée de vrais professionnels qui maîtrisent leur métier.`,
      highlights: [
        "Planning respecté à la semaine près",
        "Économies d\'énergie de 40%",
        "Équipe technique très compétente",
        "Suivi post-travaux excellent"
      ],
      beforeAfter: {
        before: "https://images.pexels.com/photos/6474473/pexels-photo-6474473.jpeg?auto=compress&cs=tinysrgb&w=400",
        after: "https://images.pexels.com/photos/6474474/pexels-photo-6474474.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    },
    {
      id: 3,
      name: "Sophie Leroy",
      location: "Toulouse, 31000",
      project: "Rénovation cuisine et salle de bain",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      rating: 5,
      date: "Septembre 2024",
      quote: `Leur processus m'a permis de vivre sereinement ma rénovation. Pas de stress, pas de surprises, juste la joie de voir mon projet prendre forme jour après jour.`,
      fullTestimonial: `Avec deux enfants en bas âge, je redoutais les travaux. L'équipe de RénoVision Pro a été d'une prévenance exceptionnelle. Ils ont adapté leurs horaires, protégé les zones de vie, et maintenu la propreté.\n\nLeur application mobile m'a permis de suivre l'avancement même au bureau. Les photos quotidiennes et les explications détaillées m'ont rassurée tout au long du projet.\n\nLe résultat final dépasse mes espérances. Ma cuisine et ma salle de bain sont devenues les pièces préférées de la maison !`,
      highlights: [
        "Adaptation aux contraintes familiales",
        "Propreté maintenue en permanence",
        "Application mobile très pratique",
        "Résultat au-delà des attentes"
      ],
      beforeAfter: {
        before: "https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=400",
        after: "https://images.pexels.com/photos/6474476/pexels-photo-6474476.jpeg?auto=compress&cs=tinysrgb&w=400"
      }
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl text-text-primary mb-4">
          Ils ont vécu l'expérience RénoVision Pro
        </h2>
        <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
          Découvrez comment notre processus transparent a transformé leurs projets en succès
        </p>
      </div>
      {/* Main Testimonial */}
      <div className="bg-card rounded-xl border border-border shadow-subtle overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Content */}
          <div className="p-8">
            <div className="flex items-start space-x-4 mb-6">
              <Image
                src={currentTestimonial?.avatar}
                alt={currentTestimonial?.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-headline text-xl text-text-primary mb-1">
                  {currentTestimonial?.name}
                </h3>
                <p className="text-text-secondary font-body text-sm mb-2">
                  {currentTestimonial?.location} • {currentTestimonial?.date}
                </p>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-primary font-accent">
                  {currentTestimonial?.project}
                </p>
              </div>
            </div>

            <blockquote className="text-lg text-text-primary font-body italic mb-6 leading-relaxed">
              "{currentTestimonial?.quote}"
            </blockquote>

            <div className="space-y-4 mb-6">
              <h4 className="font-cta text-text-primary">Points forts soulignés :</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {currentTestimonial?.highlights?.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary font-body">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {testimonials?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-premium ${
                      activeTestimonial === index ? 'bg-primary' : 'bg-border hover:bg-primary/30'
                    }`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-lg border border-border hover:border-primary/30 transition-premium hover-scale"
                >
                  <Icon name="ChevronLeft" size={20} className="text-text-secondary" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-lg border border-border hover:border-primary/30 transition-premium hover-scale"
                >
                  <Icon name="ChevronRight" size={20} className="text-text-secondary" />
                </button>
              </div>
            </div>
          </div>

          {/* Before/After Images */}
          <div className="bg-muted p-8">
            <h4 className="font-cta text-lg text-text-primary mb-4 text-center">
              Avant / Après
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={currentTestimonial?.beforeAfter?.before}
                    alt="Avant travaux"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-accent">
                    Avant
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={currentTestimonial?.beforeAfter?.after}
                    alt="Après travaux"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-accent">
                    Après
                  </div>
                </div>
              </div>
            </div>

            {/* Full Testimonial */}
            <div className="mt-6 p-4 bg-white rounded-lg border border-border">
              <h5 className="font-cta text-text-primary mb-3">Témoignage complet :</h5>
              <div className="text-sm text-text-secondary font-body leading-relaxed space-y-3">
                {currentTestimonial?.fullTestimonial?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="bg-gradient-rose-hero rounded-xl p-8 border border-rose">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-headline text-primary mb-2">98%</div>
            <div className="text-text-secondary font-body">Clients satisfaits</div>
          </div>
          <div>
            <div className="text-4xl font-headline text-primary mb-2">4.9/5</div>
            <div className="text-text-secondary font-body">Note moyenne</div>
          </div>
          <div>
            <div className="text-4xl font-headline text-primary mb-2">250+</div>
            <div className="text-text-secondary font-body">Projets réalisés</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;