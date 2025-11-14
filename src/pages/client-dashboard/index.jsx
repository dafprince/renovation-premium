import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import ProjectOverview from './components/ProjectOverview';
import QuickStats from './components/QuickStats';
import RecentActivity from './components/RecentActivity';
import DocumentCenter from './components/DocumentCenter';
import PaymentSection from './components/PaymentSection';
import CommunicationCenter from './components/CommunicationCenter';
import SatisfactionTracker from './components/SatisfactionTracker';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ClientDashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeSection, setActiveSection] = useState('overview');

  // Mock user authentication check
  useEffect(() => {
    // Mock authentication - in real app, check JWT token
    const mockUser = {
      id: 1,
      name: "Marie Dubois",
      email: "marie.dubois@email.com",
      phone: "+33 6 12 34 56 78",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    };
    setCurrentUser(mockUser);
  }, []);

  // Mock data
  const currentProject = {
    id: 1,
    name: "Rénovation Complète Appartement",
    description: "Rénovation complète d'un appartement de 85m² incluant cuisine, salle de bain, et isolation thermique.",
    address: "15 Rue de la Paix, 75001 Paris",
    projectManager: "Jean-Pierre Martin",
    status: "En cours",
    progress: 65,
    currentPhase: "Isolation & Plomberie",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&h=400&fit=crop",
    upcomingMilestones: [
      { title: "Finalisation plomberie", date: "12/09/2025" },
      { title: "Installation électrique", date: "18/09/2025" },
      { title: "Pose carrelage salle de bain", date: "25/09/2025" }
    ]
  };

  const quickStats = {
    daysRemaining: 42,
    budgetUsed: 68,
    completedTasks: 23,
    totalTasks: 35,
    satisfaction: 4.7
  };

  const recentActivities = [
    {
      type: 'photo',
      title: 'Nouvelles photos ajoutées',
      description: 'Photos de l\'avancement des travaux de plomberie',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      hasAttachment: true
    },
    {
      type: 'update',
      title: 'Mise à jour du planning',
      description: 'Le planning a été ajusté suite aux conditions météorologiques',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
      hasAttachment: false
    },
    {
      type: 'document',
      title: 'Nouveau document disponible',
      description: 'Certificat de conformité électrique ajouté',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      hasAttachment: true
    },
    {
      type: 'message',
      title: 'Message de Jean-Pierre',
      description: 'Confirmation du rendez-vous pour la visite de contrôle',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      hasAttachment: false
    }
  ];

  const documents = [
    {
      name: "Contrat de Rénovation - Appartement Paris",
      type: "pdf",
      category: "contracts",
      size: 2048576,
      uploadDate: "01/08/2025"
    },
    {
      name: "Permis de Construire - Modifications",
      type: "pdf",
      category: "permits",
      size: 1536000,
      uploadDate: "15/08/2025"
    },
    {
      name: "Facture Matériaux - Août 2025",
      type: "pdf",
      category: "invoices",
      size: 512000,
      uploadDate: "30/08/2025"
    },
    {
      name: "Garantie Chaudière - 10 ans",
      type: "pdf",
      category: "warranties",
      size: 768000,
      uploadDate: "05/09/2025"
    },
    {
      name: "Photos Avant Travaux",
      type: "image",
      category: "reports",
      size: 4096000,
      uploadDate: "01/08/2025"
    }
  ];

  const paymentData = {
    totalAmount: 45000,
    paidAmount: 30600,
    remainingAmount: 14400,
    schedule: [
      {
        description: "Acompte à la signature",
        amount: 13500,
        dueDate: "01/08/2025",
        status: "Payé"
      },
      {
        description: "Paiement intermédiaire - Gros œuvre",
        amount: 17100,
        dueDate: "01/09/2025",
        status: "Payé"
      },
      {
        description: "Paiement finition - Plomberie/Électricité",
        amount: 9000,
        dueDate: "15/09/2025",
        status: "En attente"
      },
      {
        description: "Solde final - Livraison",
        amount: 5400,
        dueDate: "30/09/2025",
        status: "En attente"
      }
    ],
    recentInvoices: [
      {
        number: "FACT-2025-0089",
        amount: 17100,
        issueDate: "28/08/2025"
      },
      {
        number: "FACT-2025-0067",
        amount: 13500,
        issueDate: "01/08/2025"
      }
    ]
  };

  const messages = [
    {
      sender: "Jean-Pierre Martin",
      content: "Bonjour Marie, les travaux de plomberie avancent bien. Nous devrions terminer cette phase d'ici vendredi.",
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000)
    },
    {
      sender: "Vous",
      content: "Parfait ! Pouvez-vous m\'envoyer quelques photos de l\'avancement ?",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000)
    },
    {
      sender: "Jean-Pierre Martin",
      content: "Bien sûr, je viens de les ajouter dans la section documents. Vous pouvez les consulter dès maintenant.",
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000)
    }
  ];

  const notifications = [
    {
      type: 'update',
      title: 'Avancement du projet',
      message: 'Votre projet a atteint 65% de completion',
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
      read: false
    },
    {
      type: 'payment',
      title: 'Facture disponible',
      message: 'Nouvelle facture FACT-2025-0089 disponible',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000),
      read: false
    },
    {
      type: 'schedule',
      title: 'Rendez-vous confirmé',
      message: 'Visite de contrôle prévue le 12/09/2025 à 14h00',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      read: true
    }
  ];

  const satisfactionData = {
    overallScore: 4.7,
    totalReviews: 8,
    categories: [
      { name: 'Qualité des travaux', score: 4.8 },
      { name: 'Respect des délais', score: 4.5 },
      { name: 'Communication', score: 4.9 },
      { name: 'Propreté du chantier', score: 4.6 }
    ],
    recentReviews: [
      {
        rating: 5,
        comment: "Excellent travail sur la plomberie, très professionnel !",
        date: "03/09/2025"
      },
      {
        rating: 4,
        comment: "Bon avancement, quelques petits retards mais bien rattrapés.",
        date: "28/08/2025"
      }
    ]
  };

  const sectionItems = [
    { id: 'overview', name: 'Vue d\'ensemble', icon: 'LayoutDashboard' },
    { id: 'documents', name: 'Documents', icon: 'FileText' },
    { id: 'payments', name: 'Paiements', icon: 'CreditCard' },
    { id: 'communication', name: 'Communication', icon: 'MessageCircle' },
    { id: 'satisfaction', name: 'Satisfaction', icon: 'Star' }
  ];

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <Icon name="Loader2" size={48} className="text-primary animate-spin mx-auto mb-4" />
          <p className="text-text-secondary">Chargement de votre dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-xl shadow-subtle border border-border p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={currentUser?.avatar}
                  alt={currentUser?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-2xl font-headline text-text-primary">
                  Bonjour, {currentUser?.name}
                </h1>
                <p className="text-text-secondary">
                  Bienvenue sur votre espace client RénoVision Pro
                </p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-text-secondary">Dernière connexion</p>
                <p className="text-sm font-accent text-text-primary">Aujourd'hui, 15:22</p>
              </div>
              <Button variant="outline" size="sm" iconName="Settings" iconPosition="left">
                Paramètres
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-8">
          <QuickStats stats={quickStats} />
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-subtle border border-border mb-8">
          <div className="flex flex-wrap border-b border-border">
            {sectionItems?.map((item) => (
              <button
                key={item?.id}
                onClick={() => setActiveSection(item?.id)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-accent transition-premium ${
                  activeSection === item?.id
                    ? 'border-b-2 border-primary text-primary bg-primary/5' :'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {activeSection === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <ProjectOverview currentProject={currentProject} />
              </div>
              <div className="space-y-8">
                <RecentActivity activities={recentActivities} />
              </div>
            </div>
          )}

          {activeSection === 'documents' && (
            <DocumentCenter documents={documents} />
          )}

          {activeSection === 'payments' && (
            <PaymentSection paymentData={paymentData} />
          )}

          {activeSection === 'communication' && (
            <CommunicationCenter messages={messages} notifications={notifications} />
          )}

          {activeSection === 'satisfaction' && (
            <SatisfactionTracker satisfactionData={satisfactionData} />
          )}
        </div>

        {/* Quick Actions Footer */}
        <div className="mt-12 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h3 className="text-lg font-cta text-text-primary mb-2">
                Besoin d'aide ou d'informations ?
              </h3>
              <p className="text-text-secondary">
                Notre équipe est disponible pour répondre à toutes vos questions
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" iconName="Phone" iconPosition="left">
                Appeler
              </Button>
              <Button variant="default" iconName="Mail" iconPosition="left">
                Contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;