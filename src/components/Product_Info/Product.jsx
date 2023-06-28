import React from "react";
import {Container} from './product.style'
import Slider from './imageSlider/Slider'
import Informations from "./informations/Informations";
import Shipping from './shipping/Shipping'
import Description from "./description/Description";
import MoreInformation from "./moreInformation/MoreInformation";
import RecommendProducts from "./recommendProducts/RecommendProducts";
import Comments from "./comments/Comments";
const Product = () => {
  return (
    <Container>
        <Slider/>
        <Informations/>
        <Shipping/>
        <Description/>
        <RecommendProducts/>
        <MoreInformation/>
        <Comments/>
    </Container>
  );
};

export default Product;
