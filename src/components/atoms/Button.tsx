import styled from "styled-components";
import { color, font } from "@/styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

const Button = ({ ...props }: IButtonProps) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button<{ color: string }>`
  padding: 4px 16px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  color: ${color.white};
  ${font.btn3};
`;

export default Button;
