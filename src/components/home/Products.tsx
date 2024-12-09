import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Industrial Lubricants',
    image: '/img/engine-oil-lubricating.jpg',
    description: 'High-performance lubricants for industrial machinery.',
  },
  {
    name: 'Automotive Oils',
    image: '/img/automotive2.jpg',
    description: 'Premium motor oils for all vehicle types.',
  },
  {
    name: 'Specialty Fluids',
    image: '/img/PENRITE-bcd-mar23.jpg',
    description: 'Specialized fluids for specific industrial applications.',
  },
];

export const Products = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Featured Products
          </h2>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Discover our range of premium oil products designed to meet diverse industry needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {product.name}
              </h3>
              <p className="text-blue-600 mb-4">
                {product.description}
              </p>
              <Link
                to={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-600 hover:text-blue-700 inline-flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};