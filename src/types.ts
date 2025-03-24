export interface Package {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  category: string;
  alt: string;
}