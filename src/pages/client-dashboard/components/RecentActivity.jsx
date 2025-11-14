import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'update': return 'Bell';
      case 'photo': return 'Camera';
      case 'document': return 'FileText';
      case 'payment': return 'CreditCard';
      case 'message': return 'MessageCircle';
      default: return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'update': return 'text-primary';
      case 'photo': return 'text-success';
      case 'document': return 'text-warning';
      case 'payment': return 'text-accent';
      case 'message': return 'text-text-primary';
      default: return 'text-text-secondary';
    }
  };

  const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now - time) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Il y a moins d\'une heure';
    if (diffInHours < 24) return `Il y a ${diffInHours}h`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `Il y a ${diffInDays} jour${diffInDays > 1 ? 's' : ''}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-cta text-text-primary">Activité Récente</h3>
        <button className="text-sm text-primary hover:text-accent transition-colors font-accent">
          Voir tout
        </button>
      </div>
      <div className="space-y-4">
        {activities?.map((activity, index) => (
          <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-surface transition-colors">
            <div className={`w-10 h-10 rounded-full bg-surface flex items-center justify-center flex-shrink-0`}>
              <Icon 
                name={getActivityIcon(activity?.type)} 
                size={18} 
                className={getActivityColor(activity?.type)} 
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm text-text-primary font-accent">{activity?.title}</p>
              <p className="text-xs text-text-secondary mt-1">{activity?.description}</p>
              <p className="text-xs text-text-secondary mt-2">
                {formatTimeAgo(activity?.timestamp)}
              </p>
            </div>

            {activity?.hasAttachment && (
              <button className="text-primary hover:text-accent transition-colors">
                <Icon name="ExternalLink" size={16} />
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full text-center text-sm text-primary hover:text-accent transition-colors font-accent">
          Charger plus d'activités
        </button>
      </div>
    </div>
  );
};

export default RecentActivity;