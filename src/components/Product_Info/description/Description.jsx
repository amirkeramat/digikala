import React, { useState } from "react";
import useProductState from "../../../hooks/state/useProductState";
const Description = () => {
  const { introduce } = useProductState();
  const [showMore,setShowMore] = useState(false)
  return <div className="col-span-1 md:col-span-3">
    <p className={`overflow-hidden ${showMore ? "max-h-auto":"max-h-[100px]"}`}>{introduce}</p>
    <button onClick={()=>setShowMore(prv=>!prv)} className="bg-blue-500 p-2 rounded-xl">{showMore ? "مشاهده کمتر":"مشاهده بیشتر"}</button>
  </div>;
};

export default Description;
