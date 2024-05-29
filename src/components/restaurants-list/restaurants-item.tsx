import { formatCurrency } from "@/helpers/price";
import { Restaurant } from "@prisma/client";
import { BikeIcon, HeartIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface RestaurantItemProps {
  restaurant: Restaurant;
}
export function RestaurantsItem({ restaurant }: RestaurantItemProps) {
  return (
    <Link href={`/restaurants/${restaurant.id}`} className="min-w-[266px] max-w-[266px]">
      <div className="min-w-[266px] max-w-[266px]">
        <div className="relative h-[133px] w-full">
          <Image
            src={restaurant.imageUrl}
            alt={restaurant.name}
            fill
            className="rounded-lg object-cover"
          />

          <div className="absolute left-2 top-2 flex items-center gap-[2px] rounded-full bg-primary-foreground px-2 py-1 text-xs font-semibold text-muted-foreground">
            <StarIcon size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold">5.0</span>
          </div>
          <Button
            size="icon"
            className="absolute right-2 top-2 h-7 w-7 rounded-full bg-gray-700"
          >
            <HeartIcon size={16} className="fill-white" />
          </Button>
        </div>
        <h3 className="space-y-3 text-sm font-semibold">{restaurant.name}</h3>
        <div className="flex gap-3">
          <div className="flex gap-1">
            <BikeIcon className="text-primary" size={14} />
            <span className="text-xs text-muted-foreground">
              {Number(restaurant.deliveryFee) === 0
                ? "Entrega grátis"
                : formatCurrency(Number(restaurant.deliveryFee))}
            </span>
          </div>
          <div className="flex gap-1">
            <TimerIcon className="text-primary" size={14} />
            <span className="text-xs text-muted-foreground">
              {restaurant.deliveryTimeMinutes} min
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
