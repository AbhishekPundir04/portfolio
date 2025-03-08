'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviews: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, title, description, price, originalPrice, discount, rating, reviews }) => {
  return (
    <div className="w-64 p-3 border rounded-lg shadow-md bg-white">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={title}
          width={256}
          height={320}
          className="rounded-lg"
        />
      </div>
      <div className="flex items-center gap-1 mt-2 text-sm font-medium">
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-1">
          {rating} <Star className="w-3 h-3 fill-green-700 text-green-700" />
        </span>
        <span className="text-gray-500">| {reviews}</span>
      </div>
      <h3 className="font-semibold text-gray-900 mt-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-lg font-bold text-gray-900">Rs. {price}</span>
        <span className="text-sm text-gray-500 line-through">Rs. {originalPrice}</span>
        <span className="text-sm text-red-500">({discount}% OFF)</span>
      </div>
    </div>
  );
};

export default ProductCard;
