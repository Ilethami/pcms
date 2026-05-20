import step from "../assets/step.svg";
import InText from "./InsText";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div data-aos="fade-up" className="w-full h-fit flex flex-col items-center py-20">
        <div className="bg-pcms w-fit h-fit py-16 rounded-[100px] px-1 mx-6 shadow-[0_10px_20px_5px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col gap-5 items-center">
            <p className="text-[#215B63] font-poppins text-[30px] font-semibold leading-[40px] ">
              HOW IT WORKS
            </p>
            <img src={step} alt="Order Vector" />
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center content-end pt-10 justify-center gap-2.5">
            <InText
              title={"SIGN UP AND BROWSE"}
              text={
                "Create your account and check real-time court availability anytime, anywhere."
              }
            />
            <InText
              title={"STAY UPDATED & MANAGE EASILY"}
              text={
                "Receive booking notifications, track reservations, and manage accounts seamlessly."
              }
            />
            <InText
              title={"BOOK & PAY INSTANTLY"}
              text={
                "Choose your court, date, and time, then confirm your reservation with secure online payment."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
