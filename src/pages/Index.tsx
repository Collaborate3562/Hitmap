import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { PiArrowUpRightThin, PiStarOfDavidDuotone } from "react-icons/pi";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatIsHItmap from "../components/WhatIsHitmap";

import { useTranslation } from "react-i18next";

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

const Index = () => {
  const { t, i18n } = useTranslation();

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  const { authenticated, setAuthenticated } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [serviceNum, setServiceNum] = useState(0);

  const navigate = useNavigate();

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleOpenModal = (num: number) => {
    setOpenModal(true);
    setServiceNum(num);
  };

  return (
    <>
      <Header isOpen={isOpen} handleIsOpen={handleOpenMenu} />
      {isOpen === false && (
        <div className="bg-custom-image bg-cover back-ground pt-[100px] pb-[220px]">
          <h2 className="text-xl font-[700] text-center text-[#505050]">
            HITMAP
          </h2>
          <p className="text-center text-lg-4 text-[#505050]">
            TERRITORIAL INTELLIGENCE
          </p>
          <div className="mt-12 flex justify-center">
            <button
              className=" flex items-center border border-solid-[#2c2c2c]"
              onClick={handleOpenMenu}
            >
              <span className=" px-8 py-2.5 text-base text-[#0E0E0E] border-r border-solid-[#2c2c2c] font-[600]">
                {t("startNow")}
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
                <a className="text-md-10 text-white" href="#what">
                  {t("whatIsHItmap")}
                </a>
                <PiArrowUpRightThin className="text-[#61ADF4] text-md-7" />
              </div>
              <div className="mt-5 flex justify-between items-center">
                <a className="text-md-10 text-white" href="#services">
                  {t("services")}
                </a>
                <PiArrowUpRightThin className="text-[#61ADF4] text-md-7" />
              </div>
              <div className="mt-5 flex justify-between items-center">
                <p className="text-md-10 text-white">{t("aboutUs")}</p>
                <PiArrowUpRightThin className="text-[#61ADF4] text-md-7" />
              </div>
              <div className="mt-5 flex justify-between items-center">
                <p className="text-md-10 text-white">{t("faqs")}</p>
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
              <select
                className="mt-[100px] border border-white px-5 py-2 bg-black text-md text-white focus:outline-none"
                name=""
                id=""
                onChange={onClickLanguageChange}
              >
                <option value="en" className="text-md text-white">
                  En
                </option>
                <option value="es" className="text-md text-white">
                  Es
                </option>
              </select>
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
      <WhatIsHItmap />
      <div
        className="mt-12 2xl:container xl:container lg:container md:container sm:container mx-auto"
        id="services"
      >
        <h2 className="py-12 2xl:text-lg-6 xl:text-lg-6 lg:text-lg-6 md:text-lg-5 sm:text-lg-5 border-b border-solid-[#BFBFBF]">
          SERVICES WE OFFER
        </h2>
        <div className="py-12 flex justify-between items-center border-b border-solid-[#BFBFBF]">
          <p
            className="2xl:text-lg-3 xl:text-lg-3 lg:text-lg-3 md:text-lg-1 sm:text-lg-1 cursor-pointer"
            onClick={() => handleOpenModal(1)}
          >
            {t("newLocations")}
          </p>
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

          {openModal && serviceNum === 1 && (
            <div>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-6xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-center justify-between py-12 pl-12 pr-5 mx-12 rounded-t">
                      <h3 className="text-lg-7 font-semibold">
                        {t("newLocations")}
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-lg-7 leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setOpenModal(false)}
                      >
                        <span className="bg-transparent text-blacktext-lg-7 block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-10 flex-auto mx-12 rounded-[20px] bg-gradient-to-r from-[#3183CF] to-[#7DBBF5]">
                      <p className="my-4 text-white text-md leading-relaxed">
                        {t("howThisService")}
                      </p>
                      <p className="my-4 text-white text-md leading-relaxed">
                        {t("newLocationsContent")}
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="mt-8 pb-10 rounded-b">
                      <div className="flex justify-center items-center">
                        <p className="px-10 text-center text-[#343434] text-xs-2 font-[500] w-1/3">
                          {t("newLocationsText1")}
                        </p>
                        <div className="px-10 text-center text-[#343434] w-1/3">
                          <p className="text-xs-2 font-[500]">
                            {t("newLocationsText2")}
                          </p>
                          <p className="text-lg-7 font-[500]">80%</p>
                          <p className="text-xs-2 font-[500]">
                            {t("newLocationsText3")}
                          </p>
                        </div>
                        <p className="px-10 text-center text-[#343434] text-xs-2 font-[500] w-1/3">
                          {t("newLocationsText4")}
                        </p>
                      </div>
                      <div className="mt-2 flex justify-center">
                        <img src="/imgs/modal1.png" alt="" />
                      </div>
                      <div className="mt-10 flex justify-center">
                        <button
                          className="flex items-center border border-solid-[#2c2c2c]"
                          onClick={handleOpenMenu}
                        >
                          <span className=" px-8 py-2.5 text-base text-[#0E0E0E] border-r border-solid-[#2c2c2c] font-[600]">
                            {t("startNow")}
                          </span>
                          <div className="py-2.5 px-2">
                            <PiArrowUpRightThin className="text-[#0E0E0E] text-md" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
          )}
        </div>
        <div className="py-12 flex justify-between items-center border-b border-solid-[#BFBFBF]">
          <p
            className="2xl:text-lg-3 xl:text-lg-3 lg:text-lg-3 md:text-lg-1 sm:text-lg-1 cursor-pointer"
            onClick={() => handleOpenModal(2)}
          >
            {t("assetManagement")}
          </p>
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

          {openModal && serviceNum === 2 && (
            <div>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-6xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-center justify-between py-12 pl-12 pr-5 mx-12 rounded-t">
                      <h3 className="text-lg-7 font-semibold">
                        {t("assetManagement")}
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-lg-7 leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setOpenModal(false)}
                      >
                        <span className="bg-transparent text-blacktext-lg-7 block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-10 flex-auto mx-12 rounded-[20px] bg-gradient-to-r from-[#3183CF] to-[#7DBBF5]">
                      <p className="my-4 text-white text-md leading-relaxed">
                        {t("howThisService")}
                      </p>
                      <p className="my-4 text-white text-md leading-relaxed">
                        {t("assetManagementContent")}
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="mt-8 pb-10 rounded-b">
                      <div className="flex justify-center items-center">
                        <p className="px-10 text-center text-[#343434] text-xs-2 font-[500] w-1/3">
                          {t("assetManagementText1")}
                        </p>
                        <div className="px-10 text-center text-[#343434] w-1/3">
                          <p className="text-xs-2 font-[500]">
                            {t("assetManagementText2")}
                          </p>
                        </div>
                        <p className="px-10 text-center text-[#343434] text-xs-2 font-[500] w-1/3">
                          {t("assetManagementText3")}
                        </p>
                      </div>
                      <div className="mt-2 flex justify-center">
                        <img src="/imgs/modal1.png" alt="" />
                      </div>
                      <div className="mt-10 flex justify-center">
                        <button
                          className="flex items-center border border-solid-[#2c2c2c]"
                          onClick={handleOpenMenu}
                        >
                          <span className=" px-8 py-2.5 text-base text-[#0E0E0E] border-r border-solid-[#2c2c2c] font-[600]">
                            {t("startNow")}
                          </span>
                          <div className="py-2.5 px-2">
                            <PiArrowUpRightThin className="text-[#0E0E0E] text-md" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
          )}
        </div>
        <div className="py-12 flex justify-between items-center border-b border-solid-[#BFBFBF]">
          <p
            className="2xl:text-lg-3 xl:text-lg-3 lg:text-lg-3 md:text-lg-1 sm:text-lg-1 cursor-pointer"
            onClick={() => handleOpenModal(3)}
          >
            {t("inDepthStudy")}
          </p>
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

          {openModal && serviceNum === 3 && (
            <div>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-6xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-center justify-between py-12 pl-12 pr-5 mx-12 rounded-t">
                      <h3 className="text-lg-7 font-semibold">
                        {t("inDepthStudy")}
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-lg-7 leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setOpenModal(false)}
                      >
                        <span className="bg-transparent text-blacktext-lg-7 block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-10 flex-auto mx-12 rounded-[20px] bg-gradient-to-r from-[#3183CF] to-[#7DBBF5]">
                      <p className="my-4 text-white text-md leading-relaxed">
                        {t("howThisService")}
                      </p>
                      <p className="my-4 text-white text-md leading-relaxed">
                        {t("inDepthStudyContent")}
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="mt-8 pb-10 rounded-b">
                      <div className="flex justify-center items-center">
                        <p className="px-10 text-center text-[#343434] text-xs-2 font-[500] w-1/3">
                          {t("inDepthStudyText1")}
                        </p>
                        <p className="px-10 text-center text-[#343434] text-xs-2 font-[500] w-1/3">
                          {t("inDepthStudyText2")}
                        </p>
                      </div>
                      <div className="mt-2 flex justify-center">
                        <img src="/imgs/modal2.png" alt="" />
                      </div>
                      <div className="mt-10 flex justify-center">
                        <button
                          className="flex items-center border border-solid-[#2c2c2c]"
                          onClick={handleOpenMenu}
                        >
                          <span className=" px-8 py-2.5 text-base text-[#0E0E0E] border-r border-solid-[#2c2c2c] font-[600]">
                            {t("startNow")}
                          </span>
                          <div className="py-2.5 px-2">
                            <PiArrowUpRightThin className="text-[#0E0E0E] text-md" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
          )}
        </div>
        <div className="py-12 flex justify-between items-center border-b border-solid-[#BFBFBF]">
          <p
            className="2xl:text-lg-3 xl:text-lg-3 lg:text-lg-3 md:text-lg-1 sm:text-lg-1 cursor-pointer"
            onClick={() => handleOpenModal(4)}
          >
            {t("capitalGain")}
          </p>
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

          {openModal && serviceNum === 4 && (
            <div>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-6xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-center justify-between py-12 pl-12 pr-5 mx-12 rounded-t">
                      <h3 className="text-lg-7 font-semibold">
                        {t("capitalGain")}
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-lg-7 leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setOpenModal(false)}
                      >
                        <span className="bg-transparent text-blacktext-lg-7 block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-10 flex-auto mx-12 rounded-[20px] bg-gradient-to-r from-[#3183CF] to-[#7DBBF5]">
                      <p className="my-4 text-white text-md leading-relaxed">
                        {t("howThisService")}
                      </p>
                      <p className="my-4 text-white text-md leading-relaxed">
                        {t("capitalGainContent")}
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="mt-8 pb-10 rounded-b">
                      <div className="flex justify-center items-center">
                        <p className="px-10 text-center text-[#343434] text-xs-2 font-[500] w-1/3">
                          {t("capitalGainText1")}
                        </p>
                        <div className="px-10 text-center text-[#343434] w-1/3">
                          <p className="text-lg-7 font-[500]">80%</p>
                          <p className="text-xs-2 font-[500]">{t("capitalGainText2")}</p>
                          <p className="text-xs-2 font-[500]">
                          {t("capitalGainText3")}
                          </p>
                        </div>
                        <p className="px-10 text-center text-[#343434] text-xs-2 font-[500] w-1/3">
                        {t("capitalGainText4")}
                        </p>
                      </div>
                      <div className="mt-2 flex justify-center">
                        <img src="/imgs/modal1.png" alt="" />
                      </div>
                      <div className="mt-10 flex justify-center">
                        <button
                          className="flex items-center border border-solid-[#2c2c2c]"
                          onClick={handleOpenMenu}
                        >
                          <span className=" px-8 py-2.5 text-base text-[#0E0E0E] border-r border-solid-[#2c2c2c] font-[600]">
                            {t("startNow")}
                          </span>
                          <div className="py-2.5 px-2">
                            <PiArrowUpRightThin className="text-[#0E0E0E] text-md" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
          )}
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
                {t("reporte")}
              </p>
              <div className="mt-[100px] flex ">
                <button className=" flex items-center border border-solid-[#2c2c2c]">
                  <span className=" px-8 py-2.5 text-base text-[#0E0E0E] border-r border-solid-[#2c2c2c]">
                    {t("viewMore")}
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
        <h2 className="text-md-6">{t("variablesUsed")}</h2>
        <div className="mt-5 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-10 px-5">
          <span className="px-12 py-8 rounded-[20px] border border-solid-black text-[#424242] text-md-5">
            {t("variable1")}
          </span>
          <span className="px-12 py-8 rounded-[20px] border border-solid-black text-[#424242] text-md-5">
            {t("variable2")}
          </span>
          <span className="px-12 py-8 rounded-[20px] border border-solid-black text-[#424242] text-md-5">
            {t("variable3")}
          </span>
          <span className="px-12 py-8 rounded-[20px] border border-solid-black text-[#424242] text-md-5">
            {t("variable4")}
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
            <p className="mt-8 text-[#1B1B1B] text-md-9">{t("partnerShips")}</p>
            <button className="mt-10 text-[#1B1B1B] text-md-9 font-[600]">
              Hitmap
            </button>
          </SwiperSlide>
          <SwiperSlide
            zoom={true}
            className="px-10 py-10 border border-black rounded-[20px]"
          >
            <p className="px-2 py-2 w-[100px] h-[100px] rounded-[50%] border border-black bg-[#D9D9D9]"></p>
            <p className="mt-8 text-[#1B1B1B] text-md-9">{t("partnerShips")}</p>
            <button className="mt-10 text-[#1B1B1B] text-md-9 font-[600]">
              Hitmap
            </button>
          </SwiperSlide>
          <SwiperSlide
            zoom={true}
            className="px-10 py-10 border border-black rounded-[20px]"
          >
            <p className="px-2 py-2 w-[100px] h-[100px] rounded-[50%] border border-black bg-[#D9D9D9]"></p>
            <p className="mt-8 text-[#1B1B1B] text-md-9">{t("partnerShips")}</p>
            <button className="mt-10 text-[#1B1B1B] text-md-9 font-[600]">
              Hitmap
            </button>
          </SwiperSlide>
          <SwiperSlide
            zoom={true}
            className="px-10 py-10 border border-black rounded-[20px]"
          >
            <p className="px-2 py-2 w-[100px] h-[100px] rounded-[50%] border border-black bg-[#D9D9D9]"></p>
            <p className="mt-8 text-[#1B1B1B] text-md-9">{t("partnerShips")}</p>
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
                    {t("viewMore")}
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
