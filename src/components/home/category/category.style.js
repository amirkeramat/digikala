import tw from "tailwind-styled-components";

export const Container = tw.div`
grid  grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 container justify-center items-center
p-12
`;

export const CategoryBox = tw.div`
rounded-2xl shadow-xl shadow-gray-200 p-2  border border-red-500  flex flex-col items-center justify-center
`;
export const Img = tw.img`
w-[50%]`;
export const Title = tw.h1`
whitespace-nowrap`;
export const CategoryTitle = tw.h1`
col-span-2 md:col-span-4`;