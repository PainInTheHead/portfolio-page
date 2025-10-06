import type { ReactNode } from 'react';
import './GradientText.css';
import { gradientColors } from '../../blocks/MyCard/MyCard.constants';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = gradientColors,
  animationSpeed = 8,
  showBorder = false
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay"
        style={gradientStyle}
      ></div>}
      <div className="text-content"
        style={gradientStyle}
      >
        {children}
      </div>
    </div>
  );
}
