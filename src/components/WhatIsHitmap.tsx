import React, { useContext, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

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

const WhatIsHItmap = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div
        className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1"
        id="what"
      >
        <div className="cols-span-2 pr-5 pt-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-r-[24px]">
          <div className="grid grid-cols-3 gap-4">
            <div className="..."></div>
            <div className="col-span-2 ...">
              <div>
                <h2 className="text-lg-2 font-[700] inline pb-7 border-b-2 border-solid-[#505050]">
                  {t("whatIsHItmap")}
                </h2>
              </div>
              <div className="mt-12">
                <p className="pt-12 text-[#4c4c4c] text-sm-1">{t("whatIs1")}</p>
                <p className="pt-10 text-[#4c4c4c] text-sm-1">{t("whatIs2")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cols-span-3 flex justify-center">
          <img src="imgs/global.png" className="2xl:w-2/3 xl:w-full align-top" alt="" />
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
    </>
  );
};

export default WhatIsHItmap;
