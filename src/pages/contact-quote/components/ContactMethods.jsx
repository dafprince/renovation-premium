import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Téléphone',
      description: 'Appelez-nous directement pour un conseil immédiat',
      value: '01 23 45 67 89',
      action: 'Appeler maintenant',
      available: 'Lun-Ven 8h-18h, Sam 9h-17h',
      color: 'text-primary'
    },
    {
      icon: 'Mail',
      title: 'Email',
      description: 'Écrivez-nous pour une réponse détaillée',
      value: 'aximuseb@gmail.com',
      action: 'Envoyer un email',
      available: 'Réponse sous 2h ouvrées',
      color: 'text-accent'
    },
    {
      icon: 'MessageCircle',
      title: 'Chat en direct',
      description: 'Assistance immédiate avec notre équipe',
      value: 'Chat disponible',
      action: 'Démarrer le chat',
      available: 'Lun-Ven 8h-20h',
      color: 'text-success'
    },
    {
      icon: 'Calendar',
      title: 'Rendez-vous',
      description: 'Planifiez une consultation à domicile',
      value: 'Consultation gratuite',
      action: 'Réserver un créneau',
      available: 'Disponible 7j/7',
      color: 'text-warning'
    }
  ];

  const emergencyContact = {
    title: 'Urgence 24h/7j',
    description: 'Pour les situations d\'urgence (dégâts des eaux, problèmes électriques)',
    phone: '06 12 34 56 78',
    note: 'Service d\'urgence avec supplément'
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl text-text-primary mb-4">
            Contactez-nous facilement
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Plusieurs moyens de nous joindre selon vos préférences. 
            Notre équipe est à votre écoute pour répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods?.map((method, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-xl p-6 hover-lift transition-premium hover:shadow-rose"
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-subtle mb-4 ${method?.color}`}>
                  <Icon name={method?.icon} size={28} />
                </div>
                
                <h3 className="font-headline text-lg text-text-primary mb-2">
                  {method?.title}
                </h3>
                
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {method?.description}
                </p>
                
                <div className="mb-4">
                  <p className="font-accent text-text-primary mb-1">
                    {method?.value}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {method?.available}
                  </p>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full font-cta hover-scale"
                >
                  {method?.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-destructive/5 to-warning/5 border border-destructive/20 rounded-xl p-6 mb-12">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                <Icon name="AlertTriangle" size={24} className="text-destructive" />
              </div>
            </div>
            
            <div className="flex-1">
              <h3 className="font-headline text-lg text-text-primary mb-2">
                {emergencyContact?.title}
              </h3>
              <p className="text-text-secondary mb-3">
                {emergencyContact?.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-accent text-lg text-destructive mb-1">
                    {emergencyContact?.phone}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {emergencyContact?.note}
                  </p>
                </div>
                
                <Button
                  variant="destructive"
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                  className="font-cta"
                >
                  Appel d'urgence
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Guarantee */}
        <div className="bg-gradient-to-r from-success/5 to-primary/5 border border-success/20 rounded-xl p-8 text-center">
          <Icon name="Clock" size={48} className="mx-auto text-success mb-4" />
          <h3 className="font-headline text-2xl text-text-primary mb-4">
            Garantie de réactivité
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="font-headline text-3xl text-primary mb-2">2h</div>
              <p className="text-sm text-text-secondary">
                Réponse par email en jours ouvrés
              </p>
            </div>
            
            <div>
              <div className="font-headline text-3xl text-primary mb-2">24h</div>
              <p className="text-sm text-text-secondary">
                Rappel téléphonique garanti
              </p>
            </div>
            
            <div>
              <div className="font-headline text-3xl text-primary mb-2">48h</div>
              <p className="text-sm text-text-secondary">
                Devis détaillé personnalisé
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;