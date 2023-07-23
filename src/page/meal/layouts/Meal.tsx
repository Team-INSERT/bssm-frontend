import React from "react";
import styled from "styled-components";
import ListSlider from "./ListSlider";

const MealList = () => {
  const list = [
    { date: 0, menu: ["빈슬라이드"] },
    { date: 1, menu: ["빈슬라이드"] },
    { date: 2, menu: ["밥", "국", "김치"] },
    { date: 3, menu: ["라면", "김밥", "김치"] },
    { date: 4, menu: ["된장찌개", "김치전", "물김치"] },
    { date: 5, menu: ["샐러드", "스테이크", "빵"] },
    { date: 6, menu: ["피자", "치킨", "감자튀김"] },
    { date: 7, menu: ["삼계탕", "달걀", "밥"] },
    { date: 8, menu: ["떡볶이", "오뎅", "김말이"] },
    { date: 9, menu: ["초밥", "우동", "타코야끼"] },
    { date: 10, menu: ["파스타", "샐러드", "빵"] },
    { date: 11, menu: ["쌀국수", "모닝빵", "망고스무디"] },
    { date: 12, menu: ["햄버거", "감자튀김", "음료"] },
  ];
  return (
    <Container>
      <ListSlider list={list} />
    </Container>
  );
};

const Container = styled.div`
  width: 65%;
  height: 80%;
`;

export default MealList;
