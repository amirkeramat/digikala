import tw from "tailwind-styled-components";
export const Main_Menu = tw.li`
group/subMainMenu relative dropdown  ms-10 items-center hidden md:flex
`;
export const MenuTitle = tw.span`
flex items-center
`;
export const SepLine = tw.span`
w-[2px] h-[20px] bg-gray-400 mx-5`;
export const DropMainMenu = tw.div`
group-hover/subMainMenu:block  w-[700px] h-auto bg-blue-500 dropdown-menu absolute top-10 hidden rounded-2xl text-gray-950 z-50`;

export const UseFullLinks = tw.li`
 ms-10 items-center hidden md:flex
`;
export const UseFullLinkIcon = tw.i`
me-1`;