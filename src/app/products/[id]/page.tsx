import ProductDetails from "@/components/product-list/product-details";
import ProductImage from "@/components/product-list/product-image";
import { db } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: {
    id: string;
  };
}
export default async function ProductPage({ params }: ProductPageProps) {
  const product = await db.product.findUnique({
    where: { id: params.id },
    include: { restaurant: true },
  });
  const juices = await db.product.findMany({
    where: {
      category: {
        name: "Sucos",
      },
    },
    include: { restaurant: true },
  });
  if (!product) return notFound();
  return (
    <div>
      <ProductImage product={product} />
      <ProductDetails product={product} complementaryProducts={juices} />
    </div>
  );
}
