import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactFooter = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const contactInfo = [
    {
      id: 1,
      icon: 'Phone',
      title: 'Téléphone',
      value: '01 42 86 95 73',
      description: 'Lun-Ven 8h-18h, Sam 9h-17h',
      action: () => window.open('tel:0142869573')
    },
    {
      id: 2,
      icon: 'Mail',
      title: 'Email',
      value: 'aximuseb@gmail.com',
      description: 'Réponse sous 2h en moyenne',
      action: () => window.open('mailto:aximuseb@gmail.com')
    },
    {
      id: 3,
      icon: 'MapPin',
      title: 'Adresse',
      value: '15 Rue de la Paix, 75002 Paris',
      description: 'Showroom sur rendez-vous',
      action: () => window.open('https://maps.google.com/?q=15+Rue+de+la+Paix+75002+Paris')
    },
    {
      id: 4,
      icon: 'Clock',
      title: 'Urgences',
      value: '24h/7j',
      description: 'Dépannage et interventions',
      action: () => navigate('/contact-quote')
    }
  ];

  const quickLinks = [
    { name: 'Nos Services', path: '/services-overview' },
    { name: 'Notre Processus', path: '/project-process' },
    { name: 'Portfolio', path: '/portfolio-results' },
    { name: 'Dashboard Client', path: '/client-dashboard' }
  ];

  const services = [
    'Rénovation Complète',
    'Cuisine & Salle de Bain',
    'Efficacité Énergétique',
    'Extension & Aménagement',
    'Maintenance & Dépannage',
    'Décoration & Finitions'
  ];

  const certifications = [
    'RGE Qualibat',
    'Assurance Décennale',
    'Artisan Certifié',
    'Éco-Artisan'
  ];

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Hammer" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-headline text-xl text-white">
                    RénoVision Pro
                  </h3>
                  <p className="text-sm text-white/70">
                    Vos travaux, en toute sérénité
                  </p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed">
                Spécialiste de la rénovation depuis 15 ans, nous transformons 
                vos espaces avec expertise, transparence et excellence.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-accent text-white mb-3">Suivez-nous</h4>
              <div className="flex space-x-3">
                {[
                  { icon: 'Facebook', url: '#' },
                  { icon: 'Instagram', url: '#' },
                  { icon: 'Linkedin', url: '#' },
                  { icon: 'Youtube', url: '#' }
                ]?.map((social) => (
                  <button
                    key={social?.icon}
                    onClick={() => window.open(social?.url)}
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-premium hover-scale"
                  >
                    <Icon name={social?.icon} size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-accent text-white mb-3">Certifications</h4>
              <div className="space-y-2">
                {certifications?.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Award" size={14} className="text-primary" />
                    <span className="text-sm text-white/70">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-headline text-lg text-white">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks?.map((link) => (
                <li key={link?.path}>
                  <button
                    onClick={() => navigate(link?.path)}
                    className="text-white/70 hover:text-primary transition-premium flex items-center space-x-2 group"
                  >
                    <Icon name="ArrowRight" size={14} className="opacity-0 group-hover:opacity-100 transition-premium" />
                    <span>{link?.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-headline text-lg text-white">Nos Services</h4>
            <ul className="space-y-3">
              {services?.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => navigate('/services-overview')}
                    className="text-white/70 hover:text-primary transition-premium flex items-center space-x-2 group"
                  >
                    <Icon name="ArrowRight" size={14} className="opacity-0 group-hover:opacity-100 transition-premium" />
                    <span>{service}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="font-headline text-lg text-white">Contact</h4>
            
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo?.map((contact) => (
                <button
                  key={contact?.id}
                  onClick={contact?.action}
                  className="flex items-start space-x-3 text-left hover:bg-white/5 p-3 rounded-lg transition-premium w-full group"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-premium">
                    <Icon name={contact?.icon} size={18} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h5 className="font-accent text-white text-sm">
                      {contact?.title}
                    </h5>
                    <p className="text-white/80 text-sm">
                      {contact?.value}
                    </p>
                    <p className="text-white/60 text-xs">
                      {contact?.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Newsletter */}
            <div className="bg-white/5 rounded-xl p-4">
              <h5 className="font-accent text-white mb-3">Newsletter</h5>
              <p className="text-white/70 text-sm mb-4">
                Recevez nos conseils et offres exclusives
              </p>
              
              {isSubscribed ? (
                <div className="flex items-center space-x-2 text-success">
                  <Icon name="CheckCircle" size={16} />
                  <span className="text-sm">Inscription confirmée !</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e?.target?.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50"
                  />
                  <Button
                    type="submit"
                    variant="default"
                    size="sm"
                    iconName="Send"
                    iconPosition="right"
                    iconSize={14}
                    className="w-full font-accent"
                  >
                    S'inscrire
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-white/60 text-sm">
                © {new Date()?.getFullYear()} RénoVision Pro. Tous droits réservés.
              </p>
              
              <div className="flex items-center space-x-4">
                <button className="text-white/60 hover:text-primary text-sm transition-premium">
                  Mentions Légales
                </button>
                <button className="text-white/60 hover:text-primary text-sm transition-premium">
                  Politique de Confidentialité
                </button>
                <button className="text-white/60 hover:text-primary text-sm transition-premium">
                  CGV
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="text-white/60 text-sm">Site Sécurisé</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-primary" />
                <span className="text-white/60 text-sm">Certifié RGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Emergency Contact Banner */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center space-x-4">
            <Icon name="Phone" size={18} className="text-white" />
            <span className="text-white font-accent">
              Urgence 24h/7j: 01 42 86 95 73
            </span>
            <Button
              variant="outline"
              size="xs"
              iconName="ArrowRight"
              iconPosition="right"
              iconSize={12}
              onClick={() => navigate('/contact-quote')}
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Devis Express
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;