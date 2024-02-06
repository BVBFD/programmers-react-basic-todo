import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Coffee.module.css";

const Coffee = ({ coffee }: { coffee: CoffeeType }) => {
  const navigate = useNavigate();

  return (
    <Col
      className={styles.container}
      onClick={() => navigate(`/detail/${coffee.id + 1}`)}
    >
      <div className={styles.imgBox}>
        <img
          src={process.env.PUBLIC_URL + `${coffee.img}`}
          alt={`coffee${coffee.id + 1}`}
        />
      </div>
      <h5>{coffee.title}</h5>
      <p>{coffee.price}원</p>
    </Col>
  );
};

export default Coffee;
