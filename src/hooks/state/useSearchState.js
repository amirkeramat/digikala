import { useSelector } from "react-redux";

const useSearchState = () => {
  const state = useSelector((state) => state.searchStore);
  return {
    loading: state.loading,
    error: state.error,
    products: state.data?.products,
    sortOptions: state.data?.sortOptions,
    pager: state.data?.pager,
    relatedWords: state.data?.relatedWords,
    didYouMean: state.data?.didYouMean,
  };
};

export default useSearchState;
