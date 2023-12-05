import NewProducts from "@/components/common/new-products";
import ProductSlider from "@/components/common/product-slider";
import Banner from "@/components/navigation/banner";
const HomePage = async () => {
  return (
    <div>
      <Banner />
      <ProductSlider title="Sản phẩm bán chạy" />
      <NewProducts />
    </div>
  );
};

export default HomePage;
