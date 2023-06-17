import React from "react";
import { NavLink } from "react-router-dom";
export default function SubMenu({ title, items }) {
  return (
    <li className='group/subMenu  hover:bg-gray-50 hover:text-red-500 w-[150px] cursor-pointer text-center whitespace-nowrap py-6'>
      <h6 className='text-3xl'> {title}</h6>
      <div className='group-hover/subMenu:block w-[550px] h-full absolute top-0 right-[150px] hidden bg-gray-50'>
        <ul className='grid grid-cols-2 gap-10 mt-10 ms-5 text-4xl'>
          {items.map((item) => (
            <li className='flex items-center'>
              <div className='bg-red-500 w-[2px] h-[30px] me-5'></div>
              <NavLink className='text-gray-800 hover:text-red-500'>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
