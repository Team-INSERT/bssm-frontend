import { Column } from "@/components/Flex";
import { Button, Input, Select } from "@/components/atoms";
import useModal from "@/hooks/useModal";
import { color, flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import getPlanType from "@/helpers/getPlanType.helper";
import PLAN from "../constants/plan.constant";
import { CalendarPlanAddModalProps } from "../interfaces";
import { useCalendar } from "../hooks";
import { PlanModalCloseIcon } from "../assets/icons";

const CalendarPlanAddModal = ({ date }: CalendarPlanAddModalProps) => {
  const { closeModal } = useModal();
  const { handlePlanAddButtonClick } = useCalendar();
  const [planType, setPlanType] = React.useState<string>(PLAN.학급일정);
  const [title, setTitle] = React.useState("");

  return (
    <Layout>
      <CalendarPlanHeader>
        <CalendarTitleText>📆 일정 추가하기</CalendarTitleText>
        <PlanModalCloseIcon onClick={closeModal} />
      </CalendarPlanHeader>
      <CalendarPlanBody>
        <Input
          label="일정 내용"
          placeholder="간략한 일정 내용을 입력해주세요."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Column gap="6px">
          <CalendarPlanClassifyText>일정 분류</CalendarPlanClassifyText>
          <Select
            label=""
            width="100px"
            options={[PLAN.학급일정, PLAN.학년일정, PLAN.학교일정]}
            defaultOption={getPlanType(planType)}
            handler={setPlanType}
          />
        </Column>
        <CalendarPlanAddButtonBox>
          <Button
            onClick={() => handlePlanAddButtonClick({ title, date, planType })}
            color={color.primary_blue}
          >
            추가하기
          </Button>
        </CalendarPlanAddButtonBox>
      </CalendarPlanBody>
    </Layout>
  );
};

const Layout = styled.div`
  width: 40vw;
  height: fit-content;
  overflow-y: scroll;
  background-color: ${color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  ${flex.COLUMN};
`;

const CalendarPlanHeader = styled.header`
  width: 100%;
  padding: 10px 18px;
  ${flex.HORIZONTAL};
  justify-content: space-between;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
`;

const CalendarTitleText = styled.div`
  ${font.p2};
  font-weight: 500;
`;

const CalendarPlanBody = styled.div`
  padding: 16px 28px;
  ${flex.COLUMN};
  gap: 12px;
`;

const CalendarPlanClassifyText = styled.span`
  ${font.p3};
`;

const CalendarPlanAddButtonBox = styled.div`
  margin-left: auto;
`;

export default CalendarPlanAddModal;
