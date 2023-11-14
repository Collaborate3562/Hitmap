import React, { useContext, useState, useEffect } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { HiArrowLongRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

import { useTranslation } from "react-i18next";

interface IHeader {
  isOpen: boolean;
  handleIsOpen: (e: boolean) => void;
}

const Header: React.FC<IHeader> = ({ isOpen, handleIsOpen }) => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();


  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleOpenMenu = () => {
    setOpen(!open);
    handleIsOpen(!open);
  };

  return (
    <div className={`${open === false ? "bg-white" : "bg-black"}`}>
      <div className="2xl:container xl:container lg:container md:container sm:container mx-auto flex justify-between py-11">
        <div className="flex items-center">
          <div>
            <img src="/imgs/logo.png" alt="" />
          </div>
          <h2
            className={`${
              open === false
                ? "text-lg-2 font-[700] ml-3"
                : "text-lg-2 font-[700] text-white ml-3 "
            }`}
          >
            hitmap
          </h2>
        </div>
        <div className="flex items-center">
          <button
            className={`${
              open === false
                ? "mr-3 px-8 py-2.5 border border-solid-[#505050] flex items-center"
                : "mr-3 px-8 py-2.5 border border-white flex items-center"
            }`}
            onClick={handleOpenMenu}
          >
            <span
              className={`${
                open === false ? "text-base pr-2" : "text-base pr-2 text-white"
              }`}
            >
              {t("startNow")}
            </span>
            <HiArrowLongRight
              className={`${
                open === false ? "text-sm-1" : "text-sm-1 text-white"
              }`}
            />
          </button>
          {open === false ? (
            <CgMenuRightAlt
              className="text-lg-5 cursor-pointer"
              onClick={handleOpenMenu}
            />
          ) : (
            <AiOutlineClose
              className="text-white text-lg-5 cursor-pointer"
              onClick={handleOpenMenu}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
