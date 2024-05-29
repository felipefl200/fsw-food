import { db } from "@/lib/prisma";
import { CategoryItem } from "./category-item";
import { SwiperProvider } from "../swiper-provider";
import Link from "next/link";

export default async function CategoryList() {
  const categories = await db.category.findMany({});
  return (
    <div className="-my-2 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      <SwiperProvider>
        {categories.map((categorie) => (
          <Link href={`/categories/${categorie.id}/products`}>
            <CategoryItem key={categorie.id} category={categorie} />
          </Link>
        ))}
      </SwiperProvider>
    </div>
  );
}
