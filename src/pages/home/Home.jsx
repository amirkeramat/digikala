import { useEffect } from "react";
import { fetchGetData } from "../../redux/slices/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Hero } from "../../components/home/hero/Hero";
import Incredible from "../../components/home/slider/incredible/Incredible";
import Category from "../../components/home/category/Category";
import BestSelling from "../../components/home/slider/bestSelling/BestSelling";
import PageLoader from "../../components/common/pageLoader/PageLoader";
export default function Home() {
  useEffect(() => {
    dispatch(fetchGetData());
  }, []);
  const dispatch = useDispatch();
  const homeState = useSelector((state) => state.homeStore);

  return (
    <>
      {homeState.loading === "fulfilled" ? (
        <>
          <Hero />
          <Incredible />
          <Category />
          <BestSelling />
        </>
      ) : (
        <PageLoader/>
      )}
    </>
  );
}
