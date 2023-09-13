import styled from "styled-components";
import { IPost } from "@/interfaces";
import { font } from "@/styles";
import { CommentBox } from "@/components/atoms";
import CountBox from "./CountBox";

const PostBody = ({ ...post }: IPost) => {
  return (
    <Container>
      <Content dangerouslySetInnerHTML={{ __html: post.content }} />
      <CountBox {...post} />
      <CommentBox totalComments={post.commentCount || 0} />
    </Container>
  );
};

const Container = styled.div`
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Content = styled.p`
  ${font.p2};
  text-overflow: ellipsis;
  white-space: pre-wrap;
  padding: 20px 0;
`;

export default PostBody;
