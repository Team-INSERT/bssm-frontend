import React from "react";
import styled, { keyframes, css } from "styled-components";
import slideState from "@/page/meal/constants/meal.constant";

const MealListItem = (props: {
  key: number;
  date: number;
  menu: Array<string>;
  currentSlideIndex: number;
}) => {
  const { key, date, menu, currentSlideIndex } = props;

  const mealSlideTypeGenerator = (date: number) => {
    if (date === currentSlideIndex - 1) return slideState.prev.type;
    if (date === currentSlideIndex + 2) return slideState.third.type;
    if (date === currentSlideIndex) return slideState.first.type;
    if (date === currentSlideIndex + 3) return slideState.next.type;
    return slideState.second.type;
  };

  return (
    <Container key={key}>
      <MealList
        current={date >= currentSlideIndex && date <= currentSlideIndex + 2}
        state={mealSlideTypeGenerator(date)}
      >
        <MealListHeader>
          <Circles>
            <Red />
            <Yellow />
            <Green />
          </Circles>
        </MealListHeader>
        {menu.map((item) => (
          <div key={item}>{item}</div> // 컴포넌트 제작 예정임미다
        ))}
      </MealList>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const MealList = styled.div<{ current: boolean; state: string }>`
  width: 100%;
  height: 60vh;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  box-shadow: 0px -2px 10px 0.5px #ededed;
  visibility: ${(props) => (props.current ? "visible" : "hidden")};

  ${(props) =>
    props.state === slideState.third.type
      ? css`
          transition: all 0.5s linear;
          top: 6vh;
        `
      : props.state === slideState.first.type
      ? css`
          transition: all 0.5s linear;
          transform: scaleX(0.9);
          top: 2vh;
        `
      : props.state === slideState.second.type
      ? css`
          transform: scaleX(0.95);
          transition: all 0.5s linear;
          top: 4vh;
        `
      : props.state === slideState.prev.type
      ? css`
          transform: scaleX(0.85);
          transition: all 0.5s linear;
          top: 0px;
          opacity: 0;
        `
      : css`
          transform: scaleX(1.05);
          top: 8vh;
          transition: all 0.5s linear;
          opacity: 0;
        `}
`;

const MealListHeader = styled.div`
  width: 100%;
  height: 11%;
  border-radius: 10px 10px 0 0;
  background-color: #fcfcfc;
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  width: 0.8vw;
  height: 0.8vw;
  border-radius: 25px;
`;

const Red = styled(Circle)`
  background-color: #e54f5a;
`;

const Yellow = styled(Circle)`
  background-color: #febc56;
`;

const Green = styled(Circle)`
  background-color: #27c3bc;
`;

const Circles = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  gap: 5px;
`;

export default MealListItem;
