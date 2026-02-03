import { useState } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import Sparkles from '@/components/Sparkles';
import Confetti from '@/components/Confetti';
import HeroSection from '@/components/HeroSection';
import ProposalSection from '@/components/ProposalSection';
import CelebrationSection from '@/components/CelebrationSection';
import DateInvitation from '@/components/DateInvitation';

const Index = () => {
  const [accepted, setAccepted] = useState(false);
  
  // Change this to your girlfriend's name! 💕
  const herName = "My Love";

  const handleYesClick = () => {
    setAccepted(true);
    // Scroll to celebration section
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-romantic-gradient relative overflow-x-hidden">
      {/* Background effects */}
      <FloatingHearts />
      <Sparkles />
      
      {/* Confetti when accepted */}
      {accepted && <Confetti />}
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection name={herName} />
        
        <ProposalSection 
          onYesClick={handleYesClick} 
          accepted={accepted} 
        />
        
        {accepted && (
          <>
            <CelebrationSection />
            <DateInvitation />
          </>
        )}
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-muted-foreground font-body">
        <p className="text-sm">Made with 💕 just for you</p>
      </footer>
    </div>
  );
};

export default Index;
