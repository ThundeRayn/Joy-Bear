import { Helmet } from 'react-helmet-async';

const Discalimer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Disclaimer | JoyBear Toys</title>
        <meta name="description" content="Read the JoyBear Toys website disclaimer regarding information accuracy, liability, and third-party links." />
        <link rel="canonical" href="https://www.joybeartoys.com/disclaimer" />
      </Helmet>
      
      {/* Brown hero section */}
      <div className="bg-Joybrown w-full mb-18 h-28">
        <img 
          src="https://images.unsplash.com/photo-1527261834078-9b37d35a4a32?q=80&w=2070&auto=format&fit=crop" 
          alt="Disclaimer Header" 
          className="w-full h-full object-cover"
        />
      </div>
      
    <div className="py-12 pt-4 sm:px-6 lg:px-8 pb-12 bg-Joygrey w-full max-w-4xl mx-auto px-6">
        
        
        <h2 className="text-center text-2xl font-semibold text-gray-800 my-4">
           
          <img src="/textonly-cropped.svg" alt="Joy Bear Text Logo" className="h-8 inline" />
           &nbsp; Disclaimer
        </h2>

        <div className="space-y-6 pt-12 text-gray-700 leading-relaxed">
          <section>
            <p>
              The information provided on this website is for general informational purposes only. While we strive to ensure that the content on this website is accurate, complete, and up to date, we make no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, suitability, or availability of the information contained herein.
            </p>
          </section>

          <section>
            <p>
              Under no circumstances shall this website or its owners, operators, or affiliates be liable for any loss or damage, including without limitation indirect or consequential loss or damage, arising out of or in connection with the use of this website or reliance on any information provided.
            </p>
          </section>

          <section>
            <p>
              The content on this website does not constitute professional advice of any kind, including but not limited to legal, financial, medical, or business advice. Users are advised to seek independent professional advice before making any decisions based on the information provided on this website.
            </p>
          </section>

          <section>
            <p>
              This website may contain links to third-party websites. Such links are provided for convenience only and do not imply endorsement or responsibility for the content, products, or services offered by any third-party websites. Access to and use of third-party websites are at the user's own risk.
            </p>
          </section>

          <section>
            <p>
              We reserve the right to modify, update, or remove any content on this website, including this disclaimer, at any time without prior notice. By using this website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
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