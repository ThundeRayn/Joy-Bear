import { designFlow } from '../assets/data/designFlow';
import ContactBadge from '../components/ContactBadge';
import Upbadge from '../components/Upbadge'


const Customize = () => {

  return (
    <>
    <Upbadge />
    <div className="max-w-4xl mx-auto py-12 px-4 md:pr-22 md:pl-12">
      
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col gap-8">
          {/* Left: what we do / offers */}
          <section className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900">What We Offer</h2>
              <ul className="mt-4 ml-4 space-y-3 text-gray-700">
                <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFFDEC] text-[#86A788] mr-3">✓</span>
                Premium hypoallergenic, washable fabrics
                </li>
                <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFFDEC] text-[#86A788] mr-3">✓</span>
                Flexible sizes and production quantities
                </li>
                <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFFDEC] text-[#86A788] mr-3">✓</span>
                Custom embroidery, electronics, and branded trims
                </li>
                <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFFDEC] text-[#86A788] mr-3">✓</span>
                Small-batch runs with quality control and traceability
                </li>
            </ul>
          </section>

          
          {/* Design flow */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900">Our Design Flow</h2>

            <div className="mt-4 mb-8 p-4 bg-green-50 border-l-4 border-[#86A788] rounded-md">
              <p className="text-sm text-gray-800">B2B OEM/ODM: custom development, NDA support, and small-batch production with QC.</p>
            </div>
            
            <section>
                  <div className="relative">
                    {/* Vertical dashed line - show on mobile and up; left position smaller on phones */}
                    <div className="absolute left-4 md:left-5 top-0 bottom-0 border-l-2 border-dashed border-gray-200" />
              
                    <ul className="space-y-6">
                      {designFlow.map((item, idx) => (
                        // pl on mobile makes room for the line; md increases space
                        <li key={idx} className="relative pl-12 md:pl-20">
                          {/* Dot */}
                          <div className="absolute left-3 md:left-4 top-3 z-10">
                            <div className="w-4 h-4 rounded-full bg-[#86A788] ring-4 ring-white shadow-lg" />
                          </div>
              
                          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                            {/* Image - larger on mobile and full width above content */}
                            <div className="w-full md:w-56 h-48 md:h-28 rounded-lg overflow-hidden flex-shrink-0">
                              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                            </div>
              
                            {/* Content - stacked under image on mobile */}
                            <div className="pt-2 md:pt-0">
                              <div className="flex items-baseline gap-3">
                                <span className="text-sm font-semibold text-[#86A788]">{item.time}</span>
                                <h3 className="text-lg md:text-lg font-semibold text-gray-900">{item.title}</h3>
                              </div>
                              <p className="mt-2 text-gray-600 text-sm md:text-base">{item.text}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
            </section>

          
          </div>

        </div>
      </div>
    </div>

    <ContactBadge />

    {/* Floating contact button */}
    <a
      href="#contact-form"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 flex items-center justify-center rounded-full bg-Joybrown shadow-lg text-white text-lg font-bold hover:bg-Joyblue transition"
      style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
    >
      <div>
        <span className="flex flex-col items-center justify-center">
          <img src="/joybear-icononly.svg" alt="Contact" width={28} height={28} />
          <span className="text-xs mt-1">Contact</span>
        </span>
      </div>
    </a>
    </>
  )
}

export default Customize