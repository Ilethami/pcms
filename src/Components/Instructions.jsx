import step from "../assets/step.svg";
import InText from "./InsText";

export default function Instructions() {
  return (
    <>
      <div className="w-full h-fit flex flex-col items-center ">
        <div className=" bg-pcms w-fit h-fit py-8 rounded-[100px] px-6">
          <div className="flex flex-col gap-5 items-center">
            <p className="text-[#215B63] font-['Castoro'] text-[30px] font-normal leading-[40px]">
              HOW IT WORKS
            </p>
            <img src={step} alt="Order Vector" />
          </div>
          <div className="flex flex-row items-center content-end">
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
