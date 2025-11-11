import React, { useState } from 'react'
import Upbadge from '../components/Upbadge'

const theme = '#86A788'

const Customize = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', details: '', budget: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app you'd POST this to an API. For now we just log and show a simple confirmation.
    console.log('Customization request', form)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', details: '', budget: '' })
  }

  return (
    <>
    <Upbadge />
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: what we do / offers */}
          <div className="lg:col-span-2">
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-900">Inspiration & What We Do</h2>
                <p className="mt-3 text-gray-700">We design and manufacture customizable plush toys for brands, events, and corporate gifting. Share a short brief (photo, color, or theme) and we’ll propose fabrics, trims, and production options optimized for small runs and quick prototypes.</p>

                <div className="mt-4 p-4 bg-green-50 border-l-4 border-[#86A788] rounded-md">
                  <p className="text-sm text-gray-800">B2B focus: rapid prototyping, NDA available, small-batch production with QC and traceability.</p>
                </div>

                {/* Design flow */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                  <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col gap-3">
                    <img className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80" alt="design consultation" />
                    <h3 className="text-lg font-medium text-gray-900">Design Consultation</h3>
                    <p className="text-gray-600">One-on-one session to capture the idea and sketch a concept. We discuss fabrics, size, and special features.</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col gap-3">
                    <img className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80" alt="prototyping" />
                    <h3 className="text-lg font-medium text-gray-900">Prototyping</h3>
                    <p className="text-gray-600">We create a sample to test scale, colors, and durability before final approval.</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col gap-3">
                    <img className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80" alt="personalization" />
                    <h3 className="text-lg font-medium text-gray-900">Personalization</h3>
                    <p className="text-gray-600">Embroidery, name tags, themed outfits, and accessory add-ons.</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-lg flex flex-col gap-3">
                    <img className="w-full h-36 object-cover rounded-md" src="https://images.unsplash.com/photo-1520975919847-8d6f3e4c3cbd?auto=format&fit=crop&w=1200&q=80" alt="production" />
                    <h3 className="text-lg font-medium text-gray-900">Small-batch Production</h3>
                    <p className="text-gray-600">Once approved, we produce small runs with consistent quality control.</p>
                  </div>
                </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900">What We Offer</h2>
              <ul className="mt-4 ml-4 space-y-3 text-gray-700">
                <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFFDEC] text-[#86A788] mr-3">✓</span>
                Premium hypoallergenic, washable fabrics
                </li>
                <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-[#FFFDEC] text-[#86A788] mr-3">✓</span>
                Flexible sizes (15–60cm) and production quantities
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

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">Price Guide</h2>
              <p className="mt-3 text-gray-700">Prices depend on materials, complexity, and quantity. Below is a rough guide — final pricing will be provided after consultation.</p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                  <h4 className="text-sm font-semibold text-gray-900">Mini (15cm)</h4>
                  <p className="text-sm text-gray-700 mt-1">Starting at <span className="font-semibold">$25</span> — negotiable</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                  <h4 className="text-sm font-semibold text-gray-900">Medium (30cm)</h4>
                  <p className="text-sm text-gray-700 mt-1">Starting at <span className="font-semibold">$45</span> — negotiable</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                  <h4 className="text-sm font-semibold text-gray-900">Large (50-60cm)</h4>
                  <p className="text-sm text-gray-700 mt-1">Starting at <span className="font-semibold">$80</span> — negotiable</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                  <h4 className="text-sm font-semibold text-gray-900">Add-ons</h4>
                  <p className="text-sm text-gray-700 mt-1">Embroidery <span className="font-semibold">$8+</span>, Outfit <span className="font-semibold">$12+</span></p>
                </div>
              </div>
            </section>
          </div>

          {/* buttom: contact form */}
          <div className="mt-8">
            <a href="#contact-form" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#86A788] rounded-md shadow hover:bg-[#6b8e6b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#86A788]">
              Contact for customization Now
            </a>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Customize