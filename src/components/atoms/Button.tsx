import styled, { css } from "styled-components";
import { theme, font } from "@/styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  align?: "TOP" | "RIGHT" | "BOTTOM" | "LEFT";
  isSmall?: boolean;
}

const Button = ({ ...props }: ButtonProps) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button<{
  color: string;
  align?: string;
  isSmall?: boolean;
}>`
  width: fit-content;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  color: ${theme.white};
  ${({ isSmall }) =>
    isSmall
      ? css`
          padding: 3px 10px;
          ${font.caption};
        `
      : css`
          padding: 4px 16px;
          ${font.btn3};
        `};
  ${({ align }) => {
    switch (align) {
      case "TOP":
        return css`
          margin-bottom: auto;
        `;
      case "RIGHT":
        return css`
          margin-left: auto;
        `;
      case "BOTTOM":
        return css`
          margin-top: auto;
        `;
      case "LEFT":
        return css`
          margin-right: auto;
        `;
      default:
        return "";
    }
  }}
`;

export default Button;
