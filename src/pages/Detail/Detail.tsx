import { Col, Container, Row } from "react-bootstrap";
import styles from "./Detail.module.css";

const Detail = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img
            src={process.env.PUBLIC_URL + "/images/coffee1.jpg"}
            alt={`coffee1`}
            width="80%"
          />
        </Col>
        <Col>
          <h5>커피이름</h5>
          <h6>커피상세설명</h6>
          <p>커피가격</p>
          <button className="btn btn-primary">캐리어에 담기</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
