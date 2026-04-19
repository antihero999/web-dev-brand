import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// ─── Data ───────────────────────────────────────────────────────────────────

const categories = [
  {
    label: "Web Foundations",
    subtext: "Learn the building blocks of the web from scratch",
    courses: [
      {
        title: "HTML5 Essentials",
        price: "₦25,000",
        duration: "1 week · 3 sessions",
        description: "Learn the structure of every website. Build your first webpage from scratch using proper HTML5 tags, semantic elements, and document structure.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "CSS3 & Styling Mastery",
        price: "₦25,000",
        duration: "1 week · 3 sessions",
        description: "Style beautiful web pages using CSS3. Learn colors, fonts, spacing, flexbox, grid, and how to make any design look exactly how you want it.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "Responsive Design & Layout",
        price: "₦25,000",
        duration: "1 week · 3 sessions",
        description: "Make websites that look perfect on every screen — phone, tablet, and desktop. Learn media queries, mobile-first design, and responsive layout techniques.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
    ],
    bundle: {
      title: "Web Foundations Bundle",
      price: "₦60,000",
      valueStatement: "Everything you need to go from zero to building real websites — in one structured program.",
      badge: "Best Value",
      includes: "Includes all 3 Web Foundations courses above",
    },
  },
  {
    label: "JavaScript & React",
    subtext: "Go from beginner to job-ready frontend developer",
    courses: [
      {
        title: "JavaScript Fundamentals",
        price: "₦30,000",
        duration: "2 weeks · 3 sessions per week",
        description: "Learn the programming language of the web. Variables, functions, loops, arrays, objects, and how to make websites interactive and dynamic.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "DOM Manipulation & Events",
        price: "₦25,000",
        duration: "1 week · 3 sessions",
        description: "Control every element on a webpage using JavaScript. Learn how to respond to clicks, form inputs, scrolls, and build real interactive features.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "React.js & Component Thinking",
        price: "₦40,000",
        duration: "2 weeks · 3 sessions per week",
        description: "Learn the most in-demand frontend framework. Build reusable components, manage state with hooks, and develop real-world React applications.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "APIs & Real Data Integration",
        price: "₦25,000",
        duration: "1 week · 3 sessions",
        description: "Connect your React apps to live data. Learn how to fetch from REST APIs, handle responses, and build apps that display real-time information.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
    ],
    bundle: {
      title: "JavaScript & React Bundle",
      price: "₦100,000",
      valueStatement: "The complete frontend path. From your first line of JavaScript to shipping React applications.",
      badge: "Best Seller",
      includes: "Includes all 4 JavaScript & React courses above",
    },
  },
  {
    label: "Web Applications",
    subtext: "Build full-stack applications from frontend to backend",
    courses: [
      {
        title: "Python for Web Development",
        price: "₦30,000",
        duration: "2 weeks · 3 sessions per week",
        description: "Learn Python from scratch and apply it to building web backends. Variables, functions, data structures, and writing clean server-side logic.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "Node.js & Express Backend",
        price: "₦30,000",
        duration: "2 weeks · 3 sessions per week",
        description: "Build powerful backend servers using Node.js and Express. Create routes, handle requests, and power the logic behind any web application.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "SQL & Database Design",
        price: "₦25,000",
        duration: "1 week · 3 sessions",
        description: "Design and query databases that store your application data. Learn SQL, table relationships, and how to connect a database to your web app.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "REST API Development",
        price: "₦25,000",
        duration: "1 week · 3 sessions",
        description: "Build and consume REST APIs that power modern web applications. Learn endpoints, HTTP methods, authentication, and how to structure a professional API.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "Full Stack Project Build",
        price: "₦35,000",
        duration: "2 weeks · 3 sessions per week",
        description: "Put it all together. Build a complete full-stack web application from scratch — frontend, backend, database, and deployment — with 1-on-1 mentorship throughout.",
        includes: ["Certificate of completion", "1-on-1 mentorship", "WhatsApp study group", "Freelancing kickstart guide"],
      },
    ],
    bundle: {
      title: "Web Applications Bundle",
      price: "₦120,000",
      valueStatement: "Full-stack mastery. Build complete web applications end to end — frontend, backend, database, and deployment.",
      badge: "Most Complete",
      includes: "Includes all 5 Web Applications courses above",
    },
  },
  {
    label: "Game Development",
    subtext: "Learn to build real games using Unity Engine and C#",
    courses: [
      {
        title: "C# Programming Fundamentals",
        price: "₦25,000",
        duration: "2 weeks · 3 sessions per week",
        description: "Before building games, learn to code. C# is the language used in Unity. This course covers variables, conditionals, loops, functions, and object-oriented programming from zero.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "Unity Engine Basics",
        price: "₦25,000",
        duration: "2 weeks · 3 sessions per week",
        description: "Get comfortable inside the Unity Editor. Learn the interface, GameObjects, components, scenes, prefabs, physics, and how Unity projects are structured.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "2D Game Development",
        price: "₦35,000",
        duration: "2 weeks · 3 sessions per week",
        description: "Build your first complete 2D game in Unity. Learn sprite animation, 2D physics, tilemaps, player movement, enemy AI, scoring systems, and game UI.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "3D Game Development",
        price: "₦45,000",
        duration: "3 weeks · 3 sessions per week",
        description: "Step into 3D game development. Learn 3D physics, character controllers, cameras, lighting, 3D environments, and build a complete playable 3D game.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
      {
        title: "Game Polish & Publishing",
        price: "₦25,000",
        duration: "1 week · 3 sessions",
        description: "Finish and publish your game. Learn UI/UX for games, sound integration, performance optimization, and how to export and publish your game to PC or mobile.",
        includes: ["Certificate of completion", "WhatsApp study group"],
      },
    ],
    bundle: {
      title: "Full Game Dev Bundle",
      price: "₦130,000",
      valueStatement: "The complete game development journey. From writing your first line of C# to publishing your first game.",
      badge: "Complete Path",
      includes: "Includes all 5 Game Development courses above",
    },
  },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-3xl border border-[#e8e4df] flex flex-col h-full hover:-translate-y-2 transition-all duration-300"
      style={{ boxShadow: '0 4px 24px -4px rgba(232,93,38,0.08), 0 1px 4px 0 rgba(26,26,46,0.06)' }}
    >
      <div className="p-8 flex flex-col flex-grow">
        {/* Duration pill */}
        <span
          className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full border border-[#e8e4df] text-navy/60 text-xs mb-5"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <Clock size={11} />
          {course.duration}
        </span>

        <h3 className="font-syne font-bold text-navy mb-2 leading-snug" style={{ fontSize: 'clamp(16px, 2.5vw, 22px)' }}>{course.title}</h3>

        {/* Price */}
        <div className="text-3xl font-syne font-extrabold mb-4" style={{ color: '#e85d26' }}>
          {course.price}
        </div>

        <p className="font-jakarta text-navy/70 text-sm leading-relaxed mb-6 flex-grow">{course.description}</p>

        {/* Includes */}
        <ul className="space-y-2 mb-8">
          {course.includes.map((item, i) => (
            <li key={i} className="flex items-center gap-2 font-jakarta text-xs text-navy/60">
              <CheckCircle size={14} style={{ color: '#2d6a4f', flexShrink: 0 }} />
              {item}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="w-full py-3 rounded-full border-2 border-[#e85d26] text-[#e85d26] font-bold font-jakarta text-sm text-center hover:bg-[#e85d26] hover:text-white transition-all duration-300"
        >
          Register Now
        </Link>
      </div>
    </motion.div>
  );
}

function BundleCard({ bundle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-3xl border-l-4 flex flex-col h-full hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
      style={{
        background: '#f0ede8',
        borderLeftColor: '#e85d26',
        boxShadow: '0 4px 32px -4px rgba(232,93,38,0.13), 0 1px 4px 0 rgba(26,26,46,0.06)',
      }}
    >
      {/* Badge */}
      <div className="absolute top-6 right-6">
        <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: '#e85d26' }}>
          {bundle.badge}
        </span>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-syne font-bold text-navy mb-3 pr-24 leading-snug" style={{ fontSize: 'clamp(16px, 2.5vw, 22px)' }}>{bundle.title}</h3>

        {/* Price + value statement */}
        <div className="mb-3">
          <span className="text-3xl font-syne font-extrabold" style={{ color: '#e85d26' }}>{bundle.price}</span>
        </div>
        <p className="font-jakarta text-sm leading-relaxed mb-5 text-navy/60">
          {bundle.valueStatement}
        </p>

        <p className="font-jakarta text-navy/70 text-sm mb-8 flex-grow">{bundle.includes}</p>

        <Link
          to="/contact"
          className="w-full py-3.5 rounded-full font-bold font-jakarta text-sm text-center text-white transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: '#e85d26', boxShadow: '0 4px 16px -4px rgba(232,93,38,0.4)' }}
          onMouseEnter={e => e.currentTarget.style.background = '#1a1a2e'}
          onMouseLeave={e => e.currentTarget.style.background = '#e85d26'}
        >
          Register for Bundle
        </Link>
      </div>
    </motion.div>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center gap-6 my-20">
      <div className="flex-grow h-px" style={{ background: 'linear-gradient(to right, transparent, #e8e4df)' }} />
      <div className="w-2 h-2 rounded-full" style={{ background: '#e85d26' }} />
      <div className="flex-grow h-px" style={{ background: 'linear-gradient(to left, transparent, #e8e4df)' }} />
    </div>
  );
}

import { useRef as useCertRef, useEffect as useCertEffect } from 'react';
import { gsap as certGsap } from 'gsap';

function CertificateSection() {
  const certRef = useCertRef(null);
  const sectionRef = useCertRef(null);

  useCertEffect(() => {
    const cert = certRef.current;
    if (!cert) return;

    // Scroll entrance: scale + fade in
    certGsap.fromTo(
      cert,
      { opacity: 0, scale: 0.92 },
      {
        opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: cert, start: 'top 85%' },
      }
    );

    // Continuous float animation
    certGsap.to(cert, {
      y: -8, duration: 3, repeat: -1, yoyo: true, ease: 'power1.inOut',
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: '#f0ede8', padding: 'clamp(40px, 10vw, 80px) 16px' }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontFamily: "'JetBrains Mono', monospace", color: '#e85d26', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}
        >
          Certification
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(24px, 4vw, 48px)', color: '#1a1a2e', marginBottom: 12 }}
        >
          Your Certificate Awaits
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#6b7280', fontSize: 16, maxWidth: 520, margin: '0 auto 48px' }}
        >
          Every course and bundle comes with an official Rexforge certificate of completion — recognized proof of your new skills.
        </motion.p>

        {/* Certificate Mockup */}
        <div
          ref={certRef}
          style={{
            maxWidth: 600, margin: '0 auto',
            background: 'radial-gradient(ellipse at center, #fffdf9 0%, #faf6f0 100%)',
            border: '2px solid rgba(232,93,38,0.3)',
            borderRadius: 8,
            padding: 48,
            boxShadow: '0 20px 60px rgba(26,26,46,0.12)',
            position: 'relative',
            opacity: 0,
          }}
        >
          {/* Inner decorative border */}
          <div style={{
            position: 'absolute', inset: 8,
            border: '1px solid rgba(232,93,38,0.15)',
            borderRadius: 4,
            pointerEvents: 'none',
          }} />

          {/* Corner accents */}
          {[
            { top: 12, left: 12, borderTop: '3px solid #e85d26', borderLeft: '3px solid #e85d26' },
            { top: 12, right: 12, borderTop: '3px solid #e85d26', borderRight: '3px solid #e85d26' },
            { bottom: 12, left: 12, borderBottom: '3px solid #e85d26', borderLeft: '3px solid #e85d26' },
            { bottom: 12, right: 12, borderBottom: '3px solid #e85d26', borderRight: '3px solid #e85d26' },
          ].map((style, i) => (
            <div key={i} style={{ position: 'absolute', width: 18, height: 18, pointerEvents: 'none', ...style }} />
          ))}

          {/* Certificate content */}
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            {/* Brand */}
            <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: '#e85d26', marginBottom: 12 }}>
              Rexforge
            </p>

            {/* Divider */}
            <div style={{ height: 1, background: 'rgba(232,93,38,0.2)', marginBottom: 20 }} />

            {/* Main title */}
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(18px, 2.5vw, 28px)', color: '#1a1a2e', marginBottom: 16, lineHeight: 1.2 }}>
              Certificate of Completion
            </h3>

            {/* This certifies that */}
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontStyle: 'italic', color: '#6b7280', fontSize: 14, marginBottom: 12 }}>
              This certifies that
            </p>

            {/* Student name */}
            <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 'clamp(18px, 3vw, 24px)', color: '#1a1a2e', marginBottom: 6 }}>
              [Student Name]
            </p>
            <div style={{ height: 2, background: 'linear-gradient(to right, transparent, #e85d26, transparent)', maxWidth: 200, margin: '0 auto 16px' }} />

            {/* Has successfully completed */}
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#6b7280', fontSize: 13, marginBottom: 8 }}>
              has successfully completed
            </p>

            {/* Course name */}
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: '#2d6a4f', fontSize: 15, marginBottom: 32 }}>
              [Course Name]
            </p>

            {/* Signature row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginTop: 8, flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'left', flex: 1, minWidth: 120 }}>
                <div style={{ height: 1, background: '#1a1a2e', marginBottom: 6, opacity: 0.3 }} />
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Rexforge Academy
                </p>
              </div>
              <div style={{ textAlign: 'right', flex: 1, minWidth: 120 }}>
                <div style={{ height: 1, background: '#1a1a2e', marginBottom: 6, opacity: 0.3 }} />
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Date of Completion
                </p>
              </div>
            </div>

            {/* Bottom wordmark */}
            <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, color: 'rgba(26,26,46,0.3)', marginTop: 28, letterSpacing: '0.05em' }}>
              REXFORGE
            </p>
          </div>
        </div>

        {/* Note */}
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: '#6b7280', fontStyle: 'italic', marginTop: 24 }}>
          Certificates are issued digitally upon successful completion of any Rexforge course or bundle.
        </p>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

const Training = () => {
  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 relative overflow-hidden">
      <Helmet>
        <title>Web Development & Game Dev Training | Rexforge Academy</title>
        <meta name="description" content="Learn web development and game development in Anambra State, Nigeria. Structured courses in HTML, CSS, JavaScript, React, Python, Unity, and more." />
        <meta name="keywords" content="web development training Nigeria, coding bootcamp Anambra, learn web development Nigeria, React training Nigeria, Unity game dev Nigeria" />
        <meta property="og:title" content="Learn to Code in Anambra State | Rexforge Academy" />
        <meta property="og:description" content="Practical web development and game dev training in Anambra, Nigeria. From beginner to job-ready developer." />
        <meta property="og:url" content="https://rexforge.com/training" />
        <meta name="author" content="Rexforge" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rexforge.com/training" />
      </Helmet>
      {/* Background blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-green/5 rounded-full blur-[100px] pointer-events-none blob" />
      <div className="absolute top-[60%] right-[-5%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px] pointer-events-none blob" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">

        {/* ─── Page Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-orange/10 text-orange font-bold font-syne rounded-full text-sm mb-6 uppercase tracking-wider">
            Web Development Training
          </div>
          <h1 className="font-syne font-extrabold text-navy mb-6 tracking-tight" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>Learn to Build <br className="hidden md:block"/> the Web.</h1>
          <p className="text-xl font-jakarta text-navy/70 max-w-2xl mx-auto">
            Master the modern web with hands-on, practical training led by our expert team. From absolute beginner to full-stack engineer — we'll help you launch your developer career.
          </p>
        </motion.div>

        {/* ─── Categories ─── */}
        {categories.map((category, catIndex) => (
          <div key={category.label}>

            {/* Category Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p className="font-mono text-orange text-xs uppercase tracking-widest mb-1">{`0${catIndex + 1}`}</p>
              <h2 className="font-syne font-extrabold text-navy mb-2" style={{ fontSize: 'clamp(20px, 3vw, 28px)' }}>{category.label}</h2>
              <p className="font-jakarta text-navy/60">{category.subtext}</p>
            </motion.div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {category.courses.map((course, i) => (
                <CourseCard key={course.title} course={course} index={i} />
              ))}
              {/* Bundle card always last in grid */}
              <BundleCard bundle={category.bundle} index={category.courses.length} />
            </div>

            {/* Divider between categories (not after last) */}
            {catIndex < categories.length - 1 && <SectionDivider />}
          </div>
        ))}

      </div>

      {/* ─── Certificate Section ─── */}
      <CertificateSection />

      {/* ─── CTA Band ─── */}
      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-orange text-center relative overflow-hidden mt-24">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-left mb-8 md:mb-0">
            <h2 className="font-syne font-extrabold text-white mb-2" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>Not sure where to start?</h2>
            <p className="text-white/90 font-jakarta">Let's discuss your current skill level and goals.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 font-bold text-orange bg-white rounded-full hover:bg-navy hover:text-white transition-all shadow-lg hover:-translate-y-1">
            Book a Free Assessment
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Training;
