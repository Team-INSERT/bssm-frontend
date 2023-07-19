import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";

const CalenderListItem = () => {
  return (
    <Container>
      <CalenderHead>04</CalenderHead>
      <CalenderBody>
        <Plan>입학 설명회</Plan>
      </CalenderBody>
    </Container>
  );
};

const Container = styled.li`
  width: 19%;
  display: flex;
  flex-direction: column;
`;

const CalenderHead = styled.header`
  ${font.H5};
  width: 100%;
  border-top: 1px solid ${color.black};
  padding: 10px 0;
`;

const CalenderBody = styled.section`
  ${font.caption};
  width: 80%;
  word-break: break-all;
  height: 36vh;
`;

const Plan = styled.div`
  width: 100%;
  height: 20px;
  padding-left: 8px;
  display: flex;
  align-items: center;
  ${font.p4};
  background-color: ${color.primary_blue};
  color: ${color.white};
`;

export default CalenderListItem;
