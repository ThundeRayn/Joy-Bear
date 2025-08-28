import React from 'react'

interface SlantedSectionProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
  gapPercent?: number; // percent gap between sections (default 10)
}

const Service: React.FC<SlantedSectionProps> = ({ 
  leftContent = (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Our Products</h2>
        <p className="text-blue-100">Good Quality, Reliable Provider</p>
      </div>
    </div>
  ),
  rightContent = (
    <div className="flex items-center justify-center h-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Customization</h2>
        <p className="text-emerald-100">Tailored Solutions for Your Needs</p>
      </div>
    </div>
  ),
  className = "",
  gapPercent = 10 // default gap between sections
}) => {
  // Calculate the polygon points based on gapPercent
  // left section ends at (100-gap)% bottom, right section starts at gap% top
  const leftBottom = 100 - gapPercent;
  const rightTop = gapPercent;
  return (
    <div className={`w-full h-100 md:h-150 lg:h-150 relative overflow-visible ${className}`}>
      {/* Left Section */}
      <div className="absolute inset-0 w-1/2 z-10">
        <div 
          className="w-full h-full"
          style={{
            clipPath: `polygon(0 0, 100% 0, ${leftBottom}% 100%, 0 100%)`,
          }}
        >
          {leftContent}
        </div>
      </div>
      {/* Right Section */}
      <div className="absolute inset-0 left-1/2 w-1/2 z-20">
        <div 
          className="w-full h-full"
          style={{
            clipPath: `polygon(${rightTop}% 0, 100% 0, 100% 100%, 0 100%)`,
          }}
        >
          {rightContent}
        </div>
      </div>
    </div>
  );
};

export default Service;