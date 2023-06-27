import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  CategoryBox,
  Img,
  Title,
  CategoryTitle,
} from "./category.style";
import useHomeState from "../../../hooks/state/useHomeState";
function Category() {
  const { categories } = useHomeState();
  return (
    <Container>
      <CategoryTitle>دسته بندی بلو بی</CategoryTitle>
      {categories.map((category) => {
        return (
          <Link  to={`category/${category.code}`} key={category.id}>
            <CategoryBox>
              <Img src={category.logo} alt='' />
              <Title>{category.title_fa}</Title>
            </CategoryBox>
          </Link>
        );
      })}
    </Container>
  );
}

export default Category;
