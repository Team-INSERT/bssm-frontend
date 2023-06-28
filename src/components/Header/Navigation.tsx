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
    <List>
      {navigation.map((title) => (
        <ListItem key={title}>{title}</ListItem>
      ))}
    </List>
  );
};

const List = styled.ul`
  width: 100%;
  display: flex;
  gap: 5%;
`;

const ListItem = styled.li`
  font-size: ${font.H5};
  color: ${color.black};
  cursor: pointer;
`;

export default Navigation;
