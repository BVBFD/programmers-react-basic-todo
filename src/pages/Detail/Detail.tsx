import { useEffect, useState } from "react";
// import styles from "./Detail.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import coffeelist from "../../coffeelist";
import styled from "styled-components";
import Banner from "../../Components/Banner/Banner";

const Title = styled.h5`
  font-weight: bolder;
`;

const Content = styled.h6`
  font-size: 0.8rem;
`;

const Price = styled.p`
  color: lightslategray;
  font-size: 0.95rem;
`;

const Detail = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState<CoffeeType>();
  const [discount, setDiscount] = useState<boolean>(true);

  useEffect(() => {
    setCoffee(coffeelist.find((coffee) => coffee.id + 1 === parseInt(`${id}`)));

    let timer: NodeJS.Timer;
    const fetchDiscountData = async () => {
      timer = setTimeout(() => {
        setDiscount(false);
      }, 3000);
    };
    fetchDiscountData();

    return () => {
      clearTimeout(timer);
    };
  }, [id]);

  return (
    <Container>
      {discount ? <Banner /> : null}
      <Row>
        <Col>
          <img
            src={process.env.PUBLIC_URL + `${coffee?.img}`}
            alt={`coffee${coffee?.id}`}
            width="80%"
          />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title>{coffee?.title}</Title>
          <Content>{coffee?.content}</Content>
          <Price>{coffee?.price}</Price>
          <button className="btn btn-primary">캐리어에 담기</button>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
