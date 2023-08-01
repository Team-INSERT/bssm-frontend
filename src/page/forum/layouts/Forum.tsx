import React from "react";
import styled from "styled-components";
import ForumFilter from "./ForumFilter";
import Categories from "./Categories";
import PostList from "./PostList";

const Forum = () => {
  return (
    <Container>
      <ForumFilter />
      <Categories />
      <PostList />
    </Container>
  );
};

const Container = styled.main`
  width: 67%;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export default Forum;
