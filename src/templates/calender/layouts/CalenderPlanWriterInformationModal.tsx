import React from "react";
import { ImageWithFallback } from "@/components/atoms";
import { defaultProfile } from "@/assets/images";
import { Row } from "@/components/Flex";
import styled from "styled-components";
import { color, font } from "@/styles";
import { CalenderPlan } from "../interfaces";
import useCalender from "../hooks/useCalender";
import { getPlanNameByPlanType } from "../helpers";

const CalenderPlanWriterInformationModal = ({ user, type }: CalenderPlan) => {
  const { isPlanWriterSameAsUser } = useCalender();

  return (
    <PlanWriterBox>
      <ImageWithFallback
        width={20}
        height={20}
        src={user.profileImage}
        fallbackSrc={defaultProfile}
        alt="프로필"
        rounded
      />
      <Row gap="4px">
        <PlanInformationText>{user.nickName} </PlanInformationText>
        <PlanInformationText>
          · {getPlanNameByPlanType(type)}
        </PlanInformationText>
      </Row>
      {isPlanWriterSameAsUser(user.id) && (
        <PlanWriterDeleteText>삭제하기</PlanWriterDeleteText>
      )}
    </PlanWriterBox>
  );
};

const PlanInformationText = styled.span`
  ${font.p3};
  color: ${color.black};
`;

const PlanWriterDeleteText = styled(PlanInformationText)`
  color: ${color.primary_red};
`;

const PlanWriterBox = styled.div`
  display: none;
  width: fit-content;
  padding: 2px;
  background-color: ${color.white};
  position: absolute;
  margin-top: -14vh;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.15);
`;

export default CalenderPlanWriterInformationModal;
