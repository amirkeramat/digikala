import tw from "tailwind-styled-components";

export const Container = tw.div`
  grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 p-12
`;

export const CategoryBox = tw.div`
rounded p-2  border-b-2 border-red-500  flex flex-col items-center justify-center
`;
export const Img = tw.img`
w-[50%]`;
export const Title = tw.h1`
  h-[50px] text-center`;
export const CategoryTitle = tw.h1`
col-span-2 sm:col-span-4 lg:col-span-7`;