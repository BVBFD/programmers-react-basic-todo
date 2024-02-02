import React, { useState } from "react";
import styles from "./List.module.css";

interface PostType {
  id: number;
  title: string;
  content: string;
  likes: number;
  created_at: string;
}

const List = ({
  post,
  setPosts,
}: {
  post: PostType;
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
}) => {
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>("");

  const handleChangeTitle = () => {
    if (!openEdit) {
      setOpenEdit(true);
    } else {
      setPosts((prevPosts: PostType[]) => {
        return prevPosts.map((prevPost: PostType) =>
          prevPost === post ? { ...prevPost, title: editTitle } : prevPost
        );
      });
      setOpenEdit(false);
    }
  };

  const handleLikeClick = (): void => {
    setPosts((prevPosts: PostType[]) => {
      return prevPosts.map((prevPost: PostType) =>
        prevPost === post
          ? { ...prevPost, likes: prevPost.likes + 1 }
          : prevPost
      );
    });
  };

  const handleDelete = () => {
    setPosts((prevPosts: PostType[]) => {
      return prevPosts.filter((prevPost: PostType) => prevPost !== post);
    });
  };

  return (
    <li>
      <div className={styles.list_info}>
        <h3>
          {post.title}
          <button className={styles.likeBtn} onClick={handleLikeClick}>
            👍
          </button>
          {post.likes}
        </h3>
        <p>
          발행날짜 : <span>{post.created_at}</span>
        </p>
      </div>
      <div className={styles.list_edit}>
        {openEdit ? (
          <input type="text" onChange={(e) => setEditTitle(e.target.value)} />
        ) : (
          <></>
        )}
        <button onClick={handleChangeTitle}>제목변경</button>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          X
        </button>
      </div>
    </li>
  );
};

export default List;
