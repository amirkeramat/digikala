import tw from "tailwind-styled-components";

export const Container = tw.section`
    w-full h-screen sticky top-[150px] inset-0 flex justify-center items-start overflow-y-hidden
`;

export const LoaderBox = tw.div`
flex mt-10 justify-center border border-yellow-400 shadow-2xl bg-white rounded-3xl
`;
