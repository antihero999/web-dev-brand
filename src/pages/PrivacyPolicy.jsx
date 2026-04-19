import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Introduction",
      content: "Rexforge is committed to protecting your privacy. This policy explains how we collect, use, and protect your information when you use our website or contact us about our services."
    },
    {
      title: "2. Information We Collect",
      content: "Information you provide: name, phone number, email address, and project details submitted through our contact and enquiry forms. Automatically collected: basic browser/device information for site performance."
    },
    {
      title: "3. How We Use Your Information",
      content: "To respond to your enquiries and service requests. To deliver training course registration and follow-up. To improve our website and services. We do NOT sell, rent, or share your data with third parties for marketing purposes."
    },
    {
      title: "4. Data Storage & Security",
      content: "Form submissions are stored securely in our database. We take reasonable precautions to protect your data from unauthorized access."
    },
    {
      title: "5. Third-Party Services",
      content: "We use WhatsApp (Meta) as a communication channel. Any conversations you initiate via WhatsApp are subject to Meta's own privacy policy."
    },
    {
      title: "6. Your Rights",
      content: "You may request that we delete your personal data at any time by emailing georex642@gmail.com."
    },
    {
      title: "7. Cookies",
      content: "Our website may use basic cookies to improve your browsing experience. We do not use tracking or advertising cookies."
    },
    {
      title: "8. Contact Us",
      content: "For privacy-related questions, email georex642@gmail.com or send a WhatsApp message to 07065356471."
    },
    {
      title: "9. Changes to This Policy",
      content: "We may update this policy from time to time. The \"Last Updated\" date at the top will reflect any changes."
    }
  ];

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 relative overflow-hidden">
      <Helmet>
        <title>Privacy Policy | Rexforge</title>
        <meta name="description" content="Read the Rexforge privacy policy. We are committed to protecting your personal data." />
        <meta property="og:title" content="Privacy Policy | Rexforge" />
        <meta property="og:url" content="https://rexforge.com/privacy-policy" />
        <meta name="author" content="Rexforge" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rexforge.com/privacy-policy" />
      </Helmet>
      {/* Warm cream background blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-violet/5 rounded-full blur-[100px] pointer-events-none" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-navy/70 font-mono text-xs rounded-full mb-6 uppercase tracking-widest font-bold">
            Last Updated: June 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-syne font-extrabold text-navy tracking-tight">
            Privacy Policy
          </h1>
        </motion.div>

        {/* Editorial Content */}
        <div className="max-w-[760px] mx-auto bg-[#fafaf8] p-8 md:p-14 rounded-3xl shadow-soft border border-borderLight text-[#1a1a2e]">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h2 className="text-2xl font-syne font-bold text-navy mb-4 pl-4 border-l-4 border-orange">
                  {section.title}
                </h2>
                <p className="font-jakarta text-[#1a1a2e]/80 leading-relaxed text-[15px] md:text-base">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
