import React, { useState } from "react";
import "./App.css";
import Lists from "./Components/Lists/Lists";
import Editor from "./Components/Editor/Editor";

interface PostType {
  id: number;
  title: string;
  content: string;
  likes: number;
  created_at: string;
}

const App: React.FC = () => {
  let title: string = "나의 블로그";
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: 1,
      title: "들이받을 용기",
      content: "항상 용기있는 선택을 하라",
      likes: 0,
      created_at: "2024-01-14",
    },
    {
      id: 2,
      title: "미움받을 용기",
      content: "모든 고민은 인간관계에서 비롯된다",
      likes: 0,
      created_at: "2024-01-14",
    },
    {
      id: 3,
      title: "더 마인드",
      content: "모든 인생의 대소사는 결국 마음이다",
      likes: 0,
      created_at: "2024-01-14",
    },
  ]);

  return (
    <main className="App">
      <header className="title-nav">
        <h1>{title}</h1>
      </header>
      <Editor setPosts={setPosts} />
      <Lists posts={posts} setPosts={setPosts} />
    </main>
  );
};

export default App;
