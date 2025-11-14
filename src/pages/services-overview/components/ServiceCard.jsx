import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onLearnMore, onGetQuote }) => {
  return (
    <div className="bg-white rounded-xl shadow-subtle hover:shadow-rose transition-premium hover-lift border border-border overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service?.image}
          alt={service?.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-cta">
            {service?.category}
          </div>
        </div>
        {service?.isPopular && (
          <div className="absolute top-4 right-4">
            <div className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-cta flex items-center space-x-1">
              <Icon name="Star" size={14} />
              <span>Populaire</span>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-headline text-xl text-text-primary mb-2">{service?.title}</h3>
          <div className="flex items-center space-x-1 text-primary">
            <Icon name={service?.icon} size={24} />
          </div>
        </div>

        <p className="text-text-secondary font-body text-sm mb-4 line-clamp-3">
          {service?.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">Durée moyenne:</span>
            <span className="font-accent text-text-primary">{service?.duration}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">À partir de:</span>
            <span className="font-cta text-primary text-lg">{service?.priceFrom}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-accent text-sm text-text-primary mb-2">Services inclus:</h4>
          <div className="flex flex-wrap gap-2">
            {service?.features?.slice(0, 3)?.map((feature, index) => (
              <div key={index} className="flex items-center space-x-1 text-xs text-text-secondary">
                <Icon name="Check" size={12} className="text-success" />
                <span>{feature}</span>
              </div>
            ))}
            {service?.features?.length > 3 && (
              <span className="text-xs text-primary font-accent">
                +{service?.features?.length - 3} autres
              </span>
            )}
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onLearnMore(service)}
            className="flex-1"
          >
            En savoir plus
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="Calculator"
            iconPosition="left"
            iconSize={16}
            onClick={() => onGetQuote(service)}
            className="flex-1"
          >
            Devis
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;