import { useRef } from "react";
import useCategoriesState from "../../hooks/state/useCategoryState";
import ProductCart from "../common/productCart/ProductCart";
import Pagination from "../common/pagination/Pagination";
import PageLoader from "../common/pageLoader/PageLoader";
const CategoriesProducts = () => {
  const { products, loading, pager } = useCategoriesState();
  const productsRef = useRef();
  return (
    <>
      {loading === "fulfilled" ? (
        <div
          ref={productsRef}
          className="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 my-10 2xl:grid-cols-5"
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
      ) : (
        <div className="container"><PageLoader /></div>
        
      )}

      <Pagination targetRef={productsRef} totalPages={pager.totalPages} />
    </>
  );
};

export default CategoriesProducts;
