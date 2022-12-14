import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Asset } from "../types/graphql";

const SwiperContainer = styled.ul`
  overflow-x: hidden;
`;
export default function TechStack({ tech }: { tech: Asset[] }) {
  const [itemsPerView, setItemPerView] = useState<number>(Number);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 414) {
        setItemPerView(1);
      }
      if (window.innerWidth > 414) {
        setItemPerView(2);
      }
      if (window.innerWidth > 1024) {
        setItemPerView(4);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Swiper
      spaceBetween={5}
      centeredSlides={false}
      slidesPerView={itemsPerView}
      // loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperContainer>
        {tech.map((tech) => (
          <li key={tech.url}>
            <SwiperSlide>
              <Image
                alt="logo"
                src={tech.url}
                width={"80px"}
                height={"70px"}
              ></Image>
            </SwiperSlide>
          </li>
        ))}
      </SwiperContainer>
    </Swiper>
  );
}
