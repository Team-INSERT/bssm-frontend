import styled from "styled-components";
import { IPost } from "@/interfaces";
import { POST } from "@/constants";
import { Column } from "@/components/Flex";
import { CustomViewer } from "@/components/atoms";
import { color, flex, font } from "@/styles";
import CountBox from "./CountBox";
import SectionBox from "./SectionBox";
import CreateCommentBox from "./CreateCommentBox";
import CommentList from "./CommentList";

interface IPostBodyProps {
  post: IPost;
}

const PostBody = ({ post }: IPostBodyProps) => {
  const is분실물찾기카테고리라면 =
    post.category === POST.LOST || post.category === POST.FOUND;
  const is일반이나공지사항카테고리라면 =
    post.category === POST.COMMON || post.category === POST.NOTICE;
  const lostfoundKeyword = post.category === POST.LOST ? "분실물" : "습득물";

  return (
    <Container>
      {post.category === POST.PROJECT && (
        <Column gap="20px">
          <SectionBox
            title="⏱️ 프로젝트 기한"
            startTime={post.startTime}
            endTime={post.endTime}
            isProjectDate
          />
          <SectionBox title="📄 프로젝트 분야" content={post.field} isDefault />
          <SectionBox title="💻 서비스 소개" content={post.content} isContent />
        </Column>
      )}
      {post.category === POST.CODE_REVIEW && (
        <Column gap="20px">
          <SectionBox title="🔗 코드리뷰 링크" content={post.prUrl} isUrl />
          <CustomViewer content={post.content} />
        </Column>
      )}
      {is분실물찾기카테고리라면 && (
        <Column gap="20px">
          <SectionBox
            title={`📍 ${lostfoundKeyword} 장소`}
            content={post.place}
            isDefault
          />
          {post.lostThingImage && (
            <SectionBox
              title={`🏞️ ${lostfoundKeyword} 사진`}
              content={post.lostThingImage}
              isImage
            />
          )}
          <SectionBox title="📄 세부 설명" content={post.content} isDefault />
        </Column>
      )}
      {is일반이나공지사항카테고리라면 && (
        <CustomViewer content={post.content} />
      )}
      <CountBox {...post} />
      <CommentWrap>
        <CommentCount>{post.commentCount}</CommentCount>
        <CreateCommentBox postId={post.id} />
        {post.id !== "-1" && <CommentList postId={post.id} />}
      </CommentWrap>
    </Container>
  );
};

const Container = styled.div`
  padding: 18px 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CommentWrap = styled.div`
  ${flex.COLUMN};
  border-top: 1.5px solid ${color.on_tertiary};
  padding-top: 10px;
  gap: 10px;
`;

const CommentCount = styled.h1`
  ${font.H5};

  &:before {
    content: "댓글 ";
  }

  &:after {
    content: "개";
  }
`;

export default PostBody;
