"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 py-2 relative">
      <div
        aria-hidden="true"
        className="max-h-[170px] md:max-h-[380px] lg:max-h-[600px] overflow-hidden"
      >
        <Slider {...settings}>
          <div aria-hidden="false" className="relative w-full">
            <Image
              src="/banner-1.webp"
              quality={10}
              priority
              alt="banner-1"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={300}
            />
          </div>
          <div>
            <Image
              src="/banner-2.webp"
              alt="banner-2"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={500}
              height={300}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
