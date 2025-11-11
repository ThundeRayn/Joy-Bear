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
    <section className="w-full py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4">
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
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center">{category.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories