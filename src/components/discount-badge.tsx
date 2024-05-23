import { Product } from "@prisma/client";

interface DiscountBadgeProps {
  product: Pick<Product, "discountPercentage">;
}
export default function DiscountBadge({ product }: DiscountBadgeProps) {
  return (
    <div className=" flex items-center rounded-full bg-primary px-2 py-1 text-xs font-semibold text-white">
      {product.discountPercentage}% OFF
    </div>
  );
}
