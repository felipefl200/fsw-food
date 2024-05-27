import { db } from "@/lib/prisma";
import { CategoryItem } from "./category-item";
import { SwiperProvider } from "../swiper-provider";

export default async function CategoryList() {
  const categories = await db.category.findMany({});
  return (
    <div className="-my-2 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      <SwiperProvider>
        {categories.map((categorie) => (
          <CategoryItem key={categorie.id} category={categorie} />
        ))}
      </SwiperProvider>
    </div>
  );
}
