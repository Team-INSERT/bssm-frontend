import { color } from "@/styles";
import { BerIcon } from "@/assets/icons";
import React from "react";
import styled from "styled-components";
import HomeHead from "./HomeHead";
import HomeReserveMap from "./HomeReserveMap";

const HomeReserve = () => {
  return (
    <Container>
      <HomeHead icon={<BerIcon />} title="베르실 예약" href="/reserve" />
      <ReserveBox>
        <HomeReserveMap reservedList={[]} />
      </ReserveBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${color.white};
  border-radius: 4px;
`;

const ReserveBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px 20px;
`;

export default HomeReserve;
