import { Col } from "react-bootstrap";

const Coffee = ({ coffee }: { coffee: CoffeeType }) => {
  return (
    <Col>
      <img
        src={process.env.PUBLIC_URL + `${coffee.img}`}
        alt={`coffee${coffee.id + 1}`}
        width="80%"
      />
      <h5>{coffee.title}</h5>
      <p>{coffee.price}</p>
    </Col>
  );
};

export default Coffee;
