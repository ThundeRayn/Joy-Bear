import { useEffect, useState } from 'react';
import client from '../Client';
import { FiPackage } from 'react-icons/fi';
import ProductCard from './ProductCard';

interface Product {
  _id: string;
  id: string;
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
  description: string;
  images?: { asset: { url: string } }[];
  category?: { title: string }[];
}

interface SearchDropDownProps {
  searchQuery: string;
  isVisible: boolean;
}

const SearchDropDown: React.FC<SearchDropDownProps> = ({ searchQuery, isVisible }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setProducts([]);
      return;
    }

    setLoading(true);
    const query = `*[_type == "product" && (
      title match "*${searchQuery}*" ||
      description match "*${searchQuery}*" ||
      id match "*${searchQuery}*"
    )][0...8]{
      _id,
      id,
      slug,
      title,
      description,
      "images": images[].asset->url,
      "category": category[]->{title}
    }`;

    client
      .fetch(query)
      .then((data) => {
        setProducts(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [searchQuery]);

  if (!isVisible) return null;

  return (
    <div className="md:absolute md:top-full md:left-0 w-full bg-white md:shadow-lg md:border-t md:border-gray-200 max-h-[70vh] overflow-y-auto z-40 relative md:z-40 border-t border-gray-200 md:border-0">
      <div className="mx-auto p-4 md:max-w-6xl">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-Joyblue"></div>
          </div>
        ) : searchQuery.trim() === '' ? (
          <div className="text-center py-8 text-gray-500">
            <FiPackage size={48} className="mx-auto mb-4 text-gray-300" />
            <p className="text-lg">Start typing to search products...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <FiPackage size={48} className="mx-auto mb-4 text-gray-300" />
            <p className="text-lg">No products found for "{searchQuery}"</p>
            <p className="text-sm mt-2">Try different keywords or browse our categories</p>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">
                Search Results ({products.length})
              </h3>
              <a
                href={`/search?q=${encodeURIComponent(searchQuery)}`}
                className="text-sm text-Joyblue hover:text-Joybrown transition-colors"
              >
                View all results →
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDropDown;