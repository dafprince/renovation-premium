import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FilterBar from './components/FilterBar';
import ProjectCard from './components/ProjectCard';
import ResultsDashboard from './components/ResultsDashboard';
import NeighborhoodSection from './components/NeighborhoodSection';
import ProjectModal from './components/ProjectModal';

const PortfolioResults = () => {
  const [filters, setFilters] = useState({
    type: 'all',
    budget: 'all',
    timeline: 'all',
    region: 'all'
  });
  
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const projectsPerPage = 9;

  // Mock projects data
  const allProjects = [
    {
      id: 1,
      title: "Rénovation complète d\'un appartement haussmannien",
      type: "Rénovation complète",
      description: `Transformation complète d'un appartement de 120m² dans le 16ème arrondissement de Paris. Le projet incluait une rénovation énergétique complète avec isolation thermique, remplacement du système de chauffage et modernisation de l'ensemble des espaces de vie.`,
      location: "Paris 16ème",
      duration: "16 semaines",
      budget: 85000,
      energySavings: 42,
      energyRating: "A",
      rating: 4.9,
      satisfaction: 96,
      completionDate: "2024",
      clientName: "Marie et Pierre Dubois",
      testimonial: `L'équipe de RénoVision Pro a transformé notre appartement au-delà de nos espérances. Le suivi du projet était exemplaire et nous avons été tenus informés à chaque étape. Nos factures d'énergie ont chuté de 42% dès le premier mois !`,
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
      ],
      specifications: [
        "Isolation thermique par l'extérieur (ITE) 140mm",
        "Installation pompe à chaleur air-eau haute performance",
        "Remplacement menuiseries triple vitrage",
        "Système VMC double flux avec récupération de chaleur",
        "Rénovation complète cuisine et salle de bains",
        "Parquet massif et carrelage haut de gamme"
      ]
    },
    {
      id: 2,
      title: "Cuisine moderne avec îlot central",
      type: "Cuisine",
      description: `Création d'une cuisine contemporaine avec îlot central dans une maison de ville lyonnaise.Le projet a optimisé l'espace et intégré des équipements éco-énergétiques pour une cuisine fonctionnelle et esthétique.`,
      location: "Lyon 6ème",
      duration: "6 semaines",
      budget: 32000,
      energySavings: 25,
      energyRating: "B",
      rating: 4.8,
      satisfaction: 94,
      completionDate: "2024",
      clientName: "Sophie Martin",
      testimonial: `Notre nouvelle cuisine est magnifique ! L'équipe a su optimiser chaque centimètre carré et le résultat est à la fois beau et pratique. Les nouveaux équipements nous font économiser beaucoup d'énergie.`,
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-4f6e9d4d0c70?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Salle de bain spa avec douche italienne",
      type: "Salle de bain",
      description: `Transformation d'une salle de bain classique en espace spa moderne avec douche à l'italienne.
      
      Intégration de matériaux nobles et d'équipements économes en eau pour un confort optimal.`,
      location: "Marseille 8ème",
      duration: "4 semaines",
      budget: 18500,
      energySavings: 30,
      energyRating: "B",
      rating: 4.7,
      satisfaction: 92,
      completionDate: "2024",
      images: [
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Isolation thermique complète maison individuelle",
      type: "Isolation thermique",
      description: `Isolation thermique par l'extérieur d'une maison des années 70 pour améliorer drastiquement ses performances énergétiques.
      
      Le projet incluait également le remplacement de la toiture et l'installation d'une ventilation performante.`,
      location: "Bordeaux",
      duration: "12 semaines",
      budget: 67000,
      energySavings: 55,
      energyRating: "A",
      rating: 4.9,
      satisfaction: 98,
      completionDate: "2024",
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Installation pompe à chaleur et radiateurs",
      type: "Chauffage",
      description: `Remplacement d'une ancienne chaudière fioul par une pompe à chaleur air-eau haute performance.
      
      Installation complète avec nouveaux radiateurs et système de régulation intelligent.`,
      location: "Nantes",
      duration: "3 semaines",
      budget: 24000,
      energySavings: 48,
      energyRating: "B",
      rating: 4.6,
      satisfaction: 89,
      completionDate: "2024",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Extension moderne avec baies vitrées",
      type: "Extension",
      description: `Création d'une extension de 40m² avec grandes baies vitrées pour agrandir l'espace de vie. Construction respectueuse de l'environnement avec matériaux durables et isolation renforcée.`,
      location: "Toulouse",
      duration: "20 semaines",
      budget: 125000,
      energySavings: 35,
      energyRating: "A",
      rating: 4.8,
      satisfaction: 95,
      completionDate: "2024",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 7,
      title: "Rénovation énergétique appartement T3",
      type: "Rénovation complète",
      description: `Rénovation énergétique complète d'un appartement T3 avec optimisation de l'espace et modernisation.Focus sur l'amélioration des performances thermiques et le confort de vie.`,
      location: "Strasbourg",
      duration: "10 semaines",
      budget: 45000,
      energySavings: 38,
      energyRating: "B",
      rating: 4.7,
      satisfaction: 91,
      completionDate: "2024",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 8,
      title: "Cuisine ouverte avec verrière",
      type: "Cuisine",
      description: `Ouverture d'une cuisine sur le salon avec création d'une verrière d'atelier.
      
      Modernisation complète avec équipements éco-responsables et optimisation des rangements.`,
      location: "Lille",
      duration: "8 semaines",
      budget: 38000,
      energySavings: 22,
      energyRating: "C",
      rating: 4.5,
      satisfaction: 87,
      completionDate: "2024",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 9,
      title: "Rénovation salle de bain parentale",
      type: "Salle de bain",
      description: `Création d'une suite parentale avec salle de bain attenante incluant baignoire et douche séparées.
      
      Matériaux haut de gamme et équipements économes en eau.`,
      location: "Nice",
      duration: "7 semaines",
      budget: 28000,
      energySavings: 28,
      energyRating: "B",
      rating: 4.8,
      satisfaction: 93,
      completionDate: "2024",
      images: [
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 10,
      title: "Isolation combles et toiture",
      type: "Isolation thermique",
      description: `Isolation des combles perdus et réfection de toiture pour une maison familiale.
      
      Amélioration significative du confort thermique et réduction des déperditions énergétiques.`,
      location: "Rennes",
      duration: "5 semaines",
      budget: 22000,
      energySavings: 45,
      energyRating: "B",
      rating: 4.6,
      satisfaction: 88,
      completionDate: "2024",
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 11,
      title: "Chauffage au sol et pompe à chaleur",
      type: "Chauffage",
      description: `Installation d'un système de chauffage au sol couplé à une pompe à chaleur géothermique.
      
      Solution haute performance pour un confort optimal et des économies durables.`,
      location: "Montpellier",
      duration: "14 semaines",
      budget: 52000,
      energySavings: 52,
      energyRating: "A",
      rating: 4.9,
      satisfaction: 97,
      completionDate: "2024",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop"
      ]
    },
    {
      id: 12,
      title: "Extension véranda bioclimatique",
      type: "Extension",
      description: `Construction d'une véranda bioclimatique de 25m² avec système de ventilation naturelle.
      
      Espace de vie supplémentaire optimisé pour les apports solaires et le confort thermique.`,
      location: "Angers",
      duration: "16 semaines",
      budget: 89000,
      energySavings: 31,
      energyRating: "A",
      rating: 4.7,
      satisfaction: 90,
      completionDate: "2024",
      images: [
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop"
      ]
    }
  ];

  // Filter projects based on current filters
  useEffect(() => {
    setIsLoading(true);
    
    const filtered = allProjects?.filter(project => {
      const typeMatch = filters?.type === 'all' || project?.type?.toLowerCase()?.includes(filters?.type?.replace('-', ' '));
      
      const budgetMatch = filters?.budget === 'all' || (() => {
        const budget = project?.budget;
        switch(filters?.budget) {
          case '0-20000': return budget <= 20000;
          case '20000-50000': return budget > 20000 && budget <= 50000;
          case '50000-100000': return budget > 50000 && budget <= 100000;
          case '100000+': return budget > 100000;
          default: return true;
        }
      })();
      
      const timelineMatch = filters?.timeline === 'all' || (() => {
        const duration = project?.duration;
        const weeks = parseInt(duration?.split(' ')?.[0]);
        switch(filters?.timeline) {
          case '1-4': return weeks <= 4;
          case '1-3': return weeks <= 12;
          case '3-6': return weeks > 12 && weeks <= 24;
          case '6+': return weeks > 24;
          default: return true;
        }
      })();
      
      const regionMatch = filters?.region === 'all' || (() => {
        const location = project?.location?.toLowerCase();
        switch(filters?.region) {
          case 'ile-de-france': return location?.includes('paris');
          case 'provence': return location?.includes('marseille') || location?.includes('nice');
          case 'rhone-alpes': return location?.includes('lyon');
          case 'nouvelle-aquitaine': return location?.includes('bordeaux');
          default: return true;
        }
      })();
      
      return typeMatch && budgetMatch && timelineMatch && regionMatch;
    });
    
    setTimeout(() => {
      setFilteredProjects(filtered);
      setCurrentPage(1);
      setIsLoading(false);
    }, 300);
  }, [filters]);

  // Initialize with all projects
  useEffect(() => {
    setFilteredProjects(allProjects);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      type: 'all',
      budget: 'all',
      timeline: 'all',
      region: 'all'
    });
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Pagination
  const totalPages = Math.ceil(filteredProjects?.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects?.slice(startIndex, startIndex + projectsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Portfolio & Résultats - RénoVision Pro | Transformations Réussies</title>
        <meta name="description" content="Découvrez nos réalisations de rénovation énergétique et transformations d'intérieur. Portfolio complet avec témoignages clients, économies d'énergie et résultats garantis." />
        <meta name="keywords" content="portfolio rénovation, résultats énergétiques, témoignages clients, avant après rénovation, économies énergie" />
      </Helmet>
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-accent mb-6">
                <Icon name="Award" size={16} />
                <span>847 projets réalisés avec succès</span>
              </div>
              
              <h1 className="font-headline text-4xl lg:text-6xl text-text-primary mb-6">
                Portfolio &
                <span className="text-primary block">Résultats</span>
              </h1>
              
              <p className="text-text-secondary font-body text-lg lg:text-xl max-w-3xl mx-auto mb-8">
                Découvrez nos transformations réussies et l'impact concret de nos rénovations sur le confort, 
                l'efficacité énergétique et la satisfaction de nos clients
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Eye"
                  iconPosition="left"
                  iconSize={20}
                  className="hover-scale font-cta"
                >
                  Explorer nos réalisations
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="BarChart3"
                  iconPosition="left"
                  iconSize={20}
                  className="hover-scale font-cta"
                >
                  Voir les performances
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 left-10 opacity-10">
            <Icon name="Home" size={64} className="text-primary" />
          </div>
          <div className="absolute bottom-20 right-10 opacity-10">
            <Icon name="TrendingUp" size={48} className="text-success" />
          </div>
        </section>

        {/* Results Dashboard */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ResultsDashboard />
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-headline text-3xl lg:text-4xl text-text-primary mb-4">
                Nos Réalisations
              </h2>
              <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
                Explorez notre portfolio de transformations réussies, classées par type de projet et région
              </p>
            </div>

            {/* Filter Bar */}
            <div className="mb-8">
              <FilterBar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <Icon name="Grid3X3" size={20} className="text-text-secondary" />
                <span className="text-text-secondary font-body">
                  {isLoading ? 'Chargement...' : `${filteredProjects?.length} projet${filteredProjects?.length > 1 ? 's' : ''} trouvé${filteredProjects?.length > 1 ? 's' : ''}`}
                </span>
              </div>
              
              {filteredProjects?.length > projectsPerPage && (
                <div className="text-text-secondary text-sm">
                  Page {currentPage} sur {totalPages}
                </div>
              )}
            </div>

            {/* Projects Grid */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)]?.map((_, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-subtle animate-pulse">
                    <div className="h-64 bg-muted rounded-t-xl"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                      <div className="h-3 bg-muted rounded w-full"></div>
                      <div className="h-3 bg-muted rounded w-2/3"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-8 bg-muted rounded"></div>
                        <div className="h-8 bg-muted rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProjects?.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-text-secondary" />
                </div>
                <h3 className="font-cta text-xl text-text-primary mb-3">
                  Aucun projet trouvé
                </h3>
                <p className="text-text-secondary font-body mb-6">
                  Essayez de modifier vos critères de recherche pour voir plus de résultats
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  iconName="RotateCcw"
                  iconPosition="left"
                  iconSize={16}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentProjects?.map((project) => (
                    <ProjectCard
                      key={project?.id}
                      project={project}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center space-x-2 mt-12">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      iconName="ChevronLeft"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Précédent
                    </Button>
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(totalPages)]?.map((_, index) => {
                        const page = index + 1;
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              onClick={() => handlePageChange(page)}
                              className={`w-10 h-10 rounded-lg font-accent transition-premium ${
                                currentPage === page
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-white text-text-primary hover:bg-muted border border-border'
                              }`}
                            >
                              {page}
                            </button>
                          );
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return (
                            <span key={page} className="text-text-secondary">
                              ...
                            </span>
                          );
                        }
                        return null;
                      })}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      iconName="ChevronRight"
                      iconPosition="right"
                      iconSize={16}
                    >
                      Suivant
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Neighborhood Transformations */}
        <NeighborhoodSection />

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl shadow-rose p-8 lg:p-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Sparkles" size={32} className="text-primary" />
              </div>
              
              <h2 className="font-headline text-3xl text-text-primary mb-4">
                Votre Projet de Rénovation
              </h2>
              
              <p className="text-text-secondary font-body text-lg mb-8">
                Inspiré par nos réalisations ? Discutons de votre projet et créons ensemble 
                la transformation de vos rêves avec la garantie RénoVision Pro
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  iconSize={20}
                  className="hover-scale font-cta"
                >
                  Démarrer mon projet
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calculator"
                  iconPosition="left"
                  iconSize={20}
                  className="hover-scale font-cta"
                >
                  Estimer mon budget
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-8 mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-headline text-primary">96%</div>
                  <div className="text-sm text-text-secondary">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-headline text-primary">15 ans</div>
                  <div className="text-sm text-text-secondary">Garantie</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-headline text-primary">847</div>
                  <div className="text-sm text-text-secondary">Projets</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default PortfolioResults;