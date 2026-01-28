import Certification from "../components/ContactPage/Certification";
import Hero from "../components/HomePage/Hero";

const Factory = () => {
  return (
    <>
        <Hero
            objectPosition='center 51%'
            title="Your Trusted Plush Toy Manufacturer"
            description="Crafting Comfort and Joy with Every Stitch"
            img="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769473346/Company_Photo_adkcrg.png" />

        <div className="min-h-screen bg-gradient-to-b bg-white flex flex-col items-center">



            {/* About Our Factory */}
            <div className="pt-12 pb-12 bg-Joygrey w-full">
                <div className="max-w-4xl mx-auto px-6">
                    {/* <h2 className="text-center text-2xl font-semibold text-gray-800 my-4">
                        About &nbsp;
                        <img src="/textonly-cropped.svg" alt="Joy Bear Text Logo" className="h-8 inline" />
                    </h2> */}
                    <h2 className="text-center text-3xl font-semibold text-black mb-4">Our Factory</h2>


                    <p className="text-gray-600 leading-relaxed">
                        Henan Pro Toys Company is a professional plush toy manufacturer specializing in design, development, and production for global brands. We focus on delivering high-quality plush toys that combine craftsmanship, creativity, and reliable manufacturing standards.

                    </p>
                    <br />
                    <p className="text-gray-600 leading-relaxed">
                        With fully integrated in-house production capabilities—including cutting, sewing, hand-stitching, and packaging—we efficiently support both large-volume orders and flexible customization requirements. This vertical integration allows us to maintain strict quality control, stable lead times, and consistent product standards across every stage of production.

                    </p>
                    <br />
                    <p className="text-gray-600 leading-relaxed">
                        Pro Toys meets international quality and social responsibility requirements and has successfully passed major global compliance audits, including Walmart factory audits and the SEDEX human rights audit. Our products are exported worldwide, serving customers across North America and Europe, and earning long-term trust through dependable quality and professional execution.</p>
                    <br />
                    <p className="text-gray-600 leading-relaxed">
                        Driven by a commitment to quality, innovation, and win–win partnerships, Pro Toys provides comprehensive OEM and ODM services. We work closely with our partners to transform ideas into market-ready plush products, and we welcome opportunities for long-term collaboration.</p>
                    <br />
                </div>
            </div>

            {/* Certifications */}
            <Certification />
        </div>
    </>   
  )
}

export default Factory;