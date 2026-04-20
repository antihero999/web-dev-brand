import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Code, Monitor, Server, Database, PenTool, Layout, ArrowRight, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import HeroConstellation from '../components/HeroConstellation';
import { gsap } from 'gsap';

const InfiniteMarquee = () => {
  const tags = [
    "React.js", "HTML5", "CSS3", "JavaScript", "Python",
    "Node.js", "Next.js", "REST APIs", "UI/UX Design", "SQL", "Git/GitHub",
    "React.js", "HTML5", "CSS3", "JavaScript", "Python",
    "Node.js", "Next.js", "REST APIs", "UI/UX Design", "SQL", "Git/GitHub",
  ];

  return (
    <div className="w-full bg-navy py-6 overflow-hidden flex whitespace-nowrap select-none relative z-10">
      <div
        style={{ animation: 'marquee-scroll 40s linear infinite', display: 'flex', width: 'max-content' }}
      >
        {tags.map((tag, i) => (
          <div key={i} className="flex items-center text-white/90 font-mono text-lg px-8">
            <span className="text-orange mr-4">•</span>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
function ActivityPill() {
  const dotRef = useRef(null);
  useEffect(() => {
    if (!dotRef.current) return;
    gsap.to(dotRef.current, { opacity: 0.3, duration: 1.2, repeat: -1, yoyo: true, ease: 'power1.inOut' });
  }, []);
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(26,26,46,0.08)',
        borderRadius: 999,
        padding: '10px 18px',
        maxWidth: 280,
        boxShadow: '0 2px 16px rgba(26,26,46,0.07)',
      }}
    >
      <span ref={dotRef} style={{ width: 8, height: 8, borderRadius: '50%', background: '#2d6a4f', display: 'inline-block', flexShrink: 0 }} />
      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: '#1a1a2e', whiteSpace: 'nowrap' }}>
        Currently accepting new projects
      </span>
    </div>
  );
}


const clientNeeds = [
  { icon: "📋", title: "We Start With a Clear Brief", content: "Before any design or development begins, we take time to fully understand your business, your goals, and your audience. A detailed brief means no surprises and no wasted time. You get exactly what you asked for." },
  { icon: "💰", title: "50% Deposit to Begin", content: "All projects require a 50% upfront deposit before work starts. The remaining balance is due before final delivery. This protects both parties and keeps the project moving without delays." },
  { icon: "📅", title: "Timelines Depend on You Too", content: "We deliver on time — but your timely feedback and content supply matters. Delays in sending us your logo, text, or approvals can push back the delivery date. We will always keep you informed." },
  { icon: "🔁", title: "Revisions Are Included", content: "Every package includes a set number of revision rounds so we can fine-tune the result together. Requests that fall outside the agreed scope will be quoted separately and discussed transparently before any extra work begins." },
  { icon: "📞", title: "You Are Never Left in the Dark", content: "From kickoff to delivery, you will always know what stage your project is at. We communicate clearly via WhatsApp and respond within 2 hours during working hours. No ghosting. Ever." },
  { icon: "🚀", title: "After Delivery, We've Got You", content: "Every package includes free support after delivery — ranging from 1 to 6 months depending on your plan. We make sure your site is running perfectly before we consider a project closed." }
];

const Home = () => {
  const containerRef = useRef(null);

  return (
    <div className="bg-transparent min-h-screen relative overflow-hidden" ref={containerRef}>
      <Helmet>
        <title>Rexforge — Premium Web Development & Digital Solutions | Nigeria</title>
        <meta name="description" content="Rexforge builds premium websites, web applications, and digital products for businesses across Nigeria and beyond. Based in Anambra State." />
        <meta name="keywords" content="web developer Nigeria, website design Anambra, web development Nigeria, React developer Nigeria, Rexforge" />
        <meta property="og:title" content="Rexforge — We Build Digital Products That Move People" />
        <meta property="og:description" content="Premium websites, web apps, and digital solutions for Nigerian businesses. Based in Anambra State." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rexforge.com" />
        <meta property="og:image" content="/og-image.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rexforge — Premium Web Development Nigeria" />
        <meta name="twitter:description" content="Premium websites and web apps for businesses across Nigeria." />
        <meta name="author" content="Rexforge" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rexforge.com" />
      </Helmet>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      {/* Abstract Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-orange/10 rounded-full blur-[100px] pointer-events-none blob" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-violet/10 rounded-full blur-[100px] pointer-events-none blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[60%] left-[20%] w-[60vw] h-[60vw] bg-green/5 rounded-full blur-[120px] pointer-events-none blob" style={{ animationDelay: '4s' }} />

      {/* ─── Hero Section ─── */}
      <section className="relative px-4 sm:px-8 md:px-12 lg:px-20 min-h-screen flex flex-col justify-center overflow-hidden pt-[80px] pb-[40px]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row gap-8 items-center w-full">
            {/* Constellation — TOP on mobile, RIGHT on desktop */}
            <div className="w-full h-[380px] min-h-[380px] flex-shrink-0 lg:hidden flex items-center justify-center relative z-0">
              <HeroConstellation />
            </div>

            {/* Left Column — text, buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pt-[100px] lg:pr-12 gap-6"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 border border-orange/20 text-orange font-bold font-mono text-xs rounded-full uppercase tracking-wider"
              >
                <span className="w-2 h-2 rounded-full bg-orange inline-block animate-pulse" />
                Available Worldwide
              </motion.div>

              <h1 className="font-syne font-extrabold text-navy leading-[1.1] tracking-tight" style={{ fontSize: 'clamp(28px, 5vw, 64px)' }}>
                We Build Digital Products{' '}
                <span className="text-orange">That</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-violet">
                  Move People.
                </span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl font-jakarta text-navy/70 max-w-2xl leading-relaxed">
                Rexforge crafts premium websites, web apps, and digital experiences for businesses across Nigeria and beyond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                <Link
                  to="/services"
                  className="group flex items-center justify-center px-8 py-4 font-bold text-white bg-orange rounded-full hover:bg-orange/90 transition-all shadow-glow hover:shadow-orange/50 hover:-translate-y-1"
                >
                  Explore Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/portfolio"
                  className="flex items-center justify-center px-8 py-4 font-bold text-navy bg-white border border-navy/10 rounded-full hover:border-navy/30 transition-all shadow-soft hover:-translate-y-1"
                >
                  View Our Work
                </Link>
              </div>

              {/* Activity Pill */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex justify-center lg:justify-start"
              >
                <ActivityPill />
              </motion.div>
            </motion.div>

            {/* Right Column — hidden on mobile (shown via top block), visible on desktop */}
            <div className="hidden lg:flex lg:w-1/2 items-center justify-center h-full lg:min-h-[500px] relative z-0">
              <HeroConstellation />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tech Marquee ─── */}
      <InfiniteMarquee />


      {/* ─── Services Preview Grid ─── */}
      <section className="py-32 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-orange text-sm uppercase tracking-widest mb-4"
            >
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-syne font-extrabold text-navy mb-6"
              style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
            >
              Our Expertise.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl font-jakarta text-navy/60 max-w-2xl"
            >
              Comprehensive web solutions tailored for scaling businesses and modern brands.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Monitor size={32} />, title: "Website Development", desc: "Corporate sites, portfolios, and landing pages that convert.", tags: ["React", "HTML5", "CSS3"] },
              { icon: <Layout size={32} />, title: "UI/UX Design", desc: "Premium interfaces designed specifically for your brand identity.", tags: ["Figma", "Design Systems"] },
              { icon: <Server size={32} />, title: "Full-Stack Web Apps", desc: "Complex scalable applications tailored to your business rules.", tags: ["Node.js", "Python", "Next.js"] },
              { icon: <Database size={32} />, title: "API Integrations", desc: "Connecting your business to payment gateways and third-party tools.", tags: ["REST API", "SQL", "MongoDB"] },
              { icon: <PenTool size={32} />, title: "Website Redesign", desc: "Transforming outdated sites into modern, high-converting platforms.", tags: ["Performance", "SEO"] },
              { icon: <Code size={32} />, title: "Programming Training", desc: "Structured learning paths to master modern web technologies.", tags: ["Mentorship", "Bootcamp"] },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-card p-10 rounded-3xl shadow-soft border border-borderLight group hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="h-16 w-16 bg-secondary text-orange rounded-2xl flex items-center justify-center mb-8 border border-orange/10 group-hover:scale-110 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-syne font-bold text-navy mb-4">{service.title}</h3>
                <p className="font-jakarta text-navy/70 mb-8 leading-relaxed">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-primary text-navy/60 font-mono text-xs rounded-lg border border-borderLight">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Link to full services */}
          <div className="mt-14 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 font-bold font-jakarta text-orange hover:underline underline-offset-4">
              See all packages & pricing
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Tools We Use ─── */}
      <section className="py-24 px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-orange text-sm uppercase tracking-widest mb-4"
          >
            Our Tech Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-syne font-extrabold text-navy mb-16"
            style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
          >
            Tools We Use.
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
            {[
              { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "hover:shadow-[0_10px_30px_-10px_#61DAFB]" },
              { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000", color: "hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" },
              { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339939", color: "hover:shadow-[0_10px_30px_-10px_#339939]" },
              { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "hover:shadow-[0_10px_30px_-10px_#06B6D4]" },
              { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", color: "hover:shadow-[0_10px_30px_-10px_#47A248]" },
              { name: "Express", icon: "https://cdn.simpleicons.org/express/000000", color: "hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]" },
              { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "hover:shadow-[0_10px_30px_-10px_rgba(247,223,30,0.6)]" },
              { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", color: "hover:shadow-[0_10px_30px_-10px_#F24E1E]" },
              { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "hover:shadow-[0_10px_30px_-10px_#3776AB]" },
              { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "hover:shadow-[0_10px_30px_-10px_#F05032]" },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`group flex flex-col items-center justify-center w-32 h-32 md:w-36 md:h-36 bg-card rounded-[2rem] shadow-soft border border-borderLight transition-all duration-300 hover:-translate-y-2 cursor-default ${tool.color}`}
              >
                <img src={tool.icon} alt={tool.name} className="w-12 h-12 md:w-14 md:h-14 mb-4 object-contain transition-transform duration-300 group-hover:scale-110" />
                <span className="font-jakarta text-sm font-bold text-navy/70 group-hover:text-navy transition-colors">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How We Work ─── */}
      <section className="py-32 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden" style={{ background: '#f0ede8' }}>
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Heading */}
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-orange text-sm uppercase tracking-widest mb-4"
            >
              Our Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-syne font-extrabold text-navy mb-6"
              style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
            >
              How We Work.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl font-jakarta text-navy/60 max-w-2xl mx-auto"
            >
              A clear, structured process from first contact to final delivery — so you always know what to expect.
            </motion.p>
          </div>

          {/* Steps */}
          <div className="relative">

            {/* Desktop horizontal connector */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
              className="hidden lg:block absolute top-[72px] left-[10%] right-[10%] h-px"
              style={{
                background: 'none',
                borderTop: '2px dashed rgba(232,93,38,0.25)',
                transformOrigin: 'left center',
                zIndex: 0,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
              {[
                {
                  step: '01', icon: '💬',
                  title: 'You Reach Out',
                  desc: 'Send us a message on WhatsApp, fill the contact form, or send an email. Tell us what you need and we will respond within 2 hours.',
                },
                {
                  step: '02', icon: '📋',
                  title: 'We Take Your Brief',
                  desc: 'We discuss your goals, audience, features, timeline, and budget. You get a clear proposal with scope, price, and delivery date — no surprises.',
                },
                {
                  step: '03', icon: '🎨',
                  title: 'Design & Build',
                  desc: 'Our team gets to work. We design and build your project from scratch — no templates. You receive progress updates throughout.',
                },
                {
                  step: '04', icon: '✅',
                  title: 'You Review & Approve',
                  desc: 'We present the completed work for your feedback. You request any revisions within the agreed scope and we refine until you are fully satisfied.',
                },
                {
                  step: '05', icon: '🚀',
                  title: 'We Launch',
                  desc: 'Your website or app goes live. We handle deployment, do final checks, and hand everything over to you with full support included in your package.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.15 }}
                  className="relative group"
                >
                  {/* Mobile vertical connector */}
                  {i < 4 && (
                    <div
                      className="lg:hidden absolute left-7 top-full h-6 w-px"
                      style={{ borderLeft: '2px dashed rgba(232,93,38,0.3)' }}
                    />
                  )}

                  <div
                    className="bg-white rounded-3xl p-7 h-full relative overflow-hidden hover:-translate-y-2 transition-all duration-300"
                    style={{ boxShadow: '0 4px 24px -4px rgba(232,93,38,0.08), 0 1px 4px rgba(26,26,46,0.06)' }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 40px -8px rgba(232,93,38,0.18), 0 2px 8px rgba(26,26,46,0.06)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px -4px rgba(232,93,38,0.08), 0 1px 4px rgba(26,26,46,0.06)'}
                  >
                    {/* Decorative number */}
                    <div
                      className="absolute -top-2 -right-1 font-syne font-extrabold text-navy select-none pointer-events-none"
                      style={{ fontSize: 'clamp(48px, 6vw, 72px)', opacity: 0.06, lineHeight: 1 }}
                    >
                      {item.step}
                    </div>

                    {/* Icon */}
                    <div className="text-3xl mb-4">{item.icon}</div>

                    {/* Step label */}
                    <p className="font-mono text-orange text-xs uppercase tracking-widest mb-2">{`Step ${item.step}`}</p>

                    {/* Title */}
                    <h3 className="font-syne font-bold text-navy text-lg mb-3 leading-snug">{item.title}</h3>

                    {/* Description */}
                    <p className="font-jakarta text-sm leading-relaxed" style={{ color: '#6b7280' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── What Our Clients Need to Know ─── */}
      <section className="py-32 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#f0ede8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-orange text-sm uppercase tracking-widest mb-4"
            >
              Our Guidelines
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-syne font-extrabold text-navy mb-6"
              style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
            >
              What Our Clients Need to Know.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl font-jakarta text-navy/60 max-w-2xl mx-auto"
            >
              Before we start building, here is everything you should expect when working with Rexforge.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientNeeds.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-8 rounded-3xl shadow-soft border border-borderLight hover:shadow-[0_20px_40px_-15px_rgba(232,93,38,0.15)] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3 className="text-xl font-syne font-bold text-navy mb-4">{card.title}</h3>
                <p className="font-jakarta text-navy/70 leading-relaxed text-sm md:text-base">{card.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Latest Insights ─── */}
      <section className="py-32 px-4 sm:px-8 md:px-12 lg:px-20 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-mono text-orange text-sm uppercase tracking-widest mb-4"
            >
              Our Blog
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-syne font-extrabold text-navy mb-6"
              style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
            >
              Latest Insights.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl font-jakarta text-navy/60 max-w-2xl mx-auto"
            >
              Thoughts, tutorials, and tips from the Rexforge team — built for Nigerian businesses and developers.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16">
            {blogPosts.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-soft border border-borderLight hover:-translate-y-3 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(232,93,38,0.15)] flex flex-col h-full cursor-pointer relative"
              >
                {/* Image Placeholder Banner */}
                <div className={`h-48 w-full bg-gradient-to-br ${post.gradient} overflow-hidden relative`}>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute top-10 left-10 w-20 h-20 bg-black/5 rounded-full blur-xl group-hover:translate-x-10 transition-transform duration-700" />
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow relative bg-white">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-orange/10 text-orange font-mono text-xs font-bold rounded-full uppercase tracking-widest group-hover:bg-orange group-hover:text-white transition-colors duration-300">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="font-syne font-bold text-navy mb-4 leading-tight group-hover:text-orange transition-colors" style={{ fontSize: 'clamp(16px, 2vw, 22px)' }}>
                    {post.title}
                  </h3>
                  
                  <p className="font-jakarta text-navy/70 leading-relaxed text-sm mb-8 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-borderLight pt-5 mt-auto">
                    <div className="font-jakarta text-xs text-navy/50 font-semibold tracking-wide uppercase">
                      {post.date} • {post.author}
                    </div>
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="flex items-center text-orange font-bold font-jakarta text-sm hover:underline underline-offset-4 pointer-events-auto"
                    >
                      Read More 
                      <ArrowUpRight size={16} className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                  <span className="sr-only">Read fully about {post.title}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/blog" className="inline-flex items-center justify-center px-10 py-5 font-bold text-orange border-2 border-orange bg-transparent rounded-full hover:bg-orange hover:text-white transition-all shadow-soft hover:-translate-y-1">
              View All Insights
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Band ─── */}
      <section className="py-24 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-br from-navy via-navy to-[#2a2a4a] text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-syne font-extrabold text-white mb-8"
            style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}
          >
            Ready to innovate?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl font-jakarta text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Let's discuss how Rexforge can help you build the digital foundation your business deserves.
          </motion.p>
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 font-bold text-navy bg-white rounded-full hover:bg-orange hover:text-white transition-all shadow-xl hover:-translate-y-1">
            Let's Talk
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
