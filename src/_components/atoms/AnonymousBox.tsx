import styled, { css } from "styled-components";
import { color, font } from "@/_styles";
import { Check } from "@/_assets/icons";

interface IAnonymousBoxProps {
  clicked: boolean;
  setClicked: (value: React.SetStateAction<boolean>) => void;
}

const AnonymousBox = ({ clicked, setClicked }: IAnonymousBoxProps) => {
  return (
    <Container onClick={() => setClicked(!clicked)}>
      <AnonymousLabel>익명</AnonymousLabel>
      <AnonymousButton clicked={clicked}>
        <Check width={10} height={10} />
      </AnonymousButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const AnonymousLabel = styled.span`
  ${font.p2};
  color: ${color.gray};
`;

const AnonymousButton = styled.button<{ clicked: boolean }>`
  width: 18px;
  height: 18px;
  border: 1.5px solid ${color.on_tertiary};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: "transparent";
  ${({ clicked }) =>
    clicked &&
    css`
      background-color: ${color.primary_blue};
      border: none;
    `}
`;

export default AnonymousBox;
