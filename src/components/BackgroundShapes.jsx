import { motion } from 'framer-motion';

const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div 
        animate={{ y: [0, -60, 0], x: [0, 40, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-32 h-32 border-[12px] border-orange/15 rounded-full"
      />
      <motion.div 
        animate={{ y: [0, -50, 0], x: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[25%] right-[15%] w-20 h-20 bg-violet/10 rounded-full"
      />
      <motion.div 
        animate={{ y: [0, 80, 0], x: [0, -50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[25%] left-[15%] w-40 h-40 border-[8px] border-green/15 rounded-full"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[35%] right-[10%] w-16 h-16 bg-orange/15 rounded-full"
      />
      <motion.div 
        animate={{ y: [0, -70, 0], x: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[50%] left-[45%] w-56 h-56 border-[2px] border-navy/5 rounded-full"
      />
      
      {/* Additional solid opaque shapes with soft shadows to give 'floating' solid feel */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-[75%] left-[30%] w-8 h-8 border-4 border-navy/10 rounded-full shadow-soft"
      />
      <motion.div 
        animate={{ y: [0, 50, 0], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute top-[15%] right-[35%] w-12 h-12 bg-orange/20 rounded-full shadow-soft"
      />
    </div>
  );
};

export default BackgroundShapes;
