

const BrandIntro = () => {
  return (
    <section className="w-full py-16 px-10 lg:px-20">
        <div className="flex flex-col items-center">

            {/* Right: Brand Intro Text */}
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Trusted Partner in Play</h2>
            <p className="text-gray-600 mb-6">
                At <span className="font-semibold">Joybear</span>, we believe toys are more than playthings—they’re tools for learning, creativity, and happiness. 
                With decades of experience, we proudly serve businesses worldwide with safe, innovative, and customizable toy solutions.
            </p>
            <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFFDEC] text-[#86A788] mr-3">✓</span>
                Warm and creative designs children love
                </li>
                <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFFDEC] text-[#86A788] mr-3">✓</span>
                Certified quality and safety standards
                </li>
                <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFFDEC] text-[#86A788] mr-3">✓</span>
                OEM custom-made solutions for global partners
                </li>
            </ul>
            <div className="mt-8">
                <a href="#about" className="inline-block bg-[#86A788] text-white px-6 py-3 rounded-xl shadow hover:bg-[#6a886c] transition">
                Learn More About Us
                </a>
            </div>

        </div>
    </section>

  )
}

export default BrandIntro