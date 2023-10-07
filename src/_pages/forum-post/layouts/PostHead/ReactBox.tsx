import styled from "styled-components";
import { CommentIcon, Like } from "@/_assets/icons";
import { Row } from "@/_components/Flex";
import { color, font } from "@/_styles";

interface IPostReactBoxProps {
  commentCount: number;
  likeCount: number;
}

const ReactBox = ({ commentCount, likeCount }: IPostReactBoxProps) => {
  return (
    <Container>
      <Row alignItems="center" gap="4px">
        <Like width={14} height={14} />
        <LikeText>{likeCount}</LikeText>
      </Row>
      <Row alignItems="center" gap="4px">
        <CommentIcon width={14} height={14} />
        <CommentText>{commentCount}</CommentText>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 18px;
  align-items: center;
  border-bottom: 1.5px solid ${color.on_tertiary};
  padding: 0 0 10px 4px;
`;

const ViewText = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

const LikeText = styled(ViewText)``;

const CommentText = styled(ViewText)``;

export default ReactBox;
