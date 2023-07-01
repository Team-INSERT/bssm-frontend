import Row from "@/components/Flex/Row";
import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled, { css } from "styled-components";

const categories = ["전체", "불만", "유머", "자유"];

const Categories = () => {
  // then need use recoil / constants
  const [checked, setChecked] = React.useState("전체");

  const onCheckCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id);
  };

  return (
    <Row gap="6px">
      {categories.map((tag) => (
        <>
          <Category
            type="radio"
            id={tag}
            name="category"
            onChange={onCheckCategory}
          />
          <CategoryLabel htmlFor={tag} checked={tag === checked}>
            {tag}
          </CategoryLabel>
        </>
      ))}
    </Row>
  );
};

const Category = styled.input`
  display: none;
`;

const CategoryLabel = styled.label<{ checked: boolean }>`
  border: none;
  width: 64px;
  height: 26px;
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
        `}
`;

export default Categories;
