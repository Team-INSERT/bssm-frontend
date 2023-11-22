import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { ArrowIcon } from "@/assets/icons";
import { DATE, DIRECTION } from "@/constants";
import { theme, flex, font } from "@/styles";
import { useMealQuery } from "../services/query.service";
import { defaultMealListData } from "../assets/data";
import { useMeal } from "../hooks";
import MealListItem from "./MealListItem";
import MealPageTitleBox from "./MealPageTitleBox";

const MealPage = () => {
  const { currentDate, formatDate, handleCurrentDateChange } = useMeal();
  const [mealList, setMealList] = React.useState(defaultMealListData);
  const { refetch } = useMealQuery(dayjs(currentDate).format(DATE.YYMMDD));

  React.useEffect(() => {
    (async () => {
      const { data } = await refetch();
      if (data.keys) return setMealList(data);
      return setMealList(defaultMealListData);
    })();
  }, [currentDate, refetch]);

  return (
    <Layout>
      <MealPageTitleBox />
      <MealDateText>{formatDate(currentDate)}</MealDateText>
      <MealBox>
        <ArrowIcon
          width={40}
          height={40}
          direction={DIRECTION.LEFT}
          onClick={() => handleCurrentDateChange(DATE.INCREASE)}
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
        <ArrowIcon
          width={40}
          height={40}
          direction={DIRECTION.RIGHT}
          onClick={() => handleCurrentDateChange(DATE.DECREASE)}
        />
      </MealBox>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN_HORIZONTAL};
  gap: 14px;
`;

const MealBox = styled.div`
  width: 100%;
  ${flex.CENTER};
  gap: 36px;
`;

const MealList = styled.div`
  width: 100%;
  height: 54vh;
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
  color: ${theme.gray};
`;

export default MealPage;
