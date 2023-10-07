import styled from "styled-components";
import { font } from "@/_styles";
import { XIcon, Setting } from "@/_assets/icons";
import useModal from "@/_hooks/useModal";

const SettingHeader = () => {
  const { closeModal } = useModal();

  return (
    <Header>
      <HGroup>
        <Setting width={16} height={16} />
        <SettingTitle />
      </HGroup>
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

const HGroup = styled.hgroup`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SettingTitle = styled.div`
  ${font.p2};
  font-weight: 500;

  &:after {
    content: "설정";
  }
`;

const CloseButton = styled.button`
  margin: 0 20px 0 auto;
`;

export default SettingHeader;
