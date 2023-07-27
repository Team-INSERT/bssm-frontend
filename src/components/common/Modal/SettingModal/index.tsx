import color from "@/styles/color";
import React from "react";
import styled from "styled-components";

const SettingModal = () => {
  return <Container />;
};

const Container = styled.div`
  width: 30vw;
  height: 40vh;
  background-color: ${color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export default SettingModal;
