import tw from "tailwind-styled-components";
export const Container = tw.menu`
    flex flex-col md:hidden 
`;
export const MenuItems = tw.div`
     absolute inset-0 z-40 bg-white transition-all duration-700 ease-in-out space-y-2 overflow-y-auto
     ${(p) => (p.$toggle ? "max-w-full opacity-100" : "max-w-0 opacity-0")}
      
`;
export const SubMenuItems = tw.ul`
      p-8
      
`;
export const MenuButton = tw.i`
flex md:hidden absolute top-10 right-2 p-2  z-20 text-4xl cursor-pointer rounded-full
`;
export const CloseButton = tw.i`
   text-blue-500 text-5xl  block text-center cursor-pointer py-2

`;
export const UseFullLinks = tw.li`
flex   items-center my-4 shadow-sm shadow-gray-950/50  p-2 cursor-pointer
`;
export const UseFullLinkIcon = tw.i`
me-1  `;
export const SepLine = tw.div`
w-[95%] h-[1px] bg-blue-500 rounded-xl my-10`;
