// import container from "../assets/Container.png";

// const CardSection = () => {
//   return (
//     <section className="w-full bg-black py-10 sm:py-20">
//       <div className="flex justify-center items-center">
//         <div className="relative w-[90%] sm:w-[840px] h-[300px] sm:h-[342px] overflow-hidden rounded-xl">
//           {/* Background Image */}
//           <img
//             src={container}
//             alt="Background"
//             className="absolute top-0 left-0 w-full h-full object-cover object-center z-0 brightness-[0.6]"
//           />

//           {/* Dark Fade at Corners */}
//           <div
//             className="absolute inset-0 z-10 pointer-events-none"
//             style={{
//               background:
//                 "radial-gradient(circle at center, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%)",
//             }}
//           />

//           {/* Content */}
//           <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center px-4">
//             <h1
//               className="text-[28px] sm:text-[48px] font-bold leading-snug tracking-tight
//                 font-[Rethink Sans]
//                 bg-[radial-gradient(57.43%_313.9%_at_48.8%_59.03%,_#FFFFFF_56.47%,_rgba(255,_255,_255,_0.5)_100%)]
//                 bg-clip-text text-transparent"
//             >
//               Our Most Recent Works
//             </h1>
//             <p className="mt-3 sm:mt-4 text-[16px] sm:text-[20px] leading-[120%] text-white max-w-[320px] sm:max-w-[372px] font-[Rethink Sans]">
//               Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CardSection;

import container from "../assets/Container.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import { MdArrowOutward } from "react-icons/md";
const CardSection = () => {
  return (
    <section className=" mb-32  h-full">
      <div className="w-full bg-black py-10 sm:py-20">
        <div className="flex justify-center items-center">
          <div className="relative w-[90%] sm:w-[840px] h-[300px] sm:h-[342px] overflow-hidden rounded-xl">
            {/* Background Image */}
            <img
              src={container}
              alt="Background"
              className="absolute top-0 left-0 w-full h-full object-cover object-center z-0 brightness-[0.6]"
            />

            {/* Dark Gradient Fade at Corners and Bottom */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: `
                radial-gradient(circle at top left, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0) 50%), 
                radial-gradient(circle at top right, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0) 50%), 
                radial-gradient(circle at bottom left, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0) 50%), 
                radial-gradient(circle at bottom right, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0) 50%),
                linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.7) 100%)
              `,
              }}
            />

            {/* Content */}
            <div className="relative z-20 w-full h-full flex flex-col justify-center items-center text-center px-4">
              <h1
                className="text-[28px] sm:text-[48px] font-bold leading-snug tracking-tight 
                font-[Rethink Sans]
                bg-[radial-gradient(57.43%_313.9%_at_48.8%_59.03%,_#FFFFFF_56.47%,_rgba(255,_255,_255,_0.5)_100%)]
                bg-clip-text text-transparent"
              >
                Our Most Recent Works
              </h1>
              <p className="mt-3 sm:mt-4 text-[16px] sm:text-[20px] leading-[120%] text-white max-w-[320px] sm:max-w-[372px] font-[Rethink Sans]">
                Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* card section  */}
      <div>
        <div className="max-w-[1480px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            {/* Card 1 */}
            <div className="w-full lg:w-1/2 h-auto flex flex-col">
              <img
                src={image3}
                alt=""
                className="rounded-2xl w-full h-auto object-cover"
              />
              <div className="flex justify-between items-center mt-4 flex-wrap gap-4">
                <div>
                  <h1 className="font-[Rethink Sans] font-normal text-[24px] leading-[120%] text-white">
                    Alcohol Tracker
                  </h1>
                  <p className="mt-2 font-[Rethink Sans] font-normal text-[24px] leading-[120%] text-[#D1D1D1]">
                    All-In-One (AIO) Service
                  </p>
                </div>
                <button className="card-btn font-[DM Sans]">
                  Open <MdArrowOutward />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full lg:w-1/2 h-auto flex flex-col">
              <img
                src={image4}
                alt=""
                className="rounded-2xl w-full h-auto object-cover"
              />
              <div className="flex justify-between items-center mt-4 flex-wrap gap-4">
                <div>
                  <h1 className="font-[Rethink Sans] font-normal text-[24px] leading-[120%] text-white">
                    Rely
                  </h1>
                  <p className="mt-2 font-[Rethink Sans] font-normal text-[24px] leading-[120%] text-[#D1D1D1]">
                    All-In-One (AIO) Service
                  </p>
                </div>
                <button className="card-btn font-[DM Sans]">
                  Open <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd div  */}

        <div className="max-w-[1480px] mx-auto px-4 mt-12">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
            {/* Card 1 */}
            <div className="w-full lg:w-1/2 h-auto flex flex-col">
              <img
                src={image5}
                alt=""
                className="rounded-2xl w-full h-auto object-cover"
              />
              <div className="flex justify-between items-center mt-4 flex-wrap gap-4">
                <div>
                  <h1 className="font-[Rethink Sans] font-bold text-[20px] leading-[120%] text-white">
                    Alcohol Tracker
                  </h1>
                  <p className="mt-2 font-[Rethink Sans] font-normal text-[14px] leading-[120%] text-[#D1D1D1]">
                    All-In-One (AIO) Service
                  </p>
                </div>
                <button className="card-btn-sm font-[DM Sans]">
                  Open <MdArrowOutward />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 h-auto flex flex-col">
              <img
                src={image6}
                alt=""
                className="rounded-2xl w-full h-auto object-cover"
              />
              <div className="flex justify-between items-center mt-4 flex-wrap gap-4">
                <div>
                  <h1 className="font-[Rethink Sans] font-bold text-[20px] leading-[120%] text-white">
                    Finance Website
                  </h1>
                  <p className="mt-2 font-[Rethink Sans] font-normal text-[14px] leading-[120%] text-[#D1D1D1]">
                    All-In-One (AIO) Service
                  </p>
                </div>
                <button className="card-btn-sm font-[DM Sans]">
                  Open <MdArrowOutward />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full lg:w-1/2 h-auto flex flex-col">
              <img
                src={image7}
                alt=""
                className="rounded-2xl w-full h-auto object-cover"
              />
              <div className="flex justify-between items-center mt-4 flex-wrap gap-4">
                <div>
                  <h1 className="font-[Rethink Sans] font-bold text-[20px] leading-[120%] text-white">
                    Alcohol Tracker
                  </h1>
                  <p className="mt-2 font-[Rethink Sans] font-normal text-[14px] leading-[120%] text-[#D1D1D1]">
                    All-In-One (AIO) Service
                  </p>
                </div>
                <button className="card-btn-sm font-[Rethink Sans]">
                  Open <MdArrowOutward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
