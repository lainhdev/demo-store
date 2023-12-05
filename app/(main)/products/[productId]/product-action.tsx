/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ChevronLeft, ChevronRight, PlusSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Product, Variant } from "@/utils/types";

const ProductAction = ({
  product,
  variants,
}: {
  product: Product;
  variants: Variant[];
  images: string[];
}) => {
  const [variantSelected, setvariantSelected] = useState(variants[0]);
  const [quantity, setQuantity] = useState(0);
  return (
    <CardContent className="flex flex-col items-center lg:grid grid-cols-2">
      {variantSelected.imgSrc ? (
        <img
          src={variantSelected.imgSrc}
          alt={product.name}
          width={500}
          height={500}
        />
      ) : (
        <Image src="/logo.webp" alt="logo" width={500} height={500} />
      )}
      <div className="">
        <h1 className="mt-10 lg:mt-0 font-bold border-l-4 border-three pl-2 text-2xl">
          {product.name}
        </h1>
        <p className="mt-10 mb-2">Đơn giá</p>
        <div className="text-one text-2xl font-semibold mb-10 flex flex-row justify-start">
          <p>{variantSelected.price}đ</p>
        </div>
        {!!variants.length && (
          <div>
            <p>Loại</p>
            <div className="mt-3">
              {variants.map((variant: Variant) => (
                <Button
                  key={variant.variantName}
                  className={`${
                    variantSelected.variantName === variant.variantName
                      ? "bg-white border-gray-400"
                      : ""
                  } mx-2`}
                  variant="outline"
                  onClick={() => setvariantSelected(variant)}
                >
                  {variant.variantName}
                </Button>
              ))}
            </div>
          </div>
        )}
        <div className="mt-5">
          <p>Số lượng</p>
          <div className="mt-3 flex flex-row">
            <Button
              size="icon"
              onClick={() => {
                if (quantity > 0) setQuantity(quantity - 1);
              }}
            >
              <ChevronLeft />
            </Button>
            <Input
              className="w-12"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <Button size="icon" onClick={() => setQuantity(quantity + 1)}>
              <ChevronRight />
            </Button>
          </div>
        </div>
        <Button
          className="mt-10 w-full lg:w-auto font-semibold text-xl"
          variant="outline"
        >
          <PlusSquare className="mr-2" width={20} /> Thêm vào giỏ hàng
        </Button>
      </div>
    </CardContent>
  );
};

export default ProductAction;
