import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper";
import SliderCard from "../SliderCard";
import images from "@/config/images";
import { useSwiper } from "swiper/react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import data from "@/config/data";

const CarouselComponent = () => {
  const ref = useRef<any | null>(null);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const handlePrev = () => {
    if (!ref.current) return;
    ref.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!ref.current) return;
    ref.current.swiper.slideNext();
  };

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (window.innerWidth < 900) {
      setIsMobile(true);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="max-w-sm md:space-x-4 md:max-w-7xl">
      <div className="absolute z-10 space-x-[78rem] mt-44 hidden md:block lg:block xl:block">
        <button
          className="w-12 h-12 -ml-12 bg-white rounded-full hover:bg-pink-600 group"
          onClick={handlePrev}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-blue-900 group-hover:text-white"
          />
        </button>
        <button
          className="w-12 h-12 bg-white rounded-full hover:bg-pink-600 group"
          onClick={handleNext}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-blue-900 group-hover:text-white"
          />
        </button>
      </div>
      <Swiper
        slidesPerView={isMobile ? 1 : 2}
        spaceBetween={30}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        ref={ref}
        className="relative z-0"
      >
        {data.slider.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <SliderCard
              image={item.image}
              title={item.title}
              department={item.department}
              description={item.description}
              link={item.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
