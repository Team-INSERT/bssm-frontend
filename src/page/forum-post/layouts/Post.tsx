import styled from "styled-components";
import { color } from "@/styles";
import PostBody from "./PostBody";
import PostHead from "./PostHead";

const Post = () => {
  return (
    <Container>
      <PostHead />
      <PostBody />
    </Container>
  );
};

const Container = styled.div`
  width: 67%;
  border-radius: 4px;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  padding: 22px 32px;
  gap: 4px;
`;

export default Post;
