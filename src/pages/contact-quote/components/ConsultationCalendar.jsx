import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConsultationCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [consultationType, setConsultationType] = useState('home');

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date?.setDate(today?.getDate() + i);
      
      // Skip Sundays
      if (date?.getDay() !== 0) {
        dates?.push({
          date: date,
          day: date?.getDate(),
          month: date?.toLocaleDateString('fr-FR', { month: 'short' }),
          weekday: date?.toLocaleDateString('fr-FR', { weekday: 'short' }),
          available: Math.random() > 0.3 // 70% chance of availability
        });
      }
    }
    
    return dates;
  };

  const [availableDates] = useState(generateDates());

  const timeSlots = [
    { time: '08:00', available: true, type: 'morning' },
    { time: '09:00', available: true, type: 'morning' },
    { time: '10:00', available: false, type: 'morning' },
    { time: '11:00', available: true, type: 'morning' },
    { time: '14:00', available: true, type: 'afternoon' },
    { time: '15:00', available: true, type: 'afternoon' },
    { time: '16:00', available: false, type: 'afternoon' },
    { time: '17:00', available: true, type: 'afternoon' },
    { time: '18:00', available: true, type: 'evening' }
  ];

  const consultationTypes = [
    {
      id: 'home',
      title: 'Visite à domicile',
      description: 'Consultation gratuite chez vous avec prise de mesures',
      duration: '60-90 min',
      price: 'Gratuit',
      icon: 'Home'
    },
    {
      id: 'video',
      title: 'Consultation vidéo',
      description: 'Échange en visioconférence pour un premier diagnostic',
      duration: '30-45 min',
      price: 'Gratuit',
      icon: 'Video'
    },
    {
      id: 'showroom',
      title: 'Rendez-vous showroom',
      description: 'Visite de notre showroom avec présentation matériaux',
      duration: '45-60 min',
      price: 'Gratuit',
      icon: 'Building'
    }
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime && consultationType) {
      const selectedConsultation = consultationTypes?.find(type => type?.id === consultationType);
      alert(`Rendez-vous confirmé !\n\nType: ${selectedConsultation?.title}\nDate: ${selectedDate?.date?.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}\nHeure: ${selectedTime}\n\nVous recevrez une confirmation par email.`);
      
      // Reset selections
      setSelectedDate(null);
      setSelectedTime(null);
      setConsultationType('home');
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl text-text-primary mb-4">
            Réservez votre consultation gratuite
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Choisissez le type de consultation qui vous convient et réservez 
            un créneau avec nos experts en rénovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Consultation Types */}
          <div className="lg:col-span-1">
            <h3 className="font-headline text-xl text-text-primary mb-6">
              Type de consultation
            </h3>
            
            <div className="space-y-4">
              {consultationTypes?.map((type) => (
                <button
                  key={type?.id}
                  onClick={() => setConsultationType(type?.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-premium hover-scale ${
                    consultationType === type?.id
                      ? 'bg-primary text-primary-foreground border-primary shadow-rose'
                      : 'bg-surface border-border hover:border-primary/50 hover:bg-primary/5'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <Icon 
                      name={type?.icon} 
                      size={20} 
                      className={consultationType === type?.id ? 'text-primary-foreground' : 'text-primary'}
                    />
                    <div className="flex-1">
                      <h4 className={`font-accent text-sm mb-1 ${
                        consultationType === type?.id ? 'text-primary-foreground' : 'text-text-primary'
                      }`}>
                        {type?.title}
                      </h4>
                      <p className={`text-xs mb-2 ${
                        consultationType === type?.id ? 'text-primary-foreground/80' : 'text-text-secondary'
                      }`}>
                        {type?.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs ${
                          consultationType === type?.id ? 'text-primary-foreground/80' : 'text-text-secondary'
                        }`}>
                          {type?.duration}
                        </span>
                        <span className={`text-xs font-accent ${
                          consultationType === type?.id ? 'text-primary-foreground' : 'text-success'
                        }`}>
                          {type?.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-success/5 to-primary/5 border border-success/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Gift" size={16} className="text-success" />
                <span className="font-accent text-sm text-text-primary">
                  Consultation gratuite
                </span>
              </div>
              <p className="text-xs text-text-secondary">
                Aucun engagement, devis détaillé offert après la consultation
              </p>
            </div>
          </div>

          {/* Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-xl border border-border p-6">
              <h3 className="font-headline text-xl text-text-primary mb-6">
                Choisissez votre créneau
              </h3>

              {/* Date Selection */}
              <div className="mb-8">
                <h4 className="font-accent text-text-primary mb-4">
                  Sélectionnez une date
                </h4>
                
                <div className="grid grid-cols-7 gap-2">
                  {availableDates?.map((dateObj, index) => (
                    <button
                      key={index}
                      onClick={() => dateObj?.available && handleDateSelect(dateObj)}
                      disabled={!dateObj?.available}
                      className={`p-3 rounded-lg text-center transition-premium hover-scale ${
                        selectedDate?.day === dateObj?.day && selectedDate?.month === dateObj?.month
                          ? 'bg-primary text-primary-foreground shadow-rose'
                          : dateObj?.available
                            ? 'bg-white border border-border hover:border-primary/50 hover:bg-primary/5' :'bg-muted text-text-secondary cursor-not-allowed opacity-50'
                      }`}
                    >
                      <div className="text-xs mb-1">
                        {dateObj?.weekday}
                      </div>
                      <div className="font-accent text-sm">
                        {dateObj?.day}
                      </div>
                      <div className="text-xs">
                        {dateObj?.month}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div className="mb-8">
                  <h4 className="font-accent text-text-primary mb-4">
                    Créneaux disponibles le {selectedDate?.date?.toLocaleDateString('fr-FR', { 
                      weekday: 'long', 
                      day: 'numeric', 
                      month: 'long' 
                    })}
                  </h4>
                  
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                    {timeSlots?.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => slot?.available && handleTimeSelect(slot?.time)}
                        disabled={!slot?.available}
                        className={`p-3 rounded-lg text-center transition-premium hover-scale ${
                          selectedTime === slot?.time
                            ? 'bg-primary text-primary-foreground shadow-rose'
                            : slot?.available
                              ? 'bg-white border border-border hover:border-primary/50 hover:bg-primary/5' :'bg-muted text-text-secondary cursor-not-allowed opacity-50'
                        }`}
                      >
                        <div className="font-accent text-sm">
                          {slot?.time}
                        </div>
                        {!slot?.available && (
                          <div className="text-xs mt-1">
                            Occupé
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Booking Summary */}
              {selectedDate && selectedTime && (
                <div className="bg-white border border-border rounded-lg p-6">
                  <h4 className="font-headline text-lg text-text-primary mb-4">
                    Récapitulatif de votre rendez-vous
                  </h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Type :</span>
                      <span className="font-accent text-text-primary">
                        {consultationTypes?.find(type => type?.id === consultationType)?.title}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Date :</span>
                      <span className="font-accent text-text-primary">
                        {selectedDate?.date?.toLocaleDateString('fr-FR', { 
                          weekday: 'long', 
                          day: 'numeric', 
                          month: 'long' 
                        })}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Heure :</span>
                      <span className="font-accent text-text-primary">
                        {selectedTime}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Durée :</span>
                      <span className="font-accent text-text-primary">
                        {consultationTypes?.find(type => type?.id === consultationType)?.duration}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-border pt-3">
                      <span className="text-text-secondary">Prix :</span>
                      <span className="font-headline text-lg text-success">
                        Gratuit
                      </span>
                    </div>
                  </div>
                  
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Calendar"
                    iconPosition="left"
                    onClick={handleBooking}
                    className="w-full font-cta hover-scale shadow-rose"
                  >
                    Confirmer le rendez-vous
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCalendar;