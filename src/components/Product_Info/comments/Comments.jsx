import React, { useState, useRef } from "react";
import useCommentsState from "../../../hooks/state/useCommentsState.js";
import Pagination from "../../common/pagination/Pagination.jsx";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchComments } from "../../../redux/slices/commentsSlice";
import {
  Container,
  Title,
  CommentsWrapper,
  CommentsLength,
  CommentsBox,
  CommentsTitleWrapper,
  CommentsRate,
  CommentsWriter,
  SepRow,
  CommentsBody,
  PurchasedItem,
  ShowMoreBtn,
} from "./comments.style.js";
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
    <Container ref={ref}>
      <Title>نظرات کاربران</Title>
      {loading === "fulfilled" && comments ? (
        <CommentsWrapper $showMore={showMore}>
          <CommentsLength>
            <p>مرتب سازی</p>
            <p>تعداد دیدگاه:{comments.length}</p>
          </CommentsLength>
          {comments.length && comments.length ? (
            <>
              {comments.map((comment) => (
                <CommentsBox key={comment?.id}>
                  <CommentsTitleWrapper className="flex justify-start p-4 ">
                    <CommentsRate>{comment?.rate}</CommentsRate>
                    <p>{comment?.title}</p>
                  </CommentsTitleWrapper>
                  <CommentsWriter className="flex w-[300px] justify-between p-2">
                    <p>{comment?.created_at}</p>
                    <p>{comment?.user_name}</p>
                    <p>{comment?.is_buyer ? "خریدار" : "نویسنده"}</p>
                  </CommentsWriter>
                  <SepRow />
                  <CommentsBody>{comment.body}</CommentsBody>
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
                  <SepRow />
                  <PurchasedItem>
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
                  </PurchasedItem>
                  <SepRow />
                </CommentsBox>
              ))}
            </>
          ) : null}
        </CommentsWrapper>
      ) : null}

      {comments ? (
        <>
          <ShowMoreBtn
            onClick={() => setShowMore((prv) => !prv)}
            className="ms-8 w-[100px] bg-blue-500/20 p-1 rounded-xl flex justify-center items-center"
          >
            {showMore ? "دیدگاه کمتر" : "دیدگاه بیشتر"}
          </ShowMoreBtn>
          <Pagination
            currentPage={pager.current_page}
            totalPages={pager.total_pages}
            limit={20}
            pagesCutCount={5}
            onPageChange={onPageChangeHandler}
          />
        </>
      ) : (
        <p>نظری وجود ندارد</p>
      )}
    </Container>
  );
};

export default Comments;
