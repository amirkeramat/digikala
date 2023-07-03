import { useSelector } from "react-redux";

const useProductState = () => {
  const {data } = useSelector(
    (state) => state.singleProduct
  );
//  product, recommendations, seo ,
  return {
    id: data.product?.id,
    mainDetails: data.product?.mainDetails,
    status: data.product?.status,
    suggestion: data.product?.suggestion,
    brand: data.product?.brand,
    category: data.product?.category,
    images: data.product?.images,
    rating: data.product?.rating,
    price: data.product?.price,
    videos: data.product?.videos,
    introduce: data.product?.introduce,
    options: data.product?.options,
    information: data.product?.information,
    // comments: {
    //   ...product?.comments,
    //   comments: product?.comments?.comments?.filter(
    //     (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
    //   ),
    // },
    lastComments: data.product?.last_comments,
    recommended: {
      products: data.recommendations,
    },
    seo: data.seo,
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
