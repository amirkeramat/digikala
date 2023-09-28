import tw from "tailwind-styled-components";

export const Container = tw.section`
 ring-2 ring-rose-200 h-[320px] bg-white p-4 rounded-xl  flex flex-col justify-evenly items-center w-full relative  shadow-lg
`;

export const Title = tw.h5`
text-gray-950 text-[14px] h-[100px] py-2
`;

export const PriceContainer = tw.span`
flex justify-evenly items-center w-full
`;
export const Price = tw.span`
flex flex-col text-gray-950 items-center text-[12px]
`;
export const PrvPriceNumber = tw.h6`
line-through
`;
export const DiscPrice = tw.h6`
' text-white rounded-full px-4 flex items-center justify-center bg-red-500
`;
