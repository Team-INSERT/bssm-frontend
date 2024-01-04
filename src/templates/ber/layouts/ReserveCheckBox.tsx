import styled, { css } from "styled-components";
import { CheckIcon } from "@/assets/icons";
import { theme, flex, font } from "@/styles";
import { BerReserveCheckBoxProps } from "../types/@props";

const ReserveCheckBox = ({
  isAgreeRule,
  handleClick,
}: BerReserveCheckBoxProps) => {
  return (
    <CheckBox onClick={handleClick}>
      <NoticeCheckText>
        위 내용을 전부 숙지하였으며, 이에 동의합니다.
      </NoticeCheckText>
      <CheckButton isChecked={isAgreeRule}>
        {isAgreeRule && <CheckIcon />}
      </CheckButton>
    </CheckBox>
  );
};

const CheckBox = styled.div`
  width: fit-content;
  ${flex.HORIZONTAL};
  gap: 8px;
  cursor: pointer;
`;

const NoticeCheckText = styled.span`
  ${font.context};
`;

const checkedStyle = css`
  background-color: ${theme.primary_blue};
  border: none;
`;

const uncheckedStyle = css`
  border: 1.5px solid ${theme.black};
`;

const CheckButton = styled.button<{ isChecked: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  ${({ isChecked }) => (isChecked ? checkedStyle : uncheckedStyle)};
`;

export default ReserveCheckBox;
