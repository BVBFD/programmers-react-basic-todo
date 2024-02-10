const express = require("express");

const path = require("path");
const app = express();

app.use(
  express.static(path.join(__dirname, "../programmers-coffee-react/build"))
);

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../programmers-coffee-react/build/index.html")
  );
});

app.listen(8800, () => {
  console.log("Server is listening on 8800");
});

// react-router-dom과 연동하는 코드
// http://localhost:8800/cart 이 코드 없이 이렇게 치면 Web Server에서 HTTP 요청을 하는 것. (react-router-dom에 요청하는 것이 아님)
// 이 코드를 추가해서 "일단 들어오는 모든 요청은 react-router-dom과 연동하겠다." 라는 의미임
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../programmers-coffee-react/build/index.html")
  );
});
