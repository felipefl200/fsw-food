"use client";
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface RestaurantImageProps {
  restaurant: Pick<Restaurant, "name" | "imageUrl">;
}
export default function RestaurantImage({ restaurant }: RestaurantImageProps) {
  const router = useRouter();
  const handleBack = () => router.back();
  return (
    <div className="relative h-[215px] w-full">
      <Image
        src={restaurant.imageUrl}
        alt={restaurant.name}
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
      <Button
            size="icon"
            className="absolute right-4 top-4 rounded-full bg-gray-700"
          >
            <HeartIcon size={20} className="fill-white" />
          </Button>
    </div>
  );
}
