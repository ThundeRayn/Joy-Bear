import { useEffect, useState } from "react";
import client from '../Client'

type BannerData = {
  hint: string
  slug: {
    _type: "slug";
    current: string;
  };
}

const Banner: React.FC = () => {
  const [banner, setBanner] = useState<BannerData | null>(null)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    client
      .fetch(
        `*[_type == "activity" && isFeatured == true][0]{
          title,
          hint,
          slug
        }`
      )
      .then(setBanner)
      .catch((err) => {
        console.error(err)
        setError("Failed to load banner")
      })
  }, [])
  
  return (
    <div className="min-h-[44px]">
      {error ? (
        <div className="bg-secondary p-2 flex justify-center items-center min-h-[44px] rounded">
          <p className="font-semibold text-black">⚠️ {error}</p>
        </div>
      ) : (
        <a 
          href={banner ? `/activity/${banner.slug.current}` : '#'} 
          className={`bg-secondary p-2 flex justify-center group cursor-pointer min-h-[44px] ${!banner ? 'invisible' : ''}`}>
            <span className="
                font-normal text-black font-sm
                group-hover:text-txt-secondary
                transition-colors duration-300 ease-in-out
                opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
              {banner?.hint ? banner.hint : "Discover our new activity →"}
            </span>
        </a>
      )}
    </div>
  )
}

export default Banner