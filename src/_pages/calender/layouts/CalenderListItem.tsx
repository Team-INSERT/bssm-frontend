import { defaultProfile } from "@/_assets/images";
import { Row } from "@/_components/Flex";
import { ImageWithFallback } from "@/_components/atoms";
import PlanAddModal from "@/_components/common/Modal/PlanAddModal";
import { getClassName, getDay } from "@/_helpers";
import useModal from "@/_hooks/useModal";
import useUser from "@/_hooks/useUser";
import ICalenderItem from "@/_interfaces/calenderItem.interface";
import { color, flex, font } from "@/_styles";
import styled, { css } from "styled-components";
import { useDeleteCalenderPlanMutation } from "../services/mutation.service";

interface ICalenderListItemProps {
  calender: ICalenderItem;
  isEmpty?: boolean;
}

const CalenderListItem = ({ calender, isEmpty }: ICalenderListItemProps) => {
  const { openModal } = useModal();
  const { user } = useUser();
  const { mutate } = useDeleteCalenderPlanMutation();

  const handleOpenModalClick = () => {
    openModal({
      component: <PlanAddModal date={calender.date} />,
    });
  };

  const handleDeletePlanClick = (id: number) => {
    mutate(id);
  };

  return (
    <Container isEmpty={isEmpty}>
      <CalenderHead>{getDay(calender.date)}</CalenderHead>
      <CalenderBody>
        {calender.plans.map((plan) => (
          <Plan onClick={() => handleDeletePlanClick(plan.id)}>
            {plan.title}
            <PlanWriterBox>
              <ProfileBox>
                <ImageWithFallback
                  width={20}
                  height={20}
                  src={plan.user.profileImage}
                  fallbackSrc={defaultProfile}
                  alt="프로필"
                  rounded
                />
              </ProfileBox>
              <Row gap="4px">
                <PlanWriterText>{plan.user.nickName}</PlanWriterText>
                <PlanTypes>{getClassName(plan.type)}</PlanTypes>
              </Row>
              {plan.user.id === user.id && <PlanWriterDeleteText />}
            </PlanWriterBox>
          </Plan>
        ))}
        <PlanAddButton onClick={handleOpenModalClick} />
      </CalenderBody>
    </Container>
  );
};

const Container = styled.li<{ isEmpty?: boolean }>`
  width: 13%;
  display: flex;
  flex-direction: column;
  ${({ isEmpty }) =>
    isEmpty &&
    css`
      opacity: 0;
    `}
`;

const CalenderHead = styled.header`
  ${font.H5};
  width: 100%;
  border-top: 1px solid ${color.black};
  padding: 10px 0;
`;

const CalenderBody = styled.section`
  ${font.caption};
  width: 90%;
  min-height: 26vh;
  word-break: break-all;
  height: fit-content;
  ${flex.COLUMN};
  gap: 8px;
`;

const Plan = styled.div`
  width: 100%;
  padding: 4px 10px;
  display: flex;
  align-items: center;
  ${font.p3};
  background-color: ${color.primary_blue};
  color: ${color.white};
  cursor: pointer;
  position: relative;

  &:hover {
    & > div {
      ${flex.COLUMN_CENTER};
    }
  }
`;

const PlanWriterBox = styled.div`
  display: none;
  width: fit-content;
  padding: 10px;
  background-color: ${color.white};
  position: absolute;
  margin-top: -14vh;
  box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.15);
`;

const ProfileBox = styled.div``;

const PlanWriterText = styled.span`
  ${font.p3};
  color: ${color.black};
`;

const PlanWriterDeleteText = styled(PlanWriterText)`
  color: ${color.primary_red};

  &:after {
    content: "클릭해 삭제";
  }
`;

const PlanTypes = styled(PlanWriterText)`
  &:before {
    content: " · ";
  }

  &:after {
    content: "일정";
  }
`;

const PlanAddButton = styled.button`
  background-color: ${color.light_gray};
  color: ${color.black};
  width: 100%;
  padding: 6px 0;

  &:after {
    content: "+";
  }
`;

export default CalenderListItem;
