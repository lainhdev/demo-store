import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookText, Home, Mail, Menu } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <Menu className="mr-2" /> DANH MỤC SẢN PHẨM
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <Link href="/categories/ao">
              <DropdownMenuItem>Áo</DropdownMenuItem>
            </Link>
            <Link href="/categories/quan">
              <DropdownMenuItem>Quần</DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link href="/">
        <Button variant="ghost">
          <Home className="mr-2" /> TRANG CHỦ
        </Button>
      </Link>
      <Link href="/blogs">
        <Button variant="ghost">
          <BookText className="mr-2" /> BLOGS - TIN TỨC
        </Button>
      </Link>
      <Link href="/g/lien-he">
        <Button variant="ghost">
          <Mail className="mr-2" /> LIÊN HỆ
        </Button>
      </Link>
    </>
  );
};

export default Navbar;
