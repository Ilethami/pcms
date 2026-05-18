export default function Card({ icon, title, details }) {
  return (
    <div className="flex flex-col items-start gap-[20px] w-fit shrink-0">
      <img
        src={icon}
        alt="Icon"
        className="w-fit h-fit p-4 rounded-xl bg-icon"
      />

      <div className="flex flex-col items-start">
        <p className="text-[#215B63] font-['Bona-Nova'] text-[24px] font-bold leading-[40px]">
          {title}
        </p>

        <p className="text-[#4E9372] font-['Bona-Nova'] text-[20px] font-normal leading-[40px]">
          {details}
        </p>
      </div>
    </div>
  );
}
