export default function InText({ title, text }) {
  return (
    <>
      <div className="flex flex-col max-w-md items-center gap-0.5">
        <p className=" text-[#215B63] text-center font-['Poppins'] text-[24px] font-bold leading-[40px] w-fit">
          {title}
        </p>
        <p className="text-[#154E43] text-center font-['Poppins'] text-[22px] font-normal leading-[40px] w-fit max-w-full">
          {text}
        </p>
      </div>
    </>
  );
}
