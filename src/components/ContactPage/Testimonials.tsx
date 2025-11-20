const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "ABC Toys Inc.",
    feedback: "JoyBear's OEM service exceeded our expectations. The quality and attention to detail were outstanding. Highly recommend for custom plush projects!",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Creative Brands Co.",
    feedback: "Working with JoyBear has been a pleasure. Their licensed IP toys are top-notch and our customers love them. Professional team and great communication.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Kids World Store",
    feedback: "The custom plush toys we ordered brought joy to so many children. JoyBear's craftsmanship and commitment to quality are unmatched.",
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Global Retail Solutions",
    feedback: "Fantastic experience from start to finish. The ODM services helped us bring our vision to life perfectly. Will definitely work with them again!",
    avatar: "DT"
  }
];

const Testimonials = () => {
  return (
    <section className="w-full bg-secondary mt-6 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-3 text-lg text-gray-600">
            Trusted by businesses worldwide for quality and service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-Joyblue flex items-center justify-center text-white font-semibold text-lg">
                  {testimonial.avatar}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;