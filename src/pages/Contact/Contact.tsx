const Contact = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "85vh",
      }}
    >
      <div className="board">
        <h1>BUSINESS CONTACT</h1>
        <br />
        <form action="" method="">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="이름을 입력하세요"
            />
            <p></p>
            <input
              type="text"
              className="form-control"
              placeholder="이메일을 입력하세요"
            />
            <p></p>
            <textarea className="form-control" rows={10}></textarea>
            <p></p>
          </div>
          <button type="submit" className="btn btn-warning">
            접수하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
