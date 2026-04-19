import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, MessageSquare, Clock, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' }); // 'success' | 'error' | 'loading'

  const serviceOptions = [
    { group: "Website Packages", options: ["Starter Package - ₦80,000", "Professional Package - ₦200,000", "Enterprise Package - ₦450,000+"] },
    { group: "Developer Training", options: ["Beginner Bootcamp - ₦25,000", "React Mastery - ₦50,000", "Full Stack Program - ₦90,000"] },
    { group: "A La Carte / Other", options: ["Website Redesign", "Speed Optimization", "Monthly Maintenance", "Other Inquiry"] }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Redirecting to WhatsApp...' });
    
    // Simulate slight loading for UX delay before opening tab
    setTimeout(() => {
      const encodedName = encodeURIComponent(formData.fullName);
      const encodedEmail = encodeURIComponent(formData.email);
      const encodedPhone = encodeURIComponent(formData.phone);
      const encodedService = encodeURIComponent(formData.service || "General Enquiry");
      const encodedMessage = encodeURIComponent(formData.message || "No additional message.");
      
      const whatsappText = `Name: ${encodedName}%0AEmail: ${encodedEmail}%0APhone: ${encodedPhone}%0AService: ${encodedService}%0AMessage: ${encodedMessage}`;
      const whatsappUrl = `https://wa.me/2347065356471?text=${whatsappText}`;
      
      window.open(whatsappUrl, '_blank');
      
      setStatus({ type: 'success', message: "Thanks! We'll be in touch within 2 hours." });
      setFormData({ fullName: '', phone: '', email: '', service: '', message: '' });
      
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }, 600);
  };

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 relative overflow-hidden">
      <Helmet>
        <title>Contact Rexforge | Get a Free Quote Today</title>
        <meta name="description" content="Ready to build your website? Contact Rexforge via WhatsApp, email, or our enquiry form. Based in Anambra State, Nigeria. We respond within 2 hours." />
        <meta name="keywords" content="contact Rexforge, hire web developer Nigeria, get website quote Nigeria, WhatsApp web developer Anambra" />
        <meta property="og:title" content="Let's Build Something Great | Contact Rexforge" />
        <meta property="og:description" content="Reach out via WhatsApp or email. We respond within 2 hours. Based in Anambra State, Nigeria." />
        <meta property="og:url" content="https://rexforge.com/contact" />
        <meta name="author" content="Rexforge" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rexforge.com/contact" />
      </Helmet>
      
      {/* Background blobs */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[100px] pointer-events-none blob" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-violet/5 rounded-full blur-[100px] pointer-events-none blob" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-syne font-extrabold text-navy mb-6 tracking-tight">Let's Build <br className="hidden md:block"/> Something Great.</h1>
          <p className="text-xl font-jakarta text-navy/70 max-w-2xl mx-auto">
            Ready to bring your vision to life? Choose a package, enroll in a course, or just say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-card rounded-[40px] shadow-soft border border-borderLight overflow-hidden">
          
          {/* Left Column - Contact Info */}
          <div className="col-span-1 lg:col-span-2 bg-navy p-10 md:p-12 text-white relative flex flex-col justify-between">
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tr from-orange/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10 mb-12">
              <h3 className="text-3xl font-syne font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-8 font-jakarta">
                <a href="https://wa.me/2347065356471" target="_blank" rel="noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-orange transition-colors">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white/90">WhatsApp</h4>
                    <p className="text-white/60 text-sm mt-1">07065356471</p>
                  </div>
                </a>

                <a href="mailto:georex642@gmail.com" className="flex items-center group">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6 group-hover:bg-violet transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white/90">Email</h4>
                    <p className="text-white/60 text-sm mt-1">georex642@gmail.com</p>
                  </div>
                </a>



                <div className="flex items-center group cursor-default">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-6">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white/90">Response Time</h4>
                    <p className="text-white/60 text-sm mt-1">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <p className="font-syne font-bold text-orange text-xl tracking-wide">Rexforge.</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="col-span-1 lg:col-span-3 p-10 md:p-12 relative">
            <h3 className="text-3xl font-syne font-bold text-navy mb-8">Send an Enquiry</h3>
            
            {status.type === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="bg-green/10 border border-green text-green font-bold px-6 py-4 rounded-2xl mb-8 flex items-center"
              >
                <CheckCircle className="mr-3" size={20} />
                {status.message}
              </motion.div>
            )}

            {status.type === 'error' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-500 text-red-600 font-bold px-6 py-4 rounded-2xl mb-8"
              >
                {status.message}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-jakarta text-sm font-bold text-navy/80 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-borderLight rounded-xl px-4 py-3 font-jakarta text-navy focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-jakarta text-sm font-bold text-navy/80 mb-2">Phone / WhatsApp *</label>
                  <input 
                    type="text" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-borderLight rounded-xl px-4 py-3 font-jakarta text-navy focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-jakarta text-sm font-bold text-navy/80 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-borderLight rounded-xl px-4 py-3 font-jakarta text-navy focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
                />
              </div>

              <div>
                <label className="block font-jakarta text-sm font-bold text-navy/80 mb-2">Service / Interest *</label>
                <select 
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-borderLight rounded-xl px-4 py-3 font-jakarta text-navy focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors"
                >
                  <option value="" disabled>Select an option</option>
                  {serviceOptions.map((group, idx) => (
                    <optgroup key={idx} label={group.group}>
                      {group.options.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-jakarta text-sm font-bold text-navy/80 mb-2">Tell us about your project {formData.service && serviceOptions[1].options.includes(formData.service) ? '(Optional)' : '*'}</label>
                <textarea 
                  name="message"
                  required={!(formData.service && serviceOptions[1].options.includes(formData.service))}
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-borderLight rounded-xl px-4 py-3 font-jakarta text-navy focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status.type === 'loading'}
                className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all shadow-glow ${status.type === 'loading' ? 'bg-navy/70 cursor-not-allowed' : 'bg-orange hover:bg-orange/90 hover:-translate-y-1'}`}
              >
                {status.type === 'loading' ? 'Sending...' : 'Submit Request'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
