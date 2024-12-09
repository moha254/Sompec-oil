import React from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  'All Products',
  'Industrial Lubricants',
  'Automotive Oils',
  'Specialty Fluids',
  'Greases',
];

const products = [
  {
    name: 'Premium Industrial Lubricant',
    category: 'Industrial Lubricants',
    image: '/img/industrial.jpeg',
    description: 'High-performance lubricant for heavy machinery.',
    features: ['Long-lasting protection', 'Heat resistant', 'Anti-wear properties'],
  },
  {
    name: 'Synthetic Motor Oil',
    category: 'Automotive Oils',
    image: '/img/synth3.jpg',
    description: 'Advanced synthetic oil for modern engines.',
    features: ['Superior engine protection', 'Improved fuel efficiency', 'Extended drain intervals'],
  },
  {
    name: 'Hydraulic Fluid',
    category: 'Specialty Fluids',
    image: '/img/hydraulic.jpg',
    description: 'High-quality hydraulic fluid for industrial systems.',
    features: ['Excellent viscosity control', 'Anti-foam properties', 'Superior filtration'],
  },
  //add greases
  {
    name: 'Premium Grease',
    category: 'Greases',
    image: '/img/Grease Lubrication 2.webp',
    description: 'High-quality grease for industrial applications.',
    features: ['Superior lubrication', 'Excellent water resistance', 'Long-lasting protection'],
  },
  {
    name: 'Penrite Engine Oil',
    category: 'Automotive Oils',
    image: '/img/engine2.jpg',
    description: 'High-quality engine oil for cars and light trucks.',
    features: ['Superior engine protection', 'Improved fuel efficiency', 'Extended drain intervals'],
  },
  {
    name: 'Penrite Gear Fluid',
    category: 'Specialty Fluids',
    image: '/img/PENRITE-bcd-mar23.jpg',
    description: 'High-quality gear oil for manual transmissions and differentials.',
    features: ['Excellent lubrication', 'Resistant to wear and corrosion', 'Meets industry standards'],
  },

  // Add more products as needed
];

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('All Products');

  const filteredProducts =
    selectedCategory === 'All Products'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-blue-100 mb-6">Our Products</h1>
            <p className="text-xl text-blue-300">
              Premium oil products engineered for superior performance.
            </p>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex overflow-x-auto mb-12 pb-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap mr-4 transition-all duration-300 ease-in-out ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-blue-100 shadow-lg'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-50 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="inline-flex items-center text-white-600 font-medium hover:text-blue-700 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
