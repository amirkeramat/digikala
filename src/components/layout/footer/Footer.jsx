import React from "react";
import footerItems from "../../../constants/footer";
import { Link } from "react-router-dom";
export default function Footer() {
  const { icons, links, social } = footerItems;
  return (
    <div className="container mt-10 p-2">
      <span className="flex justify-between items-center">
        <img src="/light-logo.png" className="w-[100px]" alt="" />
        <button
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          className="shadow w-[100px] p-2 rounded-xl bg-blue-300/20"
        >
          برگشت به بالا
        </button>
      </span>
      <span className="flex  mt-5 p-2">
        <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۴۱</p>
        <div className="w-[1px] h-[25px] mx-4 bg-blue-500" />
        <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
      </span>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-5 flex-wrap mt-5">
        {icons.map((icon) => (
          <span key={icon.id} className="flex flex-col text-xl items-center justify-center ">
            <img className="w-[50px]" src={icon.img} alt="" />
            <p className=" whitespace-nowrap">{icon.title}</p>
          </span>
        ))}
      </div>
      <div className="grid mt-5 grid-cols-2 md:grid-cols-4 p-2 ">
        {links.map((link) => (
          <u key={link.id}l>
            <li className="font-semibold">{link.title}</li>
            <li className="flex flex-col">
              {link.subLinks.map((subLink) => (
                <Link key={subLink.id}>{subLink.title}</Link>
              ))}
            </li>
          </u>
        ))}
        <span>
          <h6>{social.title}</h6>
          <span className="flex justify-start">
            {social.icons.map((icon) => (
              <i key={icon.id} className="text-4xl me-4 py-4">{icon.icon}</i>
            ))}
          </span>
        </span>
      </div>
    </div>
  );
}
