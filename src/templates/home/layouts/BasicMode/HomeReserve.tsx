import styled from "styled-components";
import { theme } from "@/styles";
import { ROUTER } from "@/constants";
import { BerIcon } from "@/assets/icons";
import HomeHead from "./HomeHead";
import HomeReserveMap from "./HomeReserveMap";

const HomeReserve = () => {
  return (
    <Container>
      <HomeHead icon={<BerIcon />} title="베르실 예약" href={ROUTER.RESERVE} />
      <ReserveBox>
        <HomeReserveMap reservedList={[]} />
      </ReserveBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${theme.white};
  border-radius: 4px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const ReserveBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px 20px;
`;

export default HomeReserve;
