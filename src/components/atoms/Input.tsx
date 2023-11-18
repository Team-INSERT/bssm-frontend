import React from "react";
import styled, { css } from "styled-components";
import { color, font } from "@/styles";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  label?: string;
  type?: string;
  fontSize?: string;
}

const Input = ({
  type,
  width = "fit-content",
  children,
  label,
  id,
  ...props
}: IInputProps) => {
  return (
    <StyledContainer type={type}>
      <StyledLabel type={type} htmlFor={id}>
        {label}
      </StyledLabel>
      <StyledInput type={type} id={id} width={width} {...props} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ type?: string }>`
  display: flex;
  flex-direction: column;
  gap: 6px;

  ${({ type }) =>
    type === "file" &&
    css`
      flex-direction: row;
      align-items: center;
      background-color: ${color.white};
      height: 50px;
      padding-left: 8px;
    `}
`;

const StyledLabel = styled.label<{ type?: string }>`
  ${font.btn3};

  ${({ type }) =>
    type === "file" &&
    css`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: fit-content;
      padding: 0 12px;
      border-radius: 4px;
      color: ${color.white};
      background-color: ${color.primary_blue};
      cursor: pointer;
      height: 30px;
      margin-left: 10px;
    `}
`;

const StyledInput = styled.input<{ width: string }>`
  width: ${({ width }) => width};
  padding: 8px 0 12px 16px;
  border-radius: 4px;
  ${font.p2};
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.05);

  &[type="file"] {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
  }

  &::file-selector-button {
    display: none;
  }
`;

export default Input;
