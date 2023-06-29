import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategoryProduct } from "../../redux/slices/categorySlice";
import useCategoriesState from "../../hooks/state/useCategoryState";
import PageLoader from "../../components/common/pageLoader/PageLoader";
import CategoriesProducts from "../../components/categories/CategoriesProducts";
const Categories = () => {
  const dispatch = useDispatch();
  const { categoryName,pageNumber } = useParams();
  useEffect(() => {
    dispatch(
      fetchCategoryProduct({ name: categoryName, page: Number(pageNumber) })
    );
  }, [categoryName]);
  const { loading } = useCategoriesState();
  return (
    <>{loading === "fulfilled" ? <CategoriesProducts /> : <PageLoader />}</>
  );
};

export default Categories;
