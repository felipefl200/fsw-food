import Header from "@/components/header";
import { ProductItem } from "@/components/product-list/product-item";
import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface CategoriesPageProps {
  params: {
    id: string;
  };
}
export default async function CategoriesPage({
  params: { id },
}: CategoriesPageProps) {
  const category = await db.category.findUnique({
    where: {
      id,
    },
    include: {
      products: {
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
  if (!category) return notFound();
  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold">{category.name}</h2>
        <div className="grid w-full grid-cols-2 gap-6">
          {category.products.map((product) => (
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
