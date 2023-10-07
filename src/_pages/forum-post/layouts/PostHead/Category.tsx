import styled from "styled-components";
import { font } from "@/_styles";
import { CategoryArrow } from "@/_assets/icons";
import getCategory from "@/_helpers/getCategory.helper";
import { PostCategoryType } from "@/_types";

interface IPostCategoryProps {
  postType: PostCategoryType;
}

const Category = ({ postType }: IPostCategoryProps) => {
  return (
    <Container>
      <PostType />
      <CategoryArrow width={12} height={12} />
      <CategoryType>{getCategory(postType)}</CategoryType>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const PostType = styled.h1`
  ${font.p3};
  font-weight: 600;

  &:after {
    content: "게시판";
  }
`;

const CategoryType = styled.h1`
  ${font.p3};
  font-weight: 600;
  margin-left: -2px;
`;

export default Category;
