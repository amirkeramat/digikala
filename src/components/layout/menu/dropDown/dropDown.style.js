import tw from "tailwind-styled-components";
export const Container = tw.menu`
    flex flex-col
`;
export const MenuItems = tw.div`
     absolute inset-0 z-10 bg-gray-100 transition-all duration-700 ease-in-out space-y-2 overflow-y-auto
     ${(p) => (p.$toggle ? "max-w-full w-full opacity-100" : "max-w-0 w-0 opacity-0")}
      
`;
export const SubMenuItems = tw.ul`
     mt-16 p-2
      
`;
export const MenuButton = tw.i`
block md:hidden absolute top-12 right-2 z-20
`;
export const UseFullLinks = tw.li`
flex   items-center my-4
`;
export const UseFullLinkIcon = tw.i`
me-1`;
export const SepLine = tw.div`
w-[80%] h-[2px] bg-red-500`;
