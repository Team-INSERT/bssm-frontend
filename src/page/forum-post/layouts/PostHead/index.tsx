import styled from "styled-components";
import { IPost } from "@/interfaces";
import { PostCategoryType } from "@/types";
import Category from "./Category";
import PostTitle from "./PostTitle";
import ReactBox from "./ReactBox";

interface IPostHeadProps {
  postType: PostCategoryType;
  post: IPost;
}

const PostHead = ({ post, postType }: IPostHeadProps) => {
  return (
    <Container>
      <Category postType={postType} />
      <PostTitle {...post} />
      <ReactBox {...post} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default PostHead;
