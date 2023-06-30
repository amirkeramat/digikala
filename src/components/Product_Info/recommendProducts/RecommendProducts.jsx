import ProductCart from "../../common/productCart/ProductCart";
import Slider from "../../home/slider/Slider";
import useProductState from '../../../hooks/state/useProductState'
const RecommendProducts = () => {
  const {recommended} = useProductState()
  return (
    <div className="col-span-1 md:col-span-3 w-full ">
      <Slider data={recommended} title={"کالاهای مشابه"} />
    </div>
  );
};

export default RecommendProducts;
