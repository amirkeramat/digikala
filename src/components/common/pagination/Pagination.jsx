import ReactPaginate from "react-paginate";
import { useState } from "react";
import {fetchCategoryProduct} from '../../../redux/slices/categorySlice'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
const Pagination = ({ totalPages, targetRef }) => {
  const navigate = useNavigate()
  const { categoryName } = useParams();
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % totalPages;
    setItemOffset(newOffset);
    dispatch(
      fetchCategoryProduct({ name: categoryName, page: event.selected + 1 })
    );
    targetRef.current.scrollIntoView();
    navigate(`/category/${categoryName}/${event.selected + 1}`);
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="بعدی >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={totalPages}
      previousLabel="< قبلی"
      activeClassName="bg-blue-500"
      renderOnZeroPageCount={null}
      containerClassName="flex items-center justify-center col-span-1 md:col-span-3 flex-wrap"
      pageLinkClassName="w-[40px] h-[40px] flex items-center justify-center rounded-full"
      pageClassName="flex items-center justify-center rounded-full m-1 border border-gray-950"
    />
  );
};

export default Pagination;
