import styled from "styled-components";
import { Column } from "@/components/Flex";
import { CustomViewer } from "@/components/atoms";
import { PostProps } from "@/templates/post/interfaces";
import { CATEGORY } from "@/templates/post/constants";
import { color, flex, font } from "@/styles";
import PostLikeCountBox from "./PostLikeCountBox";
import SectionBox from "./SectionBox";
import CommentList from "./comment/CommentList";
import CreateCommentBox from "./comment/CreateCommentBox";

const PostMainBox = ({ post }: PostProps) => {
  const is분실물찾기카테고리라면 =
    post.category === CATEGORY.LOST || post.category === CATEGORY.FOUND;
  const is일반이나공지사항카테고리라면 =
    post.category === CATEGORY.COMMON || post.category === CATEGORY.NOTICE;
  const lostfoundKeyword =
    post.category === CATEGORY.LOST ? "분실물" : "습득물";

  return (
    <Container>
      {post.category === CATEGORY.PROJECT && (
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
      {post.category === CATEGORY.CODE_REVIEW && (
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
      <PostLikeCountBox {...post} />
      {post.id && (
        <CommentWrap>
          <CommentCount>댓글 {post.commentCount}개</CommentCount>
          <CreateCommentBox id={+post.id} />
          <CommentList id={+post.id} />
        </CommentWrap>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 18px 8px;
  ${flex.COLUMN};
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
`;

export default PostMainBox;
