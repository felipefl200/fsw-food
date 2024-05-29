import Header from "@/components/header";
import { ProductItem } from "@/components/product-list/product-item";
import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function RecommendedProductsPage() {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 20,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  if (!products) return notFound();
  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold">Pedidos recomendados</h2>
        <div className="grid w-full grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductItem
              product={product}
              key={product.id}
              className="min-w-full"
            />
          ))}
        </div>
      </div>
    </>
  );
}
