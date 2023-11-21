import { Column, Row } from "@/components/Flex";
import { Aside } from "@/components/common";
import { useUser } from "@/@user/hooks";
import { useMainQuery } from "../../services/query.service";
import HomeMeal from "./HomeMeal";
import HomeReserve from "./HomeReserve";
import HomeMainBanner from "./HomeMainBanner";
import HomeCalendar from "./HomeCalendar";
import HomePost from "./HomePost";
import HomeMiniBanner from "./HomeMiniBanner";
import HomeBamboo from "./HomeBamboo";
import { getCurrentMeal } from "../../helpers";

const BasicMode = () => {
  const { isSuccess, data } = useMainQuery();
  const { isLogined } = useUser();
  const currentMeal = getCurrentMeal();

  return isSuccess && isLogined ? (
    <Column gap="8px">
      <Row gap="8px" width="100%">
        <HomeMeal {...data.meal.data[currentMeal]} mealName={currentMeal} />
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
  ) : null;
};

export default BasicMode;
