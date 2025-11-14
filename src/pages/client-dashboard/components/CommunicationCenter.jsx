import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CommunicationCenter = ({ messages, notifications }) => {
  const [activeTab, setActiveTab] = useState('messages');
  const [newMessage, setNewMessage] = useState('');

  const formatMessageTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'À l\'instant';
    if (diffInHours < 24) return `Il y a ${diffInHours}h`;
    return date?.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'update': return 'Bell';
      case 'payment': return 'CreditCard';
      case 'document': return 'FileText';
      case 'schedule': return 'Calendar';
      default: return 'Info';
    }
  };

  const handleSendMessage = () => {
    if (newMessage?.trim()) {
      // Mock sending message
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-cta text-text-primary">Centre de Communication</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-4 py-2 rounded-lg text-sm font-accent transition-premium ${
              activeTab === 'messages' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-primary hover:bg-surface'
            }`}
          >
            Messages
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`px-4 py-2 rounded-lg text-sm font-accent transition-premium relative ${
              activeTab === 'notifications'
                ? 'bg-primary text-primary-foreground' :'text-text-secondary hover:text-primary hover:bg-surface'
            }`}
          >
            Notifications
            {notifications?.filter(n => !n?.read)?.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-white text-xs rounded-full flex items-center justify-center">
                {notifications?.filter(n => !n?.read)?.length}
              </span>
            )}
          </button>
        </div>
      </div>
      {activeTab === 'messages' && (
        <div className="space-y-4">
          {/* Messages List */}
          <div className="max-h-96 overflow-y-auto space-y-4 mb-4">
            {messages?.map((message, index) => (
              <div key={index} className={`flex ${message?.sender === 'Vous' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                  message?.sender === 'Vous' ?'bg-primary text-primary-foreground' :'bg-surface text-text-primary border border-border'
                }`}>
                  {message?.sender !== 'Vous' && (
                    <p className="text-xs font-accent mb-1 opacity-80">{message?.sender}</p>
                  )}
                  <p className="text-sm">{message?.content}</p>
                  <p className={`text-xs mt-2 ${
                    message?.sender === 'Vous' ? 'text-primary-foreground/70' : 'text-text-secondary'
                  }`}>
                    {formatMessageTime(message?.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex items-center space-x-3 pt-4 border-t border-border">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Tapez votre message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e?.target?.value)}
                onKeyPress={(e) => e?.key === 'Enter' && handleSendMessage()}
              />
            </div>
            <Button
              variant="default"
              size="default"
              iconName="Send"
              onClick={handleSendMessage}
              disabled={!newMessage?.trim()}
            />
          </div>
        </div>
      )}
      {activeTab === 'notifications' && (
        <div className="space-y-3">
          {notifications?.map((notification, index) => (
            <div key={index} className={`p-4 rounded-lg border transition-colors ${
              notification?.read 
                ? 'border-border bg-white' :'border-primary/20 bg-primary/5'
            }`}>
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  notification?.read ? 'bg-surface' : 'bg-primary/10'
                }`}>
                  <Icon 
                    name={getNotificationIcon(notification?.type)} 
                    size={16} 
                    className={notification?.read ? 'text-text-secondary' : 'text-primary'} 
                  />
                </div>
                
                <div className="flex-1">
                  <p className="text-sm font-accent text-text-primary">{notification?.title}</p>
                  <p className="text-xs text-text-secondary mt-1">{notification?.message}</p>
                  <p className="text-xs text-text-secondary mt-2">
                    {formatMessageTime(notification?.timestamp)}
                  </p>
                </div>

                {!notification?.read && (
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                )}
              </div>
            </div>
          ))}

          {notifications?.length === 0 && (
            <div className="text-center py-8">
              <Icon name="Bell" size={48} className="text-text-secondary mx-auto mb-4" />
              <p className="text-text-secondary">Aucune notification</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommunicationCenter;