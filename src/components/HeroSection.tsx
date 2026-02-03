import { motion } from 'framer-motion';

interface HeroSectionProps {
  name: string;
}

const HeroSection = ({ name }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
      {/* Decorative hearts */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="absolute top-20 left-10 text-4xl animate-bounce-soft"
      >
        💝
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="absolute top-32 right-16 text-3xl animate-bounce-soft"
        style={{ animationDelay: '0.5s' }}
      >
        💖
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-32 left-20 text-2xl animate-bounce-soft"
        style={{ animationDelay: '1s' }}
      >
        🌹
      </motion.div>
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="text-6xl mb-8 animate-heart-beat"
        >
          💕
        </motion.div>
        
        <h1 className="font-romantic text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
          Hey {name} <span className="inline-block animate-pulse-glow">❤️</span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-romantic text-3xl md:text-4xl text-primary mb-4"
        >
          I have something important to ask you…
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body text-xl md:text-2xl text-muted-foreground"
        >
          You make my world brighter every single day ✨
        </motion.p>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 animate-bounce-soft"
      >
        <p className="font-body text-muted-foreground text-sm mb-2">Scroll down</p>
        <div className="text-2xl">👇</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
