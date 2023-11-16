import { Column } from "@/components/Flex";
import { Button, Input, Select } from "@/components/atoms";
import useModal from "@/hooks/useModal";
import { color, flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import getPlanType from "@/helpers/getPlanType.helper";
import PLAN from "../constants/plan.constant";
import { CalenderPlanAddModalProps } from "../interfaces";
import useCalender from "../hooks/useCalender";
import { PlanModalCloseIcon } from "../assets/icons";

const CalenderPlanAddModal = ({ date }: CalenderPlanAddModalProps) => {
  const { closeModal } = useModal();
  const { handlePlanAddButtonClick } = useCalender();
  const [planType, setPlanType] = React.useState<string>(PLAN.학급일정);
  const [title, setTitle] = React.useState("");

  return (
    <Layout>
      <CalenderPlanHeader>
        <CalenderTitleText>📆 일정 추가하기</CalenderTitleText>
        <PlanModalCloseIcon onClick={closeModal} />
      </CalenderPlanHeader>
      <CalenderPlanBody>
        <Input
          label="일정 내용"
          placeholder="간략한 일정 내용을 입력해주세요."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Column gap="6px">
          <CalenderPlanClassifyText>일정 분류</CalenderPlanClassifyText>
          <Select
            label=""
            width="100px"
            options={[PLAN.학급일정, PLAN.학년일정, PLAN.학교일정]}
            defaultOption={getPlanType(planType)}
            handler={setPlanType}
          />
        </Column>
        <CalenderPlanAddButtonBox>
          <Button
            onClick={() => handlePlanAddButtonClick({ title, date, planType })}
            color={color.primary_blue}
          >
            추가하기
          </Button>
        </CalenderPlanAddButtonBox>
      </CalenderPlanBody>
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

const CalenderPlanHeader = styled.header`
  width: 100%;
  padding: 10px 18px;
  ${flex.HORIZONTAL};
  justify-content: space-between;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
`;

const CalenderTitleText = styled.div`
  ${font.p2};
  font-weight: 500;
`;

const CalenderPlanBody = styled.div`
  padding: 16px 28px;
  ${flex.COLUMN};
  gap: 12px;
`;

const CalenderPlanClassifyText = styled.span`
  ${font.p3};
`;

const CalenderPlanAddButtonBox = styled.div`
  margin-left: auto;
`;

export default CalenderPlanAddModal;
