import styled from "styled-components";
import { CommentIcon, Like, View } from "@/assets/icons";
import { Row } from "@/components/Flex";
import { color, font } from "@/styles";

interface IPostReactBoxProps {
  totalComments: number;
  totalLikes: number;
  view: number;
}

const ReactBox = ({ totalComments, totalLikes, view }: IPostReactBoxProps) => {
  return (
    <Container>
      <Row alignItems="center" gap="4px">
        <View width={14} height={14} />
        <ViewText>{view}</ViewText>
      </Row>
      <Row alignItems="center" gap="4px">
        <Like width={14} height={14} />
        <LikeText>{totalLikes}</LikeText>
      </Row>
      <Row alignItems="center" gap="4px">
        <CommentIcon width={14} height={14} />
        <CommentText>{totalComments}</CommentText>
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
