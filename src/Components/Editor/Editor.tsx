import React, { useState } from "react";
import styles from "./Editor.module.css";

interface PostType {
  id: number;
  title: string;
  content: string;
  likes: number;
  created_at: string;
}

const Editor = ({
  posts,
  setPosts,
}: {
  posts: PostType[];
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
}) => {
  const [post, setPost] = useState<PostType>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPosts((prevPosts: any) => [
      ...prevPosts,
      {
        id: Number(prevPosts.length),
        ...post,
        created_at: `${new Date().toLocaleDateString()}`,
      },
    ]);
  };

  console.log(post);

  return (
    <form action="submit" className={styles.editor} onSubmit={handleSubmit}>
      <div className={styles.titleInputBox}>
        <h3>Title :</h3>
        <input
          type="text"
          placeholder="Write Title..."
          onChange={(e) => {
            setPost({
              id: Number(post?.id),
              title: e.target.value,
              content: `${post?.content}`,
              likes: 0,
              created_at: `${post?.created_at}`,
            });
          }}
        />
      </div>
      <div className={styles.contentInputBox}>
        <h3>Content :</h3>
        <input
          type="text"
          placeholder="Write Content..."
          onChange={(e) => {
            setPost({
              id: Number(post?.id),
              title: `${post?.title}`,
              content: e.target.value,
              likes: 0,
              created_at: `${post?.created_at}`,
            });
          }}
        />
      </div>
      <button className={styles.editorSubmitBtn} type="submit">
        Upload
      </button>
    </form>
  );
};

export default Editor;
