import bgfooter from "../assets/bgfooter.png";
import footerleft from "../assets/footerleft.png";

import footerbottom from "../assets/footerbottom.png";
const Footer = () => {
  return (
    <div className="w-full relative bg-black px-4 py-8 ">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <img src={bgfooter} alt="" />
      </div>
      <div className="absolute top-0 z-30 left-0 transform -translate-x-1/2">
        <img src={footerleft} alt="" />
      </div>

      <div className="absolute bottom-0 -z-10 left-1/2 transform -translate-x-1/2">
        <img src={footerbottom} alt="" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto h-auto flex flex-col gap-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="font-rethink text-white text-[16px] sm:text-[20px]">
              Have a project in mind?
            </p>
            <h1
              className="font-rethink font-bold text-[40px] sm:text-[64px] leading-[120%] tracking-[0] text-transparent bg-clip-text"
              style={{
                background:
                  "radial-gradient(20.45% 109.09% at 25.34% 68.18%, #93D1FD 49.03%, rgba(147, 209, 253, 0.5) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Let's Talk
            </h1>
          </div>

          <div className="flex flex-col gap-2 sm:gap-1 text-white">
            <p className="font-rethink underline">Facebook</p>
            <p className="font-rethink underline">Instagram</p>
            <p className="font-rethink underline">LinkedIn</p>
            <p className="font-rethink underline">GitHub</p>
            <p className="font-rethink underline">Twitter</p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <h1 className="font-rethink font-medium text-[32px] sm:text-[48px] md:text-[64px] leading-[120%] tracking-[0] underline underline-offset-[0%] decoration-[1px] decoration-solid text-white">
            hey@pixll.com
          </h1>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-10">
            <p className="font-dm text-[14px] sm:text-[16px] font-normal leading-[150%] tracking-[0] text-[#888888]">
              Privacy - Terms
            </p>
            <p className="font-dm text-[14px] sm:text-[16px] font-normal leading-[150%] tracking-[0] text-[#888888]">
              © 2017 - 2025 Pixll
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
