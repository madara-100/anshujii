import { useState } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import Sparkles from '@/components/Sparkles';
import Confetti from '@/components/Confetti';
import HeroSection from '@/components/HeroSection';
import ProposalSection from '@/components/ProposalSection';
import CelebrationSection from '@/components/CelebrationSection';
import DateInvitation from '@/components/DateInvitation';
import GiftSection from '@/components/GiftSection';

const Index = () => {
  const [accepted, setAccepted] = useState(false);
  
  const herName = "Anshu Jii";

  const handleYesClick = () => {
    setAccepted(true);
    setTimeout(() => {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-romantic-gradient relative overflow-x-hidden">
      <FloatingHearts />
      <Sparkles />
      
      {accepted && <Confetti />}
      
      <main className="relative z-10">
        <HeroSection name={herName} />
        
        <ProposalSection 
          onYesClick={handleYesClick} 
          accepted={accepted} 
        />
        
        {accepted && (
          <>
            <CelebrationSection />
            <GiftSection />
            <DateInvitation />
          </>
        )}
      </main>
      
      <footer className="relative z-10 text-center py-8 text-muted-foreground font-body">
        <p className="text-sm">Made with 💕 just for you, Anshu Jii</p>
      </footer>
    </div>
  );
};

export default Index;
