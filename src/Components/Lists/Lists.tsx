import React from "react";
import List from "./List/List";
import styles from "./Lists.module.css";

interface PostType {
  id: number;
  title: string;
  content: string;
  likes: number;
  created_at: string;
}

const Lists = ({
  posts,
  setPosts,
}: {
  posts: Array<PostType>;
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
}) => {
  return (
    <ul className={styles.list}>
      {posts?.map((post) => (
        <List post={post} setPosts={setPosts} />
      ))}
    </ul>
  );
};

export default Lists;
