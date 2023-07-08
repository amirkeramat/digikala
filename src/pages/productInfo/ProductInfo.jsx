import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductInfo } from "../../redux/slices/productSlice";
import { fetchComments } from "../../redux/slices/commentsSlice";
import Product from "../../components/Product_Info/Product";
import PageLoader from "../../components/common/pageLoader/PageLoader";
import ErrorPage from "../../components/common/errorPage/ErrorPage";
export default function ProductInfo() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductInfo({ id: Number(productId) }));
    dispatch(fetchComments({ id: Number(productId), page: 1 }));
  }, [productId]);
  const { loading, data } = useSelector((state) => state.singleProduct);
  if (loading === "loading") {
    return <PageLoader />;
  } else if (loading === "fulfilled" && Object.keys(data).length) {
    return <Product />;
  } else if (loading === "fulfilled" && !Object.keys(data).length) {
    return <ErrorPage />;
  }
}
