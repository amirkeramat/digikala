import { useSelector } from "react-redux";

const useCategoriesState = ()=>{
    const categories =useSelector(state=> state.categoriesStore);
    const {loading,error,products,pager} =categories
    return {
        loading,
        error,
        products,
        pager
    }
}

export default useCategoriesState;