import { useState } from "react";
import useProductState from "../../../hooks/state/useProductState";
import { FaStar } from "react-icons/fa";
import {
  Container,
  Title,
  SepRow,
  RateBox,
  Rate,
  RateCount,
  ColorsBox,
  ColorTitleBox,
  ColorTitle,
  ColorName,
  ColorsSelectBox,
  ColorsContainer,
  ColorBox,
  InformationList,
  InformationItem,
  InformationItemTitle,
  InformationItemValue,
} from "./informations.style";
const Informations = () => {
  const { mainDetails, rating, options } = useProductState();
  const { title, colors } = mainDetails;
  const [colorName, setColorName] = useState();
  const selectColorHandler = (colorName) => {
    setColorName(colorName);
  };
  return (
    <Container>
      <Title>{title}</Title>

      <SepRow />
      <RateBox>
        <Rate>
          <FaStar className="text-yellow-400" />
          {rating.rate}
        </Rate>

        <RateCount>
          {"("}
          {rating.count}
          {")"}
        </RateCount>
      </RateBox>
      <ColorsBox>
        <ColorTitleBox>
          <ColorTitle>رنگ:</ColorTitle>
          <ColorName>{colorName}</ColorName>
        </ColorTitleBox>

        <ColorsSelectBox className="flex">
          {colors.map((color) => {
            const { id, title, hex_code } = color;
            return (
              <ColorsContainer key={id} $selected={title === colorName}>
                <ColorBox
                  after-dynamic-value={title}
                  after-dynamic-background={hex_code}
                  onClick={() => selectColorHandler(title)}
                  style={{ background: `${hex_code}` }}
                ></ColorBox>
              </ColorsContainer>
            );
          })}
        </ColorsSelectBox>
      </ColorsBox>

      <span>
        <h6>ویژگی ها</h6>
        <InformationList>
          {options.map((option) => {
            const { title, values } = option;
            return (
              <InformationItem key={title} >
                <InformationItemTitle>
                  {title}
                  {":"}
                </InformationItemTitle>
                <InformationItemValue>{values}</InformationItemValue>
              </InformationItem>
            );
          })}
        </InformationList>
      </span>

    </Container>
  );
};

export default Informations;
