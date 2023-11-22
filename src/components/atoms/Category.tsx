import styled, { css } from "styled-components";
import { theme, font } from "@/styles";
import { Row } from "@/components/Flex";

interface CategoryProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  selected: boolean;
}

const Category = ({ id, label, selected, ...props }: CategoryProps) => {
  return (
    <Row>
      <StyledCategory id={id} type="radio" {...props} />
      <StyledLabel htmlFor={id} selected={selected}>
        {label}
      </StyledLabel>
    </Row>
  );
};

const StyledCategory = styled.input`
  display: none;
`;

const StyledLabel = styled.label<{ selected: boolean }>`
  border: none;
  padding: 6px 16px;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px 0 rgba(144, 144, 144, 0.1);
  ${font.btn3};
  ${({ selected }) =>
    selected
      ? css`
          background-color: ${theme.primary_blue};
          color: ${theme.white};
        `
      : css`
          background-color: ${theme.white};
          color: ${theme.gray};

          &:hover {
            background-color: ${theme.on_tertiary};
          }
        `}
`;

export default Category;
