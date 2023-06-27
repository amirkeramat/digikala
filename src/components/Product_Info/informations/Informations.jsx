import React from "react";
import useProductState from "../../../hooks/state/useProductState";
const Informations = () => {
  const { mainDetails, rating ,options} = useProductState();
  options.map(item=>{
    const {title,values} = item
    console.log(title,values[values.length-1]);
  })
  return (
    <div className='container'>
      <h1>{mainDetails.title}</h1>
      <div className='w-[80%] h-[2px] bg-red-500'></div>
      <span className='flex justify-between w-[100px]'>
        <h6>{rating.rate}</h6>
        <h6>{rating.count}</h6>
      </span>
      <span>
        <h6>ویژگی ها</h6>
        {options.map(option=>{
          const {title,values} = option
          return <p>{values}</p>;
          
        }
          
        )}
      </span>
    </div>
  );
};

export default Informations;
