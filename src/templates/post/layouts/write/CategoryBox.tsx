import { Column } from "@/components/Flex";
import { font } from "@/styles";
import { Category } from "@/components/atoms";
import React from "react";
import styled from "styled-components";
import useUser from "@/hooks/useUser";
import { categoryList } from "../../assets/data";
import { CATEGORY } from "../../constants";
import { PostCategoryBoxProps } from "../../interfaces";
import { get카테고리명ByCategory } from "../../helpers";

const PostCategoryBox = ({
  handleChangeCategory,
  currentCategory,
}: PostCategoryBoxProps) => {
  const { isAdmin } = useUser();
  return (
    <Column gap="6px">
      <CategoryLabel>카테고리</CategoryLabel>
      <CategoryList>
        {categoryList.map((category) => {
          // 공지사항 카테고리는 admin만 등록할 수 있게
          if (category === CATEGORY.NOTICE && !isAdmin) return;
          return (
            <Category
              key={category}
              id={category}
              name="category"
              onChange={handleChangeCategory}
              label={get카테고리명ByCategory(category)}
              checked={category === currentCategory}
            />
          );
        })}
      </CategoryList>
    </Column>
  );
};

const CategoryLabel = styled.span`
  ${font.context};
`;

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export default PostCategoryBox;
