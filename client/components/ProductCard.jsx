"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IconBtn from "./IconBtn";
import Rating from "./Rating";

export function ProductCard({ products }) {
  const router = useRouter();
  console.log(products)

  const handleCardClick = () => {
    router.push(`/products/${products?._id}`);
  };

  const handleRatingChange = (newRating) => {
    console.log(`New rating selected: ${newRating}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // ❌ Stop parent navigation
    console.log("Added to cart:", products._id);
    router.push("/cart"); // ✅ navigate to cart only
  };

  return (
    <Card
      className="w-full max-w-sm overflow-hidden rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all bg-white cursor-pointer"
      onClick={handleCardClick}
    >
      {/* 🖼️ Product Image */}
      <CardHeader className="p-0">
        <Image
          src={products?.images?.[0]?.url || "https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_640.jpg"}
          alt={products?.name || "Product"}
          width={400}
          height={300}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </CardHeader>

      {/* 📝 Product Info */}
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
          {products?.name || "Unnamed Product"}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-2 mb-2">
          {products?.description || "No description available."}
        </CardDescription>

        <Rating value={products.ratings} showValue onClick={handleRatingChange} />
        <p className="text-sm text-gray-500">Reviews: {products.numOfReviews}</p>
      </CardContent>

      {/* 💰 Price + Add to Cart */}
      <CardFooter className="flex items-center justify-between px-4 py-3 border-t bg-gray-50">
        <p className="text-base font-semibold text-green-600">
          ₹{products?.price || "0.00"}
        </p>

        <Button
          variant="outline"
          className="flex items-center gap-2 text-green-600 border-green-500 hover:bg-green-600 hover:text-white transition-colors"
          onClick={handleAddToCart}
        >
          <ShoppingCart size={18} />
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
