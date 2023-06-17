import React from "react";

import { FiShoppingCart, FiLogIn, FiSearch, FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {menuToggleAction} from '../../features/menu/MenuSlice'
import Menu from "../menu/Menu";
export default function Navbar() {
  const dispatch = useDispatch()
  return (
    <>
      <nav className='navbar w-full flex items-center justify-center py-4'>
        <div className='container w-full flex justify-between'>
          <div className='left-side flex items-center justify-evenly flex-1'>
            <FiMenu onClick={()=>dispatch(menuToggleAction())} className="block md:hidden"/>
            <NavLink>
              <img
                src='https://www.digikala.com/statics/img/svg/logo.svg'
                alt='digiKala-Logo'
              />
            </NavLink>

            <form className='w-full hidden md:block'>
              <div className='relative w-full ms-5'>
                <input
                  className='bg-gray-200 w-full h-[40px] ps-12 rounded'
                  type='text'
                  placeholder='جستجو'
                />
                <button className='absolute top-[10px] right-2'>
                  <FiSearch className='text-3xl text-gray-400' />
                </button>
              </div>
            </form>
          </div>
          <div className='right-side flex items-center justify-end flex-1'>
            <NavLink className='flex items-center border  border-gray-400 p-2 bg-gray-200 rounded'>
              <FiLogIn />
              <span>ورود|ثبت نام</span>
            </NavLink>
            <div className='w-[2px] h-[20px] bg-gray-400 mx-5'></div>
            <NavLink>
              <FiShoppingCart />
            </NavLink>
          </div>
        </div>
      </nav>
      <Menu/>
    </>
  );
}
