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
      .catch(console.error)
  }, [])
  
  if (!banner) return null;

  const { hint, slug } = banner

  return (
    <a 
      href={`/activity/${slug.current}`} 
      className='bg-secondary p-2 flex justify-center group cursor-pointer'>
        <span className="
            font-normal text-black font-sm
            group-hover:text-txt-secondary
            transition-colors duration-300 ease-in-out
            opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
          {hint ? hint : "Discover our new activity →"}
        </span>
    </a>
  )
}

export default Banner