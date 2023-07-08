import React, { useState } from "react";
import useProductState from "../../../hooks/state/useProductState";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
const MoreInformation = () => {
  const { information } = useProductState();
  const [showMore, setShowMore] = useState(false);
  return (
    <div
      className={`col-span-1 md:col-span-3 relative transition-all duration-500 ease-in-out overflow-hidden shadow-sm shadow-gray-950/10 my-10 p-4 ${
        showMore ? "max-h-auto h-full" : "max-h-[220px] h-[220px]"
      }`}
    >
      <span className="flex items-center">
        <h1 className="p-2 flex justify-center  font-bold text-4xl w-[200px]">
          مشخصات بیشتر
        </h1>
        <button
          onClick={() => setShowMore((prv) => !prv)}
          className="flex justify-center items-center bg-blue-500/10 w-[30px] h-[30px] text-2xl text-blue-500 rounded-xl"
        >
          {showMore ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      </span>

      {information !== null && (
        <>
          {information.map((item, index) => {
            const { title, values } = item;
            return (
              <span
                key={index}
                className="flex w-[full] border border-gray-950/10 p-2"
              >
                <p className="mx-4 text-gray-950/80">{title}:</p>
                <p className="font-semibold">{values}</p>
              </span>
            );
          })}
        </>
      )}
      <button
        onClick={() => setShowMore((prv) => !prv)}
        className="flex justify-center items-center bg-blue-500/10 w-[30px] h-[30px] text-2xl text-blue-500 rounded-xl"
      >
        {showMore ? <FaArrowUp /> : <FaArrowDown />}
      </button>
      <span
        className={`absolute ${
          showMore ? "hidden" : "block"
        } bg-gray-50/50 bottom-0 left-0 right-0 w-full h-[50px] z-10 rounded-3xl `}
      ></span>
    </div>
  );
};

export default MoreInformation;
