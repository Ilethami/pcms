import headerImage from "../pic/headerImage.png";
import logo from "../pic/logo.svg";
import arrow from "../pic/arrow.svg";


const navButtons = [
  {
    label: "Register",
    variant: "secondary",
    className:
      "relative w-[124.24px] h-11 bg-white rounded-[36px] border-[3px] border-solid border-[#67c090] shadow-[0px_4px_4px_#00000040]",
    textClassName:
      "absolute w-[68.07%] h-[38.64%] top-[19%] left-[17.97%] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#67c090] text-xl tracking-[0] leading-[normal] whitespace-nowrap",
  },
  {
    label: "Login",
    variant: "primary",
    className:
      "relative w-[124.24px] h-11 bg-[#67c090] rounded-[36px] border-2 border-solid border-[#fffefc] shadow-[0px_4px_4px_#00000040]",
    textClassName:
      "absolute w-[44.91%] h-[68.18%] top-[22%] left-[29.73%] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]",
  },
];

export const Row = () => {
  return (
    <main className="relative w-[100%] flex flex-col items-center bg-white">
      <header className="relative self-stretch w-full">
        <div className="relative self-stretch w-full h-[99px] bg-[#e6ffe3] border-2 border-solid shadow-[0px_4px_4px_#00000040]" />
        <div className="absolute top-[15px] left-[46px] w-[253px] h-[70px]">
          <div className="absolute top-0 left-0 w-[70px] h-[70px] flex aspect-[1]">
            <img
              className="flex-1 w-[64.17px]"
              alt="PickleCourt logo icon"
              src={logo}
            />
          </div>
          <div className="absolute top-[20px] left-[88px] w-[164px] [font-family:'Poppins-Bold',sans-serif] font-semibold text-[#1f6f5f] text-[30px] tracking-[0] leading-[normal]">
            PickleCourt
          </div>
        </div>
        <nav
          aria-label="Primary navigation"
          className="inline-flex items-center gap-[30px] absolute top-7 right-[39px]"
        >
          {navButtons.map(({ label, className, textClassName }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className={`all-[unset] box-border ${className} cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6f5f]`}
            >
              <div className={textClassName}>{label}</div>
            </button>
          ))}
        </nav>
      </header>
      <section
        aria-labelledby="hero-heading"
        className="relative self-stretch w-full"
      >
        <img
          className="relative self-stretch w-full h-[571px] mb-[-8.00px] object-cover"
          alt="Pickleball paddle and ball hero background"
          src={headerImage}
        />
        <div className="absolute top-[134px] left-[65px] w-[847px] h-[494px]">
          <div className="flex flex-col w-[847px] h-[464px] items-start justify-center gap-[43px] relative">
            <div className="relative self-stretch w-full h-64 mr-[-4.00px]">
              <h1
                id="hero-heading"
                className="mt-0 w-[847px] [font-family:'Poppins-SemiBold',sans-serif] font-semibold text-[#fffefc] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] tracking-[0] leading-[65px]"
              >
                Manage Pickleball Courts Easily and Efficiently.
              </h1>
              <p
                className=" absolute left-[3px] absolute top-[150px] -left-2 w-[793px] h-[85px] text-[#fffefc] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] tracking-[0] leading-[30px] font-family:'Poppins-Regular',Sans-serif] font-normal">
                Manage your bookings, organize your schedule, and keep track of your transaction, all in one system.
              </p>
            </div>
            <button
              type="button"
              aria-label="Learn more about PickleCourt"
              className="all-[unset] box-border flex w-[188px] h-[51px] items-center justify-between pl-7 pr-[31px] py-2 relative bg-[#67c090] rounded-[100px] border-[3px] border-solid border-[#00000033] shadow-[0px_4px_4px_#00000040] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <div className="relative w-fit whitespace-nowrap mt-[-0.50px] [font-family:'Poppins-Regular',sans-serif] font-normal text-white text-xl tracking-[0] leading-[normal]">
                Learn More
              </div>
              <div className="relative w-[40px] h-[40px] aspect-[1]">
                <img
                  className="absolute w-[84.00%] h-[84.00%] top-[10.00%] left-[16.00%]"
                  alt=""
                  aria-hidden="true"
                  src={arrow}
                />
            
              </div>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Row;
