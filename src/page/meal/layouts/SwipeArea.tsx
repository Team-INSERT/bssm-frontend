import React from "react";
import styled from "styled-components";

const SwipeArea = ({ next, prev }: { next: () => void; prev: () => void }) => {
  return (
    <Container>
      <PrevArea onClick={() => prev()} />
      <NextArea onClick={() => next()} />
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 70%;

  position: absolute;

  z-index: 1;
`;

const Area = styled.div`
  width: 100%;
  height: 50%;
`;

const PrevArea = styled(Area)``;

const NextArea = styled(Area)``;

export default SwipeArea;
