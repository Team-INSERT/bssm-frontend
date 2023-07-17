import React from "react";
import styled from "styled-components";

const PostHead = () => {
  return (
    <Container>
      <Title />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Title = styled.h1``;

export default PostHead;
