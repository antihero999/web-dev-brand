import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowUpRight, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 xl:gap-12 mb-16">

          {/* Brand Section */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Rexforge" className="w-12 h-12 object-contain aspect-square rounded-lg bg-white/10 p-1" />
              <span className="text-3xl font-syne font-extrabold text-white tracking-tight">Rexforge<span className="text-orange">.</span></span>
            </Link>
            <p className="font-jakarta text-white/70 leading-relaxed mb-8">
              African creativity meets global standards. We build digital experiences that inspire, engage, and transform businesses across the continent and beyond.
            </p>
            {/* CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange text-white font-bold font-jakarta text-sm rounded-full hover:bg-white hover:text-navy transition-all"
            >
              Work With Us
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syne text-lg text-white font-bold mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-4 font-jakarta font-medium text-white/60 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Developer Training', to: '/training' },
                { label: 'Our Work', to: '/portfolio' },
                { label: 'Blog', to: '/blog' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="font-syne text-lg text-white font-bold mb-6 tracking-tight">Capabilities</h4>
            <ul className="space-y-4 font-jakarta font-medium text-white/60 text-sm">
              {[
                'Website Development',
                'Full-Stack Web Apps',
                'UI/UX Design',
                'API Integrations',
                'Website Redesign',
                'Coding Education',
                'Game Development',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-syne text-lg text-white font-bold mb-6 tracking-tight">Legal</h4>
            <ul className="space-y-4 font-jakarta font-medium text-white/60 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:text-orange transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-syne text-lg text-white font-bold mb-6 tracking-tight">Get in Touch</h4>
            <ul className="space-y-5 font-jakarta font-medium text-sm">
              <li className="flex items-center">
                <MessageSquare className="text-orange mr-3" size={20} />
                <a 
                  href="https://wa.me/2347065356471" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  07065356471
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-orange mr-3" size={20} />
                <a 
                  href="mailto:georex642@gmail.com" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  georex642@gmail.com
                </a>
              </li>
            </ul>

            {/* Response time badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-green/10 border border-green/20 text-green rounded-full text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              Responds within 24 hours
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-jakarta text-white/40">
          <p>© {currentYear} Rexforge. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
