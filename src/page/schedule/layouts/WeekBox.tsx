import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";

const weeks = ["월", "화", "수", "목", "금"];

const WeekBox = () => {
  return (
    <Weeks>
      {weeks.map((week) => (
        <Week key={week}>{week}</Week>
      ))}
    </Weeks>
  );
};

const Weeks = styled.article`
  display: flex;
  width: 100%;
  gap: 1.5%;
`;

const Week = styled.div`
  width: 19%;
  ${font.caption};
  color: ${color.gray};

  &:after {
    content: "요일";
  }
`;

export default WeekBox;
