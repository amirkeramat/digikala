import SearchProduct from "../../components/searchProduct/SearchProduct";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useSearchState from "../../hooks/state/useSearchState";
import { searchData } from "../../redux/slices/searchSlice";
import { useEffect } from "react";
import PageLoader from "../../components/common/pageLoader/PageLoader";
const Search = () => {
  const { productName, pageNumber } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const arg = {
      name: productName,
      page: Number(pageNumber),
    };
    dispatch(searchData(arg));
  }, [productName]);
  const { loading } = useSearchState();
  return <>{loading === "fulfilled" ? <SearchProduct /> : <PageLoader />}</>;
};

export default Search;
