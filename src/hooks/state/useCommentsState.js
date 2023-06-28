import { useSelector } from "react-redux";

const useCommentsState = () => {
  const { loading, error, comments } = useSelector((state) => state.comments);
  return {
    loading: loading,
    error: error,
    ratings: comments.ratings,
    comments: comments.comments,
    intentDate: comments.intent_date,
    sortOptions: comments.sort_options,
    mediaComments: comments.media_comments,
    pager: {
      currentPage: comments.pager.current_page,
      totalPages: comments.pager.total_pages,
      totalItems: comments.pager.total_items,
    },
  };
};

export default useCommentsState;
