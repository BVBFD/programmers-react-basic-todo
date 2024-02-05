import styles from "./Home.module.css";
import { Container } from "react-bootstrap";
import Coffees from "../../Components/Coffees/Coffees";
import coffeelist from "../../coffeelist";
import { useState } from "react";

const Home = () => {
  const [coffees] = useState<CoffeeType[]>(coffeelist);

  return (
    <>
      <div className={styles.homeImg}></div>
      <Container>
        <Coffees coffees={coffees} />
      </Container>
    </>
  );
};

export default Home;
