import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  label?: string;
}

const Input = ({
  width = "100%",
  children,
  label,
  id,
  ...props
}: IInputProps) => {
  return (
    <StyledContainer>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput id={id} width={width} {...props} />
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

const StyledInput = styled.input<{ width: string }>`
  width: ${({ width }) => width};
  padding: 12px 0 12px 16px;
  border-radius: 4px;
  ${font.p2};
`;

export default Input;
