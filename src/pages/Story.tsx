
import { timeline } from '../assets/data/timeline';

const Story = () => {
  return (
  <div className="max-w-4xl mx-auto py-12 px-4 md:pr-22 md:pl-12">
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

            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
              {/* Image - larger on mobile and full width above content */}
              <div className="w-full md:w-56 h-48 md:h-28 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Content - stacked under image on mobile */}
              <div className="pt-2 md:pt-0">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-[#86A788]">{item.time}</span>
                  <h3 className="text-lg md:text-lg font-semibold text-gray-900">{item.title}</h3>
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

export default Story