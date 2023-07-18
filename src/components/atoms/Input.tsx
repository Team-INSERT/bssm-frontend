import { font } from "@/styles/font";
import React from "react";
import styled, { css } from "styled-components";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  label?: string;
}

const Input = ({
  width = "100%",
  height = "52px",
  children,
  label,
  id,
  ...props
}: IInputProps) => {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} width={width} height={height} {...props} />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StyledLabel = styled.label`
  ${font.context};
`;

const StyledInput = styled.input<{ width: string; height: string }>`
  ${(props) => css`
    width: ${props.width};
    height: ${props.height};
  `}
  padding-left: 16px;
  border-radius: 4px;
  ${font.p2};
`;

export default Input;
