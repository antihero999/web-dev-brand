import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, PenSquare, Code, Rocket } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const skills = [
    "React.js", "JavaScript", "HTML5/CSS3", "Python", "Node.js",
    "Next.js", "REST APIs", "UI/UX Design", "SQL", "Git/GitHub",
  ];

  const valueProps = [
    { num: "01", title: "Custom Every Time", desc: "No templates. We build bespoke digital products tailored exclusively to your brand." },
    { num: "02", title: "Performance First", desc: "Fast, optimized, and Google-friendly architectures that convert users." },
    { num: "03", title: "Clear Communication", desc: "You are always in the loop. Transparent processes from wireframe to launch." },
    { num: "04", title: "Results Focused", desc: "We don't just write code — we care deeply about your business outcomes." },
  ];

  const process = [
    { icon: <Lightbulb size={28} />, step: "01", title: "Discovery", desc: "We start by understanding your goals, brand, and target audience before writing a single line of code." },
    { icon: <PenSquare size={28} />, step: "02", title: "Design", desc: "Wireframes and high-fidelity mockups are crafted to ensure you love the look before development starts." },
    { icon: <Code size={28} />, step: "03", title: "Develop", desc: "Your site is built with clean, performant code using modern technologies and best practices." },
    { icon: <Rocket size={28} />, step: "04", title: "Launch & Support", desc: "After thorough testing, we deploy your product and provide ongoing support to keep things running smoothly." },
  ];

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 relative overflow-hidden">
      <Helmet>
        <title>About Rexforge | Premium Tech Brand in Anambra State, Nigeria</title>
        <meta name="description" content="Rexforge is a premium tech brand based in Anambra State, Nigeria. We build websites, web apps, and train the next generation of Nigerian developers." />
        <meta name="keywords" content="about Rexforge, tech brand Nigeria, web developer Anambra State, Rexforge Nigeria" />
        <meta property="og:title" content="The Tech Brand Behind Your Digital Growth | Rexforge" />
        <meta property="og:description" content="Rexforge — a premium tech brand building digital products and training developers in Anambra State, Nigeria." />
        <meta property="og:url" content="https://rexforge.com/about" />
        <meta name="author" content="Rexforge" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rexforge.com/about" />
      </Helmet>

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px] pointer-events-none blob" />
      <div className="absolute top-[50%] left-[-10%] w-[350px] h-[350px] bg-violet/5 rounded-full blur-[100px] pointer-events-none blob" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">

        {/* ─── Hero split section ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">

          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange/20 to-violet/20 rounded-t-full transform -rotate-6 scale-105 z-0" />

            <div className="relative z-10 aspect-[4/5] bg-secondary rounded-[40px] rounded-tl-[80px] rounded-br-[120px] overflow-hidden border border-borderLight shadow-soft flex flex-col items-center p-8 lg:p-12">
              <div className="w-full flex-grow flex items-center justify-center mb-6">
                <img src="/logo.png" alt="Rexforge Logo" className="w-full h-full max-h-[75%] object-contain transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="text-center mt-auto">
                <h3 className="font-syne font-bold text-navy text-2xl">Our Team</h3>
                <p className="font-jakarta text-navy/60 text-sm mt-1">Design & Engineering</p>
                <p className="font-jakarta text-navy/50 text-xs mt-0.5">Rexforge</p>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 md:-right-8 bottom-12 bg-white p-4 rounded-2xl shadow-xl z-20 border border-borderLight"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green/10 rounded-full flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <p className="text-xs font-jakarta text-navy/60">Serving Clients</p>
                  <p className="font-syne font-bold text-navy text-sm leading-tight mt-0.5">Worldwide</p>
                </div>
              </div>
            </motion.div>

            {/* Second floating badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -left-4 md:-left-8 top-20 bg-white p-3 rounded-2xl shadow-xl z-20 border border-borderLight"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange/10 rounded-full flex items-center justify-center">
                  <span className="text-sm">⭐</span>
                </div>
                <div>
                  <p className="font-syne font-bold text-navy text-xs">5-Star Delivery</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-mono text-orange text-xs uppercase tracking-widest mb-4">About Us</p>
            <h1 className="font-syne font-extrabold text-navy leading-[1.1] mb-8" style={{ fontSize: 'clamp(22px, 3.5vw, 48px)' }}>
              The Innovation Studio Behind Your Digital Growth.
            </h1>

            <div className="font-jakarta text-navy/70 text-lg space-y-5 mb-10 leading-relaxed">
              <p>
                Rexforge is a premium tech brand.
              </p>
              <p>
                We build high-performance websites, web applications, and digital products that help businesses scale. Beyond development, we're deeply committed to training the next generation of Nigerian developers through our structured, practical programs.
              </p>
            </div>

            {/* Skill badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (i * 0.05) }}
                  className="px-4 py-2 bg-white text-navy font-mono text-sm rounded-full border border-borderLight shadow-sm hover:border-orange hover:text-orange transition-colors cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-bold text-white bg-orange rounded-full hover:bg-orange/90 transition-all shadow-glow hover:-translate-y-1"
            >
              Start a Project
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* ─── Process Section ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <p className="font-mono text-orange text-sm uppercase tracking-widest mb-4">How We Work</p>
            <h2 className="font-syne font-extrabold text-navy" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>Our Process.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative group"
              >
                {/* Connector line (desktop) */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-px bg-borderLight z-0" />
                )}

                <div className="bg-card p-8 rounded-3xl shadow-soft border border-borderLight hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative z-10">
                  <div className="h-14 w-14 bg-orange/10 text-orange rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="font-mono text-orange/50 text-xs mb-2">{item.step}</div>
                  <h3 className="font-syne font-bold text-navy mb-3" style={{ fontSize: 'clamp(18px, 3vw, 24px)' }}>{item.title}</h3>
                  <p className="font-jakarta text-navy/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Why Georex Section ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy rounded-[40px] p-10 md:p-16 lg:p-24 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-orange/10 via-transparent to-violet/10 rotate-45 pointer-events-none" />

          <div className="text-center mb-16 relative z-10">
            <h2 className="font-syne font-extrabold text-white mb-4" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>Why Rexforge?</h2>
            <p className="font-jakarta text-white/60">The principles that drive our engineering.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            {valueProps.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="text-5xl font-syne font-extrabold text-white/10 group-hover:text-orange/40 transition-colors mb-4">{prop.num}</div>
                <h3 className="font-syne font-bold text-white mb-3" style={{ fontSize: 'clamp(20px, 3.5vw, 28px)' }}>{prop.title}</h3>
                <p className="font-jakarta text-white/70 leading-relaxed text-sm md:text-base">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
