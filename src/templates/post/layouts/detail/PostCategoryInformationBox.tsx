import styled from "styled-components";
import { font } from "@/styles";
import { PostCategoryType } from "../../types";
import CategoryArrow from "../../assets/icons/CategoryArrow";
import { get카테고리명ByCategory } from "../../helpers";

interface IPostCategoryProps {
  postType: PostCategoryType;
}

const PostCategoryInformationBox = ({ postType }: IPostCategoryProps) => {
  return (
    <Container>
      <PostType>커뮤니티</PostType>
      <CategoryArrow width={12} height={12} />
      <CategoryType>{get카테고리명ByCategory(postType)}</CategoryType>
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
`;

const CategoryType = styled.h1`
  ${font.p3};
  font-weight: 600;
  margin-left: -2px;
`;

export default PostCategoryInformationBox;
