import color from "@/styles/color";
import React from "react";
import styled from "styled-components";
import SettingHeader from "./SettingHeader";
import SettingBody from "./SettingBody";

const SettingModal = () => {
  return (
    <Container>
      <SettingHeader />
      <SettingBody />
    </Container>
  );
};

const Container = styled.div`
  width: 40vw;
  height: 90vh;
  overflow-y: scroll;
  background-color: ${color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

export default SettingModal;
