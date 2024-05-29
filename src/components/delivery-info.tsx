import { formatCurrency } from "@/helpers/price";
import { Restaurant } from "@prisma/client";
import { TimerIcon, BikeIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DeliveryInfoProps {
  restaurant: Pick<Restaurant, "deliveryFee" | "deliveryTimeMinutes">;
}
export function DeliveryInfo({ restaurant }: DeliveryInfoProps) {
  return (
    <Card className="mx-5 mt-4 flex items-center justify-around py-2">
      {/* Tempo de entrega */}
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 text-muted-foreground">
          <TimerIcon size={14} />
          <span className="text-xs">Entrega</span>
        </div>
        <div>
          {Number(restaurant.deliveryFee) > 0 ? (
            <p className="text-sm font-semibold">
              {Number(restaurant.deliveryFee)} minutos
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
          {Number(restaurant.deliveryFee) > 0 ? (
            <p className="text-sm font-semibold">
              {formatCurrency(Number(restaurant.deliveryFee))}
            </p>
          ) : (
            <p className="text-sm font-semibold">Grátis</p>
          )}
        </div>
      </div>
    </Card>
  );
}
