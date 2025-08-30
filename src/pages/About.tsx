import React from 'react'

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-white flex flex-col items-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          about <span className="text-[#FFCFCF]">Joybear</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Bringing joy, imagination<br />and creativity to kids around the world.
        </p>
      </div>

      {/* Company Story */}
      <div className="mt-12 max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 2010, ToyWorld started as a small family business with a big dream: 
          to make high-quality, safe, and fun toys that inspire children’s imagination. 
          Over the years, we have grown into a global brand, loved by kids and trusted by parents. 
          Our mission is to create toys that spark curiosity, encourage creativity, and 
          bring families closer together.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold text-pink-500 mb-2">✨ Creativity</h3>
          <p className="text-gray-600">
            We design toys that encourage imagination, storytelling, and endless adventures.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold text-yellow-500 mb-2">🛡️ Safety</h3>
          <p className="text-gray-600">
            Every toy we make is rigorously tested to meet the highest safety standards.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold text-green-500 mb-2">🌍 Sustainability</h3>
          <p className="text-gray-600">
            We care for the planet by using eco-friendly materials and responsible practices.
          </p>
        </div>
      </div>

      {/* Closing */}
      <div className="mt-16 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Join Our Journey
        </h2>
        <p className="text-gray-600">
          At JoyBear, we believe toys are more than just playthings—they are the building blocks of 
          imagination and happiness. Thank you for being part of our journey. Together, let’s 
          keep creating smiles that last a lifetime.
        </p>
      </div>
    </div>
  );
};

export default About;