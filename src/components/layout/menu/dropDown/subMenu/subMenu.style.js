import tw from "tailwind-styled-components";

export const ListItem = tw.li`
     text-gray-800  r whitespace-nowrap py-4 flex flex-col  justify-evenly my-4 shadow-sm shadow-gray-950/50 cursor-pointer
`;

export const ListTitle = tw.h6`
   text-3xl flex items-center 
`;

export const SubDropdown = tw.div`
    flex flex-col
`;
export const SubDropdownItems = tw.ul`
      flex flex-col overflow-hidden transition-all duration-700 ease-in-out mt-2 
     ${(p) =>
       p.$toggle ? "max-h-[300px]" : "max-h-0"}
      
`;
export const SubDropdownItem = tw.li`
  flex items-center p-2
`;
export const SepLine = tw.div`
    bg-blue-500 w-[2px] h-[30px] me-5
`;
export const SubDropdownLink = tw.span`
    text-gray-950 font-semibold
`;
