import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategoryProduct } from "../../redux/slices/categorySlice";
import CategoriesProducts from "../../components/categories/CategoriesProducts";
const Categories = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  useEffect(() => {
    dispatch(
      fetchCategoryProduct({ name: categoryName, page: 1 })
    );
  }, [categoryName]);
  return (
    <CategoriesProducts />
  );
};

export default Categories;
