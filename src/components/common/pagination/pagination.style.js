import tw from "tailwind-styled-components";

export const Ul = tw.ul`
    flex justify-center items-center flex-wrap
`;
export const Li = tw.li`
    ${(p) =>
      p.$isDisabled
        ? "cursor-not-allowed text-gray-400 pointer-events-none"
        : "cursor-pointer text-gray-950"}
        
    ${(p) => (p.$active  ? "bg-blue-500 text-gray-50" : "bg-white")}

    w-[40px] h-[40px] rounded-full mx-2 flex justify-center items-center 
   
`;
