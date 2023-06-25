import tw from "tailwind-styled-components";

export const Container = tw.div`
  grid grid-cols-2  md:grid-cols-7 gap-4
`;

export const CategoryBox = tw.div`
rounded p-2  border-b-2 border-red-500  flex flex-col items-center justify-center
`;
export const Img = tw.img`
w-[50%]`;
export const Title = tw.h1`
whitespace-nowrap`;
export const CategoryTitle = tw.h1`
col-span-2 md:col-span-7`;