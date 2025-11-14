
import { useState, useEffect } from 'react'

// LargeImageDisplay component
type LargeImageDisplayProps = {
  images: string[];
  title: string;
};

const LargeImageDisplay: React.FC<LargeImageDisplayProps> = ({ images, title }) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  return (
    <div className="w-full mb-8">
      <div className="w-full h-64 md:h-96 overflow-hidden shadow-lg flex items-center justify-center bg-white mb-4">
        <img
          src={images[selectedIdx]}
          alt={title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="flex gap-4 overflow-x-auto p-4">
        {images.map((imgUrl, idx) => (
          <div
            key={idx}
            className={`w-20 h-20 overflow-hidden border border-Joygrey flex-shrink-0 relative group cursor-pointer ${selectedIdx === idx ? 'ring-2 ring-[#86A788]' : ''}`}
            onClick={() => setSelectedIdx(idx)}
          >
            <div className="w-full h-full flex items-center justify-center bg-white">
              <img
                src={imgUrl}
                alt={title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
import { useParams } from 'react-router-dom'
import client from '../Client'
import ContactBadge from '../components/ContactBadge';

type Product = {
  _id: string;
  slug: string;
  title: string;
  minOrderQuantity?: number;
  description: string;
  category?: {title: string}[];
  tags?: {name: string}[];
  images?: string[];
  features?: {
    recyclable?: boolean;
    furry?: boolean;
    handmade?: boolean;
    safeForKids?: boolean;
    limitedEdition?: boolean;
  };
}

const ProductDetail = () => {
  const [singleProduct,setSingleProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const {slug} = useParams<{slug: string}>();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
          _id,
          id,
          slug,
          title,
          minOrderQuantity,
          description,
          "category": category[]->{title},
          "tags": tags[]->{name},
          "images": images[].asset->url,
          features {
            recyclable,
            furry,
            handmade,
            safeForKids,
            limitedEdition
          }
        }`
      )
      .then((data) => {
        console.log(data); // <-- print
        console.log(`singlePage slug: `+ slug); // <-- print
        setSingleProduct(data[0]) // set the first product
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-white py-4 pt-4 md:pt-10">
        <div className="max-w-4xl mx-auto px-6">
          <a href="/products" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
            ← Back to menu
          </a>
        </div>
      </section>

      {singleProduct ? (
      <>
          {/* <div key={singleProduct._id}>
            {singleProduct.title},
            {singleProduct.price},
            {singleProduct.description},
            {singleProduct.images && singleProduct.images.length > 0 ? `${singleProduct.images[0]}` : 'No Image'},
            {singleProduct.category ? singleProduct.category.title : 'No Category'}
          </div> */}

        {/* Product Image and Info */}
        <div className="max-w-4xl mx-auto p-6 flex flex-col">
          {/* Large image display section */}
          {singleProduct.images && singleProduct.images.length > 0 && (
            <LargeImageDisplay images={singleProduct.images} title={singleProduct.title} />
          )}

          {/* Info below image */}
          <div className="w-full">
            <h1 className="text-3xl font-bold text-gray-800">{singleProduct.title}</h1>
            {singleProduct.minOrderQuantity && (
              <p className="text-lg text-blue-600 font-semibold mt-2">
                Minimum Order Quantity: {singleProduct.minOrderQuantity}
              </p>
            )}

            {singleProduct.category && 
            singleProduct.category.map((cat, index) => (
              <span key={index} className="inline-block mt-3 mr-2 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                {cat.title}
              </span>
            ))}

            {singleProduct.tags && 
            singleProduct.tags.map((tag, index) => (
              <span key={index} className="inline-block mt-3 mr-2 px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                {tag.name}
              </span>
            ))}

            <p className="mt-6 text-gray-700 leading-relaxed">
              {singleProduct.description}
            </p>

            {/* Features */}
            {singleProduct.features && (
              <div className="mt-6">
                <h2 className="text-2xl font-semibold mb-4">Features</h2>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(singleProduct.features).map(([key, value]) => (
                    value && (
                      <div key={key} className="flex flex-col items-center justify-center bg-gray-100 rounded-lg px-4 py-3 shadow text-gray-800 min-w-[90px]">
                        {/* Example icons for each feature, replace with your own SVGs or images if desired */}
                        {key === 'recyclable' && (
                          <span className="mb-1 text-green-600">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2v2m0 16v2m8-10h2m-18 0H2m15.07-7.07l1.41 1.41M5.51 18.49l-1.41 1.41M18.49 18.49l-1.41 1.41M5.51 5.51L4.1 4.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                          </span>
                        )}
                        {key === 'furry' && (
                          <span className="mb-1 text-yellow-600">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/><path d="M8 10c0-1.1.9-2 2-2s2 .9 2 2" stroke="currentColor" strokeWidth="2"/></svg>
                          </span>
                        )}
                        {key === 'handmade' && (
                          <span className="mb-1 text-pink-600">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 12l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                          </span>
                        )}
                        {key === 'safeForKids' && (
                          <span className="mb-1 text-blue-600">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2"/></svg>
                          </span>
                        )}
                        {key === 'limitedEdition' && (
                          <span className="mb-1 text-purple-600">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="2"/><path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="2"/></svg>
                          </span>
                        )}
                        <span className="text-sm font-medium capitalize mt-1">{key.replace(/([A-Z])/g, ' $1')}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <ContactBadge />
      </>
      ) : (
        <div>
          <p className="text-center my-10 text-gray-500">Product not found</p>
        </div>
      )}
    </div>
  )
}

export default ProductDetail