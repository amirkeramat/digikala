import React from "react";
import {
  Container,
  Title,
  PriceContainer,
  Price,
  PrvPriceNumber,
  DiscPrice,
} from "./productCart.style";
import { Link } from "react-router-dom";
export default function ProductCart({
  image,
  title,
  prev_price,
  current_price,
  discount_percent,
  is_incredible,
  id
}) {
  return (
    <Link to={`productInfo/${title}/${id}`}>
    <Container>
      <img src={image} alt='' />
      <Title>{title}</Title>
      <PriceContainer>
        {is_incredible ? (
          <Price>
            <PrvPriceNumber>
              {prev_price.toLocaleString()}
              {"تومان"}
            </PrvPriceNumber>
            <h6>
              {current_price.toLocaleString()}
              {"تومان"}
            </h6>
          </Price>
        ) : (
          <h6>
            {current_price.toLocaleString()}
            {"تومان"}
          </h6>
        )}
        {discount_percent ? <DiscPrice>{discount_percent}%</DiscPrice> : null}
      </PriceContainer>
    </Container>
    </Link>
    
  );
}
