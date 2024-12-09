import React from 'react';
import { Droplet, Award, Truck, Beaker, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Droplet,
    title: 'Premium Quality',
    description: 'Industry-leading oil products meeting the highest quality standards.',
  },
  {
    icon: Award,
    title: 'Certified Excellence',
    description: 'ISO certified processes ensuring consistent product quality.',
  },
  {
    icon: Truck,
    title: 'Global Distribution',
    description: 'Reliable worldwide distribution network for timely delivery.',
  },
  {
    icon: Beaker,
    title: 'Quality Testing',
    description: 'State-of-the-art laboratory testing for product verification.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer service and technical support.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Commitment to environmental and safety standards.',
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Why Choose Sompec Oil
          </h2>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Sompec Oil is a prominent player in the fuel marketing sector in Mozambique, commanding a retail network of 20 petrol stations spread out across the country in strategic locations. This enables us to provide seamless retail and supply of petroleum products, penetrating urban and rural markets in the country. The hallmark of our business in Mozambique is consistent supply despite industry challenges whilst maintaining compliance with established best practices in the industry. We supply a number of large scale consumers and industries in the country.<br />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-blue-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};