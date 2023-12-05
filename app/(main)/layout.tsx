/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/navigation/footer";
import Navigation from "@/components/navigation/navigation";
import Link from "next/link";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navigation />
      <main className="bg-first min-h-[500px]">{children}</main>
      <Footer />
      {/* <Link href="https://zalo.me/0382202073" className="fixed bottom-10 right-10 rounded-full">
        <img alt="zalo" src="/Zalo.webp" width={40} height={40} />
      </Link> */}
    </div>
  );
};

export default MainLayout;
