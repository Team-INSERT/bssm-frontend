import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";

const navigation = [
  "마이스터역량인증제",
  "시간표",
  "급식표",
  "게시판",
  "대나무숲",
];

const Navigation = () => {
  return (
    <NavigationList>
      {navigation.map((title) => (
        <NavigationListItem key={title}>{title}</NavigationListItem>
      ))}
    </NavigationList>
  );
};

const NavigationList = styled.ul`
  width: 100%;
  display: flex;
  gap: 5%;
`;

const NavigationListItem = styled.li`
  font-size: ${font.H5};
  color: ${color.black};
  cursor: pointer;
`;

export default Navigation;
