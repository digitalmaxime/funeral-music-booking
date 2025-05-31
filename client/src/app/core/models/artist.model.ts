export interface Artist {
  id: string;
  name: string;
  genre: string;
  location: string;
  rating: number;
  price: number;
  image: string;
  description: string;
  featured?: boolean;
}