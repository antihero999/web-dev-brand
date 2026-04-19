import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import IntroScreen from './components/IntroScreen';

// Lazy-loaded pages
const Home         = lazy(() => import('./pages/Home'));
const Services     = lazy(() => import('./pages/Services'));
const Training     = lazy(() => import('./pages/Training'));
const Portfolio    = lazy(() => import('./pages/Portfolio'));
const About        = lazy(() => import('./pages/About'));
const Contact      = lazy(() => import('./pages/Contact'));
const Blog         = lazy(() => import('./pages/Blog'));
const BlogPost     = lazy(() => import('./pages/BlogPost'));
const PrivacyPolicy  = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFound     = lazy(() => import('./pages/NotFound'));

const LoadingFallback = () => (
  <div style={{
    width: '100vw', height: '100vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: '#fafaf8',
  }}>
    <div style={{
      fontFamily: 'Syne, sans-serif',
      fontWeight: 800,
      fontSize: 24,
      color: '#e85d26',
    }}>
      Rexforge
    </div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <IntroScreen />
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-primary relative">
          <BackgroundShapes />
          <Navbar />
          <WhatsAppButton />
          <main className="flex-grow relative z-10">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/"                element={<Home />} />
                <Route path="/services"        element={<Services />} />
                <Route path="/training"        element={<Training />} />
                <Route path="/portfolio"       element={<Portfolio />} />
                <Route path="/about"           element={<About />} />
                <Route path="/contact"         element={<Contact />} />
                <Route path="/privacy-policy"  element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/blog"            element={<Blog />} />
                <Route path="/blog/:slug"      element={<BlogPost />} />
                <Route path="*"               element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <div className="relative z-10"><Footer /></div>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
