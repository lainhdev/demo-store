"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductItem from "./product-item";
import { Product } from "@/utils/types";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const ProductSlider = ({ title }: { title: string }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProductsFromCategory = async () => {
    const supabase = createClient();
    const { data } = await supabase
      .from("products")
      .select("*, categories!inner(*)")
      .eq("categories.name", title);
    if (data) setProducts(data);
  };

  useEffect(() => {
    fetchProductsFromCategory();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-5 my-5">
      <Card className="">
        <CardHeader>
          <CardTitle className="border-l-4 border-three pl-3">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-auto whitespace-nowrap w-full">
            {products.map((product) => (
              <div
                key={product.id}
                className="inline-block max-w-[150px] md:max-w-none border border-gray-200 mx-1"
              >
                <ProductItem product={product} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductSlider;
