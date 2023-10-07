import React from "react";
import styled from "styled-components";
import { emptyMealList } from "@/_assets/data";
import { IMealList } from "@/_interfaces";
import { color, flex, font } from "@/_styles";
import { Column } from "@/_components/Flex";
import useDate from "@/_hooks/useDate";
import MealListItem from "./layouts/MealListItem";
import { useMealQuery } from "./services/query.service";

const MealPage = () => {
  const { getMealDate, getDayOfWeek, setMealDate, getMealDateTitle } =
    useDate();
  const [currentDate, setCurrentDate] = React.useState(getMealDate());
  const [mealList, setMealList] = React.useState<IMealList>(emptyMealList);
  const { refetch } = useMealQuery({ date: currentDate });

  React.useEffect(() => {
    const handleSetDateKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")
        setCurrentDate((p) => {
          if (getDayOfWeek(p) === "월요일") return setMealDate(p, -3);
          return setMealDate(p, -1);
        });
      if (e.key === "ArrowRight")
        setCurrentDate((p) => {
          if (getDayOfWeek(p) === "금요일") return setMealDate(p, 3);
          return setMealDate(p, 1);
        });
    };

    window.addEventListener("keydown", handleSetDateKeyDown);
    return () => {
      window.removeEventListener("keydown", handleSetDateKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    refetch().then(({ data }) => {
      if (data.keys) return setMealList(data);
      return setMealList(emptyMealList);
    });
    // eslint-disable-next-line
  }, [currentDate]);

  return (
    <Layout>
      <Container>
        <Column gap="8px">
          <Title />
          <Description />
        </Column>
        <MealDate>{getMealDateTitle(currentDate)}</MealDate>
        <MealList>
          {mealList.keys.map((mealName) => (
            <MealListItem
              key={mealName}
              mealName={mealName}
              meal={mealList.data[mealName]}
            />
          ))}
          {!mealList.keys.length && (
            <NoMealText>{getMealDateTitle(currentDate)}</NoMealText>
          )}
        </MealList>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 76%;
  ${flex.COLUMN};
  gap: 12px;
`;

const Title = styled.span`
  ${font.H2};
  &:after {
    content: "🍱  오늘의 급식";
  }
`;

const Description = styled.span`
  color: ${color.gray};
  &:after {
    content: "좌우 화살표 방향키를 탭해 날짜를 조정해보세요.";
  }
`;

const MealList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60vh;
  gap: 2%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MealDate = styled.span`
  width: 100%;
  ${flex.CENTER};
  ${font.H4};
`;

const NoMealText = styled.span`
  width: 100%;
  ${flex.CENTER};
  ${font.p2};
  color: ${color.gray};

  &:after {
    content: "에 등록된 급식이 없어요.";
  }
`;

export default MealPage;
