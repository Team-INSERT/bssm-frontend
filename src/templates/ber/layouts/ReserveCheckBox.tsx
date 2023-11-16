import React from "react";
import CheckIcon from "@/assets/icons/CheckIcon";
import styled, { css } from "styled-components";
import { color, flex, font } from "@/styles";
import { BerReserveCheckBoxProps } from "../interfaces";

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

const CheckButton = styled.button<{ isChecked: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  ${({ isChecked }) =>
    isChecked
      ? css`
          background-color: ${color.primary_blue};
          border: none;
        `
      : css`
          border: 1.5px solid ${color.black};
        `};
`;

export default ReserveCheckBox;
