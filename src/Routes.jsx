import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import ClientDashboard from './pages/client-dashboard';
import ContactQuotePage from './pages/contact-quote';
import ProjectProcess from './pages/project-process';
import ServicesOverview from './pages/services-overview';
import PortfolioResults from './pages/portfolio-results';
import Homepage from './pages/homepage';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<ClientDashboard />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/contact-quote" element={<ContactQuotePage />} />
        <Route path="/project-process" element={<ProjectProcess />} />
        <Route path="/services-overview" element={<ServicesOverview />} />
        <Route path="/portfolio-results" element={<PortfolioResults />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
