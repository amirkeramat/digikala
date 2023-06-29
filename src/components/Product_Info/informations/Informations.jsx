import { useState } from "react";
import useProductState from "../../../hooks/state/useProductState";
import { FaStar } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";
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
  const { mainDetails, rating, options, category } = useProductState();
  const { title, colors } = mainDetails;
  const { return_reason_alert } = category;
  const [colorName, setColorName] = useState(
    colors.length ? colors[0].title : null
  );
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
      {colors.length ? (
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
      ) : (
        <ColorsBox>
          <ColorTitle>فاقد رنگبندی</ColorTitle>
        </ColorsBox>
      )}
      <SepRow />
      {options && (
        <span>
          <h6>ویژگی ها</h6>
          <InformationList>
            {options.map((option) => {
              const { title, values } = option;
              return (
                <InformationItem key={title}>
                  <InformationItemTitle>
                    {title}
                    {":"}
                  </InformationItemTitle>
                  <InformationItemValue>
                    {values.map((value,index) => (
                      <p key={index} className="text-justify">
                        {value}
                        {","}
                      </p>
                    ))}
                  </InformationItemValue>
                </InformationItem>
              );
            })}
          </InformationList>
          <SepRow />
        </span>
      )}

      <span className="mt-5 text-gray-600 flex items-start p-2">
        <i className="flex items-center w-[30px] text-4xl text-red-500">
          <CiWarning />
          {":"}
        </i>
        {return_reason_alert !== null ? (
          <p> {return_reason_alert}</p>
        ) : (
          <p>
            درخواست مرجوع کردن کالا  با دلیل "انصراف از خرید" تنها
            در صورتی قابل تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ
            بودن، کالا نباید باز شده باشد).
          </p>
        )}
      </span>
    </Container>
  );
};

export default Informations;
