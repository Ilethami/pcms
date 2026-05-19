import lapimg from "../assets/lapimg.png";
import phoneimg from "../assets/phoneimg.png";
import tabimg from "../assets/tabimg.png";
import Image from "./Image";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col w-full items-center gap-6 pt-10 pb-20 overflow-hidden px-4"
    >
      {/* Header */}
      <div className="w-[160px] bg-[#BCEAB7] px-4 py-4 rounded-3xl text-[#215B63] font-['Poppins'] text-[15px] font-bold text-center leading-normal">
        System Preview
      </div>

      <p
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-[#215B63] font-['Bona-Nova'] text-[24px] sm:text-[30px] md:text-[36px] text-center font-bold leading-[40px]"
      >
        See PickleCourt in Action
      </p>

      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-[#215B63] font-['Bona-Nova'] text-center text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-[32px] md:leading-[40px]"
      >
        A seamless experience for admins and staff to manage
        facilities efficiently
      </p>

      {/* Device Mockups */}
      <div
        data-aos="fade-up"
        data-aos-delay="900"
        className="w-full h-full flex flex-row justify-center items-center overflow-visible "
      >
        {/* Phone */}
        <div className="translate-x-6/3 translate-y-[40px] z-20">
          <Image image={phoneimg} width="190px" height="362px" />
        </div>
        {/* Laptop */}
        <div className="translate-x-1/6">
          <Image image={lapimg} width="950px" height="450px" />
        </div>

        {/* Tablet */}
        <div className="-translate-x-1/3 translate-y-[35px]">
          <Image image={tabimg} width="550px" height="370px" />
        </div>
      </div>
    </div>
  );
}
