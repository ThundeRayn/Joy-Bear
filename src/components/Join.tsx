
import React, { useState } from 'react'

const Join: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // In a real app you'd POST to an API. Keep this minimal per request.
    console.log('Join request email:', email)
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section
      aria-label="Join mailing list"
      className="w-full py-20 sm:py-10 px-6 sm:px-6 lg:px-8"
      style={{ background: 'var(--color-tertiary, #F8FAFC)' }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <div className="mb-6 w-full">
          <h3 className="text-2xl font-semibold text-gray-900">Get Business Updates in your mailbox</h3>
          <p className="mt-3 text-lg text-gray-700">
            Stay in the loop! Get prototype previews, MOQ updates, and exclusive B2B offers.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <label htmlFor="join-email" className="sr-only">Email address</label>
          <input
            id="join-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={handleChange}
            placeholder="you@company.com"
            className="w-full sm:flex-1 rounded-md border border-gray-200 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-75"
            aria-label="Email address"
          />

          <button
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white"
            style={{ background: 'var(--color-primary, #86A788)' }}
          >
            {submitted ? 'Sent' : 'Join'}
          </button>
        </form>

        <p className="mt-3 text-sm text-gray-600">We respect your privacy. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}

export default Join