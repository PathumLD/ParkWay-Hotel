import { Package } from '../types';

export const packages: Package[] = [
  {
    id: 'luxury-suite',
    title: 'Luxury Suite Package',
    description: 'Experience ultimate luxury with our premium suite package including spa access and fine dining.',
    price: 'From Rs. 10,000/night',
    features: [
      'Luxury Suite Accommodation',
      'Complimentary Breakfast',
      'Spa Access',
      'Fine Dining Experience',
      'Airport Transfer'
    ],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'wedding',
    title: 'Wedding Package',
    description: 'Make your special day memorable and unforgettable with our comprehensive wedding package.',
    price: 'Can be customized',
    features: [
      'Grand Ballroom Venue',
      'Custom Catering',
      'Wedding Suite',
      'Decoration Setup',
      'Wedding Coordinator'
    ],
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'business',
    title: 'Corporate Event Package',
    description: 'Perfect venue for conferences, seminars, meetings, and your corporate and staff retreats.',
    price: 'From Rs. 20000/day',
    features: [
      'Conference Hall',
      'AV Equipment',
      'Catering Service',
      'Business Center Access',
      'Coffee Breaks'
    ],
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dining',
    title: 'Fine Dining Experience',
    description: 'Indulge in an exquisite culinary journey at our renowned restaurant.',
    price: 'From Rs.3500/person',
    features: [
      '5-Course Gourmet Meal',
      'Wine Pairing',
      'Private Dining Room',
      'Personal Butler',
      'Signature Dessert'
    ],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spa',
    title: 'Spa & Wellness Package',
    description: 'Rejuvenate your body and mind with our luxury spa treatments.',
    price: 'From Rs.2000/person',
    features: [
      'Full Body Massage',
      'Facial Treatment',
      'Thermal Suite Access',
      'Healthy Lunch',
      'Yoga Session'
    ],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'celebration',
    title: 'Celebration Package',
    description: 'Perfect for birthdays, anniversaries, and special occasions.',
    price: 'From Rs.15000',
    features: [
      'Private Venue',
      'Custom Cake',
      'Decorations',
      'Champagne Toast',
      'Photography Service'
    ],
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80'
  }
];