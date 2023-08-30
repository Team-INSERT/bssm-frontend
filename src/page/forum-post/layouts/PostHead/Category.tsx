import styled from "styled-components";
import { font } from "@/styles";
import { CategoryArrow } from "@/assets/icons";

interface IPostCategoryProps {
  postType: string;
  category: string;
}

const Category = ({ postType, category }: IPostCategoryProps) => {
  return (
    <Container>
      <PostType>{postType}</PostType>
      <CategoryArrow width={12} height={12} />
      <CategoryType>{category}</CategoryType>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const PostType = styled.h1`
  ${font.p3};
  font-weight: 600;

  &:after {
    content: " 게시판";
  }
`;

const CategoryType = styled.h1`
  ${font.p3};
  font-weight: 600;
  margin-left: -2px;
`;

export default Category;
