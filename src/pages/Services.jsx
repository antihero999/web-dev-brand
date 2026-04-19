import { motion } from 'framer-motion';
import { Check, Zap, RotateCw, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 relative overflow-hidden">
      <Helmet>
        <title>Web Development Services & Pricing | Rexforge</title>
        <meta name="description" content="Explore Rexforge web development packages starting from ₦80,000. Starter, Professional, and Enterprise solutions for Nigerian businesses." />
        <meta name="keywords" content="website design price Nigeria, web development cost Nigeria, affordable web developer Anambra, professional website Nigeria" />
        <meta property="og:title" content="Web Development Services & Pricing | Rexforge" />
        <meta property="og:description" content="Website packages from ₦80,000. Professional web development for Nigerian businesses." />
        <meta property="og:url" content="https://rexforge.com/services" />
        <meta name="author" content="Rexforge" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rexforge.com/services" />
      </Helmet>
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/5 rounded-full blur-[100px] pointer-events-none blob" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet/5 rounded-full blur-[120px] pointer-events-none blob" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-syne font-extrabold text-navy mb-6 tracking-tight" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>What We Offer.</h1>
          <p className="text-xl font-jakarta text-navy/70 max-w-2xl mx-auto">
            Strategic digital solutions designed to elevate your brand. Choose a package that fits your goals.
          </p>
        </motion.div>

        {/* Pricing Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* Starter */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card p-10 rounded-3xl shadow-soft border border-borderLight flex flex-col h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="font-syne font-bold text-navy mb-2" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>Starter</h3>
            <div className="text-orange font-syne font-extrabold mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>₦80,000</div>
            <p className="font-jakarta text-navy/60 mb-8 text-sm">Perfect for small businesses establishing their first digital footprint.</p>
            
            <ul className="space-y-4 font-jakarta text-navy/80 mb-10 flex-grow">
              {['Up to 3 pages', 'Mobile responsive', 'WhatsApp / Contact button', 'Basic SEO setup', '1 month support', '5–7 working days timeline'].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-green mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/contact" className="w-full py-4 rounded-full border-2 border-navy text-navy font-bold text-center hover:bg-navy hover:text-white transition-colors">
              Get Started
            </Link>
          </motion.div>

          {/* Professional (Popular) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-navy p-10 rounded-3xl shadow-soft relative flex flex-col h-full transform scale-100 md:scale-105 z-10 border border-orange/20 shadow-glow"
          >
            <div className="absolute top-0 right-10 transform -translate-y-1/2">
              <span className="bg-gradient-to-r from-orange to-violet text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                Most Popular
              </span>
            </div>
            
            <h3 className="font-syne font-bold text-white mb-2" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>Professional</h3>
            <div className="text-white font-syne font-extrabold mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>₦200,000</div>
            <p className="font-jakarta text-white/70 mb-8 text-sm">Comprehensive digital presence for growing businesses and serious brands.</p>
            
            <ul className="space-y-4 font-jakarta text-white/90 mb-10 flex-grow">
              {['Up to 8 pages', 'Custom UI/UX design & animations', 'Appointment booking system', 'WhatsApp integration', 'Full SEO standard', 'Blog/Gallery inclusion', '3 months support', '10–14 working days timeline'].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-orange mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/contact" className="w-full py-4 rounded-full bg-orange text-white font-bold text-center hover:bg-white hover:text-navy transition-colors">
              Choose Professional
            </Link>
          </motion.div>

          {/* Enterprise */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card p-10 rounded-3xl shadow-soft border border-borderLight flex flex-col h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="font-syne font-bold text-navy mb-2" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>Enterprise</h3>
            <div className="text-orange font-syne font-extrabold mb-2" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)' }}>₦450,000<span className="text-2xl">+</span></div>
            <p className="font-jakarta text-navy/60 mb-8 text-sm">Complex logic, custom backend, and highly scalable solutions.</p>
            
            <ul className="space-y-4 font-jakarta text-navy/80 mb-10 flex-grow">
              {['Full-stack web application', 'User login & auth system', 'Database architecture', 'Admin dashboard', 'Payment gateway integration', 'REST API setup', '6 months support', 'Timeline by discussion'].map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-violet mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/contact" className="w-full py-4 rounded-full border-2 border-navy text-navy font-bold text-center hover:bg-navy hover:text-white transition-colors">
              Let's Discuss
            </Link>
          </motion.div>

        </div>

        {/* Additional Services */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-borderLight pt-20"
        >
          <div className="text-center mb-16">
            <h2 className="font-syne font-extrabold text-navy mb-4" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>A La Carte Services.</h2>
            <p className="font-jakarta text-navy/60">Targeted improvements for your existing website.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-secondary p-8 rounded-2xl flex items-center group hover:bg-orange transition-colors duration-300">
              <div className="bg-white p-3 rounded-full mr-5 text-orange group-hover:text-orange">
                <RotateCw size={24} />
              </div>
              <div>
                <h4 className="font-syne font-bold text-navy group-hover:text-white text-xl">Website Redesign</h4>
                <p className="font-jakarta text-navy/70 group-hover:text-white/90 text-sm mt-1">from ₦60,000</p>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-2xl flex items-center group hover:bg-green transition-colors duration-300">
              <div className="bg-white p-3 rounded-full mr-5 text-green group-hover:text-green">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-syne font-bold text-navy group-hover:text-white text-xl">Speed Optimization</h4>
                <p className="font-jakarta text-navy/70 group-hover:text-white/90 text-sm mt-1">from ₦30,000</p>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-2xl flex items-center group hover:bg-violet transition-colors duration-300">
              <div className="bg-white p-3 rounded-full mr-5 text-violet group-hover:text-violet">
                <Settings size={24} />
              </div>
              <div>
                <h4 className="font-syne font-bold text-navy group-hover:text-white text-xl">Mo. Maintenance</h4>
                <p className="font-jakarta text-navy/70 group-hover:text-white/90 text-sm mt-1">₦15,000 / month</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ─── FAQ Section ─── */}
      <FAQSection />
    </div>
  );
};

// ─── FAQ Data & Component ──────────────────────────────────────────────────

const faqs = [
  {
    q: "Do you work with clients outside Anambra State?",
    a: "Absolutely. We work with clients across Nigeria and internationally. All communication and project management happens seamlessly via WhatsApp, email, and video calls — location is never a barrier.",
  },
  {
    q: "How much does a website cost?",
    a: "Our packages start from ₦80,000 for a Starter website up to ₦450,000+ for a full enterprise web application. The right price depends on your specific needs, features, and timeline. Reach out and we will give you an exact quote at no obligation.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. We require a 50% deposit before work begins and the remaining 50% is due before final delivery. For larger enterprise projects we can discuss a structured payment plan that works for both parties.",
  },
  {
    q: "How long does it take to build my website?",
    a: "The Starter package is delivered in 5–7 working days. The Professional package takes 10–14 working days. Enterprise and web application timelines are discussed per project based on scope and complexity.",
  },
  {
    q: "Do I need to provide anything before you start?",
    a: "Yes — we will need your logo, brand colors if you have them, any text content for the site, and a clear idea of what you want the site to do. We will guide you through exactly what is needed during the briefing.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Every single project we deliver is fully responsive and tested on mobile, tablet, and desktop. Mobile-first design is a core part of our process, not an afterthought.",
  },
  {
    q: "What happens after my website is delivered?",
    a: "Every package includes free post-delivery support ranging from 1 to 6 months. During this period we fix any bugs, answer questions, and make minor adjustments at no extra charge.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We offer website redesign services from ₦60,000. Whether your site looks outdated, loads slowly, or just does not represent your brand well anymore — we can rebuild it into something you are proud of.",
  },
];

import { useState as useFaqState, useRef as useFaqRef, useEffect as useFaqEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { gsap as faqGsap } from 'gsap';

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  const panelRef = useFaqRef(null);

  useFaqEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    if (isOpen) {
      faqGsap.fromTo(panel, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.38, ease: 'power2.out' });
    } else {
      faqGsap.to(panel, { height: 0, opacity: 0, duration: 0.28, ease: 'power2.in' });
    }
  }, [isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 16px rgba(26,26,46,0.06)',
        borderLeft: isOpen ? '3px solid #e85d26' : '3px solid transparent',
        transition: 'border-color 0.25s',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}
      >
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: isOpen ? '#e85d26' : '#1a1a2e', transition: 'color 0.25s', lineHeight: 1.4 }}>
          {item.q}
        </span>
        <span style={{ color: '#e85d26', flexShrink: 0 }}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <div ref={panelRef} style={{ height: 0, overflow: 'hidden', opacity: 0 }}>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: '#6b7280', lineHeight: 1.7, padding: '0 24px 20px' }}>
          {item.a}
        </p>
      </div>
    </motion.div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useFaqState(null);
  return (
    <section style={{ background: '#fafaf8', padding: '80px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontFamily: "'JetBrains Mono', monospace", color: '#e85d26', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(28px, 4vw, 40px)', color: '#1a1a2e', marginBottom: 12 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#6b7280', fontSize: 16 }}
          >
            Everything you want to know before hiring us.
          </motion.p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
