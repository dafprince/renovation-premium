import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import QuoteForm from './components/QuoteForm';
import ContactMethods from './components/ContactMethods';
import ServiceAreas from './components/ServiceAreas';
import ConsultationCalendar from './components/ConsultationCalendar';
import TrustSignals from './components/TrustSignals';
import Icon from '../../components/AppIcon';


const ContactQuotePage = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef?.current) {
      formRef?.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact & Devis Gratuit - RénoVision Pro | Rénovation & Travaux</title>
        <meta 
          name="description" 
          content="Demandez votre devis gratuit et personnalisé pour vos travaux de rénovation. Consultation gratuite, réponse sous 2h, équipe certifiée RGE. Contactez RénoVision Pro." 
        />
        <meta name="keywords" content="devis gratuit, rénovation, travaux, consultation, contact, RGE, artisan, Paris" />
        <meta property="og:title" content="Contact & Devis Gratuit - RénoVision Pro" />
        <meta property="og:description" content="Obtenez un devis personnalisé pour vos travaux de rénovation. Consultation gratuite avec nos experts certifiés." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact-quote" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <ContactHero onScrollToForm={scrollToForm} />
          
          {/* Contact Methods */}
          <ContactMethods />
          
          {/* Quote Form */}
          <div ref={formRef}>
            <QuoteForm />
          </div>
          
          {/* Service Areas */}
          <ServiceAreas />
          
          {/* Consultation Calendar */}
          <ConsultationCalendar />
          
          {/* Trust Signals */}
          <TrustSignals />
        </main>

        {/* Footer */}
        <footer className="bg-text-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Icon name="Hammer" size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl">RénoVision Pro</h3>
                    <p className="text-sm text-white/80">Vos travaux, en toute sérénité</p>
                  </div>
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  Expert en rénovation depuis 15 ans, nous transformons vos espaces 
                  avec professionnalisme et transparence. Certifiés RGE, nous vous 
                  accompagnons de la conception à la réalisation.
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-primary" />
                    <span className="text-sm">01 23 45 67 89</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span className="text-sm">aximuseb@gmail.com</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-headline text-lg mb-4">Liens rapides</h4>
                <ul className="space-y-2">
                  <li><a href="/services-overview" className="text-white/80 hover:text-primary transition-colors">Nos services</a></li>
                  <li><a href="/project-process" className="text-white/80 hover:text-primary transition-colors">Notre processus</a></li>
                  <li><a href="/portfolio-results" className="text-white/80 hover:text-primary transition-colors">Réalisations</a></li>
                  <li><a href="/client-dashboard" className="text-white/80 hover:text-primary transition-colors">Espace client</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-headline text-lg mb-4">Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Icon name="MapPin" size={16} className="text-primary mt-1" />
                    <div className="text-sm text-white/80">
                      <p>123 Avenue de la Rénovation</p>
                      <p>75001 Paris, France</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <div className="text-sm text-white/80">
                      <p>Lun-Ven: 8h-18h</p>
                      <p>Sam: 9h-17h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © {new Date()?.getFullYear()} RénoVision Pro. Tous droits réservés. 
                Entreprise certifiée RGE - SIRET: 123 456 789 00012
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactQuotePage;