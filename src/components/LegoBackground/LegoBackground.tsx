import React, { useEffect, useState } from 'react';
import { LegoBrick } from './LegoBrick';

interface BrickState {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  speed: number;
}

const COLORS = ['#f59e0b', '#ef4444', '#3b82f6', '#10b981', '#8b5cf6'];

export const LegoBackground: React.FC = () => {
  const [bricks, setBricks] = useState<BrickState[]>([]);

  useEffect(() => {
    // Create initial bricks
    const initialBricks = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotation: Math.random() * 360,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: Math.random() * 20 + 20,
      speed: Math.random() * 0.5 + 0.2,
    }));
    setBricks(initialBricks);

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      setBricks(prevBricks =>
        prevBricks.map(brick => ({
          ...brick,
          y: brick.y - brick.speed,
          rotation: brick.rotation + 0.2,
          ...(brick.y < -50 && {
            y: window.innerHeight + 50,
            x: Math.random() * window.innerWidth,
          }),
        }))
      );
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {bricks.map(brick => (
        <LegoBrick
          key={brick.id}
          color={brick.color}
          size={brick.size}
          style={{
            transform: `translate(${brick.x}px, ${brick.y}px) rotate(${brick.rotation}deg)`,
            transition: 'transform 0.1s linear',
          }}
        />
      ))}
    </div>
  );
};