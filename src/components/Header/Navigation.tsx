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
    <NavigationWrap>
      {navigation.map((title) => (
        <NavigationItem key={title}>{title}</NavigationItem>
      ))}
    </NavigationWrap>
  );
};

const NavigationWrap = styled.ul`
  width: 100%;
  display: flex;
  gap: 5%;
`;

const NavigationItem = styled.li`
  font-size: 18px;
  color: black;
  cursor: pointer;
`;

export default Navigation;
