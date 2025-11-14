import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceModal = ({ service, isOpen, onClose, onGetQuote }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-rose-hover max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="h-64 overflow-hidden rounded-t-xl">
            <Image
              src={service?.image}
              alt={service?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="font-headline text-3xl mb-2">{service?.title}</h2>
              <p className="text-white/90 font-body">{service?.category}</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-text-primary rounded-full p-2 transition-premium"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        <div className="p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-headline text-xl text-text-primary mb-4">Description détaillée</h3>
              <p className="text-text-secondary font-body mb-6 leading-relaxed">
                {service?.detailedDescription}
              </p>

              <h4 className="font-cta text-lg text-text-primary mb-3">Services inclus</h4>
              <div className="space-y-2 mb-6">
                {service?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-text-secondary font-body text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-muted rounded-lg p-6 mb-6">
                <h4 className="font-cta text-lg text-text-primary mb-4">Informations pratiques</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Durée moyenne:</span>
                    <span className="font-accent text-text-primary">{service?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Prix à partir de:</span>
                    <span className="font-cta text-primary text-lg">{service?.priceFrom}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Garantie:</span>
                    <span className="font-accent text-text-primary">{service?.warranty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Certification:</span>
                    <span className="font-accent text-text-primary">{service?.certification}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-rose-hero rounded-lg p-6">
                <h4 className="font-cta text-lg text-text-primary mb-3">Économies d'énergie</h4>
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Zap" size={20} className="text-primary" />
                  <span className="text-text-primary font-accent">Jusqu'à {service?.energySavings}% d'économies</span>
                </div>
                <p className="text-text-secondary text-sm">
                  Réduction moyenne de la consommation énergétique après rénovation
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                iconSize={18}
                onClick={onClose}
                className="sm:w-auto"
              >
                Fermer
              </Button>
              <Button
                variant="default"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                iconSize={18}
                onClick={() => onGetQuote(service)}
                className="sm:w-auto"
              >
                Demander un devis gratuit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;