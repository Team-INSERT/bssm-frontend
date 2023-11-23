import styled from "styled-components";
import { FallbackImage } from "@/components/atoms";
import { defaultProfile } from "@/assets/images";
import { Row } from "@/components/Flex";
import { useUser } from "@/@user/hooks";
import { theme, font } from "@/styles";
import { CalendarPlan } from "../types";
import { getPlanNameByPlanType } from "../helpers";

const CalendarPlanWriterInformationModal = ({ user, type }: CalendarPlan) => {
  const { isSameUser } = useUser();
  return (
    <PlanWriterBox>
      <FallbackImage
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
      {isSameUser(user.id) && (
        <PlanWriterDeleteText>삭제하기</PlanWriterDeleteText>
      )}
    </PlanWriterBox>
  );
};

const PlanWriterBox = styled.div`
  display: none;
  width: 180px;
  height: 100px;
  padding: 2px;
  background-color: ${theme.white};
  position: absolute;
  margin-top: -14vh;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.15);
`;

const PlanInformationText = styled.span`
  ${font.p3};
  color: ${theme.black};
`;

const PlanWriterDeleteText = styled(PlanInformationText)`
  color: ${theme.primary_red};
`;

export default CalendarPlanWriterInformationModal;
