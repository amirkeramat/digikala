import ReactPaginate from "react-paginate";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useCategoriesState from "../../hooks/state/useCategoryState";
import ProductCart from "../common/productCart/ProductCart";
import {fetchCategoryProduct} from '../../redux/slices/categorySlice'
import Pagination from "../common/pagination/Pagination";
const CategoriesProducts = () => {
  const { products } = useCategoriesState();
  const { pager } = products;
  const {  total_pages } = pager;
  const { categoryName } = useParams();
  const productsRef = useRef();
  return (
    <>
      <div
        ref={productsRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10 2xl:grid-cols-5"
      >
        {products.products.map((product) => (
          <ProductCart
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title_fa}
            current_price={product.price.current_price}
            discount_percent={product.price.discount_percent}
            prev_price={product.price.prev_price}
            is_incredible={product.price.is_incredible}
          />
        ))}
      </div>
      <Pagination
        targetRef={productsRef}
        totalPages={total_pages}
      />
    </>
  );
};

export default CategoriesProducts;
