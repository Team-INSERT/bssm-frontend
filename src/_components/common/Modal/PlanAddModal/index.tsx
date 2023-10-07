import { XIcon } from "@/_assets/icons";
import { Column } from "@/_components/Flex";
import { Button, Input, Select } from "@/_components/atoms";
import useModal from "@/_hooks/useModal";
import useUser from "@/_hooks/useUser";
import { useAddCalenderPlanMutation } from "@/_pages/calender/services/mutation.service";
import { color, flex, font } from "@/_styles";
import React from "react";
import styled from "styled-components";

interface IPlanAddModalProps {
  date: string;
}

const PlanAddModal = ({ date }: IPlanAddModalProps) => {
  const { closeModal } = useModal();
  const { mutate } = useAddCalenderPlanMutation();
  const { user } = useUser();
  const [planType, setPlanType] = React.useState("CLASS");
  const [title, setTitle] = React.useState("");
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleAddButtonClick = () => {
    mutate({
      title,
      priority: 0,
      date,
      color: "#000",
      type: planType,
      grade: user.grade,
      classNumber: user.classNum,
    });
  };

  React.useEffect(() => {
    if (textareaRef.current) textareaRef.current.focus();
  }, []);

  return (
    <Container>
      <Header>
        <BambooTitle />
        <CloseButton>
          <XIcon onClick={closeModal} />
        </CloseButton>
      </Header>
      <Body>
        <Input
          label="일정 내용"
          placeholder="간략한 일정 내용을 입력해주세요."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Column gap="6px">
          <StyledTitle>일정 분류</StyledTitle>
          <Select
            label=""
            width="100px"
            options={["CLASS", "GRADE", "SCHOOL"]}
            defaultOption={planType}
            handler={setPlanType}
          />
        </Column>
      </Body>
      <PlanButtonBox>
        <Button onClick={handleAddButtonClick} color={color.primary_blue}>
          추가하기
        </Button>
      </PlanButtonBox>
    </Container>
  );
};

const Container = styled.div`
  width: 40vw;
  height: fit-content;
  overflow-y: scroll;
  background-color: ${color.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  ${flex.COLUMN};
`;

const Header = styled.header`
  width: 100%;
  padding: 10px 0 10px 18px;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
`;

const BambooTitle = styled.div`
  ${font.p2};
  font-weight: 500;

  &:after {
    content: "📆 일정 추가하기";
  }
`;

const Body = styled.div`
  padding: 16px 28px;
  ${flex.COLUMN};
  gap: 12px;
`;

const CloseButton = styled.button`
  margin: 0 20px 0 auto;
`;

const PlanButtonBox = styled.div`
  width: fit-content;
  margin: 0 16px 16px auto;
`;

const StyledTitle = styled.span`
  ${font.p3};
  font-weight: 500;
`;

export default PlanAddModal;
