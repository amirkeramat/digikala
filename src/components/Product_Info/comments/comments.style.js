import tw from "tailwind-styled-components";

export const Container = tw.section`
col=span-1 md:col-span-3 shadow-sm shadow-gray-950/20 py-4 rounded-md 
`;
export const Title = tw.h1`
text-center text-4xl py-8 font-semibold
`;

export const CommentsWrapper = tw.div`
overflow-y-hidden px-8 py-4 border  
${(p) => (p.$showMore ? " max-h-auto" : "max-h-[700px]")}
`;

export const CommentsLength = tw.span`
flex justify-between
`;

export const CommentsBox = tw.div`
shadow-sm shadow-gray-950/10 border border-gray-950/10 my-4 rounded-xl p-6
`;

export const CommentsTitleWrapper = tw.span`
flex justify-start p-4`;

export const CommentsRate = tw.p`
flex justify-center items-center bg-green-500 text-gray-50 w-[25px] h-[25px] rounded-xl me-2`;

export const CommentsWriter = tw.span`
flex w-[300px] justify-between p-2`;

export const SepRow = tw.div`
w-[full] h-[2px] bg-blue-200/50`;

export const CommentsBody = tw.p`
p-4
`;

export const PurchasedItem = tw.span`
flex w-[200px] justify-between p-2`;

export const ShowMoreBtn = tw.button`
ms-8 w-[100px] bg-blue-500/20 p-1 rounded-xl flex justify-center items-center
`;