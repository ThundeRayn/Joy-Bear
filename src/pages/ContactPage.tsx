import { useState } from "react";
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [emailCopied, setEmailCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@joybeartoys.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Send a POST request to the backend email endpoint
    fetch(`${import.meta.env.VITE_API_URL}/api/email/send-contact`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', // Tell the server we're sending JSON data
      },
      body: JSON.stringify(formData), // Convert { name, email, message } object into a JSON string to send
    })
      .then((res) => res.json()) // When the server responds, parse the response body as JSON
      .then((data) => { // Now "data" is the parsed response, e.g. { success: true, message: "..." }
        if (data.success) { // If backend returned success
          setFormData({ name: "", email: "", message: "" }); // Clear the form fields
          setStatus("success"); // Show success message on screen
          setTimeout(() => setStatus("idle"), 3000); // After 3 seconds, hide the success message
        } else {
          setStatus("error"); // Backend responded but something went wrong
          setTimeout(() => setStatus("idle"), 3000); // Hide error message after 3 seconds
        }
      })
      .catch((error) => { // If the request itself failed (network error, server unreachable, etc.)
        console.error(error); // Log the error to browser console (F12 -> Console tab)
        setStatus("error"); // Show error message on screen
        setTimeout(() => setStatus("idle"), 3000); // Hide error message after 3 seconds
      });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact Us | JoyBear Toys</title>
        <meta name="description" content="Get in touch with JoyBear Toys. Send us a message for product inquiries, pricing, customization options, or general questions." />
        <link rel="canonical" href="https://www.joybeartoys.com/contact" />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Word Section - Left Side on Desktop */}
          <div className="p-12 md:p-18 bg-Joygrey w-full lg:w-1/2">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-center text-2xl font-semibold text-gray-800 my-4">
                Contact &nbsp;
                <img src="/textonly-cropped.svg" alt="Joy Bear Text Logo" className="h-8 inline" />
              </h2>


              <p className="text-gray-600 leading-relaxed">
                Have a question or need more information? We’d love to hear from you.
              Whether you’re looking for product details, pricing, customization 
              options, or general inquiries, simply fill out the form below and 
              our team will get back to you as soon as possible. We respect your 
              privacy. Your information will only be used to respond to your inquiry.
              </p>
              <br />
              {/* Contact Info - Centered */}
              <div className="text-center mt-6">
                {/* Email */}
                <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                <div className="flex items-center justify-center gap-2 mb-12">
                  <a 
                    href="mailto:joybeartoys@gmail.com"
                    className="inline-block rounded-md px-4 py-2 text-base font-medium text-white bg-Joybrown shadow hover:bg-Joybrown/90 transition"
                  >
                    info@joybeartoys.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-gray-200 hover:bg-gray-300 transition"
                    aria-label="Copy email"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                {emailCopied && (
                  <span className="text-sm text-green-600 font-medium mt-2 block">Copied to clipboard!</span>
                )}
              </div>
              <div className="text-center">
                {/* Social Media Links */}
                <h3 className="text-xl font-semibold mb-4">Our Social Media</h3>
                <div className="flex items-center justify-center gap-4">
                  {/* Instagram Icon Link */}
                  <a 
                    href="https://www.instagram.com/joybear_toys" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity" 
                    aria-label="Instagram"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
                          <stop offset="0%" style={{stopColor: '#fdf497'}} />
                          <stop offset="5%" style={{stopColor: '#fdf497'}} />
                          <stop offset="45%" style={{stopColor: '#fd5949'}} />
                          <stop offset="60%" style={{stopColor: '#d6249f'}} />
                          <stop offset="90%" style={{stopColor: '#285AEB'}} />
                        </radialGradient>
                      </defs>
                      <path fill="url(#ig-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  {/* TikTok Icon Link */}
                  <a 
                    href="https://www.tiktok.com/@joybear_toys" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity" 
                    aria-label="TikTok"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path fill="#000000" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      <path fill="#00F2EA" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" opacity="0.15"/>
                      <path fill="#FF004F" d="M19.59 7.09a4.83 4.83 0 0 1-3.77-4.25V2.4h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.8a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.5a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" opacity="0.2"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section - Right Side on Desktop */}
          <div 
            className="lg:w-1/2 px-8 py-12 lg:py-20 flex flex-col justify-center bg-cover bg-center relative"
            style={{
              backgroundImage: 'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769054067/odm-banner_daa6jj.png)'
            }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            {/* Form Container with Glassmorphism Effect */}
            <div className="relative z-10 max-w-xl mx-auto w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-10 border border-white/20 shadow-2xl">
              <h2 className="text-3xl font-semibold text-white mb-2 text-center lg:text-left drop-shadow-md">Send Us a Message</h2>
              <p className="text-white/80 text-sm mb-8 text-center lg:text-left">We'll get back to you as soon as possible</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-3 drop-shadow-md">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 border border-white/30 focus:border-Joyblue focus:ring-2 focus:ring-Joyblue/50 outline-none transition duration-200 backdrop-blur-sm shadow-md"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-3 drop-shadow-md">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 border border-white/30 focus:border-Joyblue focus:ring-2 focus:ring-Joyblue/50 outline-none transition duration-200 backdrop-blur-sm shadow-md"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-3 drop-shadow-md">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-3 rounded-lg bg-white/95 text-gray-900 placeholder-gray-500 border border-white/30 focus:border-Joyblue focus:ring-2 focus:ring-Joyblue/50 outline-none transition duration-200 resize-none backdrop-blur-sm shadow-md"
                    placeholder="Tell us what you think..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-Joyblue hover:bg-Joyblue/90 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-Joyblue transform hover:scale-105"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {/* Success Message */}
                {status === "success" && (
                  <div className="mt-4 p-4 bg-green-500/90 backdrop-blur-sm border border-green-300/50 rounded-lg shadow-lg">
                    <p className="text-white text-sm text-center font-medium drop-shadow-md">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div className="mt-4 p-4 bg-red-500/90 backdrop-blur-sm border border-red-300/50 rounded-lg shadow-lg">
                    <p className="text-white text-sm text-center font-medium drop-shadow-md">
                      ✗ Failed to send message. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
