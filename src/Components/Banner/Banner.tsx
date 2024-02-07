import styled from "styled-components";

const BannerComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bolder;
  color: whitesmoke;
  background: lightcoral;
  font-size: 1.2rem;
  padding: 20px;
  margin-bottom: 20px;
`;

const Banner = () => {
  return <BannerComp>아메리카노 단돈 1000원, 마감 세일</BannerComp>;
};

export default Banner;
