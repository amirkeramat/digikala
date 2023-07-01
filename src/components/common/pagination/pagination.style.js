import tw from "tailwind-styled-components";

export const Ul = tw.ul`
    flex justify-center items-center flex-wrap
`;
export const Li = tw.li`
    ${(p) =>
      p.$isDisabled
        ? "cursor-not-allowed text-gray-400 pointer-events-none"
        : "cursor-pointer text-gray-950"}
        
    ${(p) => (p.$active  ? "bg-blue-500" : "bg-white")}

    w-[50px] h-[50px] rounded-full mx-2 flex justify-center items-center 
   
`;
