import styled, { css } from "styled-components";
import { color, font } from "@/styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  align?: "TOP" | "RIGHT" | "BOTTOM" | "LEFT";
}

const Button = ({ ...props }: IButtonProps) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button<{ color: string; align?: string }>`
  width: fit-content;
  padding: 4px 16px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  color: ${color.white};
  ${font.btn3};
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
