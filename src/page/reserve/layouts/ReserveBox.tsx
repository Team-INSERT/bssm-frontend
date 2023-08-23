import { color, flex } from "@/styles";
import React from "react";
import styled from "styled-components";
import ReserveMap from "./ReserveMap";

const ReserveBox = () => {
  return (
    <Container>
      <ReserveMapBox>
        <ReserveMap />
      </ReserveMapBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ReserveMapBox = styled.div`
  width: 100%;
  ${flex.CENTER};
  background-color: ${color.white};
  padding: 20px;
`;

export default ReserveBox;
