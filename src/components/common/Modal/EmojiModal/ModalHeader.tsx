import styled from "styled-components";
import { color, font } from "@/styles";
import { XIcon, HoldingBackTears } from "@/assets/icons";

interface IModalHeaderProps {
  handleClickCloseButton: () => void;
}

const ModalHeader = ({ handleClickCloseButton }: IModalHeaderProps) => {
  return (
    <Container>
      <HoldingBackTears width={14} height={14} isHover />
      <Title />
      <CloseButton onClick={handleClickCloseButton}>
        <XIcon width={10} height={10} />
      </CloseButton>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  padding: 10px 0 10px 14px;
  display: flex;
  gap: 6px;
  align-items: center;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;

const Title = styled.span`
  ${font.p3};
  font-weight: 600;
  color: ${color.black};

  &:after {
    content: "이모티콘";
  }
`;

const CloseButton = styled.button`
  margin: 0 20px 0 auto;
`;

export default ModalHeader;
