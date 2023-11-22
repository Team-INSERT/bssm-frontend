import styled from "styled-components";
import { Column } from "@/components/Flex";
import { font } from "@/styles";
import { Category } from "@/components/atoms";
import { useUser } from "@/@user/hooks";
import { CATEGORY } from "../../constants";
import { get카테고리명ByCategory } from "../../helpers";
import { categoryListData } from "../../assets/data";
import { PostCategoryBoxProps } from "../../types/@props";

const PostCategoryBox = ({
  handleChangeCategory,
  currentCategory,
}: PostCategoryBoxProps) => {
  const { isAdmin } = useUser();
  return (
    <Column gap="6px">
      <CategoryLabel>카테고리</CategoryLabel>
      <CategoryList>
        {categoryListData.map((category) => {
          // 공지사항 카테고리는 admin만 등록할 수 있게
          if (category === CATEGORY.NOTICE && !isAdmin) return;
          return (
            <Category
              key={category}
              id={category}
              name="category"
              onChange={handleChangeCategory}
              label={get카테고리명ByCategory(category)}
              selected={category === currentCategory}
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
