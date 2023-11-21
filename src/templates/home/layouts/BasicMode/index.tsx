import React from "react";
import { getMealName } from "@/helpers";
import { Column, Row } from "@/components/Flex";
import { Aside } from "@/components/common";
import useUser from "@/hooks/useUser";
import dayjs from "dayjs";
import DATE from "@/constants/date.constant";
import { useMainQuery } from "../../services/query.service";
import HomeMeal from "./HomeMeal";
import HomeReserve from "./HomeReserve";
import HomeMainBanner from "./HomeMainBanner";
import HomeCalendar from "./HomeCalendar";
import HomePost from "./HomePost";
import HomeMiniBanner from "./HomeMiniBanner";
import HomeBamboo from "./HomeBamboo";

const BasicMode = () => {
  const { isSuccess, data } = useMainQuery();
  const { isLogined } = useUser();
  const currentDate = dayjs().format(DATE.YYMMDD);

  return (
    isSuccess &&
    isLogined && (
      <Column gap="8px">
        <Row gap="8px" width="100%">
          <HomeMeal
            {...data.meal.data[currentDate]}
            name={getMealName(currentDate)}
          />
          <HomeReserve />
          <Aside />
        </Row>
        <Row gap="8px" width="100%">
          <Column gap="20px" width="100%">
            <HomeMainBanner href="/post" />
            <Row gap="8px" width="100%">
              <HomeCalendar {...data.calender} />
              <HomePost notice={data.notice} common={data.common} />
            </Row>
          </Column>
          <Column gap="8px">
            <HomeMiniBanner />
            <HomeBamboo {...data.bamboo} />
          </Column>
        </Row>
      </Column>
    )
  );
};

export default BasicMode;
