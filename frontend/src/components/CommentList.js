import React from "react";
// import useAxios from "axios-hooks";
// import Axios from "axios";
import { axiosInstance, useAxios } from "api";
import { Avatar, Tooltip, Input, Button } from "antd";
import moment from "moment";
import { useAppContext } from "store";
import { useState } from "react";
import Comment from "./Comment";

export default function CommentList({ post }) {
  const {
    store: { jwtToken },
  } = useAppContext();
  const headers = { Authorization: `JWT ${jwtToken}` };

  const [commentContent, setCommentContent] = useState("");

  const [{ data: commentList, loading, error }, refetch] = useAxios({
    url: `/api/posts/${post.id}/comments/ `,
    headers,
  });
  const handleCommentSave = async () => {
    const apiUrl = `/api/posts/${post.id}/comments/`;
    console.group("handleCommentSave");
    try {
      const response = await axiosInstance.post(
        apiUrl,
        { message: commentContent },
        { headers }
      );
      console.log(response);
      setCommentContent("");
      refetch();
    } catch (erorr) {
      console.log(error);
    }
    console.groupEnd();
  };
  return (
    <div>
      {commentList &&
        commentList.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      <Input.TextArea
        style={{ marginBottom: "0.5em" }}
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
      />
      <Button
        block
        type="primary"
        disabled={commentContent.length === 0}
        onClick={handleCommentSave}
      >
        댓글 쓰기
      </Button>
    </div>
  );
}
