import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swords, Heart, UtensilsCrossed } from 'lucide-react';

interface Gift {
  id: string;
  icon: React.ReactNode;
  title: string;
  emoji: string;
  description: string;
  revealContent: React.ReactNode;
}

const gifts: Gift[] = [
  {
    id: 'fight',
    icon: <Swords className="w-8 h-8" />,
    title: 'A Cute Fight',
    emoji: '😤💕',
    description: 'For when you want some drama',
    revealContent: (
      <div className="text-center">
        <p className="text-6xl mb-4">😤👊💕</p>
        <h3 className="font-romantic text-3xl text-foreground mb-4">Fine! Let's Fight!</h3>
        <p className="font-body text-lg text-muted-foreground mb-4">
          But only about who loves whom more... 💕
        </p>
        <p className="font-romantic text-2xl text-primary">
          (Spoiler: I win because I love you the most! 🏆)
        </p>
      </div>
    ),
  },
  {
    id: 'message',
    icon: <Heart className="w-8 h-8" />,
    title: 'Sweet Message',
    emoji: '💌',
    description: 'Words from my heart',
    revealContent: (
      <div className="text-center">
        <p className="text-6xl mb-4">💌✨💕</p>
        <h3 className="font-romantic text-3xl text-foreground mb-4">My Dearest Anshu Jii</h3>
        <p className="font-body text-lg text-muted-foreground mb-4 leading-relaxed max-w-md mx-auto">
          Every moment with you feels like a beautiful dream I never want to wake up from. 
          Your smile lights up my entire world, and your love makes me the luckiest person alive. 
          Thank you for being you! 💖
        </p>
        <p className="font-romantic text-2xl text-primary">
          Forever Yours 🥰
        </p>
      </div>
    ),
  },
  {
    id: 'food',
    icon: <UtensilsCrossed className="w-8 h-8" />,
    title: 'Yummy Food',
    emoji: '🍕🍰',
    description: 'Because food = love',
    revealContent: (
      <div className="text-center">
        <p className="text-6xl mb-4">🍕🍔🍰🧁🍫</p>
        <h3 className="font-romantic text-3xl text-foreground mb-4">Food Date Voucher!</h3>
        <p className="font-body text-lg text-muted-foreground mb-4">
          This coupon entitles you to ONE food date where I'll treat you to whatever your heart (and tummy) desires! 🍽️
        </p>
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 max-w-xs mx-auto shadow-soft">
          <p className="font-romantic text-xl text-primary">🎟️ VALID FOREVER 🎟️</p>
          <p className="font-body text-sm text-muted-foreground mt-2">No expiry date because my love for you never expires! 💕</p>
        </div>
      </div>
    ),
  },
];

const GiftSection = () => {
  const [selectedGift, setSelectedGift] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleGiftClick = (giftId: string) => {
    setSelectedGift(giftId);
    setRevealed(true);
  };

  const handleBack = () => {
    setRevealed(false);
    setSelectedGift(null);
  };

  const selectedGiftData = gifts.find((g) => g.id === selectedGift);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        {!revealed ? (
          <>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-6xl mb-6"
            >
              🎁✨
            </motion.div>

            <h2 className="font-romantic text-4xl md:text-5xl text-foreground mb-4">
              Pick Your Gift! 🎀
            </h2>

            <p className="font-body text-xl text-muted-foreground mb-12">
              Choose wisely... or not! All gifts come with love 💕
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {gifts.map((gift, index) => (
                <motion.button
                  key={gift.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleGiftClick(gift.id)}
                  className="
                    bg-card/80 backdrop-blur-sm
                    border-2 border-primary/20 hover:border-primary/50
                    rounded-3xl p-8
                    shadow-soft hover:shadow-romantic
                    transition-all duration-300
                    group cursor-pointer
                  "
                >
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300 flex justify-center mb-4">
                    {gift.icon}
                  </div>
                  <p className="text-3xl mb-3">{gift.emoji}</p>
                  <h3 className="font-romantic text-2xl text-foreground mb-2">{gift.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{gift.description}</p>
                </motion.button>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic"
          >
            {selectedGiftData?.revealContent}

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={handleBack}
              className="
                mt-8 font-body text-muted-foreground 
                hover:text-primary transition-colors
                underline underline-offset-4
              "
            >
              ← Pick another gift
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default GiftSection;
