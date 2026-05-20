export default function Card({ icon, title, details }) {
  return (
    <div className="flex flex-col items-center gap-[20px] w-fit shrink-0">
      <img
        src={icon}
        alt="Icon"
        className="w-fit h-fit p-4 rounded-xl bg-icon "
      />

      <div className="flex flex-col items-center">
<<<<<<< HEAD
        <p className="text-[#215B63] font-['Poppins'] text-[24px] font-bold leading-[40px]">
          {title}
        </p>

        <p className="text-[#4E9372] text-center font-['Poppins'] text-[20px] font-normal leading-[40px]">
=======
        <p className="text-[#215B63] font-poppins text-[24px] font-bold leading-[40px]">
          {title}
        </p>

        <p className="text-[#4E9372] text-center font-poppins text-[20px] font-normal leading-[40px]">
>>>>>>> 1b63b7f20f237bc0a3bdfb316091d77ce4781358
          {details}
        </p>
      </div>
    </div>
  );
}
