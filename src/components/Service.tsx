import React from 'react'

interface SlantedSectionProps {
  //leftContent?: React.ReactNode;
  //rightContent?: React.ReactNode;
  className?: string;
  gapPercent?: number; // percent gap between sections (default 10)
}


const Service: React.FC<SlantedSectionProps> = (props) => {
  const {
    className = '',
    gapPercent = 10,
  } = props;

  // Calculate the polygon points based on gapPercent
  const leftBottom = 100 - gapPercent;
  const rightTop = gapPercent;

  // Default content with hover-zoom background image effect
  const defaultContent = (
    <div className="relative flex items-center justify-center h-full text-white overflow-hidden group">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-400 group-hover:scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80')"
        }}
      ></div>
      <div className="text-center bg-[#86A788] bg-opacity-40 p-4 rounded relative z-10">
        <h2 className="text-3xl font-bold mb-2">Our Service</h2>
        <p className="text-blue-100">Waiting to be discovered</p>
      </div>
    </div>
  );

  //left content: bear toy product
  const leftContent = (
    <div className="relative flex items-center justify-center h-full text-white overflow-hidden group">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-400 group-hover:scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556012018-50c5c0da73bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" // Bear toy image
        }}
      ></div>
      <div className="text-center bg-[#f9c8c8] bg-opacity-40 p-4 rounded relative z-10">
        <h2 className="text-3xl font-bold mb-2">Our Toys</h2>
        <p className="text-white">Good Quality, Reliable Provider</p>
      </div>
    </div>
  );

  //right content: bear toy customization
  const rightContent = (
    <div className="relative flex items-center justify-center h-full text-white overflow-hidden group">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-400 group-hover:scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1617007770248-d8e154d4508d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074')" // Bear toy image
        }}
      ></div>
      <div className="text-center bg-[#86A788] bg-opacity-40 p-4 rounded relative z-10">
        <h2 className="text-3xl font-bold mb-2">Customize</h2>
        <p className="text-blue-100">Your Design, Our Expertise</p>
      </div>
    </div>
  );

  return (
    <div className={`w-full h-100 mb-6 md:h-150 lg:h-150 relative overflow-visible ${className}`}>
      {/* Left Section */}
      <a 
        className="absolute inset-0 w-1/2 z-10 cursor-pointer"
        href="/products"
      >
        <div
          className="w-full h-full"
          style={{
            clipPath: `polygon(0 0, 100% 0, ${leftBottom}% 100%, 0 100%)`,
          }}
        >
          {leftContent || defaultContent}
        </div>
      </a>
      {/* Right Section */}
      <a 
        className="absolute inset-0 left-1/2 w-1/2 z-20 cursor-pointer"
        href="/customize"
      >
        <div
          className="w-full h-full"
          style={{
            clipPath: `polygon(${rightTop}% 0, 100% 0, 100% 100%, 0 100%)`,
          }}
        >
          {rightContent || defaultContent}
        </div>
      </a>
    </div>
  );
};

export default Service;