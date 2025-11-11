import { useEffect, useState } from "react"

export default function ActivityPopUp() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // check if user has already seen popup
    const hasSeenPopup = localStorage.getItem("hasSeenPopup")
    if (!hasSeenPopup) {
      setShowPopup(true)
      localStorage.setItem("hasSeenPopup", "true") // mark as seen
    }
  }, [])

  if (!showPopup) return null

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
        <div className="bg-white shadow-lg w-full max-w-3xl p-6 animate-fadeIn">
          <div className="flex flex-row gap-8 items-center">
            <div className="flex-1 flex justify-center">
              <img src="/bear-paw.svg" alt="Joybear" className="w-32 h-32 object-contain" />
            </div>
            <div className="flex-2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">🎉 Activity Center</h2>
              <p className="text-gray-700 mb-6">
                Welcome to the Joybear Activity Center! Here you can discover new features, join events, and get the latest updates about our custom & IP toys.
              </p>
              <ul className="mb-6 text-left mx-auto max-w-xl list-disc list-inside text-gray-700">
                <li>🎈 Explore new toy collections</li>
                <li>🗓️ Upcoming events and workshops</li>
                <li>💡 Tips for customizing your toys</li>
              </ul>
              <button
                onClick={() => setShowPopup(false)}
                className="px-8 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}
