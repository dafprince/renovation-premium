import React from 'react';
import Icon from '../../../components/AppIcon';

const QuickStats = ({ stats }) => {
  const statCards = [
    {
      title: 'Jours Restants',
      value: stats?.daysRemaining,
      icon: 'Calendar',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Budget Utilisé',
      value: `${stats?.budgetUsed}%`,
      icon: 'Euro',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      title: 'Tâches Terminées',
      value: `${stats?.completedTasks}/${stats?.totalTasks}`,
      icon: 'CheckCircle',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      title: 'Satisfaction',
      value: `${stats?.satisfaction}/5`,
      icon: 'Star',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards?.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-subtle border border-border p-6 hover-lift transition-premium">
          <div className="flex items-center justify-between mb-4">
            <div className={`w-12 h-12 rounded-lg ${stat?.bgColor} flex items-center justify-center`}>
              <Icon name={stat?.icon} size={24} className={stat?.color} />
            </div>
            <div className="text-right">
              <p className="text-2xl font-headline text-text-primary">{stat?.value}</p>
            </div>
          </div>
          <p className="text-sm font-accent text-text-secondary">{stat?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default QuickStats;