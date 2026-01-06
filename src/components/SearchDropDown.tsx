import { useEffect, useState } from 'react';
import client from '../Client';
import { FiPackage } from 'react-icons/fi';

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
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 max-h-[70vh] overflow-y-auto z-40">
      <div className="max-w-6xl mx-auto p-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <a
                  key={product._id}
                  href={`/products/${product.slug.current}`}
                  className="group block bg-white rounded-lg border border-gray-200 hover:border-Joyblue hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-square w-full overflow-hidden rounded-t-lg bg-gray-100">
                    {product.images && product.images.length > 0 ? (
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FiPackage size={48} className="text-gray-300" />
                      </div>
                    )}
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm line-clamp-2 min-h-[2.5rem] text-gray-800 group-hover:text-Joyblue transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">#{product.id}</p>
                    {product.category && product.category.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {product.category.slice(0, 2).map((cat, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {cat.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchDropDown;