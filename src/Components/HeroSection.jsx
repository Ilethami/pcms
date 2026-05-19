import heroimg from "../assets/hdimg.png";
import { useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={heroimg}
        alt="Hero"
        className="w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] object-cover block"
      />

      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center h-[80px] sm:h-[90px] md:h-[99px] bg-pcms shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] px-4 sm:px-8 md:px-[46px] z-20">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* LOGO SVG (your original) */}
          <a href="/" className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
            className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
          >
            <path
              d="M55.1771 64.1666L38.0417 47.0312C36.632 48.2951 35.0647 49.2187 33.34 49.802C31.6153 50.3853 29.877 50.677 28.125 50.677C26.1806 50.677 24.2974 50.3124 22.4754 49.5833C20.6535 48.8541 19.0124 47.7603 17.5521 46.302L6.46877 35.2916C5.64238 34.4652 5.01044 33.5056 4.57294 32.4128C4.13544 31.3201 3.91669 30.2137 3.91669 29.0937C3.91669 27.9737 4.13544 26.8683 4.57294 25.7774C5.01044 24.6866 5.64238 23.726 6.46877 22.8958L18.0625 11.302C18.8889 10.4756 19.8495 9.84367 20.9442 9.40617C22.0389 8.96867 23.1434 8.74992 24.2575 8.74992C25.3717 8.74992 26.4781 8.96867 27.5767 9.40617C28.6753 9.84367 29.6349 10.4756 30.4554 11.302L41.4659 22.3853C42.9242 23.8437 44.0179 25.4848 44.7471 27.3087C45.4763 29.1326 45.8409 31.0158 45.8409 32.9583C45.8409 34.7083 45.5375 36.4466 44.9309 38.1733C44.3242 39.8999 43.3889 41.4671 42.125 42.8749L59.3334 60.0833L55.1771 64.1666Z"
              fill="#215B63"
            />
          </svg>
          </a>

          <p className="text-[#1F6F5F] font-['Poppins'] text-[18px] sm:text-[22px] md:text-[26px] font-semibold">
            PickleCourt
          </p>
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className=" hidden md:flex gap-2 sm:gap-3 md:gap-4">
          <button className="rounded-[36px] border-[3px] border-[#67C090] bg-white shadow-md text-[#67C090] text-[14px] sm:text-[16px] md:text-[20px] w-[90px] sm:w-[105px] md:w-[120px] h-[36px] sm:h-[40px] md:h-[44px]">
            Register
          </button>

          <button className="rounded-[36px] border-[3px] border-[#FFFEFC] bg-[#67C090] shadow-md text-white text-[14px] sm:text-[16px] md:text-[20px] w-[90px] sm:w-[105px] md:w-[120px] h-[36px] sm:h-[40px] md:h-[44px]">
            Login
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col md:hidden cursor-pointer gap-1"
        >
          <span className="w-6 h-0.5 bg-[#1F6F5F]"></span>
          <span className="w-6 h-0.5 bg-[#1F6F5F]"></span>
          <span className="w-6 h-0.5 bg-[#1F6F5F]"></span>
        </button>

        <ul className={`
            absolute top-[80px] right-0 w-full bg-pcms
            flex-col items-center gap-4 py-4
            md:hidden
            ${menuOpen ? "flex" : "hidden"}
          `}>
          <li><a href="#" className="text-[#1F6F5F] text-[18px] font-['Poppins'] font-semibold">Login</a></li>
          <li><a href="#" className="text-[#1F6F5F] text-[18px] font-['Poppins'] font-semibold">Sign Up</a></li>
        </ul>
      </nav>

      {/* HERO TEXT */}
      <div className="absolute inset-0 flex items-center">
        <div className="ml-4 sm:ml-10 md:ml-[65px] max-w-[90%] sm:max-w-[600px] md:max-w-[847px] flex flex-col gap-6 sm:gap-10 md:gap-[43px] z-10">
          <h1 className="text-[#FFFEFC] font-['Poppins'] text-[26px] sm:text-[36px] md:text-[50px] font-bold leading-[34px] sm:leading-[50px] md:leading-[65px]">
            Manage Pickleball Courts Easily and Efficiently
          </h1>

          <p className="text-[#FFFEFC] text-[14px] sm:text-[18px] md:text-[24px] font-regular leading-[24px] sm:leading-[32px] md:leading-[38px] drop-shadow-[-5px_7px_3px_rgba(0,0,0,0.8)] font-['Poppins]">
            Manage your bookings, organize your schedule, and keep
            track of your transaction, all in one system.
          </p>

          {/* BUTTON WITH ARROW SVG */}
          <button className="flex items-center justify-between w-[160px] sm:w-[180px] md:w-[204px] h-[44px] sm:h-[48px] md:h-[51px] px-[20px] sm:px-[24px] md:px-[28px] rounded-full bg-[#67C090] border border-black/20 shadow-md">
            <span className="text-white text-[14px] sm:text-[16px] md:text-[20px] font-['Poppins] font-regular">
              Learn More
            </span>

            {/* ARROW SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]"
            >
              <path
                d="M14.1458 23.7649C8.82701 23.7649 4.52667 19.4646 4.52667 14.1458C4.52667 8.82695 8.82701 4.52661 14.1458 4.52661C19.4647 4.52661 23.765 8.82695 23.765 14.1458C23.765 19.4646 19.4647 23.7649 14.1458 23.7649ZM14.1458 5.65828C9.44942 5.65828 5.65834 9.44936 5.65834 14.1458C5.65834 18.8422 9.44942 22.6333 14.1458 22.6333C18.8423 22.6333 22.6333 18.8422 22.6333 14.1458C22.6333 9.44936 18.8423 5.65828 14.1458 5.65828Z"
                fill="white"
              />
              <path
                d="M13.9761 19.6344L13.1839 18.8422L17.8803 14.1458L13.1839 9.44939L13.9761 8.65723L19.4647 14.1458L13.9761 19.6344Z"
                fill="white"
              />
              <path
                d="M9.05334 13.5801H18.6725V14.7117H9.05334V13.5801Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
