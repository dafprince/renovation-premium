import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = ({ onScrollToForm }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/10 pt-8 pb-16">
      <div className="absolute inset-0 bg-gradient-rose-hero"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-rose mb-6">
            <Icon name="Clock" size={16} className="text-primary" />
            <span className="text-sm font-accent text-text-primary">
              Réponse garantie sous 2h ouvrées
            </span>
          </div>
          
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-text-primary mb-6">
            Transformons votre{' '}
            <span className="text-primary">vision</span>{' '}
            en réalité
          </h1>
          
          <p className="text-xl text-text-secondary font-body mb-8 max-w-3xl mx-auto leading-relaxed">
            Obtenez un devis personnalisé et gratuit pour vos travaux de rénovation. 
            Notre équipe d'experts vous accompagne de la conception à la réalisation, 
            en toute transparence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              iconName="FileText"
              iconPosition="left"
              onClick={onScrollToForm}
              className="font-cta hover-scale shadow-rose"
            >
              Demander un devis gratuit
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="font-cta hover-scale"
            >
              <span className="hidden sm:inline">Appeler maintenant :</span>
              <span className="font-bold">01 23 45 67 89</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-rose/20">
              <Icon name="Shield" size={24} className="text-success" />
              <div className="text-left">
                <p className="font-accent text-sm text-text-primary">Garantie</p>
                <p className="text-xs text-text-secondary">10 ans travaux</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-rose/20">
              <Icon name="Award" size={24} className="text-primary" />
              <div className="text-left">
                <p className="font-accent text-sm text-text-primary">Certifié</p>
                <p className="text-xs text-text-secondary">RGE Qualibat</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm p-4 rounded-lg border border-rose/20">
              <Icon name="Users" size={24} className="text-accent" />
              <div className="text-left">
                <p className="font-accent text-sm text-text-primary">Satisfaction</p>
                <p className="text-xs text-text-secondary">98% clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;