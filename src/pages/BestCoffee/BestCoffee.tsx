import axios from "axios";
import { useEffect, useState } from "react";

const BestCoffee = () => {
  const [bestCoffees, setBestCoffees] = useState<BestCoffeeType[]>();

  const getBestCoffeesData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/bestcoffees`);
      setBestCoffees(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBestCoffeesData();
  }, []);

  console.log(bestCoffees);

  return (
    <div className="container">
      <div className="board">
        {bestCoffees?.map((coffee: BestCoffeeType) => (
          <div key={coffee.rank}>
            <h1>{coffee.rank}위</h1>
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/" +
                `coffee${parseInt(`${coffee?.id}`) + 1}.jpg`
              }
              alt={`coffee${coffee?.id}`}
              width="80%"
            />
            <h4>{coffee.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCoffee;
