"use client";
import { Product } from "@prisma/client";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductImageProps {
  product: Pick<Product, "name" | "imageUrl">;
}
export default function ProductImage({ product }: ProductImageProps) {
  const router = useRouter();
  const handleBack = () => router.back();
  return (
    <div className="relative h-[360px] w-full">
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-cover"
      />
      <Button
        onClick={handleBack}
        className="absolute left-4 top-4 size-10 rounded-full bg-white text-foreground hover:text-white"
        size="icon"
      >
        <ChevronLeftIcon />
      </Button>
    </div>
  );
}
