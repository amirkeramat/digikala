import tw from "tailwind-styled-components";

export const ListItem = tw.li`
     text-gray-800  r whitespace-nowrap py-4 flex flex-col  justify-evenly my-2
`;

export const ListTitle = tw.h6`
   text-3xl flex items-center 
`;

export const SubDropdown = tw.div`
    flex flex-col
`;
export const SubDropdownItems = tw.ul`
     bg-gray-100 flex flex-col overflow-hidden transition-all duration-700 ease-in-out mt-2
     ${(p) =>
       p.$toggle ? "max-h-[300px]" : "max-h-0"}
      
`;
export const SubDropdownItem = tw.li`
  flex items-center
`;
export const SepLine = tw.div`
    bg-red-500 w-[2px] h-[30px] me-5
`;
export const SubDropdownLink = tw.span`
    text-red-500
`;
