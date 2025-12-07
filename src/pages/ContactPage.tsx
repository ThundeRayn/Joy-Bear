import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact Form: Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:hello@joybear.com?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoLink;

    // Reset form and show success
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
      setTimeout(() => setStatus("idle"), 3000);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Brown Section - Left Side on Desktop */}
          <div 
            className="text-white lg:w-1/2 px-8 py-12 lg:py-20 flex flex-col justify-center bg-cover bg-center relative"
            style={{
              backgroundImage: 'url(https://res.cloudinary.com/dqj2gwlpf/image/upload/v1764552511/img1_att4en.png)'
            }}
          >
            <div className="absolute inset-0 bg-Joybrown/60"></div>
            <div className="relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 drop-shadow-lg">Get In Touch</h1>
            <p className="text-lg lg:text-xl mb-8 leading-relaxed drop-shadow-md">
              We'd love to hear from you! Whether you have a question about our products, 
              need assistance, or just want to share your JoyBear experience, our team is ready to help.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 drop-shadow-md">Email Us</h3>
                <p className="text-gray-100 drop-shadow-md">joybeartoys@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 drop-shadow-md">Our Social Media</h3>
                <p className="text-gray-100 drop-shadow-md">Youtube Channel</p>
                <p className="text-gray-100 drop-shadow-md">Tiktok</p>
                <p className="text-gray-100 drop-shadow-md">Instagram</p>
              </div>
            </div>
            </div>
          </div>

          {/* Form Section - Right Side on Desktop */}
          <div className="lg:w-1/2 px-8 py-12 lg:py-20 flex flex-col justify-center bg-white">
            <div className="max-w-xl mx-auto w-full">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-Joyblue focus:border-Joyblue outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-Joyblue focus:border-Joyblue outline-none transition"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-Joyblue focus:border-Joyblue outline-none transition resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-Joyblue text-white py-3 px-6 rounded-md font-medium hover:bg-Joybrown transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800 text-sm text-center">
                Your email client should open. Please send the email to complete your message.
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