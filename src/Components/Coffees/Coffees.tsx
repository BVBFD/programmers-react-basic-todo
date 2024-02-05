import Coffee from "./Coffee/Coffee";
import { Row } from "react-bootstrap";

const Coffees = ({ coffees }: { coffees: CoffeeType[] }) => {
  return (
    <Row>
      {coffees.map((coffee) => (
        <Coffee coffee={coffee} />
      ))}
    </Row>
  );
};

export default Coffees;
