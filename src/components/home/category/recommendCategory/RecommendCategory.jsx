import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  CategoryBox,
  Img,
  Title,
  CategoryTitle,
} from "./recommendCategory.style";
function RecommendationSc({ data, title }) {
  return (
    <>
      <CategoryTitle>{title}</CategoryTitle>
      <Container>
        {data.map((category) => {
          return (
            <Link to={`category/${category.code}`} key={category.id}>
              <div className="w-full flex justify-center">
                <CategoryBox>
                  <Img src={category.top_product_image} alt="" />
                  <Title>{category.title_fa}</Title>
                </CategoryBox>
              </div>
            </Link>
          );
        })}
      </Container>
    </>
  );
}

export default RecommendationSc;
