import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PaymentSection = ({ paymentData }) => {
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'Payé': return 'text-success bg-success/10';
      case 'En attente': return 'text-warning bg-warning/10';
      case 'En retard': return 'text-destructive bg-destructive/10';
      default: return 'text-text-secondary bg-surface';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    })?.format(amount);
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-cta text-text-primary">Paiements & Facturation</h3>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
            Exporter
          </Button>
        </div>
      </div>
      {/* Payment Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="Euro" size={20} className="text-primary" />
            <span className="text-xs text-text-secondary">Total Projet</span>
          </div>
          <p className="text-2xl font-headline text-text-primary">
            {formatCurrency(paymentData?.totalAmount)}
          </p>
        </div>

        <div className="bg-gradient-to-br from-success/5 to-success/10 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="CheckCircle" size={20} className="text-success" />
            <span className="text-xs text-text-secondary">Payé</span>
          </div>
          <p className="text-2xl font-headline text-text-primary">
            {formatCurrency(paymentData?.paidAmount)}
          </p>
        </div>

        <div className="bg-gradient-to-br from-warning/5 to-warning/10 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Icon name="Clock" size={20} className="text-warning" />
            <span className="text-xs text-text-secondary">Restant</span>
          </div>
          <p className="text-2xl font-headline text-text-primary">
            {formatCurrency(paymentData?.remainingAmount)}
          </p>
        </div>
      </div>
      {/* Payment Schedule */}
      <div className="mb-6">
        <h4 className="text-lg font-cta text-text-primary mb-4">Échéancier de Paiement</h4>
        <div className="space-y-3">
          {paymentData?.schedule?.map((payment, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-surface transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-sm font-accent text-primary">{index + 1}</span>
                </div>
                <div>
                  <p className="text-sm font-accent text-text-primary">{payment?.description}</p>
                  <p className="text-xs text-text-secondary">Échéance: {payment?.dueDate}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-lg font-headline text-text-primary">
                  {formatCurrency(payment?.amount)}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-accent ${getPaymentStatusColor(payment?.status)}`}>
                  {payment?.status}
                </span>
                {payment?.status === 'En attente' && (
                  <Button variant="default" size="sm">
                    Payer
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Recent Invoices */}
      <div>
        <h4 className="text-lg font-cta text-text-primary mb-4">Factures Récentes</h4>
        <div className="space-y-3">
          {paymentData?.recentInvoices?.map((invoice, index) => (
            <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-surface transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Receipt" size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-accent text-text-primary">{invoice?.number}</p>
                  <p className="text-xs text-text-secondary">Émise le {invoice?.issueDate}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm font-accent text-text-primary">
                  {formatCurrency(invoice?.amount)}
                </span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-text-secondary hover:text-primary transition-colors">
                    <Icon name="Eye" size={16} />
                  </button>
                  <button className="p-2 text-text-secondary hover:text-primary transition-colors">
                    <Icon name="Download" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;