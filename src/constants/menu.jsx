// const subMenu = [
//   {
//     id: 1,
//     title: "کالای دیجیتال",
//     subMenus: [
//       { id:crypto.randomUUID(), title: "لوازم جانبی موبایل" },
//       { id:crypto.randomUUID(), title: " گوشی موبایل" },
//       { id:crypto.randomUUID(), title: " لپ تاپ" },
//       { id:crypto.randomUUID(), title: " ساعت هوشمند" },
//     ],
//   },
//   {
//     id: 2,
//     title: "تجهیزات صنعتی",
//     subMenus: [
//       { id: crypto.randomUUID(), title: "ابزار برقی" },
//       { id: crypto.randomUUID(), title: " ابزار باغبانی" },
//       { id: crypto.randomUUID(), title: " ایمنی و کار" },
//       { id: crypto.randomUUID(), title: " حفاظتی و امنیتی" },
//     ],
//   },
//   {
//     id: 3,
//     title: "مد و پوشاک",
//     subMenus: [
//       { id: crypto.randomUUID(), title: "مردانه" },
//       { id: crypto.randomUUID(), title: "زنانه" },
//       { id: crypto.randomUUID(), title: " زیور آلات زنانه" },
//       { id: crypto.randomUUID(), title: "بچه گانه" },
//     ],
//   },
//   {
//     id: 4,
//     title: "کالا های سوپر مارکتی",
//     subMenus: [
//       { id: crypto.randomUUID(), title: "صبحانه" },
//       { id: crypto.randomUUID(), title: "لبنیات" },
//       { id: crypto.randomUUID(), title: " خواربار" },
//       { id: crypto.randomUUID(), title: "میوه و سبزی" },
//     ],
//   },
//   {
//     id: 5,
//     title: "کودک و نوزاد",
//     subMenus: [
//       { id: crypto.randomUUID(), title: "اسباب بازی" },
//       { id: crypto.randomUUID(), title: "لوازم شخصی" },
//       { id: crypto.randomUUID(), title: "بازی و سرگرمی" },
//       { id: crypto.randomUUID(), title: "کنسول" },
//     ],
//   },
//   {
//     id: 6,
//     title: "زیبایی و سلامت",
//     subMenus: [
//       { id: crypto.randomUUID(), title: "لوزم آرایشی" },
//       { id: crypto.randomUUID(), title: "لوزام بهداشتی" },
//       { id: crypto.randomUUID(), title: "عطر و ادکلن" },
//       { id: crypto.randomUUID(), title: "ابزار سلامتی" },
//     ],
//   },
//   {
//     id: 7,
//     title: "خانه و آشپزخانه",
//     subMenus: [
//       { id: crypto.randomUUID(), title: "صوتی و تصویری" },
//       { id: crypto.randomUUID(), title: "آشپزخانه" },
//       { id: crypto.randomUUID(), title: "مواد شوینده" },
//       { id: crypto.randomUUID(), title: "وسایل حمام" },
//     ],
//   },
//   {
//     id: 8,
//     title: "کتاب و لوازم تحریر",
//     subMenus: [
//       { id: crypto.randomUUID(), title: "کتاب و مجله" },
//       { id: crypto.randomUUID(), title: "کتاب صوتی" },
//       { id: crypto.randomUUID(), title: "نرم افزار" },
//       { id: crypto.randomUUID(), title: "لوازم تحریر" },
//     ],
//   },
//   {
//     id: 9,
//     title: "ورزش و سفر",
//     subMenus: [
//       { id: crypto.randomUUID(), title: "پوشاک ورزشی مردانه" },
//       { id: crypto.randomUUID(), title: "پوشاک ورزشی زنانه" },
//       { id: crypto.randomUUID(), title: "دوچرخه" },
//       { id: crypto.randomUUID(), title: "تجهیزات سفر" },
//     ],
//   },
// ];

// export default subMenu;

//Icons
import { AiOutlineCar } from "react-icons/ai";
import { FiCoffee } from "react-icons/fi";
import { BsBook, BsTelegram, BsGithub, BsInstagram } from "react-icons/bs";
import { TbShirt, TbToolsKitchen } from "react-icons/tb";
import { GiPearlNecklace } from "react-icons/gi";
import { BiHomeAlt, BiMobileAlt } from "react-icons/bi";
import { MdOutlineToys, MdSportsSoccer } from "react-icons/md";

const menu = {
  main: [{ id: 1, title: "خانه", icon: <BiHomeAlt />, url: "/" }],
  category: [
    {
      id: 1,
      title: "کالای دیجیتال",
      code: "electronic-devices",
      icon: <BiMobileAlt />,
      sub: [
        {
          id: 1,
          title: "لوازم جانبی گوشی",
          code: "mobile-accessories",
        },
        {
          id: 2,
          title: "گوشی موبایل",
          code: "mobile-phone",
        },
        {
          id: 3,
          title: "لپتاپ",
          code: "notebook-netbook-ultrabook",
        },
        {
          id: 4,
          title: "ساعت هوشمند",
          code: "wearable-gadget",
        },
      ],
    },
    {
      id: 2,
      title: "تجهیزات صنعتی",
      code:"vehicles",
      icon: <AiOutlineCar />,
      sub: [
        {
          id: 1,
          title: "ابزار برقی",
          code: "power-tools",
        },
        {
          id: 2,
          title: "ابزار باغبانی",
          code: "gardening-tools",
        },
        {
          id: 3,
          title: "ایمنی و کار",
          code: "safety-tools",
        },
        {
          id: 4,
          title: "حفاظتی و امنیتی",
          code: "protection-and-security-equipment",
        },
      ],
    },
    {
      id: 3,
      title: "مد و پوشاک",
      code: "apparel",
      icon: <TbShirt />,
      sub: [
        {
          id: 1,
          title: "مردانه",
          code: "mens-apparel",
        },
        {
          id: 2,
          title: "زنانه",
          code: "womens-apparel",
        },
        {
          id: 3,
          title: "زیورآلات زنانه",
          code: "women-jewelry",
        },
        {
          id: 4,
          title: "بچه گانه",
          code: "kids-apparel",
        },
      ],
    },
    {
      id: 4,
      title: "کالاهای سوپرمارکتی",
      icon: <FiCoffee />,
      code: "food-beverage",
      sub: [
        {
          id: 1,
          title: "صبحانه",
          code: "breakfast",
        },
        {
          id: 2,
          title: "لبنیات",
          code: "dairy",
        },
        {
          id: 3,
          title: "خوار و بار",
          code: "groceries",
        },
        {
          id: 4,
          title: "میوه و سبزی",
          code: "fruits-and-vegetables",
        },
      ],
    },
    {
      id: 5,
      title: "کودک و نوزاد",
      code: "mother-and-child",
      icon: <MdOutlineToys />,
      sub: [
        {
          id: 1,
          title: "اسباب بازی",
          code: "toys",
        },
        {
          id: 2,
          title: "لوازم شخصی",
          code: "personal-accessories",
        },
        {
          id: 3,
          title: "بازی و سرگرمی",
          code: "entertainment-and-games-equipment",
        },
        {
          id: 4,
          title: "کنسول",
          code: "game-console",
        },
      ],
    },
    {
      id: 6,
      title: "زیبایی و سلامت",
      code: "personal-appliance",
      icon: <GiPearlNecklace />,
      sub: [
        {
          id: 1,
          title: "لوازم آرایشی",
          code: "beauty",
        },
        {
          id: 2,
          title: "لوازم بهداشتی",
          code: "personal-care",
        },
        {
          id: 3,
          title: "عطر و ادکلن",
          code: "perfume-all",
        },
        {
          id: 4,
          title: "ابزار سلامت و طبی",
          code: "health-care",
        },
      ],
    },
    {
      id: 7,
      title: "خانه و آشپزخانه",
      code:"home-and-kitchen",
      icon: <TbToolsKitchen />,
      sub: [
        {
          id: 1,
          title: "صوتی و تصویری",
          code: "video-audio-entertainment",
        },
        {
          id: 2,
          title: "آشپزخانه",
          code: "home-kitchen-appliances",
        },
        {
          id: 3,
          title: "مواد شوینده",
          code: "detergents",
        },
        {
          id: 4,
          title: "وسایل حمام",
          code: "bath",
        },
      ],
    },
    {
      id: 8,
      title: "کتاب و لوازم تحریر",
      icon: <BsBook />,
      code:"book-and-media",
      sub: [
        {
          id: 1,
          title: "کتاب و مجله",
          code: "magazines",
        },
        {
          id: 2,
          title: "کتاب صوتی",
          code: "audio-book",
        },
        {
          id: 3,
          title: "نرم افزار",
          code: "software",
        },
        {
          id: 4,
          title: "لوازم تحریر",
          code: "stationery",
        },
      ],
    },
    {
      id: 9,
      title: "ورزش و سفر",
      code:"sport-entertainment",
      icon: <MdSportsSoccer />,
      sub: [
        {
          id: 1,
          title: "پوشاک ورزشی مردانه",
          code: "men-sportswear",
        },
        {
          id: 2,
          title: "پوشاک ورزشی زنانه",
          code: "women-sportwear",
        },
        {
          id: 3,
          title: "دوچرخه",
          code: "bicycle",
        },
        {
          id: 4,
          title: "تجهیزات سفر",
          code: "traveling-equipment",
        },
      ],
    },
  ],
  links: [
    {
      id: 1,
      title: "Telegram",
      icon: <BsTelegram />,
      url: "https://t.me/HiddenID",
    },
    {
      id: 2,
      title: "Github",
      icon: <BsGithub />,
      url: "https://github.com/F4RD1N",
    },
    {
      id: 3,
      title: "Instagram",
      icon: <BsInstagram />,
      url: "https://instagram.com/react.nick",
    },
  ],
};

export default menu;
