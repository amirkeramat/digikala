import { useState } from "react";
import ImageLoader from "../imageLoader/ImageLoader";
import {
  Container,
  Title,
  PriceContainer,
  Price,
  PrvPriceNumber,
  DiscPrice,
} from "./productCart.style";
import { Link } from "react-router-dom";
import { rialToToman } from "../../../helpers/index";
export default function ProductCart({
  image,
  title,
  prev_price,
  current_price,
  discount_percent,
  is_incredible,
  id,
}) {
  const [showLoader, setShowLoader] = useState(true);
  const onImageLoad = () => {
    setShowLoader(false);
  };
  return (
    <Link
      to={`/productInfo/${id}`}
      className="flex justify-center items-center w-full "
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <Container>
        {showLoader && <ImageLoader />}
        <img
          src={image}
          className="w-[240px] h-[240px]"
          alt=""
          onLoad={onImageLoad}
        />
        <Title>{title}</Title>
        <PriceContainer>
          {discount_percent ? (
            <Price>
              <PrvPriceNumber>
                {rialToToman(prev_price).toLocaleString()}
                {"تومان"}
              </PrvPriceNumber>
              <h6>
                {rialToToman(current_price).toLocaleString()}
                {"تومان"}
              </h6>
            </Price>
          ) : (
            <h6>
              {rialToToman(current_price).toLocaleString()}
              {"تومان"}
            </h6>
          )}
          {discount_percent ? <DiscPrice>{discount_percent}%</DiscPrice> : null}
        </PriceContainer>
      </Container>
    </Link>
  );
}
