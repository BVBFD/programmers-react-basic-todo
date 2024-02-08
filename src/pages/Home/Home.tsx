import styles from "./Home.module.css";
import { Container } from "react-bootstrap";
import Coffees from "../../Components/Coffees/Coffees";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [coffees, setCoffees] = useState<CoffeeType[]>([]);

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/coffees");
      setCoffees(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
