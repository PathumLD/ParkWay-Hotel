import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Business Executive',
    content: 'An exceptional stay that exceeded all expectations. The attention to detail and personalized service made our business retreat truly memorable.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Travel Blogger',
    content: 'Parkway Hotel sets the standard for luxury accommodation. From the stunning architecture to the impeccable service, every aspect was perfect.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Wedding Planner',
    content: 'The perfect venue for our clients. The staff went above and beyond to ensure every detail was flawless. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  }
];

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-full flex items-center justify-center text-center text-white px-4"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              Welcome to Parkway Hotel
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Experience unparalleled luxury in the heart of the city
            </p>
            <button className="px-8 py-3 bg-green-800 text-white rounded-full text-lg hover:bg-green-700 transition-colors">
              Book Your Stay
            </button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="py-20 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-green-900 mb-6">
                A Legacy of Luxury
              </h2>
              <p className="text-gray-600 mb-6">
                Since 1925, Parkway Hotel has been the epitome of sophistication
                and elegance. Our commitment to exceptional service and attention
                to detail has earned us recognition as one of the world's finest
                luxury hotels.
              </p>
              <p className="text-gray-600">
                Every corner of our establishment tells a story of heritage,
                craftsmanship, and dedication to creating unforgettable
                experiences for our guests.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=987&q=80"
                alt="Hotel Interior"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  5-Star Luxury Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-serif text-center text-green-900 mb-12">
            Guest Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 italic mb-4">{testimonial.content}</p>
                <div className="text-center">
                  <p className="font-medium text-green-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-serif text-center text-green-900 mb-12">
            Experience Luxury
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]"
            >
              <img
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Suite"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-xl font-medium">Luxury Suites</h3>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]"
            >
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80"
                alt="Fine Dining"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-xl font-medium">Fine Dining</h3>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg aspect-[3/4]"
            >
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                alt="Spa & Wellness"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-xl font-medium">Spa & Wellness</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;