import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import ServiceModal from './components/ServiceModal';
import ServiceRecommender from './components/ServiceRecommender';
import CostCalculator from './components/CostCalculator';
import BeforeAfterGallery from './components/BeforeAfterGallery';

const ServicesOverview = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showRecommender, setShowRecommender] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [recommendedServices, setRecommendedServices] = useState([]);

  const serviceCategories = [
    { id: 'all', name: 'Tous les services', icon: 'Grid3X3' },
    { id: 'renovation-energetique', name: 'Rénovation Énergétique', icon: 'Zap' },
    { id: 'renovation-complete', name: 'Rénovation Complète', icon: 'Home' },
    { id: 'amenagement-interieur', name: 'Aménagement Intérieur', icon: 'Palette' },
    { id: 'renovation-exterieure', name: 'Rénovation Extérieure', icon: 'TreePine' }
  ];

  const services = [
    {
      id: 'isolation-thermique',
      category: 'renovation-energetique',
      title: 'Isolation Thermique',
      description: 'Amélioration de l\'isolation des murs, toitures et sols pour réduire les déperditions énergétiques et améliorer le confort thermique.',
      detailedDescription: `Notre service d'isolation thermique comprend une analyse complète de votre habitation pour identifier les zones de déperdition énergétique. Nous utilisons des matériaux certifiés RGE et respectons les normes RT2012/RE2020. L'isolation peut concerner les combles, les murs par l'intérieur ou l'extérieur, les sols et les cloisons. Nos équipes qualifiées garantissent une pose dans les règles de l'art avec un suivi qualité rigoureux.`,image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg',icon: 'Shield',duration: '3-7 jours',priceFrom: '45 €/m²',warranty: '10 ans',
      certification: 'RGE Qualibat',
      energySavings: 30,
      isPopular: true,
      features: [
        'Diagnostic thermique complet','Matériaux certifiés RGE','Isolation murs/combles/sols','Traitement ponts thermiques','Contrôle étanchéité à l\'air',
        'Garantie décennale'
      ]
    },
    {
      id: 'chauffage-pompe-chaleur',
      category: 'renovation-energetique',
      title: 'Pompe à Chaleur',
      description: 'Installation de systèmes de chauffage écologiques et économiques : pompes à chaleur air/air, air/eau et géothermiques.',
      detailedDescription: `Installation complète de pompes à chaleur haute performance avec dimensionnement personnalisé selon vos besoins. Nous proposons des solutions air/air pour le chauffage et la climatisation, air/eau pour le chauffage et l'eau chaude sanitaire, et géothermiques pour une efficacité maximale. Toutes nos installations bénéficient des aides MaPrimeRénov' et CEE.`,
      image: 'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg',
      icon: 'Thermometer',
      duration: '2-4 jours',
      priceFrom: '8 500 €',
      warranty: '5 ans pièces et main d\'œuvre',
      certification: 'QualiPAC RGE',
      energySavings: 50,
      features: [
        'Étude thermique personnalisée',
        'Installation certifiée RGE',
        'Pompes à chaleur A+++',
        'Régulation intelligente',
        'Maintenance préventive',
        'Aides financières incluses'
      ]
    },
    {
      id: 'renovation-complete-maison',
      category: 'renovation-complete',
      title: 'Rénovation Complète Maison',
      description: 'Transformation totale de votre habitation avec gestion complète du projet de A à Z, incluant tous les corps de métier.',
      detailedDescription: `Prise en charge complète de votre projet de rénovation avec coordination de tous les corps de métier. De la conception à la livraison, nous gérons l'ensemble des travaux : gros œuvre, second œuvre, finitions, et équipements. Notre approche globale garantit cohérence, qualité et respect des délais avec un interlocuteur unique pour votre sérénité.`,image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg',icon: 'Home',duration: '3-6 mois',priceFrom: '1 200 €/m²',warranty: '10 ans tous travaux',
      certification: 'Qualibat RGE',
      energySavings: 60,
      isPopular: true,
      features: [
        'Conception architecturale','Coordination tous corps de métier','Gestion administrative complète','Suivi de chantier quotidien','Garanties tous travaux','Livraison clés en main'
      ]
    },
    {
      id: 'cuisine-sur-mesure',category: 'amenagement-interieur',title: 'Cuisine Sur Mesure',description: 'Conception et réalisation de cuisines personnalisées avec électroménager intégré et finitions haut de gamme.',
      detailedDescription: `Création de votre cuisine idéale avec conception 3D personnalisée et fabrication sur mesure. Nous intégrons tous les équipements (électroménager, éclairage, domotique) et proposons une large gamme de matériaux et finitions. De la cuisine contemporaine à la cuisine traditionnelle, nous adaptons le design à vos goûts et contraintes techniques.`,
      image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',icon: 'ChefHat',duration: '2-3 semaines',priceFrom: '15 000 €',warranty: '5 ans mobilier',
      certification: 'Artisan qualifié',
      energySavings: 15,
      features: [
        'Conception 3D personnalisée','Fabrication sur mesure','Électroménager intégré','Plan de travail pierre/quartz','Éclairage LED intégré','Installation complète'
      ]
    },
    {
      id: 'ravalement-facade',category: 'renovation-exterieure',title: 'Ravalement de Façade',description: 'Rénovation complète des façades avec nettoyage, réparation, isolation extérieure et finitions décoratives.',detailedDescription: `Remise à neuf complète de vos façades avec diagnostic préalable et traitement adapté selon le support (pierre, béton, brique). Nos prestations incluent le nettoyage, la réparation des fissures, l'isolation thermique par l'extérieur (ITE) et l'application de revêtements décoratifs durables. Respect des règles d'urbanisme locales.`,image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',icon: 'Paintbrush',duration: '2-4 semaines',priceFrom: '80 €/m²',warranty: '10 ans étanchéité',
      certification: 'Qualibat façade',
      energySavings: 25,
      features: [
        'Diagnostic façade complet','Nettoyage haute pression','Réparation fissures','Isolation extérieure (ITE)','Finitions décoratives','Respect urbanisme local'
      ]
    },
    {
      id: 'salle-bain-complete',category: 'amenagement-interieur',title: 'Salle de Bain Complète',description: 'Rénovation totale de salle de bain avec plomberie, carrelage, sanitaires et aménagements sur mesure.',
      detailedDescription: `Transformation complète de votre salle de bain avec création de plans personnalisés et installation de tous les équipements. Nous gérons la plomberie, l'électricité, le carrelage, les sanitaires et les aménagements. Solutions adaptées aux petits espaces avec optimisation de rangement et accessibilité PMR possible.`,
      image: 'https://images.pexels.com/photos/6585751/pexels-photo-6585751.jpeg',
      icon: 'Bath',
      duration: '1-2 semaines',
      priceFrom: '8 000 €',
      warranty: '5 ans installation',
      certification: 'Plombier agréé',
      energySavings: 20,
      features: [
        'Conception personnalisée',
        'Plomberie complète',
        'Carrelage et faïence',
        'Sanitaires haut de gamme',
        'Éclairage et ventilation',
        'Accessibilité PMR'
      ]
    }
  ];

  const galleryProjects = [
    {
      id: 1,
      title: 'Rénovation Énergétique Complète',
      location: 'Maison individuelle - Lyon',
      beforeImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      afterImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
      surface: '120 m²',
      duration: '6 semaines',
      budget: '45 000 €',
      year: '2024',
      description: `Transformation complète d'une maison des années 70 avec isolation thermique par l'extérieur, installation d'une pompe à chaleur air/eau, remplacement des menuiseries et rénovation de la toiture. Le projet a permis de passer d'une classe énergétique F à B.`,
      improvements: [
        'Consommation énergétique -65%',
        'Confort thermique optimal',
        'Valorisation du bien +20%',
        'Éligibilité MaPrimeRénov\''
      ],
      tags: ['Isolation ITE', 'Pompe à chaleur', 'Menuiseries', 'Toiture']
    },
    {
      id: 2,
      title: 'Cuisine Moderne Sur Mesure',
      location: 'Appartement - Paris 15ème',
      beforeImage: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
      afterImage: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
      surface: '15 m²',
      duration: '3 semaines',
      budget: '25 000 €',
      year: '2024',
      description: `Création d'une cuisine ouverte moderne avec îlot central, électroménager intégré haut de gamme et plan de travail en quartz. Optimisation de l'espace avec rangements sur mesure et éclairage LED intégré.`,
      improvements: [
        'Espace optimisé +40%',
        'Éclairage LED économique',
        'Électroménager A+++',
        'Design contemporain'
      ],
      tags: ['Cuisine sur mesure', 'Îlot central', 'Quartz', 'LED']
    },
    {
      id: 3,
      title: 'Ravalement Façade Historique',
      location: 'Immeuble Haussmannien - Bordeaux',
      beforeImage: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg',
      afterImage: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      surface: '400 m²',
      duration: '8 semaines',
      budget: '35 000 €',
      year: '2023',
      description: `Restauration d'une façade d'immeuble haussmannien avec nettoyage pierre, réparation des ornements, réfection des joints et application d'un traitement hydrofuge. Respect du patrimoine architectural et des contraintes ABF.`,
      improvements: [
        'Étanchéité restaurée','Patrimoine préservé','Isolation améliorée','Conformité ABF'
      ],
      tags: ['Patrimoine', 'Pierre de taille', 'ABF', 'Hydrofuge']
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services?.filter(service => service?.category === activeCategory);

  const handleServiceLearnMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleServiceQuote = (service) => {
    navigate('/contact-quote', { 
      state: { 
        selectedService: service?.title,
        serviceCategory: service?.category 
      } 
    });
  };

  const handleRecommendation = (recommendedServiceIds, userAnswers) => {
    setRecommendedServices(recommendedServiceIds);
    setShowRecommender(false);
    
    // Scroll to services section
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCalculatorResult = (result) => {
    console.log('Calculator result:', result);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-rose-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-text-primary mb-6">
              Nos Services de
              <span className="text-primary block">Rénovation</span>
            </h1>
            <p className="text-xl text-text-secondary font-body mb-8 leading-relaxed">
              Découvrez notre écosystème complet de services de rénovation, 
              de l'amélioration énergétique aux transformations complètes. 
              Chaque projet bénéficie de notre expertise certifiée RGE.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="default"
                size="lg"
                iconName="Lightbulb"
                iconPosition="left"
                iconSize={20}
                onClick={() => setShowRecommender(true)}
                className="font-cta hover-scale"
              >
                Trouvez vos services idéaux
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                iconSize={20}
                onClick={() => navigate('/contact-quote')}
                className="font-cta hover-scale"
              >
                Devis gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Service Recommender Modal */}
      {showRecommender && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowRecommender(false)}
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-rose z-10"
            >
              <Icon name="X" size={20} />
            </button>
            <ServiceRecommender onRecommendation={handleRecommendation} />
          </div>
        </div>
      )}
      {/* Service Categories Filter */}
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {serviceCategories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setActiveCategory(category?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-accent transition-premium hover-scale ${
                  activeCategory === category?.id
                    ? 'bg-primary text-primary-foreground shadow-rose'
                    : 'bg-muted text-text-primary hover:bg-primary/10 hover:text-primary'
                }`}
              >
                <Icon name={category?.icon} size={18} />
                <span>{category?.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Recommended Services Banner */}
      {recommendedServices?.length > 0 && (
        <section className="py-8 bg-gradient-rose-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Target" size={24} className="text-primary" />
              <h2 className="font-cta text-lg text-text-primary">
                Services recommandés pour vous
              </h2>
            </div>
          </div>
        </section>
      )}
      {/* Services Grid */}
      <section id="services-section" className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl text-text-primary mb-4">
              {activeCategory === 'all' ? 'Tous nos services' : serviceCategories?.find(cat => cat?.id === activeCategory)?.name}
            </h2>
            <p className="text-text-secondary font-body max-w-2xl mx-auto">
              Chaque service est réalisé par des artisans certifiés RGE avec garantie décennale 
              et respect des normes françaises en vigueur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices?.map((service) => (
              <div
                key={service?.id}
                className={`${
                  recommendedServices?.includes(service?.category) 
                    ? 'ring-2 ring-primary ring-offset-4 ring-offset-muted' :''
                }`}
              >
                <ServiceCard
                  service={service}
                  onLearnMore={handleServiceLearnMore}
                  onGetQuote={handleServiceQuote}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Cost Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl text-text-primary mb-4">
              Estimez vos travaux
            </h2>
            <p className="text-text-secondary font-body max-w-2xl mx-auto">
              Obtenez une estimation personnalisée de vos travaux de rénovation 
              avec notre calculateur intelligent.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <CostCalculator
              serviceType={activeCategory !== 'all' ? activeCategory : 'renovation-energetique'}
              onCalculate={handleCalculatorResult}
            />
          </div>
        </div>
      </section>
      {/* Before/After Gallery */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl text-text-primary mb-4">
              Nos Transformations
            </h2>
            <p className="text-text-secondary font-body max-w-2xl mx-auto">
              Découvrez quelques-unes de nos réalisations les plus remarquables 
              et laissez-vous inspirer pour votre projet.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BeforeAfterGallery projects={galleryProjects} />
          </div>
        </div>
      </section>
      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl text-text-primary mb-4">
              Pourquoi nous choisir ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-rose-hero w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h3 className="font-cta text-lg text-text-primary mb-2">Certifié RGE</h3>
              <p className="text-text-secondary text-sm">
                Artisans qualifiés et certifiés pour tous vos travaux de rénovation énergétique
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-rose-hero w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="font-cta text-lg text-text-primary mb-2">Garantie 10 ans</h3>
              <p className="text-text-secondary text-sm">
                Tous nos travaux sont couverts par une garantie décennale complète
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-rose-hero w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Euro" size={32} className="text-primary" />
              </div>
              <h3 className="font-cta text-lg text-text-primary mb-2">Aides financières</h3>
              <p className="text-text-secondary text-sm">
                Accompagnement complet pour obtenir MaPrimeRénov' et autres aides
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-rose-hero w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="font-cta text-lg text-text-primary mb-2">Délais respectés</h3>
              <p className="text-text-secondary text-sm">
                Planning rigoureux et respect des délais convenus pour votre sérénité
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-rose-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-headline text-3xl md:text-4xl text-text-primary mb-4">
            Prêt à transformer votre habitat ?
          </h2>
          <p className="text-xl text-text-secondary font-body mb-8">
            Contactez-nous pour un devis gratuit et personnalisé. 
            Nos experts vous accompagnent de A à Z dans votre projet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="Calculator"
              iconPosition="left"
              iconSize={20}
              onClick={() => navigate('/contact-quote')}
              className="font-cta hover-scale"
            >
              Demander un devis gratuit
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              iconSize={20}
              onClick={() => window.open('tel:+33123456789')}
              className="font-cta hover-scale"
            >
              Appeler maintenant
            </Button>
          </div>
        </div>
      </section>
      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onGetQuote={handleServiceQuote}
      />
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Hammer" size={24} color="white" />
                </div>
                <div>
                  <h3 className="font-headline text-lg">RénoVision Pro</h3>
                  <p className="text-white/70 text-sm">Vos travaux, en toute sérénité</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Expert en rénovation énergétique et transformation d'habitat depuis plus de 15 ans.
              </p>
            </div>

            <div>
              <h4 className="font-cta text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Rénovation Énergétique</li>
                <li>Rénovation Complète</li>
                <li>Aménagement Intérieur</li>
                <li>Rénovation Extérieure</li>
              </ul>
            </div>

            <div>
              <h4 className="font-cta text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>aximuseb@gmail.com</li>
                <li>+33 1 23 45 67 89</li>
                <li>Du lundi au vendredi</li>
                <li>8h00 - 18h00</li>
              </ul>
            </div>

            <div>
              <h4 className="font-cta text-white mb-4">Certifications</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>RGE Qualibat</li>
                <li>Garantie Décennale</li>
                <li>Assurance Responsabilité</li>
                <li>Qualité Artisan</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/70 text-sm">
              © {new Date()?.getFullYear()} RénoVision Pro. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesOverview;