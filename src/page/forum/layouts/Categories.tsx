import Row from "@/components/Flex/Row";
import { categoriesStore } from "@/store/categories.store";
import React from "react";
import { useRecoilState } from "recoil";
import Category from "@/components/atoms/Category";
import categories from "@/global/assets/data/categories";

const Categories = () => {
  const [checked, setChecked] = useRecoilState(categoriesStore);

  const onCheckCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.id);
  };

  return (
    <Row gap="6px">
      {categories.map((category) => (
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
