"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star, X } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { Product } from "@/components/product-card";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.title}</DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <CldImage
              src={product.image}
              alt={product.title}
              fill
              className="object-contain transition-transform hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">
                ₹{product.price}
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  ({product.rating.toFixed(1)})
                </span>
              </div>
            </div>
            
            <div className="space-y-2">
              <span className="inline-block bg-secondary/20 text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {product.category}
              </span>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Product Features:</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Premium Quality Assured
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Naturally Sourced
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Rich in Nutrients
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Fresh & Hygienic Packaging
                </li>
              </ul>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button className="flex-1" size="lg">
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}