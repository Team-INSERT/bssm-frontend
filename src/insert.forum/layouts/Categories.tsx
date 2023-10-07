import React from "react";
import { useRecoilState } from "recoil";
import { categoriesStore } from "@/_store/categories.store";
import { Category } from "@/_components/atoms";
import { emptyCategories } from "@/_assets/data";
import { PostCategoryType } from "@/_types";
import styled from "styled-components";

const Categories = () => {
  const [checked, setChecked] = useRecoilState(categoriesStore);

  const onCheckCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id as PostCategoryType);
  };

  return (
    <Container>
      {emptyCategories.map((category) => (
        <Category
          key={category.type}
          id={category.type}
          name="category"
          onChange={onCheckCategory}
          label={category.name}
          checked={category.type === checked}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 6px;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export default Categories;
