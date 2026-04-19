import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "Industrial Business Website",
      location: "Anambra State",
      tags: ["React", "CSS3", "JS"],
      image: "/port-1.png",
      externalLink: "https://giumunnawelding.vercel.app",
      overlay: "bg-orange"
    },
    {
      title: "E-Commerce Web App",
      location: "Lagos",
      tags: ["React", "Python", "REST API"],
      image: "/ecommerce.png",
      overlay: "bg-violet"
    },
    {
      title: "Professional Portfolio Site",
      location: "Abuja",
      tags: ["HTML5", "CSS3", "JavaScript"],
      image: "/portfolio.png",
      overlay: "bg-green"
    },
    {
      title: "Restaurant Booking System",
      location: "Port Harcourt",
      tags: ["React", "Node.js", "SQL"],
      image: "/restaurant.png",
      overlay: "bg-navy"
    }
  ];

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 relative">
      <Helmet>
        <title>Our Work & Projects | Rexforge</title>
        <meta name="description" content="See the websites and web applications built by Rexforge for businesses across Nigeria — from Anambra to Lagos, Abuja, and Port Harcourt." />
        <meta name="keywords" content="web developer portfolio Nigeria, website examples Nigeria, Rexforge projects" />
        <meta property="og:title" content="Work We Are Proud Of | Rexforge Portfolio" />
        <meta property="og:description" content="Premium websites and web apps built for Nigerian businesses across Anambra, Lagos, Abuja, and beyond." />
        <meta property="og:url" content="https://rexforge.com/portfolio" />
        <meta name="author" content="Rexforge" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rexforge.com/portfolio" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-syne font-extrabold text-navy mb-6 tracking-tight">Work We're <br className="hidden md:block"/> Proud Of.</h1>
          <p className="text-xl font-jakarta text-navy/70 max-w-2xl mx-auto">
            A selection of recent projects built with precision, performance, and purpose.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-card shadow-soft"
            >
              {/* Visual Display */}
              <div className="relative h-80 w-full bg-transparent flex items-center justify-center overflow-hidden">
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                
                {/* Animated Overlay Overlay */}
                <div className={`absolute inset-0 ${project.overlay} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white text-navy font-bold rounded-full w-16 h-16 flex items-center justify-center shadow-2xl">
                      <ArrowUpRight size={28} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Content underneath */}
              <div className="p-8 border-t border-borderLight relative z-20 bg-card">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h4 className="text-2xl font-syne font-bold text-navy mb-2 md:mb-0 group-hover:text-orange transition-colors duration-300">
                    {project.title}
                  </h4>
                </div>
                
                <div className="flex gap-2 mt-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-mono px-3 py-1 rounded-full border border-borderLight text-navy/70">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Conditional External Link Overlay */}
              {project.externalLink && (
                <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-30">
                  <span className="sr-only">Visit {project.title} securely</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link to="/contact" className="inline-flex items-center justify-center px-10 py-5 font-bold text-navy border-2 border-navy bg-transparent rounded-full hover:bg-navy hover:text-white transition-all shadow-soft hover:-translate-y-1">
            Let's build your next project
            <ArrowUpRight className="ml-2" size={20} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Portfolio;
