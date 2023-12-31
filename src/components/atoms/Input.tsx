import styled, { css } from "styled-components";
import { theme, font, flex } from "@/styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  label?: string;
  type?: string;
  fontSize?: string;
}

const Input = ({ type, width = "100%", label, id, ...props }: InputProps) => {
  return (
    <StyledContainer type={type}>
      <StyledLabel type={type} htmlFor={id}>
        {label}
      </StyledLabel>
      <StyledInput type={type} id={id} width={width} {...props} />
    </StyledContainer>
  );
};

const fileContainerStyle = css`
  flex-direction: row;
  align-items: center;
  background-color: ${theme.white};
  height: 50px;
  padding-left: 8px;
`;

const StyledContainer = styled.div<{ type?: string }>`
  ${flex.COLUMN_FLEX};
  gap: 6px;

  ${({ type }) => type === "file" && fileContainerStyle}
`;

const fileLabelStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0 12px;
  border-radius: 4px;
  color: ${theme.white};
  background-color: ${theme.primary_blue};
  cursor: pointer;
  height: 30px;
  margin-left: 10px;
`;

const StyledLabel = styled.label<{ type?: string }>`
  ${font.btn3};

  ${({ type }) => type === "file" && fileLabelStyle}
`;

const StyledInput = styled.input<{ width: string }>`
  width: ${({ width }) => width};
  padding: 8px 16px;
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
