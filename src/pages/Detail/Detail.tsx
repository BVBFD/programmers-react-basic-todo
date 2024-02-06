import { useEffect, useState } from "react";
import styles from "./Detail.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import coffeelist from "../../coffeelist";

const Detail = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState<CoffeeType>();

  useEffect(() => {
    setCoffee(coffeelist.find((coffee) => coffee.id + 1 === parseInt(`${id}`)));
  }, [id]);

  return (
    <Container>
      <Row>
        <Col>
          <img
            src={process.env.PUBLIC_URL + `${coffee?.img}`}
            alt={`coffee${coffee?.id}`}
            width="80%"
          />
        </Col>
        <Col>
          <h5>{coffee?.title}</h5>
          <h6>{coffee?.content}</h6>
          <p>{coffee?.price}</p>
          <button className="btn btn-primary">캐리어에 담기</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
