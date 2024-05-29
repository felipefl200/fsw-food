import {
  computedProductOriginalPrice,
  computedProductTotalPrice,
} from "@/helpers/price";
import { cn } from "@/lib/utils";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
  className?: string;
}
export function ProductItem({ product, className }: ProductItemProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className={cn("w-[150px] min-w-[150px]", className)}
    >
      <div className="space-y-2">
        <div className="relative aspect-square w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="rounded-lg object-cover shadow-md"
          />
          {product.discountPercentage > 0 && (
            <span className="absolute right-2 top-2 rounded-full bg-primary px-2 py-1 text-xs font-semibold text-white">
              {product.discountPercentage}% OFF
            </span>
          )}
        </div>
        <div>
          <h2 className="text-sm">{product.name}</h2>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold">
              {computedProductTotalPrice(product)}
            </h3>
            {product.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {computedProductOriginalPrice(product)}
              </span>
            )}
          </div>
          <span className="block text-xs text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>
      </div>
    </Link>
  );
}
