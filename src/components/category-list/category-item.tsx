import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}
export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <div className="w-full">
      <div className="flex h-12 min-w-fit items-center justify-center gap-3 rounded-full bg-white px-8 shadow-md">
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
