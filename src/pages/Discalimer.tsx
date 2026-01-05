

const Discalimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
    <div className="pt-12 pb-12 bg-Joygrey w-full max-w-4xl mx-auto px-6">
        
        
        <h2 className="text-center text-2xl font-semibold text-gray-800 my-4">
           
          <img src="/textonly-cropped.svg" alt="Joy Bear Text Logo" className="h-8 inline" />
           &nbsp; Disclaimer
        </h2>

        <div className="space-y-6 pt-12 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Intellectual Property Notice</h2>
            <p>
              All product images, logos, trademarks, brand names, and intellectual property displayed on this website are the property of their respective owners. 
              JoyBear does not claim ownership of any third-party intellectual property. The use of these images and trademarks is for illustrative and promotional purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Product Information</h2>
            <p>
              While we strive to ensure that all product information, descriptions, specifications, and images are accurate and up-to-date, JoyBear does not warrant that product descriptions or other content on this website are accurate, complete, reliable, current, or error-free. 
              Products may vary slightly from images shown due to manufacturing processes, screen color variations, or updates to product designs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Safety and Compliance</h2>
            <p>
              All toys sold by JoyBear are intended to meet applicable safety standards and regulations. However, it is the responsibility of the purchaser to ensure products are suitable for their intended use and age group. 
              Always supervise children during play and follow all safety warnings and instructions provided with the products.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Pricing and Availability</h2>
            <p>
              Prices, minimum order quantities, and product availability are subject to change without notice. We reserve the right to modify or discontinue products at any time. 
              For OEM and ODM services, final pricing and terms will be provided through direct quotation based on specific project requirements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
            <p>
              JoyBear shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to the use of our website or products. 
              Our total liability for any claims arising from the use of our products or services shall not exceed the amount paid for the product in question.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites or services. JoyBear is not responsible for the content, accuracy, or practices of any linked sites. 
              These links are provided for convenience only and do not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Copyright Concerns</h2>
            <p>
              If you believe any content on this website infringes on your copyright or intellectual property rights, please contact us immediately at{' '}
              <a href="mailto:joybeartoys@gmail.com" className="text-Joybrown hover:underline font-semibold">joybeartoys@gmail.com</a>. 
              We will promptly investigate and take appropriate action, including removal of the content if necessary.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Changes to This Disclaimer</h2>
            <p>
              JoyBear reserves the right to update or modify this disclaimer at any time without prior notice. 
              Continued use of our website after any such changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mt-8 pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> January 2026<br />
              <strong>Contact:</strong> For questions or concerns regarding this disclaimer, please contact us at{' '}
              <a href="/contact" className="font-semibold underline hover:underline">Contact</a>
            </p>
          </section>
        </div>

        <div className="mt-10 text-center">
          <a 
            href="/" 
            className="inline-block bg-Joybrown text-white px-8 py-3 rounded-lg hover:bg-Joyblue transition-colors duration-300 font-semibold"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default Discalimer