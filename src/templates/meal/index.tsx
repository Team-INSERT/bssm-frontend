import React from "react";
import styled from "styled-components";
import { emptyMealList } from "@/assets/data";
import { Arrow } from "@/assets/icons";
import { IMealList } from "@/interfaces";
import { color, flex, font } from "@/styles";
import { Column, Row } from "@/components/Flex";
import useDate from "@/hooks/useDate";
import MealListItem from "./layouts/MealListItem";
import { useMealQuery } from "./services/query.service";

const MealPage = () => {
  const { getMealDate, getDayOfWeek, setMealDate, getMealDateTitle } =
    useDate();
  const [currentDate, setCurrentDate] = React.useState(getMealDate());
  const [mealList, setMealList] = React.useState<IMealList>(emptyMealList);
  const { refetch } = useMealQuery({ date: currentDate });

  const handleDateChange = ({ op }: { op: "+" | "-" }) => {
    if (op === "+") {
      setCurrentDate((p) => {
        if (getDayOfWeek(p) === "금요일") return setMealDate(p, 3);
        return setMealDate(p, 1);
      });
    }
    if (op === "-") {
      setCurrentDate((p) => {
        if (getDayOfWeek(p) === "월요일") return setMealDate(p, -3);
        return setMealDate(p, -1);
      });
    }
  };

  const handleSetDateKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") handleDateChange({ op: "-" });
    if (e.key === "ArrowRight") handleDateChange({ op: "+" });
  };

  React.useEffect(() => {
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
        <Row
          width="100%"
          justifyContent="center"
          alignItems="center"
          gap="36px"
        >
          <Arrow
            direction="left"
            cursor="pointer"
            onClick={() => handleDateChange({ op: "-" })}
            color={color.on_tertiary}
          />
          <MealList>
            {mealList.keys.map((mealName) => (
              <MealListItem
                keyLength={mealList.keys.length}
                handleChange={handleDateChange}
                key={mealName}
                mealName={mealName}
                meal={mealList.data[mealName]}
              />
            ))}
            {!mealList.keys.length && (
              <NoMealText>{getMealDateTitle(currentDate)}</NoMealText>
            )}
          </MealList>
          <Arrow
            cursor="pointer"
            direction="right"
            onClick={() => handleDateChange({ op: "+" })}
            color={color.on_tertiary}
          />
        </Row>
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
