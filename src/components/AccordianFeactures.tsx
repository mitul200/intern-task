import container from "../assets/Container.png";

import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const accorditationData = [
  {
    id: 1,
    title: "How to Protect Your Identity While Traveling ",
    content:
      "This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 1. It provides information about the first section.",
  },
  {
    id: 2,
    title: "How to Protect Your Identity While Traveling ",
    content:
      "This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 2. It explains details related to the second topic.",
  },
  {
    id: 3,
    title: "How to Protect Your Identity While Traveling",
    content:
      "This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 3. It covers key aspects of the third part.",
  },
  {
    id: 4,
    title: "How to Protect Your Identity While Traveling",
    content:
      "This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 4. It contains important points for the fourth section.",
  },
  {
    id: 5,
    title: "How to Protect Your Identity While Traveling",
    content:
      "This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 3. It covers key aspects of the third part.This is the content for Accorditation 5. It summarizes the final segment of the list.",
  },
];

// function AccordionItem({ id, title, content, isExpanded, onToggle }) {
//   return (
//     <div
//       style={{
//         background:
//           "linear-gradient(90deg, rgba(115, 191, 250, 0.2) 0%, rgba(10, 10, 10, 0) 100%)",
//       }}
//       className={`rounded-lg overflow-hidden transition-all duration-300 ${
//         isExpanded ? "max-h-96" : "max-h-20"
//       }`}
//     >
//       <div
//         className="flex justify-between items-start cursor-pointer p-6"
//         onClick={onToggle}
//       >
//         <div className="text-2xl font-semibold text-white font-rethink">
//           <span className="text-[#3C97F5] mr-2">{id}</span>

//           {title}
//         </div>
//         <MdArrowOutward
//           className={`text-4xl text-white transition-transform duration-300 ${
//             isExpanded ? "rotate-90" : ""
//           }`}
//         />
//       </div>

//       <div
//         className={`px-6 pb-6 text-white transition-opacity duration-300 ${
//           isExpanded ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         {content}
//       </div>
//     </div>
//   );
// }
function AccordionItem({ id, title, content, isExpanded, onToggle }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(115, 191, 250, 0.2) 0%, rgba(10, 10, 10, 0) 100%)",
      }}
      className={`rounded-lg overflow-hidden transition-all duration-300 ${
        isExpanded ? "max-h-60 sm:max-h-80 md:max-h-96" : "max-h-16 sm:max-h-20"
      }`}
    >
      <div
        className="flex justify-between items-start cursor-pointer p-4 sm:p-6"
        onClick={onToggle}
      >
        <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white font-rethink leading-snug">
          <span className="text-[#3C97F5] mr-2">{id}</span>
          {title}
        </div>
        <MdArrowOutward
          className={`text-3xl sm:text-4xl text-white transition-transform duration-300 ${
            isExpanded ? "rotate-90" : ""
          }`}
        />
      </div>

      <div
        className={`px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-white transition-opacity duration-300 ${
          isExpanded ? "opacity-100" : "opacity-0"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

const AccordionFeatures = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="w-full bg-black pt-10 sm:pt-10">
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
                  Featured Insights
                </h1>
                <p className="mt-3 sm:mt-4 text-[16px] sm:text-[20px] leading-[120%] text-white max-w-[320px] sm:max-w-[372px] font-[Rethink Sans]">
                  Lorem ipsum dolor sit amet consectetur. Eget at at nunc lorem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* accrodian site  */}
        {/* <div className="flex items-center justify-center w-full ">
          <div className="flex flex-col gap-5 mx-auto max-w-[1,140px] w-full px-4">
            {accorditationData.map((item) => (
              <AccordionItem
                key={item.id}
                isExpanded={expandedId === item.id}
                onToggle={() => toggleExpand(item.id)}
                {...item}
              />
            ))}
          </div>
        </div> */}
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col gap-4 sm:gap-5 mx-auto max-w-[1140px] w-full px-4 sm:px-6 md:px-10">
            {accorditationData.map((item) => (
              <AccordionItem
                key={item.id}
                isExpanded={expandedId === item.id}
                onToggle={() => toggleExpand(item.id)}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionFeatures;
