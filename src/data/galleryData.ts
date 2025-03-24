import { GalleryImage } from '../types';

export const images: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'rooms',
    alt: 'Luxury Suite'
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'rooms',
    alt: 'Deluxe Room'
  },
  {
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'rooms',
    alt: 'Presidential Suite'
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'restaurant',
    alt: 'Fine Dining Restaurant'
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'restaurant',
    alt: 'Gourmet Dishes'
  },
  {
    src: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'restaurant',
    alt: 'Breakfast Buffet'
  },
  {
    src: 'https://images.unsplash.com/photo-1561501878-aabd62634533?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'environment',
    alt: 'Hotel Exterior'
  },
  {
    src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'environment',
    alt: 'Lobby'
  },
  {
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80',
    width: 1200,
    height: 800,
    category: 'environment',
    alt: 'Swimming Pool'
  }
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'environment', label: 'Environment' }
];