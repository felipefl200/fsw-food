import { SwiperProvider } from "../swiper-provider";
import { ProductItem } from "./product-item";
import { Prisma } from "@prisma/client";

interface ProductListProps {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
}

export default async function ProductList({ products }: ProductListProps) {
  return (
    <SwiperProvider>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </SwiperProvider>
  );
}
