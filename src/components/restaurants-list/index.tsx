import { db } from "@/lib/prisma";
import { RestaurantsItem } from "./restaurans-item";

export default async function RestaurantList() {
  const restaurants = await db.restaurant.findMany({ take: 10 });
  return (
    <div className="[&::-webkit-scrollbar]:hidden flex gap-4 overflow-x-scroll px-5">
      {restaurants.map((restaurant) => (
        <RestaurantsItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}
