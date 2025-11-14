import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DocumentCenter = ({ documents }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tous', icon: 'Files' },
    { id: 'contracts', name: 'Contrats', icon: 'FileText' },
    { id: 'permits', name: 'Permis', icon: 'Shield' },
    { id: 'invoices', name: 'Factures', icon: 'Receipt' },
    { id: 'warranties', name: 'Garanties', icon: 'Award' },
    { id: 'reports', name: 'Rapports', icon: 'BarChart' }
  ];

  const getDocumentIcon = (type) => {
    switch (type) {
      case 'pdf': return 'FileText';
      case 'image': return 'Image';
      case 'excel': return 'FileSpreadsheet';
      case 'word': return 'FileText';
      default: return 'File';
    }
  };

  const filteredDocuments = selectedCategory === 'all' 
    ? documents 
    : documents?.filter(doc => doc?.category === selectedCategory);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i))?.toFixed(2)) + ' ' + sizes?.[i];
  };

  return (
    <div className="bg-white rounded-xl shadow-subtle border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-cta text-text-primary">Centre de Documents</h3>
        <Button variant="outline" size="sm" iconName="Upload" iconPosition="left">
          Télécharger
        </Button>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-accent transition-premium ${
              selectedCategory === category?.id
                ? 'bg-primary text-primary-foreground shadow-rose'
                : 'bg-surface text-text-secondary hover:bg-muted hover:text-primary'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span>{category?.name}</span>
          </button>
        ))}
      </div>
      {/* Documents List */}
      <div className="space-y-3">
        {filteredDocuments?.map((document, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-surface transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={getDocumentIcon(document?.type)} size={20} className="text-primary" />
              </div>
              
              <div>
                <p className="text-sm font-accent text-text-primary">{document?.name}</p>
                <div className="flex items-center space-x-4 mt-1">
                  <span className="text-xs text-text-secondary">{formatFileSize(document?.size)}</span>
                  <span className="text-xs text-text-secondary">•</span>
                  <span className="text-xs text-text-secondary">{document?.uploadDate}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 text-text-secondary hover:text-primary transition-colors">
                <Icon name="Eye" size={16} />
              </button>
              <button className="p-2 text-text-secondary hover:text-primary transition-colors">
                <Icon name="Download" size={16} />
              </button>
              <button className="p-2 text-text-secondary hover:text-primary transition-colors">
                <Icon name="Share2" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {filteredDocuments?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="FileX" size={48} className="text-text-secondary mx-auto mb-4" />
          <p className="text-text-secondary">Aucun document trouvé dans cette catégorie</p>
        </div>
      )}
    </div>
  );
};

export default DocumentCenter;