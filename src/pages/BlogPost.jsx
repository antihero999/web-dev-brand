import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent relative">
        <div className="text-center">
          <h1 className="text-4xl font-syne font-bold text-navy mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-orange font-bold font-jakarta hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 relative overflow-hidden">
      <Helmet>
        <title>{post.title} | Rexforge Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | Rexforge Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://rexforge.com/blog/${post.slug}`} />
        <meta name="author" content="Rexforge" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://rexforge.com/blog/${post.slug}`} />
      </Helmet>
      {/* Background blobs matching the brand style */}
      <div className="absolute top-[5%] right-[-10%] w-[500px] h-[500px] bg-violet/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[760px] mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link to="/blog" className="inline-flex items-center text-navy/60 font-jakarta text-sm font-bold hover:text-orange transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Blog
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#f0ede8] rounded-3xl p-8 md:p-14 mb-16 shadow-soft relative overflow-hidden"
        >
          {/* Subtle blob inside hero */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${post.gradient} rounded-full blur-3xl opacity-30`} />
          
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 bg-white text-orange font-mono text-xs font-bold rounded-full uppercase tracking-wider mb-8 shadow-sm">
              {post.category}
            </span>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-syne font-extrabold text-navy tracking-tight leading-tight mb-8">
              {post.title}
            </h1>
            
            <div className="flex items-center font-jakarta text-navy/60 text-sm font-semibold uppercase tracking-wide">
              <span className="text-orange">{post.author}</span>
              <span className="mx-3">•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </motion.div>

        {/* Post Content */}
        <article className="font-jakarta text-[#1a1a2e]/85 leading-relaxed text-[17px] space-y-8 mb-24">
          {post.content.map((block, idx) => {
            if (block.type === 'heading') {
              return (
                <motion.h2 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-syne font-bold text-navy pl-4 border-l-4 border-orange mt-12 mb-6"
                >
                  {block.text}
                </motion.h2>
              );
            }
            return (
              <motion.p 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {block.text}
              </motion.p>
            );
          })}
        </article>

        {/* CTA Band */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-orange/20 to-transparent pointer-events-none" />
          
          <h3 className="text-3xl md:text-4xl font-syne font-bold text-white mb-6 relative z-10">
            Ready to build your own website?
          </h3>
          <p className="font-jakarta text-white/70 mb-10 max-w-lg mx-auto relative z-10">
            Let's turn your digital vision into a reality. Contact the Rexforge team today to discuss your next big project.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 font-bold text-navy bg-white rounded-full hover:bg-orange hover:text-white transition-all shadow-glow hover:-translate-y-1 relative z-10"
          >
            Start a Project
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default BlogPost;
