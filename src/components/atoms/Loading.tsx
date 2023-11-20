import { color, flex } from "@/styles";
import React from "react";
import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <PuffLoader color={color.primary_blue} size={40} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  ${flex.CENTER};
`;

export default Loading;
