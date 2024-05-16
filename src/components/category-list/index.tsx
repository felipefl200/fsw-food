import { db } from "@/lib/prisma";
import { CategoryItem } from "./category-item";

export default async function CategoryList() {
  const categories = await db.category.findMany({});
  return (
    <div className="flex items-center gap-2 overflow-x-scroll  [&::-webkit-scrollbar]:hidden">
      {categories.map((categorie) => (
        <CategoryItem key={categorie.id} category={categorie} />
      ))}
    </div>
  );
}
