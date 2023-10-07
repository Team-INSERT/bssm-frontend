import styled, { css } from "styled-components";
import { color, font } from "@/_styles";
import { Row } from "@/_components/Flex";

interface ICategoryProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  checked: boolean;
}

const Category = ({ id, label, checked, ...props }: ICategoryProps) => {
  return (
    <Row>
      <StyledCategory id={id} type="radio" {...props} />
      <StyledLabel htmlFor={id} checked={checked}>
        {label}
      </StyledLabel>
    </Row>
  );
};

const StyledCategory = styled.input`
  display: none;
`;

const StyledLabel = styled.label<{ checked: boolean }>`
  border: none;
  padding: 6px 16px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(144, 144, 144, 0.1);
  ${font.btn3};
  ${({ checked }) =>
    checked
      ? css`
          background-color: ${color.primary_blue};
          color: ${color.white};
        `
      : css`
          background-color: ${color.white};
          color: ${color.gray};

          &:hover {
            background-color: ${color.on_tertiary};
          }
        `}
`;

export default Category;
