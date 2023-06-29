import ReactPaginate from "react-paginate";
import { useState } from "react";
import {fetchCategoryProduct} from '../../../redux/slices/categorySlice'
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
const Pagination = ({ totalPages, targetRef }) => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const handlePageClick = (event) => {
    dispatch(
      fetchCategoryProduct({ name: categoryName, page: event.selected + 1 })
    );
    targetRef.current.scrollIntoView();
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
      renderOnZeroPageCount={1}
      containerClassName="flex items-center justify-center col-span-1 md:col-span-3 flex-wrap"
      pageLinkClassName="w-[40px] h-[40px] flex items-center justify-center rounded-full"
      pageClassName="flex items-center justify-center rounded-full m-1 border border-gray-950"
    />
  );
};

export default Pagination;
