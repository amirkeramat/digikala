import React from "react";

export default function ProductCart({
  image,
  title,
  prev_price,
  current_price,
  discount_percent,
  is_incredible,
}) {
  return (
    <div className='product-card w-[200px] h-[300px] bg-gray-100'>
      <div className='flex flex-col justify-evenly items-start'>
        <img src={image} alt='' />
        <h5 className='text-gray-950 text-xl h-[50px]'>{title}</h5>
        <span className='flex justify-evenly items-center w-full'>
          {is_incredible ? (
            <span className='flex flex-col text-gray-950 items-center'>
              <h6 className=' line-through'>
                {prev_price}
                {"تومان"}
              </h6>
              <h6>
                {current_price}
                {"تومان"}
              </h6>
            </span>
          ) : (
            <h6>{current_price}</h6>
          )}
          {discount_percent > 0 ? (
            <h6 className='bg-red-500 text-white rounded-full px-4 flex items-center justify-center'>
              {discount_percent}%
            </h6>
          ):null}
        </span>
      </div>
    </div>
  );
}
