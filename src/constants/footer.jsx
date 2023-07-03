import { FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";
const footerItems = {
  icons: [
    {
      id: 1,
      img: "https://www.digikala.com/statics/img/svg/footer/express-delivery.svg",
      title: "امکان تحویل اکسپرس",
    },
    {
      id: 2,
      img: "https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg",
      title: "امکان پرداخت در محل",
    },
    {
      id: 3,
      img: "https://www.digikala.com/statics/img/svg/footer/support.svg",
      title: "7 روز هفته 24 ساعته",
    },
    {
      id: 4,
      img: "https://www.digikala.com/statics/img/svg/footer/days-return.svg",
      title: "هفت روز ضمانت بازگشت کالا",
    },
    {
      id: 5,
      img: "https://www.digikala.com/statics/img/svg/footer/original-products.svg",
      title: "ضمانت اصل بودن کالا",
    },
  ],
  links: [
    {
      id: 1,
      title: "با بلو بی کالا",
      src: "/",
      subLinks: [
        { id: 1, title: "اتاق خبر در بلوبی" },
        { id: 1, title: "فروش در بلوبی" },
        { id: 1, title: "فرصت های شغلی" },
      ],
    },
    {
      id: 2,
      title: "خدمات مشتریان",
      src: "/",
      subLinks: [
        { id: 1, title: "پاسخ به پرسش های متداول" },
        { id: 1, title: "رویه بازگرداندن کالا" },
        { id: 1, title: "شرایط استفاده" },
      ],
    },
    {
      id: 3,
      title: "راهنمای خرید از بلوبی کالا",
      src: "/",
      subLinks: [
        { id: 1, title: "نحوه صبت سفارش" },
        { id: 1, title: "رویه ارسال سفارش" },
        { id: 1, title: "شیوه های پرداخت" },
      ],
    },
  ],
  social: {
    title: "با ما همراه باشید",
    icons: [
      { id: 1, icon: <FaInstagram /> },
      { id: 1, icon: <FaTwitter /> },
      { id: 1, icon: <FaTelegram /> },
    ],
  },
};

export default footerItems;
