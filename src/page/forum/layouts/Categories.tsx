import Row from "@/components/Flex/Row";
import color from "@/styles/color";
import { font } from "@/styles/font";
import forum from "@/utils/constants/forum.constant";
import React from "react";
import styled, { css } from "styled-components";

const categories = [
  {
    name: forum.category.all.name,
    type: forum.category.all.type,
  },
  {
    name: forum.category.complain.name,
    type: forum.category.complain.type,
  },
  {
    name: forum.category.humor.name,
    type: forum.category.humor.type,
  },
  {
    name: forum.category.infomation.name,
    type: forum.category.infomation.type,
  },
];

const Categories = () => {
  const [checked, setChecked] = React.useState(forum.category.all.type);

  const onCheckCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id);
  };

  return (
    <Row gap="6px">
      {categories.map((category) => (
        <Row key={category.type}>
          <Category
            type="radio"
            id={category.type}
            name="category"
            onChange={onCheckCategory}
          />
          <CategoryLabel
            htmlFor={category.type}
            checked={category.type === checked}
          >
            {category.name}
          </CategoryLabel>
        </Row>
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
