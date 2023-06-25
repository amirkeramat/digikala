import useHomeState from "../../../../hooks/state/useHomeState";
import Slider from "../Slider";
const Incredible = () => {
  const { incredible } = useHomeState();
  return (
    <Slider title={'تخفیفات ویژه'} data={incredible}/>
  );
};

export default Incredible;
