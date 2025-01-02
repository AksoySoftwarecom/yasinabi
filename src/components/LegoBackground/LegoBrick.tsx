import React from 'react';

interface LegoBrickProps {
  color: string;
  size: number;
  style: React.CSSProperties;
}

export const LegoBrick: React.FC<LegoBrickProps> = ({ color, size, style }) => {
  return (
    <div
      className="absolute"
      style={style}
    >
      <div 
        className="relative"
        style={{ width: size, height: size * 0.8 }}
      >
        {/* Main brick body */}
        <div
          className="absolute inset-0 rounded-sm shadow-lg"
          style={{ backgroundColor: color }}
        />
        {/* LEGO studs */}
        <div className="absolute -top-2 left-0 right-0 flex justify-around">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};