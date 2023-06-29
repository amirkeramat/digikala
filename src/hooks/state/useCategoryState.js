import { useSelector } from "react-redux";

const useCategoriesState = () => {
  const categories = useSelector((state) => state.categoriesStore);
  const { loading, error, products } = categories;
  const { pager } = products;
  return {
    loading,
    error,
    products,
    pager: {
      currentPage: pager?.current_page,
      totalPages: pager?.total_pages,
      totalItems: pager?.total_items,
    },
  };
};

export default useCategoriesState;
