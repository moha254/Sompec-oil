import React from 'react';
import { Truck, TestTube2, LineChart } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Oil Distribution',
    description: 'Global distribution network ensuring timely delivery of premium oil products to industries worldwide.',
    features: [
      'Nationwide coverage',
      'Temperature-controlled transport',
      'Real-time tracking',
      'Flexible delivery options',
    ],
    image: '/img/oil-dist2.jpg ',
  },
  {
    icon: TestTube2,
    title: 'Quality Testing',
    description: 'Comprehensive testing services to ensure product quality and compliance with industry standards.',
    features: [
      'ISO certified laboratory',
      'Detailed analysis reports',
      'Quick turnaround time',
      'Expert consultation',
    ],
    image: '/img/testing.webp ',
  },
  {
    icon: LineChart,
    title: 'Industry Consulting',
    description: 'Expert guidance on oil selection, usage optimization, and industry best practices.',
    features: [
      'Technical support',
      'Process optimization',
      'Efficiency analysis',
      'Training programs',
    ],
    image: '/img/Oil-and-Gas-Consulting.jpg',
  },
];

export const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-blue-300">
              Comprehensive oil solutions tailored to meet your industry needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};