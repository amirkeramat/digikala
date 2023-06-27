import React from "react";
import useHomeState from "../../../hooks/state/useHomeState";
import Banners from "./banners/Banners";
import Category from "../category/recommendCategory/RecommendCategory";
import { Container } from "./hero.style";
export const Hero = () => {
  const { banners, recommendationSubCategories } = useHomeState();
  return (
    <Container>
      <Banners data={banners} />
      <Category data={recommendationSubCategories} title={"دسته بندی منتخب"} />
    </Container>
  );
};
