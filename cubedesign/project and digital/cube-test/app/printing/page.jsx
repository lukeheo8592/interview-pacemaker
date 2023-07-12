"use client";

import { useState } from "react";
import styles from "@styles/footer.module.css";
import printing from "@styles/printing.module.css";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

const PrintingPage = () => {
  const [print, setPrint] = useState(true);
  const [design, setDesign] = useState(false);
  const [product, setProduct] = useState(false);
  const [slide, setSlide] = useState(true);
  const [isclick, setclick] = useState(false);

  //oursercie

  const isPrint = (e) => {
    e.target.parentNode.classList.add("bg-red-600");
    e.target.parentNode.nextElementSibling.classList.remove("bg-red-600");
    e.target.parentNode.nextElementSibling.nextElementSibling.classList.remove(
      "bg-red-600"
    );
    setPrint(true);
    setDesign(false);
    setProduct(false);
  };
  const isDesign = (e) => {
    e.target.parentNode.classList.add("bg-red-600");
    e.target.parentNode.nextElementSibling.classList.remove("bg-red-600");
    e.target.parentNode.previousElementSibling.classList.remove("bg-red-600");
    setPrint(false);
    setDesign(true);
    setProduct(false);
  };
  const isProduct = (e) => {
    e.target.parentNode.classList.add("bg-red-600");
    e.target.parentNode.previousElementSibling.classList.remove("bg-red-600");
    e.target.parentNode.previousElementSibling.previousElementSibling.classList.remove(
      "bg-red-600"
    );
    setPrint(false);
    setDesign(false);
    setProduct(true);
  };

  // service list

  const isModal = (e) => {
    if (e.target.id == "container") {
      e.target.classList.remove(printing.servicelist);
      e.target.classList.add(printing.servicelist1);

      e.target.firstElementChild.classList.remove(printing.serviceText);
      e.target.firstElementChild.classList.add(printing.serviceText1);

      e.target.lastElementChild.classList.remove(printing.modalExit);
      e.target.lastElementChild.classList.add(printing.modalExit1);
    }
  };

  const exitModal = (e) => {
    e.target.parentNode.parentNode.classList.remove(printing.servicelist1);
    e.target.parentNode.parentNode.classList.add(printing.servicelist);
    e.target.parentNode.parentNode.firstElementChild.classList.remove(
      printing.serviceText1
    );
    e.target.parentNode.parentNode.firstElementChild.classList.add(
      printing.serviceText
    );
    e.target.parentNode.classList.remove(printing.modalExit1);
    e.target.parentNode.classList.add(printing.modalExit);
  };
  //slide

  const rightSlide = () => {
    setSlide(false);
  };

  const leftSlide = () => {
    setSlide(true);
  };

  return (
    <div>
      {/* bacground photo */}
      <div className={printing.bgimg}>
        <div className="h-full flex flex-col justify-end pl-20 pb-36">
          <h1 className="text-4xl font-semibold">Printing</h1>{" "}
          <p className="text-lg">
            {" "}
            <br />
            Maximize your visual impact with our professional printing and{" "}
            <br /> installation services, including wayfinding and promotional
            products.
          </p>
        </div>
      </div>
      {/* our service */}
      <div>
        <div className="flex flex-col items-center">
          <div className="h-12">
            <h2>Our Service</h2>
          </div>
          <div className="w-7/12 flex justify-between border-b-8 border-red-600 mb-10">
            <div id="printing" className="w-2/6 bg-red-600" onClick={isPrint}>
              <p>Printing & Installation</p>
            </div>
            <div id="design" className="w-2/6" onClick={isDesign}>
              <p> wayfinding Design</p>
            </div>
            <div id="product" className="w-2/6" onClick={isProduct}>
              <p>Promotional Product</p>
            </div>
          </div>
          <div className="w-7/12 h-96">
            {print ? (
              <div className="w-full h-full flex justify-between relative">
                <div
                  id="container"
                  className={printing.servicelist}
                  onClick={isModal}
                >
                  <div className={printing.serviceText}>
                    {" "}
                    <p className="ml-5">Large Format Printing</p>
                  </div>
                  <div
                    id="exit"
                    className={printing.modalExit}
                    onClick={exitModal}
                  >
                    {" "}
                    <button>x</button>
                  </div>
                </div>
                <div
                  id="container"
                  className={printing.servicelist}
                  onClick={isModal}
                >
                  <div className={printing.serviceText}>
                    {" "}
                    <p className="ml-5">Digital Printing Service</p>
                  </div>
                  <div
                    id="exit"
                    className={printing.modalExit}
                    onClick={exitModal}
                  >
                    {" "}
                    <button>x</button>
                  </div>
                </div>
                <div
                  id="container"
                  className={printing.servicelist}
                  onClick={isModal}
                >
                  <div className={printing.serviceText}>
                    {" "}
                    <p className="ml-5">Installation Service</p>
                  </div>
                  <div
                    id="exit"
                    className={printing.modalExit}
                    onClick={exitModal}
                  >
                    {" "}
                    <button>x</button>
                  </div>
                </div>
              </div>
            ) : design ? (
              <div className="w-full h-full flex justify-between relative">
                <div
                  id="container"
                  className={printing.servicelist}
                  onClick={isModal}
                >
                  <div className={printing.serviceText}>
                    {" "}
                    <p className="ml-5">Large Format Printing</p>
                  </div>
                  <div
                    id="exit"
                    className={printing.modalExit}
                    onClick={exitModal}
                  >
                    {" "}
                    <button>x</button>
                  </div>
                </div>
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
          speed={1200}
          slidesPerGroup= {3}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          scrollbar={{ draggable: true }}
          navigation
          pagination={{ clickable: true }}
          modules={[ Pagination, Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 3,
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
