import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const DigitalTools = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const digitalFeatures = [
    {
      id: 1,
      title: "Suivi temps réel",
      description: "Suivez l\'avancement de votre projet en temps réel avec photos et mises à jour quotidiennes",
      icon: "Smartphone",
      screenshot: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Photos quotidiennes du chantier",
        "Notifications push en temps réel",
        "Timeline interactive détaillée",
        "Commentaires et échanges directs"
      ],
      benefits: [
        "Transparence totale sur l\'avancement",
        "Réduction du stress client",
        "Communication facilitée",
        "Historique complet du projet"
      ]
    },
    {
      id: 2,
      title: "Gestion documentaire",
      description: "Tous vos documents centralisés : devis, factures, garanties, certificats dans un espace sécurisé",
      icon: "FileText",
      screenshot: "https://images.pexels.com/photos/4348402/pexels-photo-4348402.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Stockage sécurisé cloud",
        "Accès 24h/24 à vos documents",
        "Signature électronique intégrée",
        "Archivage automatique"
      ],
      benefits: [
        "Aucun document perdu",
        "Accès immédiat aux informations",
        "Processus administratif simplifié",
        "Conformité réglementaire assurée"
      ]
    },
    {
      id: 3,
      title: "Communication intégrée",
      description: "Chat direct avec votre équipe projet, planification des rendez-vous et support technique",
      icon: "MessageCircle",
      screenshot: "https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Chat en temps réel avec l\'équipe",
        "Planification de rendez-vous",
        "Notifications personnalisées",
        "Support technique intégré"
      ],
      benefits: [
        "Réponses rapides à vos questions",
        "Coordination optimisée",
        "Moins d\'appels téléphoniques",
        "Traçabilité des échanges"
      ]
    },
    {
      id: 4,
      title: "Paiements sécurisés",
      description: "Système de paiement échelonné sécurisé avec suivi des échéances et factures automatiques",
      icon: "CreditCard",
      screenshot: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Paiements échelonnés automatiques",
        "Factures électroniques",
        "Historique des transactions",
        "Alertes d\'échéances"
      ],
      benefits: [
        "Gestion financière simplifiée",
        "Sécurité des transactions",
        "Transparence des coûts",
        "Conformité comptable"
      ]
    }
  ];

  const integrationStats = [
    { label: "Temps de communication réduit", value: "60%", icon: "Clock" },
    { label: "Satisfaction client", value: "98%", icon: "Heart" },
    { label: "Projets livrés à temps", value: "95%", icon: "CheckCircle" },
    { label: "Réduction des erreurs", value: "75%", icon: "Shield" }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-headline text-3xl md:text-4xl text-text-primary mb-4">
          Outils digitaux de gestion projet
        </h2>
        <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
          Notre plateforme digitale révolutionne l'expérience client avec des outils modernes et intuitifs
        </p>
      </div>
      {/* Feature Showcase */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Feature List */}
        <div className="space-y-4">
          {digitalFeatures?.map((feature, index) => (
            <button
              key={feature?.id}
              onClick={() => setActiveFeature(index)}
              className={`w-full text-left p-6 rounded-xl border transition-premium hover-scale ${
                activeFeature === index
                  ? 'border-primary bg-primary/5 shadow-rose'
                  : 'border-border hover:border-primary/30 bg-card'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                  activeFeature === index 
                    ? 'bg-primary text-white' :'bg-primary/10 text-primary'
                }`}>
                  <Icon name={feature?.icon} size={24} strokeWidth={2} />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-headline text-lg text-text-primary mb-2">
                    {feature?.title}
                  </h3>
                  <p className="text-text-secondary font-body text-sm leading-relaxed">
                    {feature?.description}
                  </p>
                  
                  {activeFeature === index && (
                    <div className="mt-4 grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-cta text-sm text-text-primary mb-2">Fonctionnalités :</h4>
                        <ul className="space-y-1">
                          {feature?.features?.map((feat, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Icon name="Check" size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-text-secondary font-body">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-cta text-sm text-text-primary mb-2">Bénéfices :</h4>
                        <ul className="space-y-1">
                          {feature?.benefits?.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <Icon name="Star" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-text-secondary font-body">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Feature Preview */}
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-subtle">
          <div className="p-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={digitalFeatures?.[activeFeature]?.icon} size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-headline text-lg text-text-primary">
                  {digitalFeatures?.[activeFeature]?.title}
                </h3>
                <p className="text-sm text-text-secondary font-body">
                  Interface client RénoVision Pro
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Image
              src={digitalFeatures?.[activeFeature]?.screenshot}
              alt={`Interface ${digitalFeatures?.[activeFeature]?.title}`}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-body text-sm leading-relaxed">
                {digitalFeatures?.[activeFeature]?.description}
              </p>
            </div>
          </div>
          
          <div className="p-6">
            <Button
              variant="default"
              size="default"
              iconName="ExternalLink"
              iconPosition="right"
              className="w-full font-cta"
            >
              Découvrir la démo
            </Button>
          </div>
        </div>
      </div>
      {/* Integration Stats */}
      <div className="bg-gradient-rose-hero rounded-xl p-8 border border-rose">
        <div className="text-center mb-8">
          <h3 className="font-headline text-2xl text-text-primary mb-3">
            Impact de nos outils digitaux
          </h3>
          <p className="text-text-secondary font-body">
            Résultats mesurés sur nos derniers projets
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrationStats?.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-lg p-6 shadow-subtle">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={24} className="text-primary" strokeWidth={2} />
              </div>
              <div className="text-3xl font-headline text-primary mb-2">
                {stat?.value}
              </div>
              <div className="text-sm text-text-secondary font-body">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Mobile App Preview */}
      <div className="bg-card rounded-xl border border-border p-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-headline text-2xl text-text-primary mb-4">
              Application mobile dédiée
            </h3>
            <p className="text-text-secondary font-body mb-6 leading-relaxed">
              Suivez votre projet où que vous soyez avec notre application mobile native. 
              Notifications push, photos en temps réel, chat direct avec l'équipe.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="Smartphone" size={20} className="text-primary" />
                <span className="font-body text-text-primary">Compatible iOS et Android</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Wifi" size={20} className="text-primary" />
                <span className="font-body text-text-primary">Synchronisation automatique</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Lock" size={20} className="text-primary" />
                <span className="font-body text-text-primary">Sécurité renforcée</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="default"
                iconName="Download"
                iconPosition="left"
                className="font-cta hover-scale"
              >
                Télécharger l'app
              </Button>
              <Button
                variant="outline"
                size="default"
                iconName="Play"
                iconPosition="left"
                className="font-cta hover-scale"
              >
                Voir la démo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
              <Image
                src="https://images.pexels.com/photos/4348405/pexels-photo-4348405.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Application mobile RénoVision Pro"
                className="w-full max-w-xs mx-auto rounded-xl shadow-rose"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;