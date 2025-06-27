import Slide from "./Slide";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import images from "@/config/images";

const slides = [0, 1, 2];

const CarouselSlider = () => {
  const [scope, animate] = useAnimate();
  const [slideChanged, setSlideChanged] = useState(false);
  useEffect(() => {
    animate([
      [".animate-one", { opacity: [0, 1], y: [-250, 0] }, { duration: 0.6 }],
      [
        ".animate-two",
        { opacity: [0, 1], y: [100, 0] },
        { duration: 0.6, delay: 0.2 },
      ],
      [
        ".animate-three",
        { opacity: [0, 1], y: [100, 0] },
        { duration: 0.5, delay: 0.3 },
      ],
      [
        ".animate-four",
        { opacity: [0, 1], y: [100, 0] },
        { duration: 0.5, delay: 0.3 },
      ],
      [
        ".animate-five",
        { opacity: [0, 1], x: [100, 0] },
        { duration: 0.2, delay: 0.1 },
      ],
      [".animate-six", { opacity: [0, 1], x: [100, 0] }, { duration: 0.5 }],
    ]);
  }, [slideChanged]);
  return (
    <div className="relative w-full overflow-hidden bg-slate-100" ref={scope}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        onSlideChange={() => setSlideChanged(!slideChanged)}
        className="mySwiper"
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <Slide />
          </SwiperSlide>
        ))}
      </Swiper>
      <img
        src={images.carouselBottom}
        className="absolute bottom-0 z-10 hidden md:block"
      />
    </div>
  );
};

export default CarouselSlider;
