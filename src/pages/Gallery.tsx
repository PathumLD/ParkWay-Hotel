import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images, categories } from '../data/galleryData';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-serif text-green-900 text-center mb-8 sm:mb-12">
          Our Gallery
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-800 text-white'
                  : 'bg-green-50 text-green-800 hover:bg-green-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          layout
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <p className="text-white p-3 sm:p-4 text-sm sm:text-base font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery