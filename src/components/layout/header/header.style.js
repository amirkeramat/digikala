import tw from "tailwind-styled-components";


export const Container = tw.header`
container w-full flex justify-between p-2 flex-wrap
`;
export const NavbarLeft = tw.div`
left-side flex items-center justify-center md:justify-evenly flex-1
`;
export const NavbarRight = tw.div`
right-side flex items-center justify-end flex-1
`;

export const SearchForm = tw.form`
w-full
`;
export const SearchBox = tw.div`
w-full hidden md:block
`;
export const SearchFormContainer = tw.div`
relative w-full ms-5'`;
export const SearchInput = tw.input`
bg-gray-200 w-full h-[40px] ps-12 rounded
`;
export const SearchButton = tw.button`
absolute top-[10px] right-2 text-3xl text-gray-400`;

export const LoginButton = tw.button`
flex items-center border  border-gray-400 p-2 bg-gray-200 rounded`;
export const LineSep = tw.div`
w-[2px] h-[20px] bg-gray-400 mx-5`;
