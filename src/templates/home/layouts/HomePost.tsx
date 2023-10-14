import { color } from "@/styles";
import { ChatIcon, NoticeIcon } from "@/assets/icons";
import React from "react";
import styled from "styled-components";
import HomeHead from "./HomeHead";
import HomePostList from "./HomePostList";

const HomePost = () => {
  return (
    <Container>
      <PostBox>
        <HomeHead icon={<NoticeIcon />} title="공지사항" href="/post" />
        <HomePostList />
      </PostBox>
      <PostBox>
        <HomeHead icon={<ChatIcon />} title="일반 게시판" href="/post" />
        <HomePostList />
      </PostBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${color.white};
  border-radius: 4px;
  display: flex;
`;

const PostBox = styled.div`
  width: 100%;
  height: 100%;
`;

export default HomePost;
