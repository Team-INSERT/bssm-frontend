import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { emptyMealList } from "@/assets/data";
import { color, flex, font } from "@/styles";
import MealListItem from "./MealListItem";
import { useMealQuery } from "../services/query.service";
import { useMeal } from "../hooks";
import { DATE, DIRECTION } from "../constants";
import { MealArrowIcon } from "../assets/data";
import MealPageTitleBox from "./MealPageTitleBox";

const MealPage = () => {
  const { currentDate, formatDate, handleChangeCurrentDate } = useMeal();
  const [mealList, setMealList] = React.useState(emptyMealList);
  const { refetch } = useMealQuery({
    date: dayjs(currentDate).format(DATE.YYMMDD),
  });

  React.useEffect(() => {
    (async () => {
      const { data } = await refetch();
      if (data.keys) return setMealList(data);
      return setMealList(emptyMealList);
    })();
  }, [currentDate, refetch]);

  return (
    <Layout>
      <MealPageTitleBox />
      <MealDateText>{formatDate(currentDate)}</MealDateText>
      <MealBox>
        <MealArrowIcon
          direction={DIRECTION.LEFT}
          onClick={() => handleChangeCurrentDate(DATE.INCREASE)}
        />
        <MealList>
          {mealList.keys.length ? (
            mealList.keys.map((mealName) => (
              <MealListItem
                key={mealName}
                mealName={mealName}
                meal={mealList.data[mealName]}
              />
            ))
          ) : (
            <NoMealText>
              {formatDate(currentDate)}에 등록된 급식이 없어요.
            </NoMealText>
          )}
        </MealList>
        <MealArrowIcon
          direction={DIRECTION.RIGHT}
          onClick={() => handleChangeCurrentDate(DATE.DECREASE)}
        />
      </MealBox>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN_VERTICAL};
  gap: 14px;
`;

const MealBox = styled.div`
  width: 100%;
  ${flex.CENTER};
  gap: 36px;
`;

const MealList = styled.div`
  width: 100%;
  height: 60vh;
  ${flex.CENTER};
  gap: 2%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const MealDateText = styled.span`
  width: 100%;
  ${flex.CENTER};
  ${font.H4};
`;

const NoMealText = styled.span`
  width: 100%;
  ${flex.CENTER};
  ${font.p2};
  color: ${color.gray};
`;

export default MealPage;
