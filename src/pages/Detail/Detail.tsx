import { useEffect, useState } from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Banner from "../../Components/Banner/Banner";
import axios from "axios";
import { useStock } from "../../App";

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
  const [tab, setTab] = useState<"info" | "review" | "exchange">("info");
  const { stock, setStock } = useStock();

  const getCoffeeDetail = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/coffees/${id}`);
      setCoffee(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCoffeeDetail();

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

  const TabContent = () => {
    if (tab === "info") {
      return <div>Info Tab Content!</div>;
    } else if (tab === "review") {
      return <div>Review Tab Content!</div>;
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <button
              onClick={() => setStock((prev) => prev + 1)}
              style={{ border: "none", height: "5rem", width: "10rem" }}
            >
              Exchange Tab Content!
            </button>
            <button
              onClick={() => setStock(0)}
              style={{ border: "none", height: "5rem", width: "10rem" }}
            >
              Reset To Zero!
            </button>
          </div>

          <br />
          <b>{stock}</b>
        </div>
      );
    }
  };

  return (
    <Container>
      {discount ? <Banner /> : null}
      <br />
      <Row>
        <Col>
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/" +
              `coffee${parseInt(`${id}`) + 1}.jpg`
            }
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
      <br />
      <br />
      <Nav variant="tabs" defaultActiveKey="info">
        <Nav.Item>
          <Nav.Link onClick={() => setTab("info")} eventKey="info">
            제품영양정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab("review")} eventKey="review">
            리뷰
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab("exchange")} eventKey="exchange">
            교환
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <br />
      <br />
      <TabContent />
    </Container>
  );
};

export default Detail;
