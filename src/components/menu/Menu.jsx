import React from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { CiShoppingBasket } from "react-icons/ci";
import { FaHotjar } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import SubMenu from "./subMenu";
import subMenu from "../../assets/subMenu";
import { useDispatch, useSelector } from "react-redux";
import { menuToggleAction } from "../../features/menu/MenuSlice";
export default function Menu() {
  const dispatch = useDispatch();
  const menuToggleStore = useSelector((state) => state.menuToggle);
  return (
    <>
      <menu className='w-full hidden md:flex  justify-center  py-4'>
        <div className='container'>
          <ul className='w-full flex'>
            <li className=' group/subMainMenu relative dropdown flex ms-10 items-center'>
              <NavLink className='flex items-center'>
                <FiMenu className='me-4' />
                <h6>دسته بندی کالاها</h6>
              </NavLink>
              <div className='w-[2px] h-[20px] bg-gray-400 mx-5'></div>
              <div className='group-hover/subMainMenu:block  w-[700px] h-auto bg-red-500 dropdown-menu absolute top-10 hidden rounded-2xl text-gray-950'>
                <ul>
                  {subMenu.map((subMenu) => (
                    <SubMenu title={subMenu.title} items={subMenu.subMenus} />
                  ))}
                </ul>
              </div>
            </li>

            <li className='flex ms-10 items-center'>
              <NavLink className='flex items-center'>
                <CiShoppingBasket className='me-1' />
                <h6>سوپر مارکت</h6>
              </NavLink>
            </li>
            <li className='flex ms-10 items-center'>
              <NavLink className='flex items-center'>
                <CiDiscount1 className='me-1' />
                <h6>تخفیفات شگفت انگیز</h6>
              </NavLink>
            </li>
            <li className='flex ms-10 items-center'>
              <NavLink className='flex items-center'>
                <FaHotjar className='me-1' />
                <h6>محبوب ترین ها</h6>
              </NavLink>
              <div className='w-[2px] h-[20px] bg-gray-400 mx-5'></div>
            </li>
            <li className='flex ms-10 items-center'>
              <NavLink className='flex items-center'>
                <h6>سوالی دارید؟</h6>
              </NavLink>
            </li>
          </ul>
        </div>
      </menu>
      <menu>
        <div
          className={`block md:hidden overflow-hidden transition-all duration-500 bg-red-500 h-screen ${
            menuToggleStore.show ? "max-w-[300px]" : "max-w-0"
          }`}>
          <ul className=''>
            <li className='flex ms-10 items-center'>
              <NavLink className='flex items-center'>
                <CiShoppingBasket className='me-1' />
                <h6>سوپر مارکت</h6>
              </NavLink>
            </li>
            <li className='flex ms-10 items-center'>
              <NavLink className='flex items-center'>
                <CiDiscount1 className='me-1' />
                <h6>تخفیفات شگفت انگیز</h6>
              </NavLink>
            </li>
            <li className='flex ms-10 items-center'>
              <NavLink className='flex items-center'>
                <FaHotjar className='me-1' />
                <h6>محبوب ترین ها</h6>
              </NavLink>
              <div className='w-[2px] h-[20px] bg-gray-400 mx-5'></div>
            </li>
            <li className='flex ms-10 items-center'>
              <NavLink className='flex items-center'>
                <h6>سوالی دارید؟</h6>
              </NavLink>
            </li>
            <li className='flex ms-10 items-center'>
              <NavLink className='flex items-center'>
                <FiMenu className='me-4' />
                <h6>دسته بندی کالاها</h6>
              </NavLink>
            </li>
          </ul>
        </div>
      </menu>
    </>
  );
}
