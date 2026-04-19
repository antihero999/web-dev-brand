import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 relative overflow-hidden">
      <Helmet>
        <title>Web Development Blog | Insights & Tips | Rexforge</title>
        <meta name="description" content="Tips, tutorials, and insights on web development, design, and building a digital presence in Nigeria — from the Rexforge team." />
        <meta name="keywords" content="web development blog Nigeria, coding tips Nigeria, website tips Nigerian business" />
        <meta property="og:title" content="Insights & Ideas from the Rexforge Team" />
        <meta property="og:description" content="Web development tips, tutorials, and business insights for Nigerian developers and entrepreneurs." />
        <meta property="og:url" content="https://rexforge.com/blog" />
        <meta name="author" content="Rexforge" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rexforge.com/blog" />
      </Helmet>
      {/* Background blobs matching the brand style */}
      <div className="absolute top-[5%] left-[-10%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-green/5 rounded-full blur-[100px] pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20 relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="text-center bg-[#f0ede8] rounded-[3rem] p-12 md:p-20 mb-20 shadow-soft border border-borderLight relative overflow-hidden"
        >
          {/* Subtle abstract blob within hero */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/40 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <h1 className="font-syne font-extrabold text-navy tracking-tight mb-6" style={{ fontSize: 'clamp(24px, 4vw, 48px)' }}>
              Insights & Ideas.
            </h1>
            <p className="text-lg md:text-xl font-jakarta text-navy/70 max-w-2xl mx-auto leading-relaxed">
              Tips, tutorials, and thoughts on web development, design, and building a digital presence in Nigeria.
            </p>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post, i) => (
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
                {/* Abstract shape within the image banner */}
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
              
              {/* Invisible clickable overlay over the whole card */}
              <Link to={`/blog/${post.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">Read fully about {post.title}</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;
