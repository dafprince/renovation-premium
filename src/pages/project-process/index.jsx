import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProcessPhase from './components/ProcessPhase';
import TimelineCalculator from './components/TimelineCalculator';
import BehindTheScenes from './components/BehindTheScenes';
import ClientTestimonials from './components/ClientTestimonials';
import DigitalTools from './components/DigitalTools';

const ProjectProcess = () => {
  const navigate = useNavigate();
  const [activePhase, setActivePhase] = useState(0);
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'fr';
    setCurrentLanguage(savedLanguage);
  }, []);

  const processPhases = [
    {
      key: 'consultation',
      title: "1. Consultation Initiale",
      subtitle: "Analyse de vos besoins et première évaluation",
      duration: "1-2 semaines",
      team: "Conseiller + Expert technique",
      description: `Notre processus commence par une consultation approfondie pour comprendre parfaitement vos besoins, contraintes et objectifs. Cette phase cruciale nous permet d'établir les bases solides de votre projet de rénovation.`,
      highlights: [
        "Visite technique gratuite à domicile",
        "Analyse des contraintes architecturales",
        "Évaluation énergétique préliminaire",
        "Définition du budget prévisionnel"
      ],
      requirements: [
        "Plans existants de la propriété",
        "Factures énergétiques récentes",
        "Cahier des charges souhaité",
        "Budget approximatif envisagé"
      ],
      deliverables: [
        "Rapport de visite technique",
        "Première estimation budgétaire",
        "Recommandations préliminaires",
        "Planning prévisionnel"
      ],
      qualityControls: [
        "Vérification conformité réglementaire",
        "Analyse faisabilité technique",
        "Validation budget client"
      ]
    },
    {
      key: 'study',
      title: "2. Étude et Devis",
      subtitle: "Conception détaillée et chiffrage précis",
      duration: "2-3 semaines",
      team: "Bureau d'études + Architecte",
      description: `Phase d'étude approfondie où nos experts conçoivent la solution optimale pour votre projet. Chaque détail est analysé pour vous proposer un devis précis et transparent, sans surprise.`,
      highlights: [
        "Plans techniques détaillés","Sélection des matériaux optimaux","Calculs énergétiques précis","Devis détaillé poste par poste"
      ],
      requirements: [
        "Validation du cahier des charges","Choix des finitions souhaités","Contraintes d\'occupation",
        "Délais souhaités"
      ],
      deliverables: [
        "Plans d\'exécution complets",
        "Devis détaillé et transparent",
        "Planning d\'intervention précis",
        "Dossier de permis si nécessaire"
      ],
      qualityControls: [
        "Validation technique par l\'architecte",
        "Vérification conformité RT2020",
        "Contrôle cohérence budget/prestations"
      ]
    },
    {
      key: 'planning',
      title: "3. Planification",
      subtitle: "Organisation et préparation du chantier",
      duration: "1-2 semaines",
      team: "Chef de projet + Coordinateur",
      description: `Organisation méticuleuse de votre chantier avec coordination de tous les corps de métier. Cette planification rigoureuse garantit le respect des délais et la qualité d'exécution.`,
      highlights: [
        "Planning détaillé par corps de métier",
        "Coordination des approvisionnements",
        "Préparation logistique complète",
        "Mise en place du suivi digital"
      ],
      requirements: [
        "Signature du devis validé",
        "Obtention des autorisations",
        "Libération des espaces",
        "Validation planning client"
      ],
      deliverables: [
        "Planning d\'intervention détaillé",
        "Accès plateforme client",
        "Contacts équipe projet",
        "Protocole de communication"
      ],
      qualityControls: [
        "Validation disponibilité équipes",
        "Contrôle stock matériaux",
        "Test plateforme digitale"
      ]
    },
    {
      key: 'realization',
      title: "4. Réalisation",
      subtitle: "Exécution des travaux avec suivi quotidien",
      duration: "Variable selon projet",
      team: "Équipe complète + Chef de chantier",
      description: `Phase d'exécution où notre équipe d'artisans qualifiés réalise vos travaux selon les plus hauts standards de qualité. Suivi quotidien et communication transparente garantis.`,
      highlights: [
        "Équipe d'artisans certifiés",
        "Suivi quotidien avec photos",
        "Respect strict du planning",
        "Communication temps réel"
      ],
      requirements: [
        "Accès libre au chantier",
        "Respect des horaires convenus",
        "Validation étapes clés",
        "Paiements selon échéancier"
      ],
      deliverables: [
        "Travaux conformes aux plans",
        "Photos quotidiennes d\'avancement",
        "Rapports d\'étapes réguliers",
        "Gestion des imprévus"
      ],
      qualityControls: [
        "Contrôles qualité quotidiens",
        "Validation étapes par le client",
        "Respect normes et réglementations",
        "Tests de conformité"
      ]
    },
    {
      key: 'followup',
      title: "5. Suivi Post-Travaux",
      subtitle: "Garanties et accompagnement long terme",
      duration: "Suivi 10 ans",
      team: "Service client + SAV",
      description: `Notre engagement ne s'arrête pas à la livraison. Nous assurons un suivi post-travaux complet avec garanties étendues et service après-vente réactif pour votre tranquillité d'esprit.`,
      highlights: [
        "Garantie décennale complète",
        "Service après-vente réactif",
        "Maintenance préventive",
        "Conseils d\'entretien personnalisés"
      ],
      requirements: [
        "Réception des travaux signée",
        "Formation utilisation équipements",
        "Remise documentation complète",
        "Enregistrement garanties"
      ],
      deliverables: [
        "Dossier technique complet",
        "Certificats de garantie",
        "Guide d\'entretien personnalisé",
        "Accès SAV prioritaire"
      ],
      qualityControls: [
        "Visite de contrôle à 6 mois",
        "Suivi satisfaction client",
        "Maintenance préventive annuelle",
        "Réactivité SAV garantie"
      ]
    }
  ];

  const handlePhaseToggle = (index) => {
    setActivePhase(activePhase === index ? -1 : index);
  };

  const handleContactQuote = () => {
    // Simulate email integration
    const emailData = {
      to: 'aximuseb@gmail.com',
      subject: 'Demande de consultation - Processus RénoVision Pro',
      body: `Bonjour,\n\nJe souhaite en savoir plus sur votre processus de rénovation et obtenir une consultation gratuite.\n\nCordialement`
    };
    
    // In a real application, this would integrate with an email service
    console.log('Email data:', emailData);
    navigate('/contact-quote');
  };

  return (
    <>
      <Helmet>
        <title>Notre Processus de Rénovation | RénoVision Pro</title>
        <meta name="description" content="Découvrez notre processus transparent de rénovation en 5 étapes : consultation, étude, planification, réalisation et suivi. Transparence et qualité garanties." />
        <meta name="keywords" content="processus rénovation, étapes travaux, planification chantier, suivi projet, garantie décennale" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-rose-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-headline text-4xl md:text-6xl text-text-primary mb-6">
                Notre Processus
                <span className="block text-primary">Transparent</span>
              </h1>
              <p className="text-xl text-text-secondary font-body max-w-3xl mx-auto mb-8 leading-relaxed">
                Découvrez notre méthode éprouvée en 5 étapes qui transforme votre projet de rénovation 
                en une expérience sereine et maîtrisée de bout en bout.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={handleContactQuote}
                  className="font-cta hover-scale"
                >
                  Consultation Gratuite
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="font-cta hover-scale"
                >
                  Voir le processus en vidéo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl md:text-4xl text-text-primary mb-4">
                5 Étapes pour Votre Sérénité
              </h2>
              <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
                Chaque étape est conçue pour vous offrir transparence, qualité et tranquillité d'esprit
              </p>
            </div>

            {/* Process Timeline */}
            <div className="space-y-8">
              {processPhases?.map((phase, index) => (
                <ProcessPhase
                  key={phase?.key}
                  phase={phase}
                  index={index}
                  isActive={activePhase === index}
                  onToggle={() => handlePhaseToggle(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Calculator */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TimelineCalculator />
          </div>
        </section>

        {/* Digital Tools */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DigitalTools />
          </div>
        </section>

        {/* Behind the Scenes */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BehindTheScenes />
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ClientTestimonials />
          </div>
        </section>

        {/* Quality Certifications */}
        <section className="py-20 bg-gradient-rose-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl md:text-4xl text-text-primary mb-4">
                Certifications & Garanties
              </h2>
              <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
                Notre engagement qualité reconnu par les organismes professionnels
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "Award", title: "RGE Qualibat", desc: "Certification travaux énergétiques" },
                { icon: "Shield", title: "Garantie Décennale", desc: "Assurance tous risques chantier" },
                { icon: "CheckCircle", title: "NF Habitat", desc: "Norme française qualité" },
                { icon: "Star", title: "Artisan de Confiance", desc: "Label qualité reconnu" }
              ]?.map((cert, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-subtle hover-lift transition-premium">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={cert?.icon} size={32} className="text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="font-cta text-lg text-text-primary mb-2">
                    {cert?.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-body">
                    {cert?.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card rounded-2xl border border-border p-12 shadow-subtle">
              <h2 className="font-headline text-3xl text-text-primary mb-4">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-lg text-text-secondary font-body mb-8 max-w-2xl mx-auto">
                Bénéficiez d'une consultation gratuite avec nos experts pour découvrir comment 
                notre processus peut transformer votre projet en succès.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={handleContactQuote}
                  className="font-cta hover-scale"
                >
                  Consultation Gratuite
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calculator"
                  iconPosition="left"
                  className="font-cta hover-scale"
                >
                  Estimer mon projet
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center justify-center space-x-8 text-sm text-text-secondary">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span>Réponse sous 24h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-primary" />
                    <span>Sans engagement</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} className="text-primary" />
                    <span>Experts certifiés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-text-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Hammer" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-headline text-xl">RénoVision Pro</h3>
                  <p className="text-sm text-gray-300">Vos travaux, en toute sérénité</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm">
                © {new Date()?.getFullYear()} RénoVision Pro. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProjectProcess;