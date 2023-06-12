"use client";

import { useState } from "react";
import styles from "@styles/footer.module.css";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

const PrintingPage = () => {
  const [print, setPrint] = useState(true);
  const [design, setDesign] = useState(false);
  const [product, setProduct] = useState(false);
  const [slide, setSlide] = useState(true);

  const isPrint = () => {
    setPrint(true);
    setDesign(false);
    setProduct(false);
  };
  const isDesign = () => {
    setPrint(false);
    setDesign(true);
    setProduct(false);
  };
  const isProduct = () => {
    setPrint(false);
    setDesign(false);
    setProduct(true);
  };

  const rightSlide = () => {
    setSlide(false);
  };

  const leftSlide = () => {
    setSlide(true);
  };

  return (
    <div>
      {/* bacground photo */}
      <div className="h-40">
        {" "}
        <div className="h-full bg-red-300">Background photo</div>
      </div>
      {/* our service */}
      <div>
        <div className="flex flex-col items-center">
          <div className="h-12">
            <h2>Our Service</h2>
          </div>
          <div className="w-7/12 flex justify-between">
            <div onClick={isPrint}>
              <p>Printing & Installation</p>
            </div>
            <div onClick={isDesign}>
              <p> wayfinding Design</p>
            </div>
            <div onClick={isProduct}>
              <p>Promotional Product</p>
            </div>
          </div>
          <div className="w-7/12 h-60">
            {print ? (
              <div className="w-full h-full flex justify-between">
                <div className="h-full w-1/4 bg-red-300"></div>
                <div className="h-full w-1/4 bg-red-300"></div>
                <div className="h-full w-1/4 bg-red-300"></div>
              </div>
            ) : design ? (
              <div className="w-full h-full flex justify-between">
                <div className="h-full w-1/4 bg-indigo-900"></div>
                <div className="h-full w-1/4 bg-indigo-900"></div>
              </div>
            ) : (
              <div className="w-full h-full flex justify-between">
                <div className="h-full w-1/4 bg-emerald-600"></div>
                <div className="h-full w-1/4 bg-emerald-600"></div>
                <div className="h-full w-1/4 bg-emerald-600"></div>
              </div>
            )}
          </div>
        </div>
        <div></div>
      </div>
      {/* gallery */}
      <div className={styles.galleryBackground}>
        {slide ? (
          <div className="flex w-2/5 h-full justify-center items-center">
            <div>
              {" "}
              <p>Take a look our Gallery </p>{" "}
            </div>
          </div>
        ) : (
          <button className="text-2xl" onClick={leftSlide}>
            {`<`}{" "}
          </button>
        )}

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          scrollbar={{ draggable: true }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 7,
            },
          }}
        >
          <SwiperSlide className="bg-emerald-600">Slide 1</SwiperSlide>
          <SwiperSlide className="bg-emerald-600">Slide 2</SwiperSlide>
          <SwiperSlide className="bg-emerald-600">Slide 3</SwiperSlide>
          <SwiperSlide className="bg-emerald-600">Slide 4</SwiperSlide>
          <SwiperSlide className="bg-emerald-600">Slide 5</SwiperSlide>

          <SwiperSlide className="bg-emerald-600">Slide 6</SwiperSlide>
          ...
        </Swiper>

        <button className="text-2xl " onClick={rightSlide}>
          {" "}
          {`>`}
        </button>
      </div>
      {/* reference */}
      <div className="flex h-60 w-full items-center justify-center bg-red-300">
        {" "}
        <p>reference</p>
      </div>
    </div>
  );
};

export default PrintingPage;
