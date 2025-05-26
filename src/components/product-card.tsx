"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useState, useCallback, useContext } from "react";
import axios from "axios";
import { ProductsContext } from "@/context/productContext";
import { useSession } from "next-auth/react";
import ProductModal from "./product-modal";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { setSelectedProducts } = useContext(ProductsContext);
  const { data: session } = useSession();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = () => {
    if (!session) return;
    setSelectedProducts((prev: string[]) => [...prev, product.id]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="group relative overflow-hidden rounded-lg border bg-card hover:shadow-lg transition-all duration-300">
        {/* Product Image - Clickable */}
        <div 
          className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer"
          onClick={openModal}
        >
          <CldImage
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform group-hover:scale-105 lazyload"
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/Asset 26BW.png"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium bg-black/50 px-4 py-2 rounded-md">
              Click to view details
            </span>
          </div>
        </div>
        
        {/* Product Info */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold tracking-tight text-lg hover:text-primary transition-colors">
              {product.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {product.description}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">
                ₹{product.price}
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs text-gray-500 ml-1">
                  ({product.rating.toFixed(1)})
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm" 
              className="flex-1"
              onClick={addToCart}
              disabled={!session}
            >
              Add to Cart
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={openModal}
            >
              View
            </Button>
          </div>
          
          <div className="text-xs text-center text-muted-foreground">
            <span className="bg-secondary/20 px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={product}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
