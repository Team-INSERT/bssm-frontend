import styled from "styled-components";
import { IPost } from "@/interfaces";
import Category from "./Category";
import PostTitle from "./PostTitle";
import ReactBox from "./ReactBox";

interface IPostHeadProps {
  postType: string;
  post: IPost;
}

const PostHead = ({ post, postType }: IPostHeadProps) => {
  return (
    <Container>
      <Category postType={postType} category={post.category} />
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
