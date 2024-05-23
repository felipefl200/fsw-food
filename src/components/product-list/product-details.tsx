"use client";
import { computedProductTotalPrice, formatCurrency } from "@/helpers/price";
import Image from "next/image";
import DiscountBadge from "../discount-badge";
import { Prisma } from "@prisma/client";
import { Button } from "../ui/button";
import {
  BikeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  TimerIcon,
} from "lucide-react";
import { useState } from "react";
import { Card } from "../ui/card";
import ProductList from ".";

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>;
  complementaryProducts: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>[];
}

export default function ProductDetails({
  product,
  complementaryProducts,
}: ProductDetailsProps) {
  const [quantity, setQuantify] = useState(1);
  const handleIncreaseQuantity = () => setQuantify(quantity + 1);
  const handleDecreaseQuantity = () => {
    if (quantity === 1) return;
    setQuantify(quantity - 1);
  };

  return (
    <div className="relative z-10 -mt-8 rounded-tl-3xl rounded-tr-3xl bg-white py-5 ">
      {/* Dados do empresa e produto */}
      <div className="flex items-center gap-[0.375rem] px-5">
        <div className="relative size-6">
          <Image
            src={product.restaurant.imageUrl}
            alt={product.restaurant.name}
            fill
            className="rounded-full object-cover"
          />
        </div>
        <span className="text-xs text-muted-foreground">
          {product.restaurant.name}
        </span>
      </div>
      {/* Nome do produto */}
      <h1 className="mb-2 mt-1 px-5 text-xl font-semibold">{product.name}</h1>
      {/* Valores e quantidade do produto */}
      <div className="flex items-center justify-between px-5">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <h2 className="text-xl font-semibold">
                {computedProductTotalPrice(product, quantity)}
              </h2>
              {product.discountPercentage > 0 && (
                <DiscountBadge product={product} />
              )}
            </div>
          </div>
          {product.discountPercentage > 0 && (
            <div className="px-[2px] text-xs text-foreground">
              De:{" "}
              <span className="line-through">
                {formatCurrency(Number(product.price))}
              </span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 text-center">
          <Button
            onClick={handleDecreaseQuantity}
            size="icon"
            variant="ghost"
            className="border border-solid border-muted-foreground"
          >
            <ChevronLeftIcon />
          </Button>
          <span className="w-4">{quantity}</span>
          <Button onClick={handleIncreaseQuantity} size="icon">
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      {/* Card da entrega */}
      <Card className="mx-5 mt-4 flex items-center justify-around py-2">
        {/* Tempo de entrega */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-muted-foreground">
            <TimerIcon size={14} />
            <span className="text-xs">Entrega</span>
          </div>
          <div>
            {Number(product.restaurant.deliveryFee) > 0 ? (
              <p className="text-sm font-semibold">
                {formatCurrency(Number(product.restaurant.deliveryFee))}
              </p>
            ) : (
              <p className="text-sm font-semibold">30 min</p>
            )}
          </div>
        </div>
        {/* Custo de entrega */}
        <div className="flex flex-col items-center py-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <BikeIcon size={14} />
            <span className="text-xs">Entrega</span>
          </div>
          <div>
            {Number(product.restaurant.deliveryFee) > 0 ? (
              <p className="text-sm font-semibold">
                {formatCurrency(Number(product.restaurant.deliveryFee))}
              </p>
            ) : (
              <p className="text-sm font-semibold">Grátis</p>
            )}
          </div>
        </div>
      </Card>
      {/* Descrição do produto */}
      <div className="mt6 space-y-3 px-5 py-2">
        <h3 className="font-semibold">Sobre</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </div>
      <div className="mt6 space-y-3">
        <h3 className="px-5 font-semibold">Sucos</h3>
        <ProductList products={complementaryProducts} />
      </div>
    </div>
  );
}
