import React, { useState, useRef } from "react";
import useCommentsState from "../../../hooks/state/useCommentsState.js";
import Pagination from "../../common/pagination/Pagination.jsx";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchComments } from "../../../redux/slices/commentsSlice";
const Comments = () => {
  const { productId } = useParams();
  const { comments, pager, loading } = useCommentsState();
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();
  const ref = useRef();
  const onPageChangeHandler = (page) => {
    dispatch(fetchComments({ id: productId, page }));
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      className="col=span-1 md:col-span-3 shadow-xl shadow-gray-950/30 py-4 rounded-md "
      ref={ref}
    >
      <h1 className="text-center text-4xl py-8 font-semibold">نظرات کاربران</h1>
      {loading === "fulfilled" && (
        <div
          className={`overflow-y-hidden px-8 border 
          ${
            showMore ? "max-h-auto " : "max-h-[700px]"
          }`}
        >
          <span className="flex justify-between">
            <p>مرتب سازی</p>
            <p>تعداد دیدگاه:{comments.length}</p>
          </span>
          {comments.length && comments.length ? (
            <>
              {comments.map((comment) => (
                <div
                  key={comment?.id}
                  className="shadow-xl border border-gray-950/20 my-4 rounded-xl"
                >
                  <span className="flex justify-start p-4 ">
                    <p className="flex justify-center items-center bg-green-500 w-[40px] rounded-xl">
                      {comment?.rate}
                    </p>
                    <p>{comment?.title}</p>
                  </span>
                  <span className="flex w-[300px] justify-between p-2">
                    <p>{comment?.created_at}</p>
                    <p>{comment?.user_name}</p>
                    <p>{comment?.is_buyer ? "خریدار" : "نویسنده"}</p>
                  </span>
                  <div className="w-[full] h-[2px] bg-blue-200/50"></div>
                  <p className="p-4">{comment.body}</p>
                  <span>
                    {comment.advantages.length ? (
                      <>
                        {comment.advantages.map((item, index) => (
                          <p key={index} className="p-2">
                            {item}
                          </p>
                        ))}
                      </>
                    ) : null}
                  </span>
                  <div className="w-[full] h-[2px] bg-blue-200/50"></div>
                  <span className="flex w-[200px] justify-between p-2">
                    {Object.keys(comment.purchased_item).length ? (
                      <>
                        {Object.entries(comment.purchased_item).map(
                          ([key, value]) => {
                            if (key === "color") {
                              return <p key={key}>{value.title}</p>;
                            } else {
                              return <p key={key}>{value.title}</p>;
                            }
                          }
                        )}
                      </>
                    ) : null}
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
      {comments.length && (
        <Pagination
          currentPage={pager.current_page}
          totalPages={pager.total_pages}
          limit={20}
          pagesCutCount={5}
          onPageChange={onPageChangeHandler}
        />
      )}
    </section>
  );
};

export default Comments;
