import React from 'react';
import { Award, Users, Target, Rocket } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality oil products and services.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'Building lasting relationships with clients and stakeholders.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'Continuously improving our products and processes.',
  },
  {
    icon: Rocket,
    title: 'Sustainability',
    description: 'Promoting environmentally responsible practices.',
  },
];

export const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-white mb-6">
              About Sompec Oil
            </h1>
            <p className="text-xl text-gray-300">
              A legacy of excellence in the oil industry, delivering premium products and services since 2015.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Our story began in 2015, back then we were operating in a single fuel station in Manica in central Mozambique on the border with Zimbabwe.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we are privileged to consolidate our vast experience and resources in the petroleum marketing, wholesale and retail fuel operations, transportation, construction, renovation and maintenance of petrol stations.
              </p>
              <p className="text-gray-600">
                Our market presence is across the country from Machipanda to Palma with retail station network of above 10. We aspire to add considerable stations in current fiscal year and in future to consolidate our market share.
              </p>
            </div>
            <div>
              <img
                src="/img/som1.jpg"
                alt="Oil facility"
                className="rounded-lg shadow-lg transform scale-125 h-[350px] w-[450px] ml-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};