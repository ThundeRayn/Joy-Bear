import React, { useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../Client'

// Initialize Sanity image URL builder for optimized image delivery
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const builder = imageUrlBuilder(sanityClient as any)

interface Product {
  _id: string;
  id: string;
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
  description: string;
  minOrderQuantity?: number;
  category?: {title: string}[];
  tags?: {name: string}[];
  images?: { asset: { url: string } }[];
}

type ProductCardProps = {
  product?: Product;
}

const DisplayCard: React.FC<ProductCardProps> = ({ product }) => {
  // Track image loading state for blur effect
  const [imageLoaded, setImageLoaded] = useState(false)
  const [currentImageUrl, setCurrentImageUrl] = useState<string>('')
  const imgRef = React.useRef<HTMLImageElement>(null)

  // Helper function to generate optimized image URL with Sanity image builder
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getOptimizedImageUrl = (imageAsset: any): string | undefined => {
    // If imageAsset is already a string URL, add Sanity CDN optimization parameters
    if (typeof imageAsset === 'string') {
      // Add query parameters for image optimization: width, quality, format
      const url = new URL(imageAsset)
      url.searchParams.set('w', '400')
      url.searchParams.set('q', '75')
      url.searchParams.set('auto', 'format')
      url.searchParams.set('fit', 'max')
      return url.toString()
    }
    
    // If imageAsset has asset reference, use builder
    if (!imageAsset?.asset) return undefined
    
    // Build optimized image URL: resize to 400px width, auto format, quality 75
    const url = builder
      .image(imageAsset.asset)
      .width(400)
      .auto('format')
      .quality(75)
      .fit('max')
      .url()
    return url ?? undefined
  }

  // Get the image URL for the current product
  const imageUrl = product?.images?.[0] ? getOptimizedImageUrl(product.images[0]) : undefined

  // Reset loading state when image URL changes and check if already loaded
  React.useEffect(() => {
    if (imageUrl && imageUrl !== currentImageUrl) {
      setImageLoaded(false)
      setCurrentImageUrl(imageUrl)
    }
    
    // Check if image is already complete (cached)
    if (imgRef.current?.complete) {
      setImageLoaded(true)
    }
  }, [imageUrl, currentImageUrl])

  return (
    <div>
      {product ? (
        <a href={`/products/${product.slug.current}`} className="block">
          <div className="overflow-hidden shadow-sm transition-all cursor-pointer group">
            {/* Product Image */}
            <div className="w-full aspect-square bg-gray-200 overflow-hidden">
              {product.images && product.images.length > 0 ? (
                <img
                  ref={imgRef}
                  // Use Sanity image builder for optimized image delivery (resized to 400px, auto format, quality 75)
                  src={imageUrl}
                  alt={product.title}
                  width={400}
                  height={400}
                  // Lazy loading: defer image loading until near viewport for better performance
                  loading="lazy"
                  // Decode async for smoother rendering
                  decoding="async"
                  // Only apply blur while image is loading (blur removed once loaded)
                  onLoad={() => setImageLoaded(true)}
                  // Fallback: remove blur on error to prevent stuck blur
                  onError={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ${
                    imageLoaded ? 'blur-0' : 'blur-md'
                  }`}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>

            {/* Product Title */}
            <div className="flex justify-center py-3 px-3">
              <h3 className="open-sans-text-600 text-center text-normal font-semibold text-gray-800 group-hover:text-gray-400 transition-colors duration-200 line-clamp-2 min-h-[3em]">
                {product.title}</h3>
            </div>
          </div>
        </a>
      ) : (
        <p>No product information available.</p>
      )}
    </div>
  )
}

export default DisplayCard