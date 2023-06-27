import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductInfo } from "../../redux/slices/productSlice";
import Product from "../../components/Product_Info/Product";
export default function ProductInfo() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductInfo({ id: Number(productId) }));
    return () => dispatch(getProductInfo());
  }, [productId]);
  const { loading } = useSelector((state) => state.singleProduct);
  return <>{loading === "fulfilled" ? <Product /> : <div>Loading</div>}</>;
}
