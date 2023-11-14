import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { PiArrowUpRightThin, PiStarOfDavidDuotone } from "react-icons/pi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Header from '../components/Header'
import Footer from "../components/Footer";

const swiperLists = [
  {
    img: "",
    text: "Hitmap allowed our company to grow from 5 locations to 47, Matthew Cohen, CEO / Fundador Off The Grid - EE.UU.",
    button: "Hitmap",
  },
  {
    img: "",
    text: "Hitmap allowed our company to grow from 5 locations to 47, Matthew Cohen, CEO / Fundador Off The Grid - EE.UU.",
    button: "Hitmap",
  },
  {
    img: "",
    text: "Hitmap allowed our company to grow from 5 locations to 47, Matthew Cohen, CEO / Fundador Off The Grid - EE.UU.",
    button: "Hitmap",
  },
  {
    img: "",
    text: "Hitmap allowed our company to grow from 5 locations to 47, Matthew Cohen, CEO / Fundador Off The Grid - EE.UU.",
    button: "Hitmap",
  },
];

const lists = [
  {
    text: "ALL YOUR DECISIONS CAN BE SUPPORTED WITH OBJECTIVE DATA, LEAVING ASIDE SUBJECTIVITY.",
  },
  {
    text: "WE GROUP AND ANALYZE MULTIPLE LAYERS OF DATA, WITH MORE THAN 800 VARIABLES, IMPOSSIBLE TO HANDLE MANUALLY.",
  },
  {
    text: "BY USING ADVANCED ALGORITHMS WE CAN PREDICT BEHAVIORS, SO YOU CAN MAKE INFORMED DECISIONS WITH LESS RISK.",
  },
  {
    text: "ADAPTED TO THE NEEDS OF YOUR BUSINESS, OUR PLATFORM IS 100% CUSTOMIZABLE ACCORDING TO THE BUSINESS AND CLIENT REQUIREMENTS.",
  },
  {
    text: "WE DELIVER SOME INDICATORS, WHICH SUMMARIZE HUNDREDS OF DATA, SO THAT YOU CAN MANAGE THE INFORMATION IN A SIMPLE WAY.",
  },
  {
    text: "WE GEO-REFERENCE ALL THE INFORMATION ON A MAP, SO THAT YOU CAN VIEW IT QUICKLY AND EASILY.",
  },
];

const Index = () => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header 
        isOpen={isOpen}
        handleIsOpen={handleOpenMenu}
        />
      {isOpen === false && (
        <div className="bg-custom-image bg-cover back-ground pt-[100px] pb-[220px]">
          <h2 className="text-xl font-[700] text-center text-[#505050]">
            HITMAP
          </h2>
          <p className="text-center text-lg-4 text-[#505050]">
            TERRITORIAL INTELLIGENCE
          </p>
          <div className="mt-12 flex justify-center">
            <button className=" flex items-center border border-solid-[#2c2c2c]" onClick={handleOpenMenu}>
              <span className=" px-8 py-2.5 text-base text-[#0E0E0E] border-r border-solid-[#2c2c2c] font-[600]">
                START NOW
              </span>
              <div className="py-2.5 px-2">
                <PiArrowUpRightThin className="text-[#0E0E0E] text-md" />
              </div>
            </button>
          </div>
        </div>
      )}
      {isOpen === true && (
        <div className="py-12 bg-black">
          <div className="2xl:container xl:container lg:container md:container sm:container mx-auto grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-10">
            <div>
              <h2 className="pt-3 text-md-9 text-[#6A6A6A] border-t border-white">
                Navigation
              </h2>
              <div className="mt-10 flex justify-between items-center">
                <a className="text-md-10 text-white" href="#what">WHAT IS HITMAP</a>
                <PiArrowUpRightThin className="text-[#61ADF4] text-md-7" />
              </div>
              <div className="mt-5 flex justify-between items-center">
                <a className="text-md-10 text-white" href="#services">SERVICES</a>
                <PiArrowUpRightThin className="text-[#61ADF4] text-md-7" />
              </div>
              <div className="mt-5 flex justify-between items-center">
                <p className="text-md-10 text-white">ABOUT US</p>
                <PiArrowUpRightThin className="text-[#61ADF4] text-md-7" />
              </div>
              <div className="mt-5 flex justify-between items-center">
                <p className="text-md-10 text-white">FAQS</p>
                <PiArrowUpRightThin className="text-[#61ADF4] text-md-7 " />
              </div>
            </div>
            <div>
              <h2 className="pt-3 text-md-9 text-[#6A6A6A] border-t border-white">
                News
              </h2>
              <div className="mt-10 grid grid-cols-2 gap-10">
                <div>
                  <img src="/imgs/news1.png" alt="" />
                  <div className="mt-5 flex items-center">
                    <span className="text-xs text-white">SEP 24, 2023 / </span>
                    <span className="text-xs text-white ml-4 border border-white rounded-[55px] px-2 py-1">
                      VISION
                    </span>
                  </div>
                  <p className="mt-5 text-xs-3 text-white font-[500]">
                    SOFTWARE / INTELIGENCIA TERRITORIAL
                  </p>
                </div>
                <div>
                  <img src="/imgs/news1.png" alt="" />
                  <div className="mt-5 flex items-center">
                    <span className="text-xs text-white">SEP 24, 2023 / </span>
                    <span className="text-xs text-white ml-4 border border-white rounded-[55px] px-2 py-1">
                      VISION
                    </span>
                  </div>
                  <p className="mt-5 text-xs-3 text-white font-[500]">
                    SOFTWARE / INTELIGENCIA TERRITORIAL
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="pt-3 text-md-9 text-[#6A6A6A] border-t border-white">
                Login
              </h2>
              <div className="mt-10 flex justify-between items-center">
                <p className="text-md-10 text-white">LOGIN</p>
                <PiArrowUpRightThin className="text-[#61ADF4] text-md-7" />
              </div>
              <div className="mt-5 flex justify-between items-center">
                <p className="text-md-10 text-white">SIGN UP</p>
                <PiArrowUpRightThin className="text-[#61ADF4] text-md-7" />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="bg-[#D9D9D9]">
        <video
          src="/videos/video.mp4"
          muted
          loop
          playsInline
          autoPlay
          controlsList="nodownload"
          className="w-full"
        ></video>
      </div>
      <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1" id="what">
        <div className="cols-span-2 pr-5 pt-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-r-[24px]">
          <div className="grid grid-cols-3 gap-4">
            <div className="..."></div>
            <div className="col-span-2 ...">
              <div>
                <h2 className="text-lg-2 font-[700] inline pb-7 border-b-2 border-solid-[#505050]">
                  WHAT IS HITMAP?
                </h2>
              </div>
              <div className="mt-12">
                <p className="pt-12 text-[#4c4c4c] text-sm-1">
                  We are a company that analyzes and compiles large amounts of
                  data through territorial intelligence, with the aim of
                  providing useful information, which considers all variables,
                  but with indicators that in a simplified way make informed
                  decisions and therefore with less associated risk.
                </p>
                <p className="pt-10 text-[#4c4c4c] text-sm-1">
                  With our services they will be able to make their future
                  decisions based on objective data, leaving aside intuition.
                  These include the study of sales prediction, market potential
                  and the city’s expansion process.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cols-span-3 flex justify-center">
          <img src="imgs/global.png" className="w-2/3 align-top" alt="" />
        </div>
      </div>
      <div className="mt-12 2xl:container xl:container lg:container md:container sm:container mx-auto px-12 py-12 bg-gradient-to-r from-[#61ADF4] to-[#88C3FA] rounded-[20px]">
        <p className="px-12 py-8 2xl:w-3/5 xl:w-3/5 lg:w-3/5 md:w-full mx-auto text-md text-white ">
          DELIVERING RELEVANT INFORMATION FOR DECISION MAKING THROUG A FRIENDLY
          AND ILLUSTRATIVE INTERFACE.
        </p>
      </div>
      <div className="mt-10 2xl:container xl:container lg:container md:container sm:container mx-auto grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10">
        {lists &&
          lists.map((item, index) => (
            <div
              className="px-12 py-8 border border-solid-[#000] rounded-[20px]"
              key={index}
            >
              <button className="px-8 py-4 border border-solid-[#828282] rounded-[23px]"></button>
              <p className="mt-5 text-md text-[#424242]">{item.text}</p>
            </div>
          ))}
      </div>
      <div className="mt-12 2xl:container xl:container lg:container md:container sm:container mx-auto" id="services">
        <h2 className="py-12 2xl:text-lg-6 xl:text-lg-6 lg:text-lg-6 md:text-lg-5 sm:text-lg-5 border-b border-solid-[#BFBFBF]">
          SERVICES WE OFFER
        </h2>
        <div className="py-12 flex justify-between border-b border-solid-[#BFBFBF]">
          <p className="text-lg-3">NEW LOCATIONS</p>
          <div className="relative">
            <input
              type="search"
              placeholder="Services We Offer"
              className="pr-4 py-3 border-b border-solid-[#BFBFBF] focus:outline-none"
            />
            <div className="absolute top-4 right-0">
              <PiArrowUpRightThin className="text-[#0E0E0E] text-md" />
            </div>
          </div>
        </div>
        <div className="py-12 flex justify-between border-b border-solid-[#BFBFBF]">
          <p className="text-lg-3">ASSET MANAGEMENT</p>
          <div className="relative">
            <input
              type="search"
              placeholder="Services We Offer"
              className="pr-4 py-3 border-b border-solid-[#BFBFBF] focus:outline-none"
            />
            <div className="absolute top-4 right-0">
              <PiArrowUpRightThin className="text-[#0E0E0E] text-md" />
            </div>
          </div>
        </div>
        <div className="py-12 flex justify-between border-b border-solid-[#BFBFBF]">
          <p className="text-lg-3">IN-DEPTH STUDY OF ZONE RECOMMENDATION</p>
          <div className="relative">
            <input
              type="search"
              placeholder="Services We Offer"
              className="pr-4 py-3 border-b border-solid-[#BFBFBF] focus:outline-none"
            />
            <div className="absolute top-4 right-0">
              <PiArrowUpRightThin className="text-[#0E0E0E] text-md" />
            </div>
          </div>
        </div>
        <div className="py-12 flex justify-between border-b border-solid-[#BFBFBF]">
          <p className="text-lg-3">CAPITAL GAIN PREDICTION</p>
          <div className="relative">
            <input
              type="search"
              placeholder="Services We Offer"
              className="pr-4 py-3 border-b border-solid-[#BFBFBF] focus:outline-none"
            />
            <div className="absolute top-4 right-0">
              <PiArrowUpRightThin className="text-[#0E0E0E] text-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-[80px] pb-[30px] bg-gradient-to-b from-[#3183CF] to-white grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-10">
        <div className="pt-12 grid grid-cols-7 gap-4">
          <div className="..."></div>
          <div className="col-span-6 ...">
            <div className="flex items-center">
              <span className="text-xs">SEP 24, 2023 / </span>
              <span className="text-xs ml-4 border border-solid-black rounded-[55px] px-2 py-1">
                ABACUS
              </span>
              <span className="text-xs ml-4 border border-solid-black rounded-[55px] px-2 py-1">
                GOLDEN
              </span>
            </div>
            <div className="mt-5">
              <h2 className="text-lg font-[500] text-[#1B1B1B]">REPORTE</h2>
              <h2 className="mt-5 pb-[100px] text-lg font-[500] text-[#1B1B1B] border-b border-solid-[#1B1B1B]">
                SCALEUP TO UK
              </h2>
              <p className="mt-[50px] text-md w-5/6 text-[#1B1B1B]">
                We were selected among the 50 companies in America that can
                scale up to the UK according to a Scaleup to UK report supported
                by the United Kingdom Department of International Trade.
              </p>
              <div className="mt-[100px] flex ">
                <button className=" flex items-center border border-solid-[#2c2c2c]">
                  <span className=" px-8 py-2.5 text-base text-[#0E0E0E] border-r border-solid-[#2c2c2c]">
                    START NOW
                  </span>
                  <div className="py-2.5 px-2">
                    <PiArrowUpRightThin className="text-[#0E0E0E] text-md" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="imgs/frame.png" className="w-full" alt="" />
        </div>
      </div>
      <div className="mt-12 2xl:container xl:container lg:container md:container sm:container mx-auto">
        <h2 className="text-md-6">VARIABLES USED</h2>
        <div className="mt-5 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-10 px-5">
          <span className="px-12 py-8 rounded-[20px] border border-solid-black text-[#424242] text-md-5">
            DEMOGRAPHIC VARIABLES OF THE AREA
          </span>
          <span className="px-12 py-8 rounded-[20px] border border-solid-black text-[#424242] text-md-5">
            ZONE CONNECTIVITY
          </span>
          <span className="px-12 py-8 rounded-[20px] border border-solid-black text-[#424242] text-md-5">
            TRANSFER TIME TO THE MAIN SQUARE
          </span>
          <span className="px-12 py-8 rounded-[20px] border border-solid-black text-[#424242] text-md-5">
            REGULATORY PLANS BY COMMUNE
          </span>
        </div>
      </div>
      <div className="mt-12 py-12 2xl:container xl:container lg:container md:container sm:container mx-auto">
        <div className="flex justify-between">
          <h2 className="text-lg-8">SUCCESSFUL PARTNERSHIPS</h2>
          <div></div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper: any) => console.log(swiper)}
          className="mt-5"
        >
          <SwiperSlide
            zoom={true}
            className="px-10 py-10 border border-black rounded-[20px]"
          >
            <p className="px-2 py-2 w-[100px] h-[100px] rounded-[50%] border border-black bg-[#D9D9D9]"></p>
            <p className="mt-8 text-[#1B1B1B] text-md-9">
              Hitmap allowed our company to grow from 5 locations to 47, Matthew
              Cohen, CEO / Fundador Off The Grid - EE.UU.
            </p>
            <button className="mt-10 text-[#1B1B1B] text-md-9 font-[600]">
              Hitmap
            </button>
          </SwiperSlide>
          <SwiperSlide
            zoom={true}
            className="px-10 py-10 border border-black rounded-[20px]"
          >
            <p className="px-2 py-2 w-[100px] h-[100px] rounded-[50%] border border-black bg-[#D9D9D9]"></p>
            <p className="mt-8 text-[#1B1B1B] text-md-9">
              Hitmap allowed our company to grow from 5 locations to 47, Matthew
              Cohen, CEO / Fundador Off The Grid - EE.UU.
            </p>
            <button className="mt-10 text-[#1B1B1B] text-md-9 font-[600]">
              Hitmap
            </button>
          </SwiperSlide>
          <SwiperSlide
            zoom={true}
            className="px-10 py-10 border border-black rounded-[20px]"
          >
            <p className="px-2 py-2 w-[100px] h-[100px] rounded-[50%] border border-black bg-[#D9D9D9]"></p>
            <p className="mt-8 text-[#1B1B1B] text-md-9">
              Hitmap allowed our company to grow from 5 locations to 47, Matthew
              Cohen, CEO / Fundador Off The Grid - EE.UU.
            </p>
            <button className="mt-10 text-[#1B1B1B] text-md-9 font-[600]">
              Hitmap
            </button>
          </SwiperSlide>
          <SwiperSlide
            zoom={true}
            className="px-10 py-10 border border-black rounded-[20px]"
          >
            <p className="px-2 py-2 w-[100px] h-[100px] rounded-[50%] border border-black bg-[#D9D9D9]"></p>
            <p className="mt-8 text-[#1B1B1B] text-md-9">
              Hitmap allowed our company to grow from 5 locations to 47, Matthew
              Cohen, CEO / Fundador Off The Grid - EE.UU.
            </p>
            <button className="mt-10 text-[#1B1B1B] text-md-9 font-[600]">
              Hitmap
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
      <h2 className="mt-12 text-center py-8 font-[500] text-xl-1 border-y border-solid-[#1B1B1B]">
        TERRITORIAL INTELLIGENE HIT
      </h2>
      <div className="mt-12 2xl:container xl:container lg:container md:container sm:container mx-auto">
        <h2 className="text-sm-2">NEWS</h2>
        <div className="mt-12 grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 gap-10">
          <div>
            <img src="/imgs/news1.png" alt="" />
            <div className="mt-5 flex items-center">
              <span className="text-xs font-[500]">JUL 24, 2023 / </span>
              <span className="text-xs font-[500] ml-4 border border-solid-black rounded-[55px] px-2 py-1">
                VISION
              </span>
            </div>
            <div className="mt-2">
              <p className="text-[#1B1B1B] text-md-7 font-[500]">SOFTWARE /</p>
              <p className="text-[#1B1B1B] text-md-7 font-[500]">
                INTELIGENCIA TERRITORIAL
              </p>
            </div>
          </div>
          <div>
            <img src="/imgs/news2.png" alt="" />
            <div className="mt-5 flex items-center">
              <span className="text-xs font-[500]">JUL 24, 2023 / </span>
              <span className="text-xs font-[500] ml-4 border border-solid-black rounded-[55px] px-2 py-1">
                VISION
              </span>
            </div>
            <div className="mt-2">
              <p className="text-[#1B1B1B] text-md-7 font-[500]">SOFTWARE /</p>
              <p className="text-[#1B1B1B] text-md-7 font-[500]">
                INTELIGENCIA TERRITORIAL
              </p>
            </div>
          </div>
          <div>
            <div className="flex">
              <PiStarOfDavidDuotone className="text-sm-2 text-black" />
              <h2 className="ml-3 text-sm-2">TRENDING</h2>
            </div>
            <ul className="">
              <li className="mt-12">
                <span className="text-xs font-[500] border border-solid-black rounded-[55px] px-2 py-1">
                  SOURCE
                </span>
                <p className="mt-3 text-md-8 border-b border-solid-black ">
                  INTELIGENCIA TERRITORIAL
                </p>
              </li>
              <li className="mt-12">
                <span className="text-xs font-[500] border border-solid-black rounded-[55px] px-2 py-1">
                  SOURCE
                </span>
                <p className="mt-3 text-md-8 border-b border-solid-black ">
                  INTELIGENCIA TERRITORIAL
                </p>
              </li>
              <li className="mt-12">
                <span className="text-xs font-[500] border border-solid-black rounded-[55px] px-2 py-1">
                  SOURCE
                </span>
                <p className="mt-3 text-md-8 border-b border-solid-black ">
                  INTELIGENCIA TERRITORIAL
                </p>
              </li>
              <li className="mt-12">
                <span className="text-xs font-[500] border border-solid-black rounded-[55px] px-2 py-1">
                  SOURCE
                </span>
                <p className="mt-3 text-md-8 border-b border-solid-black ">
                  INTELIGENCIA TERRITORIAL
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-[100px] bg-[#101010] px-12 pt-[100px] pb-12 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-10">
        <div className="flex justify-center">
          <img src="/imgs/subscribe.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-center text-lg-7 text-white font-[600]">
              SUSCRIBETE
            </h2>
            <p className="text-center text-lg-3 text-white">
              INTELICENCIA TERRITORIAL
            </p>
            <p className="mt-5 font-[200] text-center text-base-2 text-white">
              Nec suas signiferumque id. An eum labore commodo principes.{" "}
            </p>
            <p className="font-[200] text-center text-base-2 text-white">
              Usu diam noluisse cu, nam adipisci
            </p>
            <div className="flex justify-center">
              <input
                type="text"
                className="text-white mt-5 w-full px-4 py-4  bg-[#202020] rounded-[7px] focus:outline-none"
              />
            </div>
            <div className="mt-8 flex justify-center">
              <div className="flex ">
                <button className="flex items-center border border-white">
                  <span className=" px-8 py-2.5 text-xs-1 text-white border-r border-solid-white">
                    VIEW MORE
                  </span>
                  <div className="py-2.5 px-2">
                    <PiArrowUpRightThin className="text-white text-md" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
