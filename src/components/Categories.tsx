const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'EVERYDAY',
      image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769041988/everyday_zieiam.png',
      link: '/categories/everyday'
    },
    {
      id: 2,
      title: 'GAMES',
      image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769041988/games_zp7zb5.png',
      link: '/categories/games'
    },
    {
      id: 3,
      title: 'HALLOWEEN',
      image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769038844/halloween_rn4ktv.png',
      link: '/categories/halloween'
    },
    {
      id: 4,
      title: 'CHRISTMAS',
      image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769041987/christams_mng2tn.png',
      link: '/categories/christmas'
    },
    {
      id: 5,
      title: "VALENTINE'S DAY",
      image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769041986/valentine_vxlnqx.png',
      link: '/categories/valentines-day'
    },
    {
      id: 6,
      title: 'EASTER',
      image: 'https://res.cloudinary.com/dqj2gwlpf/image/upload/v1769041987/easter_onhd1b.png',
      link: '/categories/easter'
    }
  ]

  return (
    <section className="w-full pt-6 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-y-4 lg:gap-x-0 lg:gap-y-6">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="flex-1 group cursor-pointer"
            >
              <div className="relative overflow-hidden hover:shadow-lg transition-shadow h-64">
                {/* Cover Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Gradient overlay (bottom -> top) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/10 transition-colors duration-300" />

                {/* Title centered (always visible, switches to "View More" on hover for desktop) */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <span className="text-2xl font-thin text-white text-center px-4 py-2 relative">
                    <span className="inline-block sm:group-hover:opacity-0 sm:group-hover:-translate-y-4 transition-all duration-300">{category.title}</span>
                    <span className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-4 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 uppercase">View More</span>
                  </span>
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