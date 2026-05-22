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
      <div className="w-[170px] bg-[#BCEAB7] px-4 py-4 rounded-3xl text-[#215B63] font-poppins text-[15px] font-bold text-center leading-normal text-transform uppercase">
        System Preview
      </div>

      <p
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-[#215B63] font-poppins text-[24px] sm:text-[30px] md:text-[36px] text-center font-bold leading-[40px]"
      >
        See PickleCourt in Action
      </p>

      <p
        data-aos="fade-up"
        data-aos-delay="600"
        className="text-[#215B63] font-poppins text-center text-[16px] sm:text-[18px] md:text-[20px] font-bold leading-[32px] md:leading-[40px]"
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
      <div className="flex flex-row gap-6">
        {/* Customer */}
       <div className="flex flex-col gap-6 rounded-2xl bg-purple-300 px-6 items-center pt-3 font-semibold">
        Customer
          <div className="flex flex-row gap-6">
            <div className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]" >
             <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/m5EIX6lGYF0GMlKl4O5aSP/Pickleball-Court-Management-System?node-id=705-1493&t=YfJ6YnwmtrbXGBNA-1&scaling=min-zoom&content-scaling=fixed&page-id=534%3A6407&starting-point-node-id=705%3A1493&show-proto-sidebar=1">
            Phone
              </a>
           </div>
           <div className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]" >
             <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/m5EIX6lGYF0GMlKl4O5aSP/Pickleball-Court-Management-System?node-id=705-1404&t=YfJ6YnwmtrbXGBNA-1&scaling=min-zoom&content-scaling=fixed&page-id=534%3A6407&starting-point-node-id=705%3A1404&show-proto-sidebar=1">
            Small Phone
             </a>
           </div>
           <div className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]" >
              <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/m5EIX6lGYF0GMlKl4O5aSP/Pickleball-Court-Management-System?node-id=534-6408&t=mYWQf4QjZ6RX9Xgt-1&scaling=min-zoom&content-scaling=fixed&page-id=534%3A6407&starting-point-node-id=534%3A6408">
             Desktop
              </a>
           </div>
           <div className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]" >
            <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/m5EIX6lGYF0GMlKl4O5aSP/Pickleball-Court-Management-System?node-id=705-10951&t=YfJ6YnwmtrbXGBNA-1&scaling=min-zoom&content-scaling=fixed&page-id=534%3A6407&starting-point-node-id=705%3A10951&show-proto-sidebar=1">
            Tablet
             </a>
            </div>
          </div>
        </div>
        {/* Staff */}
        <div className="flex flex-col gap-6 rounded-2xl bg-purple-300 px-6 items-center pt-3 font-semibold">
        Staff
          <div className="flex flex-row gap-6">
            <div className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]" >
             <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/m5EIX6lGYF0GMlKl4O5aSP/Pickleball-Court-Management-System?node-id=424-6550&p=f&t=5EHIRvCdhIQq8mDm-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=705%3A2336&show-proto-sidebar=1">
            Phone
              </a>
           </div>
           <div className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]" >
             <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/m5EIX6lGYF0GMlKl4O5aSP/Pickleball-Court-Management-System?node-id=424-6550&p=f&t=5EHIRvCdhIQq8mDm-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=705%3A2247&show-proto-sidebar=1">
            Small Phone
             </a>
           </div>
           <div className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]" >
              <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/m5EIX6lGYF0GMlKl4O5aSP/Pickleball-Court-Management-System?node-id=424-6550&p=f&t=5EHIRvCdhIQq8mDm-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=516%3A12803&show-proto-sidebar=1">
             Desktop
              </a>
           </div>
           <div className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]" >
            <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/m5EIX6lGYF0GMlKl4O5aSP/Pickleball-Court-Management-System?node-id=424-6550&p=f&t=5EHIRvCdhIQq8mDm-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=705%3A11073&show-proto-sidebar=1">
            Tablet
             </a>
            </div>
          </div>
        </div>
        {/* Admin */}
        <div className="flex flex-col gap-6 rounded-2xl bg-purple-300 px-6 items-center pt-3 font-semibold">
        Admin
          <div className="flex flex-row gap-6">
            <div className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]" >
             <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/m5EIX6lGYF0GMlKl4O5aSP/Pickleball-Court-Management-System?node-id=424-6549&p=f&t=5EHIRvCdhIQq8mDm-0&scaling=contain&content-scaling=fixed&starting-point-node-id=705%3A3960&show-proto-sidebar=1">
            Phone
              </a>
           </div>
           <div className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]" >
             <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/m5EIX6lGYF0GMlKl4O5aSP/Pickleball-Court-Management-System?node-id=424-6549&p=f&t=5EHIRvCdhIQq8mDm-0&scaling=contain&content-scaling=fixed&starting-point-node-id=705%3A3871&show-proto-sidebar=1">
            Small Phone
             </a>
           </div>
           <div className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]" >
              <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/m5EIX6lGYF0GMlKl4O5aSP/Pickleball-Court-Management-System?node-id=424-6549&p=f&t=5EHIRvCdhIQq8mDm-0&scaling=contain&content-scaling=fixed&starting-point-node-id=424%3A10902&show-proto-sidebar=1">
             Desktop
              </a>
           </div>
           <div className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]" >
            <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/proto/m5EIX6lGYF0GMlKl4O5aSP/Pickleball-Court-Management-System?node-id=424-6549&p=f&t=5EHIRvCdhIQq8mDm-0&scaling=contain&content-scaling=fixed&starting-point-node-id=703%3A2300&show-proto-sidebar=1">
            Tablet
             </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
