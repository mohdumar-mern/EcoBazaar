"use client";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IconBtn from "./IconBtn";

export function ProductCard({ products }) {
  const router = useRouter();

  // 🧭 Function to navigate when card is clicked
  const handleCardClick = () => {
    router.push(`/products/${products._id}`);
  };

  return (
    <Card 
    className="w-full max-w-sm overflow-hidden rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all bg-white" 
    >
      {/* 🖼️ Product Image */}
      <CardHeader className="p-0">
        <Image
          src={products?.images[0]?.url}
          alt={products?.name || "Product"}
          width={400}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
          priority
    onClick={handleCardClick}

        />
      </CardHeader>

      {/* 📝 Product Info */}
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
          {products?.name || "Unnamed Product"}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {products?.description || "No description available."}
        </CardDescription>
      </CardContent>

      {/* 💰 Price + Add to Cart */}
      <CardFooter className="flex items-center justify-between px-4 py-3 border-t bg-gray-50">
        <p className="text-base font-semibold text-green-600">
          ₹{products?.price || "0.00"}
        </p>

        <IconBtn
          variant="outline"
          icon={ShoppingCart}
          label="Add To Cart"
          href="/cart"
          className="text-green-600 border-green-500 hover:bg-green-600 hover:text-white transition-colors"
        />
      </CardFooter>
    </Card>
  );
}
