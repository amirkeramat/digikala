import { useSelector } from "react-redux";

const useProductState = () => {
  const { product, recommendations, seo } = useSelector(
    (state) => state.singleProduct
  );

  return {
    id: product?.id,
    mainDetails: product?.mainDetails,
    status: product?.status,
    suggestion: product?.suggestion,
    brand: product?.brand,
    category: product?.category,
    images: product?.images,
    rating: product?.rating,
    price: product?.price,
    videos: product?.videos,
    introduce: product?.introduce,
    options: product?.options,
    information: product?.information,
    comments: {
      ...product?.comments,
      comments: product?.comments?.comments?.filter(
        (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
      ),
    },
    lastComments:product?.last_comments,
    recommended: {
      products: recommendations,
    },
    seo,
  };
  //   return {
  //     product: {
  //       id: state.product.id,
  //       mainDetails: state.product.mainDetails,
  //       status: state.product.status,
  //       category: state.product.category,
  //       images: state.product.images,
  //       rating: state.product.rating,
  //       price: state.product.price,
  //       videos: state.product.videos,
  //       introduce: state.product.introduce,
  //       options: state.product.options,
  //       information: state.product.information,
  //       last_comments: state.product.last_comments,
  //     },
  //     product:state.product,
  //     eventData: state.eventData,
  //     recommendations: state.recommendations,
  //     seo: state.seo,
  //   };
};

export default useProductState;
