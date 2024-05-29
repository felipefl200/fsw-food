import { DeliveryInfo } from "@/components/delivery-info";
import ProductList from "@/components/product-list";
import RestaurantImage from "@/components/restaurants-list/restaurant-image";
import { SwiperProvider } from "@/components/swiper-provider";
import { db } from "@/lib/prisma";
import { Divide, StarIcon } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface RestaurantPageProps {
  params: {
    id: string;
  };
}
export default async function RestaurantPage({
  params: { id },
}: RestaurantPageProps) {
  const restaurant = await db.restaurant.findUnique({
    where: {
      id: id,
    },
    include: {
      categories: {
        orderBy: {
          updatedAt: "desc",
        },
        include: {
          products: {
            where: {
              restaurantId: id,
            },
            include: {
              restaurant: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
      products: {
        take: 10,
        include: {
          restaurant: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!restaurant) return notFound();

  return (
    <div>
      <RestaurantImage restaurant={restaurant} />
      <div className="relative z-10 -mt-8 flex items-center justify-between rounded-tl-3xl rounded-tr-3xl bg-white px-5 py-5 pt-5">
        <div className="flex items-center gap-[0.375rem]">
          <div className="relative size-8">
            <Image
              src={restaurant.imageUrl}
              alt={restaurant.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-xl font-semibold">{restaurant.name}</h1>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-foreground px-2 py-1 text-white">
          <StarIcon size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-semibold">5.0</span>
        </div>
      </div>
      <div className="mt-6">
        <DeliveryInfo restaurant={restaurant} />
      </div>
      <div className="mt-4 flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        <SwiperProvider>
          {restaurant.categories.map((category) => (
            <div
              key={category.id}
              className="flex min-w-fit flex-col rounded-lg bg-muted-foreground/40 px-5 py-1 text-center"
            >
              <span className="text-xs text-white">{category.name}</span>
            </div>
          ))}
        </SwiperProvider>
      </div>
      <div className="mt-6 space-y-4">
        <h2 className="px-5 font-semibold">Mais Pedidos</h2>
        <ProductList products={restaurant.products} />
      </div>
      {restaurant.categories.map((category) => (
        <>
          {category.products.length ? (
            <div className="mt-6 space-y-4" key={category.id}>
              <h2 className="px-5 font-semibold">{category.name}</h2>
              <ProductList products={category.products} />
            </div>
          ) : null}
        </>
      ))}
    </div>
  );
}
