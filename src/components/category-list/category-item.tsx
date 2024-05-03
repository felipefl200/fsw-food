import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}
export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className="w-full">
      <div className="flex items-center w-[140px] shadow-lg px-2 py-3 gap-2 rounded-full">        
        <Image
          src={category.imageUrl}
          alt={category.name}
          height={30}
          width={30}
        />
        <span className="text-sm font-semibold">{category.name}</span>
      </div>
    </div>
  );
}
