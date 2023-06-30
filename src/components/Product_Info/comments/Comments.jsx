import React, { useState ,useRef } from "react";
import useCommentsState from "../../../hooks/state/useCommentsState.js";

import ReactPaginate from "react-paginate";
import { fetchComments } from "../../../redux/slices/commentsSlice.js";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
const Comments = () => {
  const {productId} = useParams()
  const dispatch = useDispatch();
  const { comments, pager, loading } = useCommentsState();
  const { currentPage, totalPages } = pager;
  const [showMore, setShowMore] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const commentRef = useRef()
  const handlePageClick = (event) => {
    const newOffset = (event.selected * 20) % totalPages;
    setItemOffset(newOffset);
     dispatch(fetchComments({ id: Number(productId), page: event.selected + 1 }));
     commentRef.current.scrollIntoView()
  };
  return (
    <>
      {loading === "fulfilled" && (
        <div
          ref={commentRef}
          className={`col-span-1 rounded-md overflow-y-hidden md:col-span-3 container px-8 border shadow-xl shadow-gray-950/10 ${
            showMore ? "max-h-auto" : "max-h-[700px]"
          }`}
        >
          <h1 className="text-center text-4xl py-8 font-semibold">نظرات کاربران</h1>
          <span className="flex justify-between">
            <p>مرتب سازی</p>
            <p>تعداد دیدگاه:{comments.length}</p>
          </span>
          {comments.length ? (
            <>
              {comments.map((comment) => (
                <div key={comment.id} className="shadow-xl border border-gray-950/20 my-4 rounded-xl">
                  <span className="flex justify-start p-4 ">
                    <p className="flex justify-center items-center bg-green-500 w-[40px] rounded-xl">
                      {comment.rate}
                    </p>
                    <p>{comment.title}</p>
                  </span>
                  <span className="flex w-[300px] justify-between p-2">
                    <p>{comment.created_at}</p>
                    <p>{comment.user_name}</p>
                    <p>{comment.is_buyer ? "خریدار" : "نویسنده"}</p>
                  </span>
                  <div className="w-[full] h-[2px] bg-blue-200/50"></div>
                  <p className="p-4">{comment.body}</p>
                  <span>
                    {comment.advantages.map((item,index) => (
                      <p key={index} className="p-2">{item}</p>
                    ))}
                  </span>
                  <div className="w-[full] h-[2px] bg-blue-200/50"></div>
                  <span className="flex w-[200px] justify-between p-2">
                    {Object.entries(comment.purchased_item).map(
                      ([key, value]) => {
                        if (key === "color") {
                          return <p key={key}>{value.title}</p>;
                        } else {
                          return <p key={key}>{value.title}</p>;
                        }
                      }
                    )}
                  </span>
                  <div className="w-[full] h-[2px] bg-blue-200/50"></div>
                </div>
              ))}
            </>
          ) : null}
        </div>
      )}
      <button
        onClick={() => setShowMore((prv) => !prv)}
        className="ms-8 w-[100px] bg-blue-500/20 p-1 rounded-xl flex justify-center items-center"
      >
        {showMore ? "دیدگاه کمتر" : "دیدگاه بیشتر"}
      </button>
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
    </>
  );
};

export default Comments;
