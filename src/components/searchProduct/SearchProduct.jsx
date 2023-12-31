import Pagination from "../common/pagination/Pagination";
import ProductCart from "../common/productCart/ProductCart";
import { Container } from "./searchProduct.style";
import useSearchState from "../../hooks/state/useSearchState";
import { useDispatch } from "react-redux";
import { searchData } from "../../redux/slices/searchSlice";
import { useParams, useNavigate } from "react-router-dom";
import PageLoader from "../common/pageLoader/PageLoader";
const SearchProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productName, pageNumber } = useParams();
  const { products, pager } = useSearchState();

  const oncPageChangeHandler = (page) => {
    const arg = {
      name: productName,
      page,
    };
    dispatch(searchData(arg));
    navigate(`/search/${productName}/${page}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {products && products.length ? (
        <Container>
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
        </Container>
      ) : (
        <p>کالایی یافت نشد</p>
      )}
      {pager && pager.total_pages !== 0 ? (
        <Pagination
          currentPage={Number(pageNumber)}
          totalPages={pager.total_pages}
          limit={20}
          pagesCutCount={5}
          onPageChange={oncPageChangeHandler}
        />
      ) : null}
    </>
  );
};

export default SearchProduct;
