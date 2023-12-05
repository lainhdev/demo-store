import Editor from "@/components/editor/editor";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ProductAction from "./product-action";
import { cookies } from "next/headers";
import { Product } from "@/utils/types";
import { createClient } from "@/utils/supabase/server";

async function getData(productId: string): Promise<Product | null> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data } = await supabase.from("products").select().eq("id", productId);
  return data ? data[0] : null;
}
const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await getData(params.productId);
  if (!product) return <h1>Not Found</h1>;
  const images = JSON.parse(product.images);
  let variants = JSON.parse(product.variants);
  if (typeof variants === "string") variants = JSON.parse(variants);
  const jsonState = JSON.parse(product.description);
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <Card className="mx-5 lg:mx-auto py-5">
        <ProductAction product={product} images={images} variants={variants} />
      </Card>
      <Card className="mt-10 mx-5 lg:mx-auto">
        <CardHeader>
          <CardTitle>Mô tả sản phẩm</CardTitle>
        </CardHeader>
        <CardContent>
          <Editor jsonState={jsonState} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductPage;
