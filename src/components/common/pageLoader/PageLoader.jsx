import React from "react";
import ImageLoader from "../../../assets/imageLoader.svg";
const PageLoader = () => {
  return (
    <div className="w-full h-screen sticky top-[150px] inset-0 flex justify-center items-start overflow-y-hidden">
      <div className="flex mt-10 justify-center border border-yellow-400 shadow-2xl bg-white rounded-3xl">
        <img className="w-[200px]" src="/light-logo.png" />
        <img className=" h-[100px]" src={ImageLoader} />
      </div>
    </div>
  );
};

export default PageLoader;
