
const ContactBadge = () => {
  return (
    <section
      aria-label="Contact information"
      className="w-full py-10 px-6 sm:px-6 lg:px-8"
      style={{ background: 'var(--color-tertiary, #F8FAFC)' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-start mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Contact Us</h3>
          <p className="mt-3 mr-4 text-lg text-gray-700">
            For business inquiries, custom plush requests, or partnership opportunities, reach out to us directly:
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="inline-block rounded-md px-4 py-2 text-base font-medium text-white bg-Joybrown shadow">
            <a href="mailto:hello@joybear.com" className="hover:underline">hello@joybear.com</a>
          </span>
        </div>
        <p className="mt-3 text-sm text-gray-600 text-center">We respond within 1 business day. Your information is kept confidential.</p>
      </div>
    </section>
  )
}

export default ContactBadge