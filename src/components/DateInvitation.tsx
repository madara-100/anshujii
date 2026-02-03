import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const DateInvitation = () => {
  const [dateAccepted, setDateAccepted] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        {!dateAccepted ? (
          <>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-6xl mb-8"
            >
              🌹✨
            </motion.div>
            
            <h2 className="font-romantic text-4xl md:text-5xl text-foreground mb-8">
              So… can I take you on our first date?
            </h2>
            
            <p className="font-body text-xl text-muted-foreground mb-10">
              I have something special planned for us 💕
            </p>
            
            <Button
              size="lg"
              onClick={() => setDateAccepted(true)}
              className="
                bg-love-gradient hover:opacity-90
                text-primary-foreground
                font-body font-bold text-xl
                px-10 py-7
                rounded-full
                shadow-romantic hover:shadow-glow
                transition-all duration-300
                transform hover:scale-105
              "
            >
              Yes, let's go! 🥰
            </Button>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-7xl mb-8"
            >
              🥰💕🎉
            </motion.div>
            
            <h2 className="font-romantic text-4xl md:text-6xl text-foreground mb-6">
              It's a date! 💖
            </h2>
            
            <p className="font-body text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed">
              I can't wait to spend time with you!<br />
              Get ready for something magical ✨
            </p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-romantic text-3xl text-primary"
            >
              See you soon, my love 💕
            </motion.p>
            
            {/* Final decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-4xl flex justify-center gap-2"
            >
              <span className="animate-heart-beat">💕</span>
              <span className="animate-bounce-soft">🌸</span>
              <span className="animate-heart-beat" style={{ animationDelay: '0.3s' }}>💕</span>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default DateInvitation;
