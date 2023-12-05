/* eslint-disable @next/next/no-img-element */
import { Product, Variant } from "@/utils/types";
import Link from "next/link";

const ProductItem = ({ product }: { product: Product }) => {
  const images = JSON.parse(product.images);
  let variants = JSON.parse(product.variants) as Variant[];
  if (typeof variants === "string") variants = JSON.parse(variants);
  return (
    <Link href={`/products/${product.id}`} className="max-w-[200px] block">
      <div className="max-w-[200px] shadow-lg p-2 bg-white">
        <div className="h-[200px] flex items-center justify-center overflow-hidden">
          {variants[0].imgSrc ? (
            <img src={variants[0].imgSrc} alt="product" />
          ) : (
            <h1 className="text-xl font-bold text-center">STOREFRONT</h1>
          )}
        </div>
        <p className="max-w-[200px] overflow-hidden whitespace-nowrap text-md mt-2 text-ellipsis">
          {product.name}
        </p>
        <div className="text-one text-sm mt-2 flex flex-col md:flex-row justify-end items-end">
          <p>{variants[0].price}đ</p>
          {/* <p className="min-h-[20px]">
            {product.isShowSalePrice && `${product.salePrice}đ`}
          </p> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
