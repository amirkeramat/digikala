import React, { useState } from "react";
import useCommentsState from "../../../hooks/state/useCommentsState.js";
import Pagination from "../../common/pagination/Pagination.jsx";
import PageLoader from "../../common/pageLoader/PageLoader.jsx";

const Comments = () => {
  const { comments,pager,loading } = useCommentsState();
  const {currentPage,totalPages} = pager
  const [showMore, setShowMore] = useState(false);
  console.log(pager);
  return (
    <>
      {loading === "fulfilled" ? (
        <div
          className={`col-span-1 overflow-y-hidden md:col-span-3 container px-8 ${
            showMore ? "max-h-auto" : "max-h-[700px]"
          }`}
        >
          <span className="flex justify-between">
            <p>مرتب سازی</p>
            <p>تعداد دیدگاه:{comments.length}</p>
          </span>
          {comments ? (
            <>
              {comments.map((comment) => (
                <div className="shadow-xl border border-gray-950/20 my-4">
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
                    {comment.advantages.map((item) => (
                      <p className="p-2">{item}</p>
                    ))}
                  </span>
                  <div className="w-[full] h-[2px] bg-blue-200/50"></div>
                  <span className="flex w-[200px] justify-between p-2">
                    {Object.entries(comment.purchased_item).map(
                      ([key, value]) => {
                        if (key === "color") {
                          return <p>{value.title}</p>;
                        } else {
                          return <p>{value.title}</p>;
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
      ) : (
        <PageLoader />
      )}
      <button
        onClick={() => setShowMore((prv) => !prv)}
        className="ms-8 w-[100px] bg-blue-500/20 p-1 rounded-xl flex justify-center items-center"
      >
        {showMore ? "دیدگاه کمتر" : "دیدگاه بیشتر"}
      </button>
    </>
  );
};

export default Comments;
