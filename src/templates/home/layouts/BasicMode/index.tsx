import React from "react";
import { getMealName } from "@/helpers";
import { Column, Row } from "@/components/Flex";
import { Aside } from "@/components/common";
import useMeal from "@/hooks/useMeal";
import useUser from "@/hooks/useUser";
import useModal from "@/hooks/useModal";
import LoginModal from "@/components/common/Modal/LoginModal";
import { useDidMountEffect } from "@/hooks/useDidMountEffect";
import { useMainQuery } from "../../services/query.service";
import HomeMeal from "./HomeMeal";
import HomeReserve from "./HomeReserve";
import HomeMainBanner from "./HomeMainBanner";
import HomeCalender from "./HomeCalender";
import HomePost from "./HomePost";
import HomeMiniBanner from "./HomeMiniBanner";
import HomeBamboo from "./HomeBamboo";

const BasicMode = () => {
  const { openModal, closeModal } = useModal();
  const { isSuccess, data } = useMainQuery();
  const { isLogined } = useUser();
  const { getMealTime } = useMeal();

  useDidMountEffect(() => {
    if (!isLogined)
      return openModal({
        component: <LoginModal />,
      });
    return closeModal();
  }, [isLogined]);

  return isSuccess && isLogined ? (
    <>
      <Row gap="8px" width="100%">
        <HomeMeal
          {...data.meal.data[getMealTime()]}
          name={getMealName(getMealTime())}
        />
        <HomeReserve />
        <Aside />
      </Row>
      <Row gap="8px" width="100%">
        <Column gap="8px" width="100%">
          <HomeMainBanner href="/post" />
          <Row gap="8px" width="100%">
            <HomeCalender {...data.calender} />
            <HomePost notice={data.notice} common={data.common} />
          </Row>
        </Column>
        <Column gap="8px">
          <HomeMiniBanner href="https://buma.wiki" />
          <HomeBamboo {...data.bamboo} />
        </Column>
      </Row>
    </>
  ) : null;
};

export default BasicMode;
