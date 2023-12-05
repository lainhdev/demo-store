"use client";
import Image from "next/image";
import { Menu, Search, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import Drawer from "./drawer";

const Topbar = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div
        className={`fixed left-0 bottom-0 h-screen max-w-lg w-60 bg-three z-30 ease-in-out duration-300 ${
          isOpenDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Drawer />
      </div>
      <div
        className={`fixed left-0 bottom-0 h-screen max-w-lg w-screen bg-[#000] opacity-25 z-20 ease-in-out duration-300 ${
          isOpenDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={() => setIsOpenDrawer(false)}
      ></div>
      <div className="md:bg-transparent">
        <div className="max-w-screen-xl mx-auto p-5 flex flex-row justify-between items-center">
          <Button
            className="md:hidden"
            onClick={() => setIsOpenDrawer(true)}
            size="icon"
            aria-label="menu"
          >
            <Menu width={20} />
          </Button>
          <Link href="/">
            <h1 className="text-2xl text-black font-bold">STOREFRONT</h1>
          </Link>
          <div className="hidden md:flex flex-row">
            <Input
              placeholder="Tìm gì đó?"
              className="text-one placeholder:text-one w-[20rem] lg:w-[35rem] border-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Link href={`/search?k=${searchTerm}`}>
              <Button className="ml-2" size="icon">
                <Search width={20} />
              </Button>
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <div className="hidden md:block mr-5 text-black font-bold">
              <p className="text-xs">Liên hệ</p>
              <Link href="tel:+84382202312">0382 2023 12</Link>
            </div>
            <Button
              className="ml-2"
              size="icon"
              aria-label="cart"
            >
              <ShoppingCartIcon width={20} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
