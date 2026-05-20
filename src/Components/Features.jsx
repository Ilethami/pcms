import bell from "../icons/Bell.svg";
import person from "../icons/Person.svg";
import book from "../icons/Booking.svg";
import calendar from "../icons/Calendar.svg";
import phone from "../icons/Phone.svg";
import pig from "../icons/PiggyBank.svg";
import Card from "./FeatureCards";
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
      className="flex flex-col w-full overflow-hidden items-center pt-10"
    >
      {/* HEADER */}
      <div className="flex flex-col justify-center items-center gap-4 py-7">
        <div className="flex bg-[#BCEAB7] px-4 py-4 rounded-3xl text-[#215B63] font-poppins text-[15px] font-bold text-center leading-normal text-transform uppercase">
        Features
      </div>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-[#215B63] font-poppins text-[34px] font-normal leading-[40px] text-center"
        >
          Everything you need to run your facility
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="600"
          className="text-[#55A078] font-poppins text-[18px] font-normal leading-[40px] max-w-[500px] text-center"
        >
          Powerful tools to save time, increase bookings and deliver a
          better experience for your members
        </p>
      </div>

      {/* GRID SECTION */}
      <div
        data-aos="fade-up"
        data-aos-delay="900"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[45px] gap-x-[60px] mt-10 px-[20px] md:px-[70px]  max-w-fit w-full"
      >
        <Card
          icon={book}
          title="Smart Booking System"
          details="Reserve courts anytime with a fast and hassle-free booking process."
        />

        <Card
          icon={calendar}
          title="Real-Time Scheduling"
          details="View available courts, match schedules, and reservations instantly."
        />

        <Card
          icon={pig}
          title="Transaction Monitoring"
          details="Track payments, booking history, and transaction records securely."
        />

        <Card
          icon={person}
          title="User Management"
          details="Manage accounts, memberships, and court administrators easily."
        />

        <Card
          icon={phone}
          title="Mobile Friendly"
          details="Access the system anytime using desktop, tablet, or mobile devices."
        />

        <Card
          icon={bell}
          title="Notification & Updates"
          details="Receive reminders for reservations and important announcements."
        />
      </div>
    </div>
  );
}
