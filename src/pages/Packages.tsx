import React from 'react';
import { motion } from 'framer-motion';
import { packages } from '../data/packagesData';

const Packages = () => {
  return (
    <div className="min-h-screen bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-serif text-green-900 text-center mb-8 sm:mb-12">
          Our Packages
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative h-48 sm:h-56">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <div className="p-4 sm:p-6 flex-grow">
                <h2 className="text-xl sm:text-2xl font-serif text-green-900 mb-2">
                  {pkg.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{pkg.description}</p>
                <p className="text-lg sm:text-xl font-medium text-green-800 mb-4">
                  {pkg.price}
                </p>
                <ul className="space-y-2 mb-6 text-sm sm:text-base">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-800 rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-2 sm:py-3 bg-green-800 text-white text-sm sm:text-base rounded-full hover:bg-green-700 transition-colors mt-auto">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages