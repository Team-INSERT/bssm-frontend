import React from "react";
import styled from "styled-components";
import Row from "@/components/Flex/Row";
import useUser from "@/hooks/useUser";
import InfomationBox from "./InfomationBox";
import MeisterBox from "./MeisterBox";
import JoinCheckBox from "./JoinCheckBox";

const Aside = () => {
  const { user, isLogined } = useUser();

  return (
    <Container>
      <InfomationBox user={user} isLogined={isLogined} />
      {isLogined && (
        <Row gap="6px">
          <MeisterBox />
          <JoinCheckBox />
        </Row>
      )}
    </Container>
  );
};

const Container = styled.aside`
  width: 24vw;
  display: flex;
  gap: 6px;
  margin-left: auto;
  flex-direction: column;
`;

export default Aside;
