import { useState, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';

const funnyMessages = [
  "Nice try 😜",
  "Not today 😏",
  "Your heart says YES ❤️",
  "Nope! 🙈",
  "Wrong button! 💕",
  "Are you sure about that? 😂",
  "I don't think so! 🌹",
  "Try the other one! 💝",
  "Oops! Too slow! 😋",
  "Love always wins! 💖",
];

interface DodgingNoButtonProps {
  disabled?: boolean;
}

const DodgingNoButton = ({ disabled }: DodgingNoButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState<string | null>(null);
  const [dodgeCount, setDodgeCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const dodge = useCallback(() => {
    if (disabled) return;

    const container = containerRef.current;
    const button = buttonRef.current;
    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    // Calculate maximum movement range
    const maxX = containerRect.width - buttonRect.width;
    const maxY = 150; // Allow some vertical movement

    // Random new position
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setPosition({ x: newX, y: newY });
    setDodgeCount((prev) => prev + 1);

    // Show funny message
    const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    setMessage(randomMessage);

    // Hide message after a delay
    setTimeout(() => setMessage(null), 1500);
  }, [disabled]);

  return (
    <div ref={containerRef} className="relative inline-block" style={{ minWidth: '150px', minHeight: '80px' }}>
      <Button
        ref={buttonRef}
        variant="outline"
        size="lg"
        className={`
          relative transition-all duration-200 ease-out
          border-2 border-muted-foreground/30 
          hover:border-muted-foreground/50
          bg-card text-muted-foreground
          font-body font-semibold text-lg
          px-8 py-6
          ${dodgeCount > 0 ? 'animate-wiggle' : ''}
        `}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        onMouseEnter={dodge}
        onTouchStart={dodge}
        onClick={(e) => {
          e.preventDefault();
          dodge();
        }}
        disabled={disabled}
      >
        NO 😅
      </Button>
      
      {message && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 
                     bg-card/95 backdrop-blur-sm text-foreground 
                     px-4 py-2 rounded-full shadow-romantic
                     animate-fade-in-up font-body font-medium
                     whitespace-nowrap z-10"
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default DodgingNoButton;
