import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterImages = [
    {
      id: 1,
      before: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Rénovation Cuisine Moderne",
      description: "Transformation complète d\'une cuisine traditionnelle en espace moderne et fonctionnel"
    },
    {
      id: 2,
      before: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Rénovation Salle de Bain",
      description: "Modernisation complète avec optimisation de l\'espace et efficacité énergétique"
    },
    {
      id: 3,
      before: "https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800",
      after: "https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Rénovation Salon",
      description: "Création d\'un espace de vie chaleureux et contemporain"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % beforeAfterImages?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [beforeAfterImages?.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages?.length) % beforeAfterImages?.length);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/10 via-white to-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                <Icon name="Award" size={16} className="text-primary" />
                <span className="text-sm font-accent text-primary">
                  Certifié RGE & Qualibat
                </span>
              </div>

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-tight">
                Vos travaux,{' '}
                <span className="text-primary">en toute sérénité</span>
              </h1>

              <p className="text-lg sm:text-xl text-text-secondary font-body leading-relaxed">
                Transformez votre habitat avec l'expertise RénoVision Pro. 
                De la conception à la réalisation, nous accompagnons vos projets 
                de rénovation avec transparence et excellence.
              </p>

              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="CheckCircle" size={20} className="text-success" />
                <span className="font-accent">Devis gratuit sous 24h</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
                onClick={() => navigate('/contact-quote')}
                className="font-cta hover-scale shadow-rose"
              >
                Devis Gratuit
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={20}
                onClick={() => navigate('/services-overview')}
                className="font-cta hover-scale"
              >
                Découvrir Nos Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="font-headline text-2xl text-primary">500+</div>
                <div className="text-sm text-text-secondary">Projets Réalisés</div>
              </div>
              <div className="text-center">
                <div className="font-headline text-2xl text-primary">15</div>
                <div className="text-sm text-text-secondary">Ans d'Expérience</div>
              </div>
              <div className="text-center">
                <div className="font-headline text-2xl text-primary">98%</div>
                <div className="text-sm text-text-secondary">Clients Satisfaits</div>
              </div>
            </div>
          </div>

          {/* Right Content - Before/After Slider */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-rose-hover overflow-hidden">
              {/* Slider Container */}
              <div className="relative h-96 sm:h-[500px]">
                {beforeAfterImages?.map((item, index) => (
                  <div
                    key={item?.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="grid grid-cols-2 h-full">
                      {/* Before */}
                      <div className="relative overflow-hidden">
                        <Image
                          src={item?.before}
                          alt={`Avant - ${item?.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-accent">
                          Avant
                        </div>
                      </div>
                      
                      {/* After */}
                      <div className="relative overflow-hidden">
                        <Image
                          src={item?.after}
                          alt={`Après - ${item?.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-accent">
                          Après
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="font-headline text-lg text-white mb-2">
                        {item?.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {item?.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-subtle transition-premium hover-scale z-10"
                  aria-label="Image précédente"
                >
                  <Icon name="ChevronLeft" size={20} className="text-text-primary" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-subtle transition-premium hover-scale z-10"
                  aria-label="Image suivante"
                >
                  <Icon name="ChevronRight" size={20} className="text-text-primary" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {beforeAfterImages?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-premium ${
                      index === currentSlide ? 'bg-primary' : 'bg-white/50'
                    }`}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-rose p-4 border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-success" />
                </div>
                <div>
                  <div className="font-headline text-lg text-text-primary">+35%</div>
                  <div className="text-sm text-text-secondary">Valeur Immobilière</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-rose p-4 border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="font-headline text-lg text-text-primary">3-6</div>
                  <div className="text-sm text-text-secondary">Semaines</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;