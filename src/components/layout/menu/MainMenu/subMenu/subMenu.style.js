import tw from "tailwind-styled-components";

export const ListItem = tw.li`
    group/subMenu text-white  hover:bg-gray-50 hover:text-yellow-500 w-[150px] cursor-pointer text-center whitespace-nowrap py-6 flex items-center justify-evenly
`;

export const ListTitle = tw.h6`
   text-3xl
`;

export const SubDropdown = tw.div`
    group-hover/subMenu:block w-[550px] h-full absolute top-0 right-[150px] hidden bg-gray-50
`;
export const SubDropdownItems = tw.ul`
    grid grid-cols-2 gap-10 mt-10 ms-5 text-4xl
`;
export const SubDropdownItem = tw.li`
  flex items-center
`;
export const SepLine = tw.div`
    bg-blue-500 w-[2px] h-[30px] me-5
`;
export const SubDropdownLink = tw.span`
    text-gray-800 hover:text-red-500
`;

