export default function InText({ title, text }) {
  return (
    <>
      <div className="flex flex-col gap-6">
        <p className=" text-[#215B63] text-center font-['Poppins'] text-[24px] font-bold leading-[40px]">
          {title}
        </p>
        <p className="text-[#154E43] text-center font-['Poppins'] text-[22px] font-normal leading-[40px]">
          {text}
        </p>
      </div>
    </>
  );
}
