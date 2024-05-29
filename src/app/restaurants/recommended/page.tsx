import Header from "@/components/header";
import { RestaurantsItem } from "@/components/restaurants-list/restaurants-item";
import { db } from "@/lib/prisma";

export default async function RecommendedRestaurantsPage() {
  const restaurants = await db.restaurant.findMany();
  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <h2 className="text-lg font-semibold mb-6">Restaurantes Recomendados</h2>
        <div className="flex w-full flex-col gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantsItem
              restaurant={restaurant}
              key={restaurant.id}
              className="min-w-full max-w-full"
            />
          ))}
        </div>
      </div>
    </>
  );
}
