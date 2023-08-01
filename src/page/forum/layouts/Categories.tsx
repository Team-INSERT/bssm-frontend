import React from "react";
import { useRecoilState } from "recoil";
import { Row } from "@/components/Flex";
import { categoriesStore } from "@/store/categories.store";
import { Category } from "@/components/atoms";
import { emptyCategories } from "@/assets/data";
import { PostCategoryType } from "@/types";

const Categories = () => {
  const [checked, setChecked] = useRecoilState(categoriesStore);

  const onCheckCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id as PostCategoryType);
  };

  return (
    <Row gap="6px">
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
    </Row>
  );
};

export default Categories;
