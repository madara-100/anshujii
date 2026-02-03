import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  rotation: number;
  type: 'heart' | 'star' | 'circle';
}

const colors = [
  'hsl(340, 82%, 65%)',
  'hsl(280, 60%, 80%)',
  'hsl(45, 100%, 60%)',
  'hsl(340, 100%, 75%)',
  'hsl(0, 100%, 100%)',
];

const types: ConfettiPiece['type'][] = ['heart', 'star', 'circle'];

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }
    setPieces(newPieces);
  }, []);

  const renderPiece = (type: ConfettiPiece['type']) => {
    switch (type) {
      case 'heart':
        return '💕';
      case 'star':
        return '⭐';
      case 'circle':
        return '●';
      default:
        return '💕';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-0 animate-float-up"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            color: piece.type === 'circle' ? piece.color : undefined,
            transform: `rotate(${piece.rotation}deg)`,
            fontSize: piece.type === 'circle' ? '12px' : '20px',
          }}
        >
          {renderPiece(piece.type)}
        </div>
      ))}
    </div>
  );
};

export default Confetti;
