import lapimg from "../assets/lapimg.png";
import phoneimg from "../assets/phoneimg.png";
import tabimg from "../assets/tabimg.png";
import Image from "./Image";

export default function Media() {
  return (
    <>
      <div className="flex flex-col w-full content-center items-center gap-6 pt-10 pb-20">
        <div className="w-[160px] bg-[#BCEAB7] px-4 py-4 rounded-3xl text-[#215B63] font-['Poppins'] text-[15px] font-bold text-center leading-normal">
          System Preview
        </div>
        <p className="text-[#215B63] font-['Bona-Nova'] text-[36px] text-center font-bold leading-[40px]">
          See PickleCourt in Action
        </p>
        <p className="text-[#215B63] font-['Bona-Nova'] text-center text-[20px] font-bold leading-[40px]">
          A seemless experience for admins and staff to manage
          facilities efficiently
        </p>
        <div className="relative w-[950px] h-[500px] mx-auto">
          {/* Laptop */}
          <div className="relative z-10">
            <Image image={lapimg} width="950px" height="450px" />
          </div>

          {/* Phone */}
          <div className="absolute left-[-60px] top-[120px] z-30">
            <Image image={phoneimg} width="190px" height="362px" />
          </div>

          {/* Tablet */}
          <div className="absolute right-[-200px] top-[70px] z-20">
            <Image image={tabimg} width="550px" height="370px" />
          </div>
        </div>
      </div>
    </>
  );
}
