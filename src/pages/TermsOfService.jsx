import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Introduction",
      content: "By engaging Rexforge for any service or accessing this website, you agree to these Terms of Service. Please read them carefully."
    },
    {
      title: "2. Services Offered",
      content: "Rexforge provides web development, web application development, digital solutions, and coding education (Rexforge Academy) to clients in Nigeria and beyond."
    },
    {
      title: "3. Project Engagement & Payments",
      content: "All projects begin with a formal brief and agreed scope of work. A deposit (typically 50%) is required before work begins on any project. Final delivery is made upon receipt of the remaining balance. Prices are in Nigerian Naira (₦) and are subject to change per project scope."
    },
    {
      title: "4. Revisions & Scope Changes",
      content: "Each package includes a defined number of revision rounds. Requests outside the agreed scope may incur additional charges, which will be communicated transparently before work proceeds."
    },
    {
      title: "5. Timelines & Delivery",
      content: "Estimated timelines are provided per package and are contingent on the client providing required content, feedback, and approvals in a timely manner. Delays caused by the client may extend the delivery date."
    },
    {
      title: "6. Intellectual Property",
      content: "Upon final payment, the client owns the completed website/product. Rexforge retains the right to showcase the project in its portfolio unless the client requests otherwise in writing. Any custom code, design assets, or materials created by Rexforge remain the intellectual property of Rexforge until full payment is received."
    },
    {
      title: "7. Training & Academy",
      content: "Course fees are non-refundable once training has begun. Certificates of completion are issued only to students who complete the full program requirements."
    },
    {
      title: "8. Limitation of Liability",
      content: "Rexforge is not liable for losses arising from third-party services, hosting providers, or client-side errors after project handover."
    },
    {
      title: "9. Governing Law",
      content: "These terms are governed by the laws of the Federal Republic of Nigeria."
    },
    {
      title: "10. Contact Us",
      content: "For questions about these terms, email georex642@gmail.com or WhatsApp 07065356471."
    }
  ];

  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 relative overflow-hidden">
      <Helmet>
        <title>Terms of Service | Rexforge</title>
        <meta name="description" content="Read the Rexforge terms of service. Understand your rights and obligations when working with us." />
        <meta property="og:title" content="Terms of Service | Rexforge" />
        <meta property="og:url" content="https://rexforge.com/terms-of-service" />
        <meta name="author" content="Rexforge" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rexforge.com/terms-of-service" />
      </Helmet>
      {/* Warm cream background blobs */}
      <div className="absolute top-[15%] right-[-5%] w-[450px] h-[450px] bg-orange/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-green/5 rounded-full blur-[120px] pointer-events-none" style={{ animationDelay: '3s' }} />

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
            Terms of Service
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

export default TermsOfService;
