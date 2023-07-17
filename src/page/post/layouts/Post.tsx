import color from "@/styles/color";
import React from "react";
import styled from "styled-components";
import Category from "./Category";
import PostHead from "./PostHead";

const Post = () => {
  return (
    <Container>
      <Category />
      <PostHead />
    </Container>
  );
};

const Container = styled.div`
  width: 76%;
  height: 300px;
  border-radius: 4px;
  background-color: ${color.white};
  display: flex;
  flex-direction: column;
  padding: 22px;
`;

export default Post;
