import React from 'react';

interface CustomBackgroundProps {
  style: 'gradient' | 'particles' | 'waves';
  isDark: boolean;
}

const CustomBackground: React.FC<CustomBackgroundProps> = ({ style, isDark }) => {
  // Render different background based on style prop
  const renderBackground = () => {
    switch (style) {
      case 'gradient':
        return (
          <div className={`background-gradient ${isDark ? 'dark' : 'light'}`}>
            <div className="gradient-orb orb1"></div>
            <div className="gradient-orb orb2"></div>
            <div className="gradient-orb orb3"></div>
          </div>
        );
      case 'particles':
        return (
          <div className={`background-particles ${isDark ? 'dark' : 'light'}`}>
            {Array.from({ length: 75 }).map((_, index) => (
              <div key={index} className="particle" style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 20}s`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${Math.random() * 10 + 2}px`,
                height: `${Math.random() * 10 + 2}px`,
                opacity: Math.random() * 0.5 + 0.1
              }}></div>
            ))}
          </div>
        );
      case 'waves':
        return (
          <div className={`background-waves ${isDark ? 'dark' : 'light'}`}>
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="custom-background">
      {renderBackground()}
    </div>
  );
};

export default CustomBackground;
