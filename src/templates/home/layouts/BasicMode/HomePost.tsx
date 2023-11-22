import styled from "styled-components";
import { theme } from "@/styles";
import { ChatIcon, NoticeIcon } from "@/assets/icons";
import HomeHead from "./HomeHead";
import HomePostList from "./HomePostList";

interface HomePostProps {
  notice: Array<{
    id: number;
    title: string;
    createdAt: string;
  }>;
  common: Array<{
    id: number;
    title: string;
    createdAt: string;
  }>;
}

const HomePost = ({ notice, common }: HomePostProps) => {
  return (
    <Container>
      <PostBox>
        <HomeHead icon={<NoticeIcon />} title="공지사항" href="/post" />
        <HomePostList posts={notice} />
      </PostBox>
      <PostBox>
        <HomeHead icon={<ChatIcon />} title="일반 게시판" href="/post" />
        <HomePostList posts={common} />
      </PostBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${theme.white};
  border-radius: 4px;
  display: flex;
`;

const PostBox = styled.div`
  width: 100%;
  height: 100%;
`;

export default HomePost;
