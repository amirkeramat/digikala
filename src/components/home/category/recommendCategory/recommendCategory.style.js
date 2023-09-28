import tw from "tailwind-styled-components";

export const Container = tw.div`
  grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-x-4 gap-y-8 py-12
`;

export const CategoryBox = tw.div`
rounded-full w-[120px] h-[120px] border border-rose-500 overflow-hidden  p-2   flex flex-col items-center justify-center hover:shadow-xl  transition
`;
export const Img = tw.img`
w-[50%] `;
export const Title = tw.h1`
  text-[12px] text-center`;
export const CategoryTitle = tw.h1`
pt-6 px-6`;