import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Accueil', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services-overview', icon: 'Wrench' },
    { name: 'Processus', path: '/project-process', icon: 'GitBranch' },
    { name: 'Portfolio', path: '/portfolio-results', icon: 'Image' },
    { name: 'Contact', path: '/contact-quote', icon: 'MessageCircle' }
  ];

  const secondaryItems = [
    { name: 'Dashboard Client', path: '/client-dashboard', icon: 'LayoutDashboard' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-premium ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-premium shadow-subtle border-b border-border' 
          : 'bg-white/90 backdrop-blur-premium'
      }`}>
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavigation('/homepage')}
                className="flex items-center space-x-3 hover-scale transition-premium"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-rose">
                  <Icon name="Hammer" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-headline text-xl text-text-primary">
                    RénoVision Pro
                  </h1>
                  <p className="text-xs text-text-secondary font-accent">
                    Vos travaux, en toute sérénité
                  </p>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-accent transition-premium hover-scale ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-rose'
                      : 'text-text-primary hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.name}</span>
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => handleNavigation('/client-dashboard')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-accent transition-premium hover-scale ${
                  isActivePath('/client-dashboard')
                    ? 'bg-secondary text-secondary-foreground' :'text-text-secondary hover:text-primary hover:bg-muted'
                }`}
              >
                <Icon name="LayoutDashboard" size={16} />
                <span>Dashboard</span>
              </button>
              
              <Button
                variant="default"
                size="sm"
                iconName="Phone"
                iconPosition="left"
                iconSize={16}
                onClick={() => handleNavigation('/contact-quote')}
                className="font-cta hover-scale"
              >
                Devis Gratuit
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-text-primary hover:bg-muted transition-premium"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-subtle">
            <div className="px-4 py-3 space-y-1">
              {navigationItems?.map((item) => (
                <button
                  key={item?.path}
                  onClick={() => handleNavigation(item?.path)}
                  className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg text-left font-accent transition-premium ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-rose'
                      : 'text-text-primary hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </button>
              ))}
              
              <div className="pt-3 border-t border-border mt-3">
                <button
                  onClick={() => handleNavigation('/client-dashboard')}
                  className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg text-left font-accent transition-premium ${
                    isActivePath('/client-dashboard')
                      ? 'bg-secondary text-secondary-foreground' :'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name="LayoutDashboard" size={20} />
                  <span>Dashboard Client</span>
                </button>
                
                <div className="mt-3">
                  <Button
                    variant="default"
                    size="default"
                    iconName="Phone"
                    iconPosition="left"
                    iconSize={18}
                    onClick={() => handleNavigation('/contact-quote')}
                    className="w-full font-cta"
                    fullWidth
                  >
                    Devis Gratuit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-subtle p-4">
        <Button
          variant="default"
          size="lg"
          iconName="Phone"
          iconPosition="left"
          iconSize={20}
          onClick={() => handleNavigation('/contact-quote')}
          className="w-full font-cta hover-scale"
          fullWidth
        >
          Devis Gratuit
        </Button>
      </div>
      {/* Header Spacer */}
      <div className="h-16"></div>
      {/* Mobile CTA Spacer */}
      <div className="lg:hidden h-20"></div>
    </>
  );
};

export default Header;