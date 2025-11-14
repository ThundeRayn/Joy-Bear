const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'IP Toys',
      image: 'https://images.unsplash.com/photo-1762352612385-231b079aa8d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      link: '/categories/ip-toys'
    },
    {
      id: 2,
      title: 'Playground',
      image: 'https://images.unsplash.com/photo-1592466489969-a14677dbf2a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1167',
      link: '/categories/playground'
    },
    {
      id: 3,
      title: 'Customize',
      image: 'https://images.unsplash.com/photo-1557149769-d376acfba1f1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
      link: '/customize'
    }
  ]

  return (
    <section className="w-full pt-6 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
  <div className="flex flex-col sm:flex-row gap-6 sm:gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="flex-1 group cursor-pointer"
            >
              <div className="relative overflow-hidden shadow-md hover:shadow-lg transition-shadow h-64">
                {/* Cover Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Gradient overlay (bottom -> top) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/80 transition-colors duration-300" />

                {/* Title as a button-like text (hover shows underline) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    id="category-hover-text"
                    className="text-2xl font-thin text-white text-center inline-block px-4 py-2 rounded-md
                      sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:transition-all sm:duration-300
                      opacity-100 translate-y-0"
                  >
                    <span className="sm:inline hidden">Explore more</span>
                    <span className="inline sm:hidden">{category.title}</span>
                  </span>
                </div>
              </div>

              {/* Title below image (hidden on mobile) */}
              <div className="mt-3 text-center sm:block hidden">
                <h4 className="text-lg font-normal text-gray-800">{category.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories