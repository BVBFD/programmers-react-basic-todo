import { Outlet, useNavigate } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>회사정보</h1>
      <img
        src={process.env.PUBLIC_URL + `/images/lab.jpg`}
        alt={`coffee-lab`}
        width="70%"
      />
      <Outlet></Outlet>
      <p></p>
      <button
        className="btn btn-primary"
        style={{ marginRight: "10px" }}
        onClick={() => {
          navigate("/about/member");
        }}
      >
        멤버
      </button>
      <button
        className="btn btn-warning"
        onClick={() => {
          navigate("/about/location");
        }}
      >
        위치
      </button>
    </div>
  );
};

export default About;
