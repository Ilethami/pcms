export default function Card({ icon, title, details }) {
  return (
    <div className="flex flex-col items-center gap-[20px] w-fit shrink-0">
      <img
        src={icon}
        alt="Icon"
        className="w-fit h-fit p-4 rounded-xl bg-icon "
      />

      <div className="flex flex-col items-center">
        <p className="text-[#215B63] font-poppins text-center text-[24px] font-bold leading-[40px]">
          {title}
        </p>

        <p className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]">
          {details}
        </p>
      </div>
    </div>
  );
}
