import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import DodgingNoButton from './DodgingNoButton';

interface ProposalSectionProps {
  onYesClick: () => void;
  accepted: boolean;
}

const ProposalSection = ({ onYesClick, accepted }: ProposalSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        {/* Decorative ring */}
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
          className="text-6xl mb-8"
        >
          💍
        </motion.div>
        
        <h2 className="font-romantic text-4xl md:text-6xl text-foreground mb-12">
          Will you be my girlfriend? 
          <span className="inline-block ml-2">🥹💕</span>
        </h2>
        
        {!accepted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8"
          >
            <Button
              size="lg"
              onClick={onYesClick}
              className="
                bg-love-gradient hover:opacity-90
                text-primary-foreground
                font-body font-bold text-xl
                px-12 py-8
                rounded-full
                shadow-romantic hover:shadow-glow
                transition-all duration-300
                transform hover:scale-105
                animate-pulse-glow
              "
            >
              YES ❤️
            </Button>
            
            <DodgingNoButton disabled={accepted} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl animate-heart-beat"
          >
            💕✨💕
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ProposalSection;
