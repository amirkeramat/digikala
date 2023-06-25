import React from "react";
import Slider from "../Slider";
import useHomeState from "../../../../hooks/state/useHomeState";
const BestSelling = () => {
  const { bestSelling } = useHomeState();
  return <Slider title={"محصولات پرفروش"} data={bestSelling} />;
};

export default BestSelling;
