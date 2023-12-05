"use client";
import ProductItem from "@/components/common/product-item";
import { createClient } from "@/utils/supabase/client";
import { Category } from "@/utils/types";
import { useEffect, useState } from "react";

const CategoryPage = ({
  params,
}: {
  params: { categoryConnectionCode: string };
}) => {
  const [category, setCategory] = useState<Category | null>(null);

  const fetchProductsFromCategory = async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("categories")
      .select("*, products(*)")
      .eq("connection_code", params.categoryConnectionCode);
    if (data) setCategory(data[0]);
  };

  useEffect(() => {
    fetchProductsFromCategory();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <h1 className="my-5 font-bold">{category?.name}</h1>
      {!category?.products.length && (
        <p className="flex items-center justify-center h-80 w-full">
          Không tìm thấy sản phẩm
        </p>
      )}
      <div className="gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
