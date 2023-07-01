import { useSelector } from "react-redux";

const useCategoriesState = () => {
  const state = useSelector((state) => state.categoriesStore);
  return {
    loading:state.loading,
    error:state.error,
    products:state.products,
    pager:state.pager,
    seo:state.seo
  };
};

export default useCategoriesState;
