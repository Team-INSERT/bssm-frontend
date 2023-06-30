import React from "react";
import styled from "styled-components";
import Row from "../Flex/Row";
import InfomationBox from "./InfomationBox";
import MeisterBox from "./MeisterBox";
import JoinCheckBox from "./JoinCheckBox";

const Aside = () => {
  return (
    <Container>
      <InfomationBox />
      <Row gap="6px">
        <MeisterBox />
        <JoinCheckBox />
      </Row>
    </Container>
  );
};

const Container = styled.aside`
  width: 28vw;
  display: flex;
  gap: 6px;
  margin-left: auto;
  flex-direction: column;
`;

export default Aside;
