import styled from "styled-components";
import { Row } from "@/components/Flex";
import { font } from "@/styles";
import { CommentIcon, Like } from "@/assets/icons";

interface ICountBoxProps {
  totalComments: number;
  totalLikes: number;
}

const CountBox = ({ totalComments, totalLikes }: ICountBoxProps) => {
  return (
    <Row gap="22px">
      <LikeBox>
        <Like width={18} height={18} />
        <LikeText>{totalLikes}</LikeText>
      </LikeBox>
      <Row alignItems="center" gap="4px">
        <CommentIcon width={18} height={18} />
        <CommentText>{totalComments}</CommentText>
      </Row>
    </Row>
  );
};

const LikeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const LikeText = styled.span`
  ${font.p1};
`;

const CommentText = styled.span`
  ${font.p1};
`;

export default CountBox;
