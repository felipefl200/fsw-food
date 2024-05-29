import { db } from "@/lib/prisma";
import { RestaurantsItem } from "./restaurants-item";
import { SwiperProvider } from "../swiper-provider";

export default async function RestaurantList() {
  const restaurants = await db.restaurant.findMany({ take: 10 });
  return (
    <SwiperProvider>
      {restaurants.map((restaurant) => (
        <RestaurantsItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </SwiperProvider>
  );
}
