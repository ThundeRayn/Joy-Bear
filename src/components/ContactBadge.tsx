import { useState } from "react";

const ContactBadge = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@joybear.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      aria-label="Contact information"
      className="w-full py-10 px-6 sm:px-6 lg:px-8"
      style={{ background: 'var(--color-tertiary, #F8FAFC)' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Contact Us</h3>
          <p className="mt-3 text-lg text-gray-700">
            For business inquiries, custom plush requests, or partnership opportunities, reach out to us directly:
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-block rounded-md px-4 py-2 text-base font-medium text-white bg-Joybrown shadow">
              <a href="mailto:hello@joybear.com" className="hover:underline">hello@joybear.com</a>
            </span>
            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-200 hover:bg-gray-300 transition"
              aria-label="Copy email"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          {copied && (
            <span className="text-sm text-green-600 font-medium">Copied to clipboard!</span>
          )}
        </div>
        <p className="mt-3 text-sm text-gray-600 text-center">Your information is kept confidential.</p>
      </div>
    </section>
  )
}

export default ContactBadge

{/*
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
  */
}