import React from "react";
import useCommentsState from "../../../hooks/state/useCommentsState.js";
const Comments = () => {
    const {comments} = useCommentsState()
    console.log(comments);
  return <div className="col-span-1 md:col-span-3"></div>;
};

export default Comments;
