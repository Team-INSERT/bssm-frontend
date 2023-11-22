import React from "react";
import styled from "styled-components";
import { Column } from "@/components/Flex";
import { Button, Input, DropDown } from "@/components/atoms";
import { theme, flex, font } from "@/styles";
import { useModal } from "@/@modal/hooks";
import { XIcon } from "@/assets/icons";
import PLAN from "../constants/plan.constant";
import { CalendarPlanAddModalProps } from "../types/@props";
import { useCalendar } from "../hooks";

const CalendarPlanAddModal = ({ date }: CalendarPlanAddModalProps) => {
  const { closeModal } = useModal();
  const { handlePlanAddButtonClick } = useCalendar();
  const [planType, setPlanType] = React.useState<string>(PLAN.학급일정);
  const [title, setTitle] = React.useState("");

  return (
    <Layout>
      <CalendarPlanHeader>
        <CalendarTitleText>📆 일정 추가하기</CalendarTitleText>
        <XIcon onClick={closeModal} />
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
          <DropDown
            label=""
            width="100px"
            optionList={[PLAN.학급일정, PLAN.학년일정, PLAN.학교일정]}
            selected={planType}
            handler={setPlanType}
          />
        </Column>
        <CalendarPlanAddButtonBox>
          <Button
            onClick={() => handlePlanAddButtonClick({ title, date, planType })}
            color={theme.primary_blue}
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
  background-color: ${theme.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  ${flex.COLUMN_FLEX};
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
  ${flex.COLUMN_FLEX};
  gap: 12px;
`;

const CalendarPlanClassifyText = styled.span`
  ${font.p3};
`;

const CalendarPlanAddButtonBox = styled.div`
  margin-left: auto;
`;

export default CalendarPlanAddModal;
