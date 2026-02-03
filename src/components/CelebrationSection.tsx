import { motion } from 'framer-motion';

const CelebrationSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        {/* Celebration emojis */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-6xl mb-8 flex justify-center gap-4"
        >
          <span className="animate-bounce-soft">🎉</span>
          <span className="animate-heart-beat">💕</span>
          <span className="animate-bounce-soft" style={{ animationDelay: '0.2s' }}>🎉</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="font-romantic text-5xl md:text-7xl text-foreground mb-6"
        >
          Yayyy!! ❤️
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-romantic text-3xl md:text-4xl text-primary mb-4"
        >
          I knew it, Anshu Jii! 🥰
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-body text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
        >
          Thank you for choosing me.<br />
          I promise to make you smile every day 💖
        </motion.p>
        
        {/* Decorative hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center gap-3 text-3xl"
        >
          {['💕', '🌹', '💝', '✨', '💖'].map((emoji, index) => (
            <motion.span
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="animate-bounce-soft"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CelebrationSection;
