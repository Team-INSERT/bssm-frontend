import styled from "styled-components";
import { IPost } from "@/interfaces";
import { POST } from "@/constants";
import { Column } from "@/components/Flex";
import { CommentBox, CustomViewer } from "@/components/atoms";
import CountBox from "./CountBox";
import SectionBox from "./SectionBox";

const PostBody = ({ ...post }: IPost) => {
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
      <CommentBox totalComments={post.commentCount || 0} />
    </Container>
  );
};

const Container = styled.div`
  padding: 18px 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default PostBody;
