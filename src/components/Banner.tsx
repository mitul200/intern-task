import Navbar from "./Navber";
import bannerImg from "../assets/Section.png";
import apex from "../assets/apex.png";
import fixmyphone from "../assets/fixmyphone.png";
import lindholms from "../assets/lindholms.png";
import Verdant from "../assets/Verdant.png";
import duet from "../assets/duet.png";

const Banner = () => {
  return (
    <>
      <section className="relative w-screen h-screen overflow-hidden" id="work">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <img
            src={bannerImg}
            className="w-full h-full object-cover object-top"
            alt="banner"
          />
          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Centered Text */}
        <div className="flex items-center w-full justify-center h-full px-4 text-center ">
          <div className="text-white space-y-8 ">
            <h1
              className="bg-[radial-gradient(57.43%_313.9%_at_48.8%_59.03%,_#FFFFFF_50.47%,_rgba(255,_255,_255,_0.5)_100%)]
                bg-clip-text text-transparent font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl  leading-[120%] font-rethink"
            >
              We Shape Your Ideas Into
              <span
                className="block text-primary bg-[radial-gradient(57.43%_313.9%_at_48.8%_59.03%,_#FFFFFF_56.47%,_rgba(255,_255,_255,_0.5)_100%)]
                bg-clip-text text-transparent"
              >
                Awesome Digital
              </span>
              <span
                className="block bg-[radial-gradient(57.43%_313.9%_at_48.8%_59.03%,_#FFFFFF_56.47%,_rgba(255,_255,_255,_0.5)_100%)]
                bg-clip-text text-transparent"
              >
                Experience
              </span>
            </h1>
            <p
              className="text-center font-rethink font-medium leading-[120%] tracking-normal 
                   text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] 
                    mx-auto"
            >
              Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
            </p>
            <button className="banner-btn">Book a call with us</button>
          </div>
        </div>

        <div className="absolute bottom-28 w-full">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-6 gap-y-4 max-w-[1480px] mx-auto px-4">
            <img
              src={fixmyphone}
              alt="fixmyphone"
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
            <img
              src={Verdant}
              alt="Verdant"
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
            <img src={duet} alt="duet" className="h-8 sm:h-10 md:h-12 w-auto" />
            <img src={apex} alt="apex" className="h-8 sm:h-10 md:h-12 w-auto" />
            <img
              src={lindholms}
              alt="lindholms"
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
