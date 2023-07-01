import useCategoriesState from "../../hooks/state/useCategoryState";
import ProductCart from "../common/productCart/ProductCart";
import Pagination from "../common/pagination/Pagination";
import PageLoader from "../common/pageLoader/PageLoader";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategoryProduct } from "../../redux/slices/categorySlice";
const CategoriesProducts = () => {
  const { products, loading, pager } = useCategoriesState();
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const oncPageChangeHandler = (page) => {
    dispatch(
      fetchCategoryProduct({
        name: categoryName,
        page,
      })
    );
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      {loading === "fulfilled" && products.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2  my-10 2xl:grid-cols-5 p-8 container">
          {products.map((product) => (
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
        <div className="container">
          <PageLoader />
        </div>
      )}
      {products.length ? (
        <Pagination
          currentPage={pager.current_page}
          totalPages={pager.total_pages}
          limit={20}
          pagesCutCount={5}
          onPageChange={oncPageChangeHandler}
        />
      ) : null}
    </>
  );
};

export default CategoriesProducts;
