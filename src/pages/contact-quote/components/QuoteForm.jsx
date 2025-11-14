import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    hasPlans: false,
    needsFinancing: false,
    urgentProject: false
  });

  const [estimatedCost, setEstimatedCost] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState([]);

  const projectTypes = [
    { value: 'renovation-complete', label: 'Rénovation complète', description: '15 000€ - 80 000€' },
    { value: 'cuisine', label: 'Rénovation cuisine', description: '8 000€ - 25 000€' },
    { value: 'salle-bain', label: 'Rénovation salle de bain', description: '5 000€ - 18 000€' },
    { value: 'isolation', label: 'Isolation thermique', description: '3 000€ - 12 000€' },
    { value: 'chauffage', label: 'Système de chauffage', description: '4 000€ - 15 000€' },
    { value: 'toiture', label: 'Rénovation toiture', description: '8 000€ - 30 000€' },
    { value: 'extension', label: 'Extension maison', description: '20 000€ - 100 000€' },
    { value: 'autre', label: 'Autre projet', description: 'Devis personnalisé' }
  ];

  const budgetRanges = [
    { value: '5000-15000', label: '5 000€ - 15 000€' },
    { value: '15000-30000', label: '15 000€ - 30 000€' },
    { value: '30000-50000', label: '30 000€ - 50 000€' },
    { value: '50000-100000', label: '50 000€ - 100 000€' },
    { value: '100000+', label: 'Plus de 100 000€' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (moins de 1 mois)' },
    { value: '1-3-mois', label: '1 à 3 mois' },
    { value: '3-6-mois', label: '3 à 6 mois' },
    { value: '6-12-mois', label: '6 à 12 mois' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Calculate estimated cost based on project type and budget
    if (field === 'projectType' || field === 'budget') {
      calculateEstimate({ ...formData, [field]: value });
    }
  };

  const calculateEstimate = (data) => {
    if (data?.projectType && data?.budget) {
      const projectMultipliers = {
        'renovation-complete': 1.2,
        'cuisine': 1.0,
        'salle-bain': 0.9,
        'isolation': 0.7,
        'chauffage': 0.8,
        'toiture': 1.1,
        'extension': 1.5,
        'autre': 1.0
      };

      const budgetMidpoints = {
        '5000-15000': 10000,
        '15000-30000': 22500,
        '30000-50000': 40000,
        '50000-100000': 75000,
        '100000+': 120000
      };

      const baseAmount = budgetMidpoints?.[data?.budget] || 0;
      const multiplier = projectMultipliers?.[data?.projectType] || 1;
      const estimate = Math.round(baseAmount * multiplier);
      
      setEstimatedCost(estimate);
    }
  };

  const handleFileUpload = (event) => {
    const selectedFiles = Array.from(event?.target?.files);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev?.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(`Merci ${formData?.firstName} ! Votre demande de devis a été envoyée avec succès. Nous vous contacterons sous 2h ouvrées à l'adresse ${formData?.email}.`);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        hasPlans: false,
        needsFinancing: false,
        urgentProject: false
      });
      setFiles([]);
      setEstimatedCost(null);
    }, 2000);
  };

  return (
    <section id="quote-form" className="py-16 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl text-text-primary mb-4">
            Demande de devis personnalisé
          </h2>
          <p className="text-lg text-text-secondary font-body max-w-2xl mx-auto">
            Remplissez ce formulaire détaillé pour recevoir une estimation précise 
            et un devis adapté à votre projet de rénovation.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-subtle border border-border p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="font-headline text-xl text-text-primary mb-6 flex items-center">
                <Icon name="User" size={20} className="mr-2 text-primary" />
                Informations personnelles
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Prénom"
                  type="text"
                  placeholder="Votre prénom"
                  value={formData?.firstName}
                  onChange={(e) => handleInputChange('firstName', e?.target?.value)}
                  required
                />
                
                <Input
                  label="Nom"
                  type="text"
                  placeholder="Votre nom"
                  value={formData?.lastName}
                  onChange={(e) => handleInputChange('lastName', e?.target?.value)}
                  required
                />
                
                <Input
                  label="Email"
                  type="email"
                  placeholder="votre.email@exemple.fr"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                />
                
                <Input
                  label="Téléphone"
                  type="tel"
                  placeholder="01 23 45 67 89"
                  value={formData?.phone}
                  onChange={(e) => handleInputChange('phone', e?.target?.value)}
                  required
                />
              </div>
            </div>

            {/* Address Information */}
            <div>
              <h3 className="font-headline text-xl text-text-primary mb-6 flex items-center">
                <Icon name="MapPin" size={20} className="mr-2 text-primary" />
                Localisation du projet
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <Input
                    label="Adresse"
                    type="text"
                    placeholder="123 Rue de la Rénovation"
                    value={formData?.address}
                    onChange={(e) => handleInputChange('address', e?.target?.value)}
                    required
                  />
                </div>
                
                <Input
                  label="Code postal"
                  type="text"
                  placeholder="75001"
                  value={formData?.postalCode}
                  onChange={(e) => handleInputChange('postalCode', e?.target?.value)}
                  required
                />
                
                <div className="md:col-span-3">
                  <Input
                    label="Ville"
                    type="text"
                    placeholder="Paris"
                    value={formData?.city}
                    onChange={(e) => handleInputChange('city', e?.target?.value)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="font-headline text-xl text-text-primary mb-6 flex items-center">
                <Icon name="Hammer" size={20} className="mr-2 text-primary" />
                Détails du projet
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Select
                  label="Type de projet"
                  placeholder="Sélectionnez votre projet"
                  options={projectTypes}
                  value={formData?.projectType}
                  onChange={(value) => handleInputChange('projectType', value)}
                  required
                />
                
                <Select
                  label="Budget envisagé"
                  placeholder="Sélectionnez votre budget"
                  options={budgetRanges}
                  value={formData?.budget}
                  onChange={(value) => handleInputChange('budget', value)}
                  required
                />
                
                <Select
                  label="Délai souhaité"
                  placeholder="Quand souhaitez-vous commencer ?"
                  options={timelineOptions}
                  value={formData?.timeline}
                  onChange={(value) => handleInputChange('timeline', value)}
                  required
                  className="md:col-span-2"
                />
              </div>

              {/* Estimated Cost Display */}
              {estimatedCost && (
                <div className="bg-gradient-to-r from-primary/5 to-secondary/10 border border-rose/20 rounded-lg p-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-headline text-lg text-text-primary mb-2">
                        Estimation préliminaire
                      </h4>
                      <p className="text-sm text-text-secondary">
                        Basée sur votre sélection, estimation indicative
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-headline text-2xl text-primary">
                        {estimatedCost?.toLocaleString('fr-FR')} €
                      </p>
                      <p className="text-xs text-text-secondary">
                        Devis détaillé à suivre
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <Input
                  label="Description détaillée du projet"
                  type="text"
                  placeholder="Décrivez votre projet en détail : surface, contraintes, souhaits particuliers..."
                  value={formData?.description}
                  onChange={(e) => handleInputChange('description', e?.target?.value)}
                  className="min-h-[120px]"
                />
              </div>
            </div>

            {/* File Upload */}
            <div>
              <h3 className="font-headline text-xl text-text-primary mb-6 flex items-center">
                <Icon name="Upload" size={20} className="mr-2 text-primary" />
                Documents et photos
              </h3>
              
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Icon name="Upload" size={48} className="mx-auto text-text-secondary mb-4" />
                <p className="text-text-primary font-accent mb-2">
                  Ajoutez des photos ou plans de votre projet
                </p>
                <p className="text-sm text-text-secondary mb-4">
                  JPG, PNG, PDF - Maximum 10MB par fichier
                </p>
                
                <input
                  type="file"
                  multiple
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById('file-upload')?.click()}
                  iconName="Plus"
                  iconPosition="left"
                >
                  Choisir des fichiers
                </Button>
              </div>

              {files?.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files?.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-muted p-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon name="File" size={16} className="text-text-secondary" />
                        <span className="text-sm font-accent text-text-primary">
                          {file?.name}
                        </span>
                        <span className="text-xs text-text-secondary">
                          ({(file?.size / 1024 / 1024)?.toFixed(1)} MB)
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-destructive hover:text-destructive/80 transition-colors"
                      >
                        <Icon name="X" size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Additional Options */}
            <div>
              <h3 className="font-headline text-xl text-text-primary mb-6 flex items-center">
                <Icon name="Settings" size={20} className="mr-2 text-primary" />
                Options supplémentaires
              </h3>
              
              <div className="space-y-4">
                <Checkbox
                  label="J'ai déjà des plans ou des études techniques"
                  description="Cela peut accélérer le processus de devis"
                  checked={formData?.hasPlans}
                  onChange={(e) => handleInputChange('hasPlans', e?.target?.checked)}
                />
                
                <Checkbox
                  label="Je souhaite des informations sur le financement"
                  description="Prêts travaux, éco-PTZ, aides de l'État"
                  checked={formData?.needsFinancing}
                  onChange={(e) => handleInputChange('needsFinancing', e?.target?.checked)}
                />
                
                <Checkbox
                  label="Projet urgent (démarrage sous 30 jours)"
                  description="Nous prioriserons votre demande"
                  checked={formData?.urgentProject}
                  onChange={(e) => handleInputChange('urgentProject', e?.target?.checked)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-text-secondary">
                  <Icon name="Shield" size={16} className="inline mr-1 text-success" />
                  Vos données sont sécurisées et ne seront jamais partagées
                </div>
                
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="font-cta hover-scale shadow-rose"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;