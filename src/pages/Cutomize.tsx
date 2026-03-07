import { useState } from 'react';
import ContactBadge from '../components/ContactBadge';
import Hero from '../components/HomePage/Hero';


const Customize = () => {
  const [openOfferIndex, setOpenOfferIndex] = useState<number | null>(null);

  return (
    <>
    <Hero 
    objectPosition = 'center 50%'
    title="Find Our Categories" 
    description="Explore our diverse range of toy categories tailored for every child's joy."
    img="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769054067/odm-banner_daa6jj.png"/>

    
    <div className="max-w-4xl mx-auto py-12 px-4 md:pr-22 md:pl-12">
      
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col gap-8">
          {/* Left: what we do / offers */}
          <section className="mb-6 md:mb-16">
            <strong className="block text-2xl font-semibold text-Joybrown mb-4">What We Offer</strong>
            <ul className="mt-2 ml-2 space-y-3">
              {[
                {
                  title: "Custom Plush Design",
                  text: "We create fully customized plush toys based on your sketches, photos, characters, or brand mascots."
                },
                {
                  title: "High-Quality Manufacturing",
                  text: "We specialize in professional plush toy production with strict quality control. From fabric selection to stitching and stuffing, every step follows international safety standards."
                },
                {
                  title: "Low MOQ Options",
                  text: "Flexible minimum order quantities to support small businesses, gift companies, brand campaigns, tourism products and licensing projects."
                },
                {
                  title: "OEM & ODM Services",
                  text: "Whether you need your own design produced (OEM) or prefer our team to design for you (ODM), we offer full-service solutions tailored to your brand."
                },
                {
                  title: "Name-Drop & Souvenir Programs",
                  text: "We provide name-drop programs for gift shops, tourist attractions, national parks, zoos, and resorts—custom tags, embroidery and accessories available."
                },
                {
                  title: "Fast Sample Turnaround",
                  text: "Rapid prototyping and sample revisions to help you launch products quickly and meet seasonal demand."
                },
                {
                  title: "Sustainable & Premium Materials",
                  text: "Optional eco-friendly fabrics, recycled stuffing and premium materials like crystal velvet, sherpa, corduroy and more."
                },
                {
                  title: "Packaging & Branding",
                  text: "Custom hang tags, woven labels, display boxes, polybags and packaging solutions to enhance your brand presence."
                },
                {
                  title: "Global Shipping & Logistics Support",
                  text: "We handle worldwide shipping and flexible delivery plans to match your timeline."
                }
              ].map((offer, idx) => (
                <li key={idx} className="flex flex-col items-start bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <button
                    type="button"
                    className="w-full flex items-center px-4 py-3 focus:outline-none focus:border-2 focus:border-Joybrown focus:rounded-lg"
                    onClick={() => {
                      setOpenOfferIndex(openOfferIndex === idx ? null : idx);
                    }}
                  >
                    <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFFDEC] text-Joybrown mr-3">✓</span>
                    <span className="font-semibold text-Joybrown text-lg">{offer.title}</span>
                  </button>
                  <div 
                    className={`text-gray-700 text-base txt transition-all duration-500 ease-in-out ${
                      openOfferIndex === idx 
                        ? 'max-h-96 opacity-100 px-16 py-8' 
                        : 'max-h-0 opacity-0 px-0 py-0'
                    }`}
                    style={{
                      overflow: 'hidden'
                    }}
                  >
                    {offer.text}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Flow Chart Section */}
          <section className="mb-4 md:mb-16">
            <strong className="block text-2xl font-semibold text-Joybrown mb-4">Our Design Flow</strong>
            <div className="w-full bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6">
              <img 
                src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769035283/joybear-flow-nowatermark_jrozua.png" 
                alt="OEM / ODM Design Flow Chart"
                aria-description="the chat flow includes requirements communication, design proposal, and then mass production, delivery and shipping, quality inspection and order confirmation." 
                className="w-full h-auto"
              />
            </div>
          </section>

          
          {/* Design flow */}
          {/* <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-black">Our Design Flow</h2>

            <div className="mt-4 mb-8 p-4 bg-sky-50 border-l-4 border-Joyblue rounded-md">
              <p className="text-sm text-gray-800">B2B OEM/ODM: custom development, NDA support, and small-batch production with QC.</p>
            </div>
            
            <section>
                  <div className="relative">
                    // Vertical dashed line - show on mobile and up; left position smaller on phones
                    <div className="absolute left-4 md:left-5 top-0 bottom-0 border-l-2 border-dashed border-gray-200" />
              
                    <ul className="space-y-6">
                      {designFlow.map((item, idx) => (
                        // pl on mobile makes room for the line; md increases space
                        <li key={idx} className="relative pl-12 md:pl-20">
                          //
                          <div className="absolute left-3 md:left-4 top-3 z-10">
                            <div className="w-4 h-4 rounded-full bg-Joybrown ring-4 ring-white shadow-lg" />
                          </div>
              
                          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                            // Image - larger on mobile and full width above content
                            <div className="w-full md:w-56 h-48 md:h-28 rounded-lg overflow-hidden flex-shrink-0">
                              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                            </div>
              
                            // Content - stacked under image on mobile
                            <div className="pt-2 md:pt-0">
                              <div className="flex items-baseline gap-3">
                                <span className="text-sm font-semibold text-Joybrown">{item.time}</span>
                                <h3 className="text-lg md:text-lg font-semibold text-black">{item.title}</h3>
                              </div>
                              <p className="mt-2 text-gray-600 text-sm md:text-base">{item.text}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
            </section>

          
          </div> */}

        </div>
      </div>
    </div>

    <ContactBadge />
    

  
    </>
  )
}

export default Customize