export interface Product {
  id: string;
  title: string;
  category: 'Ankara' | 'Lace' | 'Asoebi';
  description: string;
  image: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Material {
  id: string;
  title: string;
  category: 'Ankara' | 'Lace' | 'Asoebi';
  description: string;
  image: string;
  createdAt: string;
  updatedAt?: string;
}

export interface GalleryImage {
  id: string;
  image: string;
  caption: string;
  createdAt: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface AdminStats {
  products: number;
  materials: number;
  gallery: number;
  messages: number;
  unreadMessages: number;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
