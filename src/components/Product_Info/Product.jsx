import React from "react";
import useProductState from "../../hooks/state/useProductState";
import {Container} from './product.style'
import Slider from './imageSlider/Slider'
import Informations from "./informations/Informations";
import Shipping from './shipping/Shipping'
import Description from "./description/description";
const Product = () => {
  const { id ,images,mainDetails } = useProductState();
  return (
    <Container>
        <Slider/>
        <Informations/>
        <Shipping/>
        <Description/>
    </Container>
  );
};

export default Product;
