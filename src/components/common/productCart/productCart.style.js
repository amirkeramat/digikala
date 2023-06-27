import tw from "tailwind-styled-components";

export const Container = tw.section`
shadow-xl shadow-gray-900 w-[200px] h-[350px]  bg-gray-50 p-4 rounded-xl  flex flex-col justify-evenly items-start
`;

export const Title = tw.h5`
text-gray-950 text-2xl h-[100px]
`;

export const PriceContainer = tw.span`
flex justify-evenly items-center w-full
`;
export const Price = tw.span`
flex flex-col text-gray-950 items-center
`;
export const PrvPriceNumber = tw.h6`
line-through
`;
export const DiscPrice = tw.h6`
' text-white rounded-full px-4 flex items-center justify-center bg-red-500
`;
