"use client";

import { Product } from "@/utils/types";
import ProductItem from "./product-item";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
const NewProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchNewProducts = async () => {
    const supabase = createClient();
    const { data } = await supabase.from("products").select("*");
    if (data) setProducts(data);
  };

  useEffect(() => {
    fetchNewProducts();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-5 my-5">
      <p className="bg-white flex items-center justify-center py-3 font-bold border-b-2 border-two mb-3">
        SẢN PHẨM MỚI
      </p>
      <div className="gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {products.map((product) => (
          <div key={product.id} className="border-gray-200 border">
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
