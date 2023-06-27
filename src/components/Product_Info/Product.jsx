import React from "react";
import useProductState from "../../hooks/state/useProductState";
import {Container} from './product.style'
import Slider from './imageSlider/Slider'
import Informations from "./informations/Informations";
const Product = () => {
  const { id ,images,mainDetails } = useProductState();
  return (
    <Container>
        <Slider/>
      <div>
        <Informations/>
      </div>
      <div>3</div>
    </Container>
  );
};

export default Product;
