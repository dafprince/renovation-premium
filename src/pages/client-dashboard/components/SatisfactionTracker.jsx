import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SatisfactionTracker = ({ satisfactionData }) => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const ratingLabels = {
    1: 'Très insatisfait',
    2: 'Insatisfait',
    3: 'Neutre',
    4: 'Satisfait',
    5: 'Très satisfait'
  };

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmitFeedback = () => {
    if (selectedRating > 0) {
      console.log('Feedback submitted:', { rating: selectedRating, feedback });
      setSelectedRating(0);
      setFeedback('');
    }
  };

  const getProgressColor = (score) => {
    if (score >= 4.5) return 'bg-success';
    if (score >= 3.5) return 'bg-warning';
    return 'bg-destructive';
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-cta text-text-primary">Suivi de Satisfaction</h3>
        <div className="flex items-center space-x-2">
          <Icon name="TrendingUp" size={20} className="text-success" />
          <span className="text-sm font-accent text-success">+0.3 ce mois</span>
        </div>
      </div>
      {/* Overall Satisfaction Score */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-text-secondary font-accent">Note Globale</p>
            <div className="flex items-center space-x-2 mt-1">
              <span className="text-3xl font-headline text-text-primary">
                {satisfactionData?.overallScore?.toFixed(1)}
              </span>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5]?.map((star) => (
                  <Icon
                    key={star}
                    name="Star"
                    size={20}
                    className={star <= Math.round(satisfactionData?.overallScore) 
                      ? 'text-warning fill-current' :'text-border'
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-text-secondary font-accent">Basé sur</p>
            <p className="text-lg font-headline text-text-primary">
              {satisfactionData?.totalReviews} évaluations
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-border rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(satisfactionData?.overallScore)}`}
            style={{ width: `${(satisfactionData?.overallScore / 5) * 100}%` }}
          ></div>
        </div>
      </div>
      {/* Category Ratings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {satisfactionData?.categories?.map((category, index) => (
          <div key={index} className="bg-surface rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-accent text-text-primary">{category?.name}</span>
              <span className="text-sm font-headline text-text-primary">{category?.score?.toFixed(1)}</span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(category?.score)}`}
                style={{ width: `${(category?.score / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      {/* Quick Feedback */}
      <div className="border-t border-border pt-6">
        <h4 className="text-lg font-cta text-text-primary mb-4">Évaluez votre expérience</h4>
        
        {/* Star Rating */}
        <div className="flex items-center space-x-2 mb-4">
          {[1, 2, 3, 4, 5]?.map((star) => (
            <button
              key={star}
              onClick={() => handleRatingClick(star)}
              className="transition-transform hover:scale-110"
            >
              <Icon
                name="Star"
                size={32}
                className={star <= selectedRating 
                  ? 'text-warning fill-current' :'text-border hover:text-warning/50'
                }
              />
            </button>
          ))}
          {selectedRating > 0 && (
            <span className="ml-4 text-sm font-accent text-text-primary">
              {ratingLabels?.[selectedRating]}
            </span>
          )}
        </div>

        {/* Feedback Text */}
        <div className="mb-4">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e?.target?.value)}
            placeholder="Partagez vos commentaires (optionnel)..."
            className="w-full p-3 border border-border rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
            rows={3}
          />
        </div>

        <Button
          variant="default"
          size="default"
          iconName="Send"
          iconPosition="left"
          onClick={handleSubmitFeedback}
          disabled={selectedRating === 0}
          className="w-full sm:w-auto"
        >
          Envoyer l'évaluation
        </Button>
      </div>
      {/* Recent Reviews */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="text-lg font-cta text-text-primary mb-4">Vos Évaluations Récentes</h4>
        <div className="space-y-3">
          {satisfactionData?.recentReviews?.map((review, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5]?.map((star) => (
                  <Icon
                    key={star}
                    name="Star"
                    size={16}
                    className={star <= review?.rating 
                      ? 'text-warning fill-current' :'text-border'
                    }
                  />
                ))}
              </div>
              <div className="flex-1">
                <p className="text-sm text-text-primary">{review?.comment}</p>
                <p className="text-xs text-text-secondary mt-1">{review?.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SatisfactionTracker;