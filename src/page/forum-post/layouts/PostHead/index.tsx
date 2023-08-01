import styled from "styled-components";
import Category from "./Category";
import PostTitle from "./PostTitle";
import ReactBox from "./ReactBox";

const PostHead = () => {
  return (
    <Container>
      <Category />
      <PostTitle />
      <ReactBox />
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
