import React from "react";
import ImageLoader from "/src/imageLoader.svg";
import { Container, LoaderBox } from "./pageLoader.style";
const PageLoader = () => {
  return (
    <Container>
      <LoaderBox>
        <img className='w-[200px]' src='./light-logo.png' />
        <img className=' h-[100px]' src={ImageLoader} />
      </LoaderBox>
    </Container>
  );
};

export default PageLoader;
