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
                        Henan Pro Toys Company, founded in 2022 and based in Yongcheng, Henan, China, is a professional manufacturer specializing in plush toy design and production.

                    </p>
                    <br />
                    <p className="text-gray-600 leading-relaxed">
                        With nearly 200 skilled workers and integrated in-house departments—including cutting, sewing, hand-stitching, and packaging—we efficiently handle both large-scale orders and diverse customization needs.

                    </p>
                    <br />
                    <p className="text-gray-600 leading-relaxed">
                        We meet international quality and social responsibility standards, having passed Walmart factory audits and the SEDEX human rights audit.</p>
                    <br />
                    <p className="text-gray-600 leading-relaxed">
                        Our annual output exceeds 1 million plush toys, exported to the U.S., Canada, the U.K., and Europe, earning global customer trust.</p>
                    <br />
                    <p className="text-gray-600 leading-relaxed">
                        Committed to quality, innovation, and win–win cooperation, Pro Toys provides OEM and ODM services and welcomes opportunities for collaboration.</p>
                </div>
            </div>

            {/* Certifications */}
            <Certification />
        </div>
    </>   
  )
}

export default Factory;