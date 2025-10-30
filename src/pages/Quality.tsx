


const timeline = [
  {
    time: '2022',
    title: 'Inspiration: The Idea',
    img: 'https://images.unsplash.com/photo-1617007770248-d8e154d4508d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    text: 'A simple moment of joy — seeing a child cuddle a homemade bear — sparked the idea to create toys that feel like a hug.'
  },
  {
    time: '2022',
    title: 'First Prototypes',
    img: 'https://plus.unsplash.com/premium_photo-1673481766815-f4ae3b67576e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    text: 'Hand-sewn prototypes, late-night stitching sessions, and feedback from local families taught us what matters: softness and durability.'
  },
  {
    time: '2023',
    title: 'Quality & Safety',
    img: 'https://images.unsplash.com/photo-1649894160974-777f5d4bbd06?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    text: 'Introduced formal quality checks, safer materials, and strict testing so every Joybear meets safety standards.'
  },
  {
    time: '2024',
    title: 'Customization Feature',
    img: 'https://images.unsplash.com/photo-1643105106098-8bd405eb7eb8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    text: "Launched our Make-A-Bear customization: choose fabrics, colors, and add personalized embroidery to make each toy unique."
  },
  {
    time: '2025',
    title: 'Joybear Today',
    img: 'https://images.unsplash.com/photo-1698163316411-5468429c2161?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    text: 'An online community, small-batch production, and workshops — we keep the playful spirit alive while growing responsibly.'
  }
]

const Quality = () => {
  return (
  <div className="max-w-4xl mx-auto py-12 px-4">
    <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Our Brand Story</h1>
    <p className="text-gray-600 mb-8">Start with inspiration: below is a concise timeline that highlights key moments — how an idea turned into toys, and how customization and quality became core to Joybear.</p>

    <div className="relative">
      {/* Vertical dashed line - show on mobile and up; left position smaller on phones */}
      <div className="absolute left-4 md:left-5 top-0 bottom-0 border-l-2 border-dashed border-gray-200" />

      <ul className="space-y-6">
        {timeline.map((item, idx) => (
          // pl on mobile makes room for the line; md increases space
          <li key={idx} className="relative pl-12 md:pl-20">
            {/* Dot */}
            <div className="absolute left-3 md:left-4 top-3 z-10">
              <div className="w-4 h-4 rounded-full bg-[#86A788] ring-4 ring-white shadow-lg" />
            </div>

            <div className="flex flex-col md:flex-row md:items-start gap-4">
              {/* Image - larger on mobile and full width above content */}
              <div className="w-full md:w-40 h-48 md:h-28 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Content - stacked under image on mobile */}
              <div className="pt-2 md:pt-0">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-[#86A788]">{item.time}</span>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="mt-2 text-gray-600 text-sm md:text-base">{item.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Quality