import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto p-5">
        <Link href="/">
          <h1 className="text-2xl text-center font-bold my-10">STOREFRONT</h1>
        </Link>
        <p className="text-center">
          Với mục tiêu không ngừng phát triển và hoàn thiện, sản phẩm của Juno
          luôn mang đến cho phụ nữ sự tự tin, toả sáng để thành công trong công
          việc, cuộc sống với phong cách thời trang riêng biệt, ấn tượng. Bên
          cạnh việc chú trọng đến sự êm ái, giá cả phải chăng, sản phẩm Juno
          luôn được chỉnh chu trong từng chi tiết, mẫu mã đa dạng, phù hợp mọi
          hoàn cảnh và mang hơi thở thời trang trong nước, thế giới...
        </p>
        <div className="footer-social flex flex-row justify-center items-center my-5">
          <Link
            href="/"
            aria-label="more on insgram"
            className="instagram text-white p-1 rounded-full mx-2"
          >
            <Instagram />
          </Link>
          <Link
            href="https://www.tiktok.com/"
            aria-label="more on Tiktok"
            className="tiktok text-white p-1 rounded-full"
          >
            <Image src="/tiktok.webp" alt="tiktok" width={40} height={40} />
          </Link>
          <Link
            href="https://www.facebook.com/"
            aria-label="more on facebook"
            className="facebook text-white p-1 rounded-full mx-2"
          >
            <Facebook />
          </Link>
          <Link
            href="https://www.youtube.com/"
            aria-label="more on youtube"
            className="youtube text-white p-1 rounded-full mx-2"
          >
            <Youtube />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div>
            <Link href="/g/ve-chung-toi" className="font-bold underline">
              VỀ CHÚNG TÔI
            </Link>
          </div>
          <div>
            <Link href="/g/ho-tro-khach-hang" className="font-bold underline">
              HỖ TRỢ KHÁCH HÀNG
            </Link>
          </div>
          <div>
            <Link href="/g/chinh-sach-mua-hang" className="font-bold underline">
              CHÍNH SÁCH MUA HÀNG
            </Link>
          </div>
          <div>
            <Link href="/g/lien-he" className="font-bold underline">
              LIÊN HỆ VỚI CHÚNG TÔI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
