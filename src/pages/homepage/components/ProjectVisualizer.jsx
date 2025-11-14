import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectVisualizer = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState('moderne');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const renovationStyles = [
    {
      id: 'moderne',
      name: 'Moderne',
      description: 'Lignes épurées, matériaux contemporains',
      icon: 'Zap',
      preview: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 'classique',
      name: 'Classique',
      description: 'Élégance intemporelle, matériaux nobles',
      icon: 'Crown',
      preview: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 'industriel',
      name: 'Industriel',
      description: 'Métal, béton, esprit loft',
      icon: 'Wrench',
      preview: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 'scandinave',
      name: 'Scandinave',
      description: 'Bois clair, simplicité, fonctionnalité',
      icon: 'TreePine',
      preview: 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const mockTransformations = {
    moderne: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
    classique: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    industriel: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600',
    scandinave: 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=600'
  };

  const handleImageUpload = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e?.target?.result);
        setShowResult(false);
      };
      reader?.readAsDataURL(file);
    }
  };

  const handleVisualize = () => {
    if (!uploadedImage) {
      fileInputRef?.current?.click();
      return;
    }

    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowResult(true);
    }, 3000);
  };

  const handleDragOver = (e) => {
    e?.preventDefault();
  };

  const handleDrop = (e) => {
    e?.preventDefault();
    const file = e?.dataTransfer?.files?.[0];
    if (file && file?.type?.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e?.target?.result);
        setShowResult(false);
      };
      reader?.readAsDataURL(file);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Icon name="Sparkles" size={16} className="text-primary" />
            <span className="text-sm font-accent text-primary">
              Visualiseur de Projet
            </span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-text-primary mb-6">
            Visualisez votre{' '}
            <span className="text-primary">transformation</span>
          </h2>

          <p className="text-lg text-text-secondary font-body max-w-3xl mx-auto">
            Uploadez une photo de votre espace et découvrez instantanément 
            le potentiel de transformation avec nos différents styles de rénovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Upload Section */}
          <div className="space-y-8">
            {/* Image Upload Area */}
            <div
              className="relative border-2 border-dashed border-primary/30 rounded-2xl p-8 text-center hover:border-primary/50 transition-premium cursor-pointer"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef?.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              {uploadedImage ? (
                <div className="relative">
                  <Image
                    src={uploadedImage}
                    alt="Image uploadée"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                    <Icon name="Check" size={20} className="text-success" />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Upload" size={32} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl text-text-primary mb-2">
                      Uploadez votre photo
                    </h3>
                    <p className="text-text-secondary">
                      Glissez-déposez votre image ou cliquez pour sélectionner
                    </p>
                    <p className="text-sm text-text-secondary mt-2">
                      Formats acceptés: JPG, PNG, WEBP (max 10MB)
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Style Selection */}
            <div>
              <h3 className="font-headline text-xl text-text-primary mb-6">
                Choisissez votre style
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {renovationStyles?.map((style) => (
                  <button
                    key={style?.id}
                    onClick={() => setSelectedStyle(style?.id)}
                    className={`p-4 rounded-xl border-2 transition-premium text-left hover-scale ${
                      selectedStyle === style?.id
                        ? 'border-primary bg-primary/5 shadow-rose'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        selectedStyle === style?.id ? 'bg-primary text-white' : 'bg-surface text-primary'
                      }`}>
                        <Icon name={style?.icon} size={20} />
                      </div>
                      <div>
                        <h4 className="font-accent text-text-primary">
                          {style?.name}
                        </h4>
                      </div>
                    </div>
                    
                    <p className="text-sm text-text-secondary mb-3">
                      {style?.description}
                    </p>
                    
                    <div className="w-full h-20 rounded-lg overflow-hidden">
                      <Image
                        src={style?.preview}
                        alt={`Style ${style?.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Visualize Button */}
            <Button
              variant="default"
              size="lg"
              iconName={isProcessing ? "Loader2" : "Eye"}
              iconPosition="left"
              iconSize={20}
              onClick={handleVisualize}
              disabled={isProcessing}
              loading={isProcessing}
              className="w-full font-cta hover-scale"
            >
              {isProcessing ? 'Génération en cours...' : 'Visualiser la Transformation'}
            </Button>
          </div>

          {/* Result Section */}
          <div className="space-y-8">
            {showResult ? (
              <div className="space-y-6">
                {/* Before/After Comparison */}
                <div className="bg-surface rounded-2xl p-6">
                  <h3 className="font-headline text-xl text-text-primary mb-6 text-center">
                    Votre Transformation {renovationStyles?.find(s => s?.id === selectedStyle)?.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-2">
                      <div className="text-center">
                        <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-accent">
                          Avant
                        </span>
                      </div>
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={uploadedImage}
                          alt="Avant transformation"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-center">
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-accent">
                          Après
                        </span>
                      </div>
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <Image
                          src={mockTransformations?.[selectedStyle]}
                          alt="Après transformation"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Transformation Details */}
                  <div className="bg-white rounded-xl p-6 space-y-4">
                    <h4 className="font-headline text-lg text-text-primary">
                      Détails de la Transformation
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Icon name="Palette" size={16} className="text-primary" />
                        <span className="text-sm text-text-secondary">
                          Style {renovationStyles?.find(s => s?.id === selectedStyle)?.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Icon name="TrendingUp" size={16} className="text-success" />
                        <span className="text-sm text-text-secondary">
                          +30% valeur
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span className="text-sm text-text-secondary">
                          4-6 semaines
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Icon name="Euro" size={16} className="text-primary" />
                        <span className="text-sm text-text-secondary">
                          15k-35k€
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="default"
                      size="default"
                      iconName="Phone"
                      iconPosition="left"
                      iconSize={16}
                      onClick={() => navigate('/contact-quote')}
                      className="flex-1 font-cta hover-scale"
                    >
                      Demander un Devis
                    </Button>
                    
                    <Button
                      variant="outline"
                      size="default"
                      iconName="Download"
                      iconPosition="left"
                      iconSize={16}
                      className="flex-1 font-cta hover-scale"
                    >
                      Télécharger
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-surface rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Image" size={32} className="text-primary" />
                </div>
                
                <h3 className="font-headline text-xl text-text-primary mb-4">
                  Prêt pour la magie ?
                </h3>
                
                <p className="text-text-secondary mb-6">
                  Uploadez votre photo et sélectionnez un style pour voir 
                  votre espace transformé instantanément.
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 justify-center">
                    <Icon name="Zap" size={16} className="text-primary" />
                    <span className="text-sm text-text-secondary">
                      Résultat instantané
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3 justify-center">
                    <Icon name="Palette" size={16} className="text-primary" />
                    <span className="text-sm text-text-secondary">
                      4 styles de rénovation
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3 justify-center">
                    <Icon name="Download" size={16} className="text-primary" />
                    <span className="text-sm text-text-secondary">
                      Téléchargement gratuit
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Info Card */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Info" size={20} className="text-primary" />
                </div>
                
                <div>
                  <h4 className="font-headline text-lg text-text-primary mb-2">
                    Visualisation Intelligente
                  </h4>
                  
                  <p className="text-sm text-text-secondary mb-4">
                    Notre outil utilise l'intelligence artificielle pour analyser 
                    votre espace et proposer des transformations réalistes selon 
                    le style choisi.
                  </p>
                  
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={14} className="text-success" />
                    <span className="text-xs text-text-secondary">
                      Vos images sont sécurisées et supprimées après 24h
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVisualizer;