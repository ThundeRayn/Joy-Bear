import React from 'react'
import Certification from '../components/ContactPage/Certification';
import Testimonials from '../components/ContactPage/Testimonials';
import Hero from '../components/HomePage/Hero';
import Join from '../components/HomePage/Join';

const About: React.FC = () => {
  return (
    <>
    {/* <div className="text-center w-full relative py-32 px-8 overflow-hidden"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1764552511/img1_att4en.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-Joyblue/30 to-transparent"></div>
      <div className="relative z-10">
      <img src="/joybear-icononly.svg" alt="Joy Bear Logo" className="w-22 h-16 mx-auto mb-2" />
      
      <p className="text-white text-lg font-semibold drop-shadow-sm">
        Inspire Joy, Comfort, and Imagination <br />across generations through every plush toy.
      </p>
      </div>
    </div> */}

    <Hero 
      objectPosition = 'center 51%'
      title="Joy, Comfort, and Imagination" 
      description="Inspiration across generations through every plush toy"
      img="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1764552511/img1_att4en.png"/>

    <div className="min-h-screen bg-gradient-to-b bg-white flex flex-col items-center">

        

      {/* About US */}
      <div className="pt-12 pb-12 bg-Joygrey w-full">
        <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-2xl font-semibold text-gray-800 my-4">
          About &nbsp;
          <img src="/textonly-cropped.svg" alt="Joy Bear Text Logo" className="h-8 inline" />
        </h2>
        
        
        <p className="text-gray-600 leading-relaxed">
          JoyBear is a Canadian plush toy company dedicated to creating comfort,
          connection, and pure happiness through high-quality, beautifully
          crafted plush companions. From our roots in Toronto, Canada to
          our global manufacturing partners, we combine thoughtful
          design, exceptional craftsmanship, and strict quality
          standards to bring safe, lovable, and memorable products
          to families, retailers, and brands around the world.
        </p>
        <br />
        <p className="text-gray-600 leading-relaxed">
          We specialize in premium plush toys—designed in USA & Canada, 
          trusted globally. Our offerings range from classic teddy 
          bears to modern character lines, seasonal collections, 
          custom OEM/ODM designs, and large-scale production 
          solutions for retailers, distributors, and corporate 
          partners.
        </p>
        <br />
        <p className="text-gray-600 leading-relaxed">
          At JoyBear, we believe a toy is more than a 
          product—it's a feeling, a memory, a friend.</p>
        </div>
      </div>

      {/* Mission */}
      <div className="w-full py-12 bg-white px-6 md:px-4 lg:px-46">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left - Image */}
            <div className="w-full md:w-2/5">
              <img 
                src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1764552511/img2_ebhcga.png" 
                alt="Our Mission" 
                className="w-full h-auto object-cover max-h-[350px]"
              />
            </div>
            
            {/* Right - Text */}
            <div className="w-full md:w-3/5">
              <h2 className="text-4xl font-semibold text-black mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                We craft high-quality, safe, and love-filled plush toys that bring warmth to families, value to wholesalers, and creativity to global partners. Through thoughtful design, responsible production, and an obsession with detail, we deliver products that make the world a softer place.
              </p>
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left - Text */}
            <div className="w-full md:w-3/5">
              <h2 className="text-4xl font-semibold text-black mb-6">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the world's most trusted and beloved plush toy brand—recognized for quality, integrity, and innovation. We envision a future where every JoyBear product sparks joy, builds connection, and becomes a cherished part of someone's story.
              </p>
            </div>

            {/* Right - Image */}
            <div className="w-full md:w-2/5">
              <img 
                src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1764552511/img4_w7ucja.png" 
                alt="Our Vision" 
                className="w-full h-auto object-cover max-h-[350px]"
              />
            </div>
          </div>
        </div>

        
      </div>
      


      <Testimonials />
      <Certification />
    </div>

    {/* Email Subscription Section */}
    <Join /> 
    </>
  );
};

export default About;