import React from "react";
import useProductState from "../../../hooks/state/useProductState";
import { FiShoppingBag } from "react-icons/fi";
import { FaShippingFast } from "react-icons/fa";
import { SepRow } from "./Shipping.style";
import {rialToToman} from '../../../helpers/index'
const Shipping = () => {
  const { price } = useProductState();
  const { current_price, prev_price, is_incredible, discount_percent } = price;
  return (
    <div className="h-[400px] flex flex-col justify-evenly bg-gray-300/50 shadow-xl rounded-xl p-6">
      <h1 className="font-bold text-3xl">فروشنده</h1>
      <span className="flex items-center">
        <FiShoppingBag className="text-blue-400" />
        <p className="ms-2">بلو بی شاپ</p>
      </span>
      <span className="flex">
        <p className="text-gray-400">عملکرد:</p>
        <p className="text-green-400">عالی</p>
      </span>
      <SepRow />

      <span className="">
        <p className="text-red-400 flex items-center py-4">
          <FaShippingFast />
          ارسال فوری
        </p>
        <p className="text-gray-400 bg-gray-100 w-[150px] rounded-xl">
          موجود در انبار فروشنده
        </p>
      </span>
      <SepRow />

      <span className="">
        {is_incredible ? (
          <span>
            <span className="flex items-center justify-end">
              <p className=" line-through me-2 ">
                {" "}
                {rialToToman(prev_price).toLocaleString()}
              </p>
              <p className="w-[30px] h-[30px] rounded-xl bg-red-500 text-white  flex justify-center items-center">
                {discount_percent}%
              </p>
            </span>
            <span className="flex items-center justify-end">
              <p>
                {rialToToman(current_price).toLocaleString()}
                {"تومان"}
              </p>
            </span>
          </span>
        ) : (
          <span className="flex items-center justify-center bg-gray-950/5 p-2 rounded-2xl shadow-xl">
            <p>
              {rialToToman(current_price).toLocaleString()}
              {"تومان"}
            </p>
          </span>
        )}
      </span>
      <button className="flex justify-center items-center bg-red-500 text-white w-full p-2 rounded-xl">
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default Shipping;
