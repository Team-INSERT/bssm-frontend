import { color, flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";

const HomePostList = () => {
  return (
    <Container>
      {Array.from({ length: 4 }).map((_, index) => (
        <PostListItem key={index}>
          <StyledTitle>asodnsaklcn</StyledTitle>
          <StyledDate>2023.10.14.</StyledDate>
        </PostListItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 8px 0;
  ${flex.COLUMN};
  gap: 8px;
`;

const PostListItem = styled.div`
  width: 100%;
  ${flex.VERTICAL};
  padding: 0 20px;
`;

const StyledTitle = styled.span`
  ${font.p3};
  font-weight: 600;
`;

const StyledDate = styled.span`
  ${font.p4};
  margin-left: auto;
  color: ${color.gray};
`;

export default HomePostList;
