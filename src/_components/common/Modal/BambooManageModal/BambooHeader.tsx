import styled from "styled-components";
import { font } from "@/_styles";
import { XIcon } from "@/_assets/icons";
import useModal from "@/_hooks/useModal";

const BambooHeader = () => {
  const { closeModal } = useModal();

  return (
    <Header>
      <BambooTitle />
      <CloseButton>
        <XIcon onClick={closeModal} />
      </CloseButton>
    </Header>
  );
};

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
    content: "🎋 대나무숲 글 관리";
  }
`;

const CloseButton = styled.button`
  margin: 0 20px 0 auto;
`;

export default BambooHeader;
