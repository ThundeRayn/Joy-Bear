import { useEffect, useState } from "react"
import client from "../Client"
import { FiX } from "react-icons/fi"
import { Link } from "react-router-dom"

type Activity = {
  _id: string
  _updatedAt: string
  title?: string
  description?: string
  slug?: { current: string }
  contents?: string[]
  coverImage?: string
}

export default function ActivityPopUp() {
  const [showPopup, setShowPopup] = useState(false)
  const [activity, setActivity] = useState<Activity | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchFeaturedActivity() {
      try {
        const data: Activity | null = await client.fetch(
          `*[_type == "activity" && isFeatured == true][0]{
            _id,
            _updatedAt,
            title,
            description,
            contents,
            "slug": slug,
            "coverImage": coverImage.asset->url
          }`
        )

        if (cancelled || !data?._id) return
        setActivity(data)
        console.log("Fetched activity:", data)

        // Version key changes if activity or content updates in Sanity
        const versionKey = `hasSeenPopup_${data._id}_${data._updatedAt}`

        const hasSeen = localStorage.getItem(versionKey)
        if (!hasSeen) {
          setShowPopup(true)
          // Mark as seen when the popup opens (or you can move this to the Close handler)
          localStorage.setItem(versionKey, "true")
        }

        // Clean up old popup keys for same activity
        Object.keys(localStorage).forEach((k) => {
          if (k.startsWith(`hasSeenPopup_${data._id}_`) && k !== versionKey) {
            localStorage.removeItem(k)
          }
        })
      } catch (err) {
        console.error("Error fetching activity:", err)
      }
    }

    fetchFeaturedActivity()
    
    return () => {
      cancelled = true
    }
  }, [])

  if (!showPopup || !activity) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
      <div className="bg-white shadow-lg w-full max-w-3xl p-6 animate-fadeIn relative">
        {/* Close X icon top right */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 text-2xl"
          aria-label="Close"
        >
          <FiX />
        </button>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left icon / image */}
            <div className="flex-1 flex justify-center">
            {activity.coverImage ? (
                <img
                src={activity.coverImage}
                alt="Activity Cover"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
            ) : (
                <img
                src="/joybear-icononly.svg"
                alt="Joybear"
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
                />
            )}
            </div>

          {/* Right text content */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            {activity.title && (
              <h2 className="text-2xl md:text-3xl font-normal mb-3 text-gray-900">
                {activity.title}
              </h2>
            )}

            {activity.description && (
              <p className="text-gray-700 mb-4">{activity.description}</p>
            )}

            {Array.isArray(activity.contents) && activity.contents.length > 0 && (
              <ul className="mb-6 text-left mx-auto md:mx-0 max-w-md list-disc list-inside text-gray-700">
                {activity.contents.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}

            {activity.slug?.current && (
              <Link
                to={`/activity/${activity.slug.current}`}
                onClick={() => setShowPopup(false)}
                className="inline-block text-center mt-2 px-8 py-2 bg-Joybrown text-white rounded-sm hover:bg-Joyblue transition font-semibold"
              >
                Explore Now →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

