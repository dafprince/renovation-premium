import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const BehindTheScenes = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Préparation du chantier",
      description: "Découvrez notre méthode de préparation minutieuse qui garantit un chantier propre et organisé.",
      thumbnail: "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "3:45",
      category: "Préparation",
      highlights: [
        "Protection des surfaces existantes",
        "Organisation de l\'espace de travail",
        "Mise en place des équipements de sécurité"
      ]
    },
    {
      id: 2,
      title: "Techniques de pose carrelage",
      description: "Notre expertise en pose de carrelage avec des techniques professionnelles pour un résultat parfait.",
      thumbnail: "https://images.pexels.com/photos/5691658/pexels-photo-5691658.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "5:20",
      category: "Savoir-faire",
      highlights: [
        "Préparation du support",
        "Application de la colle technique",
        "Alignement et finitions précises"
      ]
    },
    {
      id: 3,
      title: "Contrôle qualité final",
      description: "Chaque projet fait l\'objet d\'un contrôle qualité rigoureux avant la livraison au client.",
      thumbnail: "https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "2:30",
      category: "Qualité",
      highlights: [
        "Vérification des finitions",
        "Test des installations",
        "Nettoyage complet du chantier"
      ]
    },
    {
      id: 4,
      title: "Innovation et outils",
      description: "Les outils et technologies modernes que nous utilisons pour optimiser la qualité et les délais.",
      thumbnail: "https://images.pexels.com/photos/5691661/pexels-photo-5691661.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "4:15",
      category: "Innovation",
      highlights: [
        "Outils de mesure laser",
        "Équipements de découpe précise",
        "Technologies d\'application moderne"
      ]
    }
  ];

  const craftmanshipPoints = [
    {
      icon: "Award",
      title: "15+ ans d'expérience",
      description: "Une expertise reconnue dans tous les corps de métier"
    },
    {
      icon: "Users",
      title: "Équipe certifiée",
      description: "Tous nos artisans possèdent les certifications professionnelles"
    },
    {
      icon: "Shield",
      title: "Garantie décennale",
      description: "Tous nos travaux sont couverts par une assurance décennale"
    },
    {
      icon: "Clock",
      title: "Respect des délais",
      description: "98% de nos projets livrés dans les temps impartis"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl text-text-primary mb-4">
          Dans les coulisses de nos chantiers
        </h2>
        <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
          Découvrez le savoir-faire et l'attention aux détails qui font la différence dans chacun de nos projets
        </p>
      </div>
      {/* Video Gallery */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Video Player */}
        <div className="lg:col-span-2">
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-subtle">
            <div className="relative aspect-video bg-gray-900">
              <Image
                src={videos?.[activeVideo]?.thumbnail}
                alt={videos?.[activeVideo]?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="bg-white/90 text-gray-900 hover:bg-white font-cta"
                >
                  Regarder la vidéo
                </Button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-accent">
                {videos?.[activeVideo]?.duration}
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-accent rounded-full">
                  {videos?.[activeVideo]?.category}
                </span>
              </div>
              
              <h3 className="font-headline text-xl text-text-primary mb-3">
                {videos?.[activeVideo]?.title}
              </h3>
              
              <p className="text-text-secondary font-body mb-4">
                {videos?.[activeVideo]?.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-cta text-text-primary">Points clés :</h4>
                {videos?.[activeVideo]?.highlights?.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary font-body">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video List */}
        <div className="space-y-4">
          <h3 className="font-headline text-xl text-text-primary">Autres vidéos</h3>
          {videos?.map((video, index) => (
            <button
              key={video?.id}
              onClick={() => setActiveVideo(index)}
              className={`w-full text-left p-4 rounded-lg border transition-premium hover-scale ${
                activeVideo === index 
                  ? 'border-primary bg-primary/5 shadow-rose' 
                  : 'border-border hover:border-primary/30 bg-card'
              }`}
            >
              <div className="flex space-x-3">
                <div className="relative flex-shrink-0">
                  <Image
                    src={video?.thumbnail}
                    alt={video?.title}
                    className="w-16 h-12 object-cover rounded"
                  />
                  <div className="absolute inset-0 bg-black/30 rounded flex items-center justify-center">
                    <Icon name="Play" size={16} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-cta text-sm text-text-primary mb-1 truncate">
                    {video?.title}
                  </h4>
                  <p className="text-xs text-text-secondary font-body line-clamp-2">
                    {video?.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-primary font-accent">{video?.category}</span>
                    <span className="text-xs text-text-secondary">{video?.duration}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* Craftsmanship Points */}
      <div className="bg-gradient-rose-hero rounded-xl p-8 border border-rose">
        <div className="text-center mb-8">
          <h3 className="font-headline text-2xl text-text-primary mb-3">
            Notre engagement qualité
          </h3>
          <p className="text-text-secondary font-body">
            Les piliers de notre excellence artisanale
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {craftmanshipPoints?.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-subtle">
                <Icon name={point?.icon} size={28} className="text-primary" strokeWidth={2} />
              </div>
              <h4 className="font-cta text-lg text-text-primary mb-2">
                {point?.title}
              </h4>
              <p className="text-sm text-text-secondary font-body">
                {point?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Call to Action */}
      <div className="text-center bg-card rounded-xl p-8 border border-border">
        <h3 className="font-headline text-2xl text-text-primary mb-4">
          Prêt à découvrir notre savoir-faire ?
        </h3>
        <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
          Contactez-nous pour une consultation gratuite et découvrez comment nous pouvons transformer votre projet en réalité
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            iconName="Calendar"
            iconPosition="left"
            className="font-cta hover-scale"
          >
            Planifier une visite
          </Button>
          <Button
            variant="outline"
            size="lg"
            iconName="Phone"
            iconPosition="left"
            className="font-cta hover-scale"
          >
            Appeler maintenant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BehindTheScenes;