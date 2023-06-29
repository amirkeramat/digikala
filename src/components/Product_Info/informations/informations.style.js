import tw from "tailwind-styled-components";
export const Container = tw.section`
container
`;
export const Title = tw.h1`
font-bold
`;

export const SepRow = tw.div`
w-full h-[2px] bg-blue-600/20 my-2
`;

export const RateBox = tw.span`
flex justify-evenly w-[100px]
`;

export const Rate = tw.span`
flex items-baseline
`;
export const RateCount = tw.p`
 text-gray-400
`;

export const ColorsBox = tw.span`
h-[150px] flex flex-col justify-evenly
`;

export const ColorTitleBox = tw.span`
flex`;

export const ColorTitle = tw.p`
text-gray-500`;

export const ColorName = tw.p`
font-bold ms-2 text-gray-950`;

export const ColorsSelectBox = tw.span`
flex
`;

export const ColorsContainer = tw.div`
ms-4 w-[50px] h-[50px] rounded-full  border border-gray-950 flex justify-center items-center shadow p-0.5
${(p) => (p.$selected ? "bg-blue-400" : "bg-white")}
`;

export const ColorBox = tw.div`
cursor-pointer w-[80%] relative h-[80%] rounded-full hover:after:absolute hover:after:content-[attr(after-dynamic-value)] hover:after:top-20 hover:after:text-white hover:after:bg-gray-950 hover:after:w-[60px] hover:after:h-[50px] hover:after:flex hover:after:justify-center hover:after:items-center hover:after:rounded-2xl border-none shadow-xl
`;

export const InformationList = tw.ul`
space-y-2 list-inside list-disc marker:text-yellow-500
`;

export const InformationItem = tw.li`
flex
`;
export const InformationItemTitle = tw.p`
text-gray-700 whitespace-nowrap
`;
export const InformationItemValue = tw.span`
font-bold ms-4 flex flex-wrap 
`;
