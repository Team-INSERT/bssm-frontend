import styled from "styled-components";
import { Row } from "@/components/Flex";
import { flex, font } from "@/styles";
import { CommentIcon } from "../../assets/icons";
import ReactiveLikeIcon from "../../assets/icons/ReactiveLikeIcon";
import { useLike } from "../../hooks";
import { PostCountBoxProps } from "../../types/@props";

const PostLikeCountBox = ({
  likeCount,
  commentCount,
  doesLike,
  id,
}: PostCountBoxProps) => {
  const { currentLikeCount, isLike, handleUpdatePostLikeButtonClick } = useLike(
    {
      likeCount,
      doesLike,
    },
  );

  return (
    <Row gap="22px">
      <LikeBox onClick={() => handleUpdatePostLikeButtonClick(id)}>
        <ReactiveLikeIcon width={18} isLiked={isLike} />
        <InformationText>{currentLikeCount}</InformationText>
      </LikeBox>
      <Row alignItems="center" gap="4px">
        <CommentIcon width={18} height={18} />
        <InformationText>{commentCount}</InformationText>
      </Row>
    </Row>
  );
};

const LikeBox = styled.div`
  ${flex.HORIZONTAL};
  gap: 4px;
  cursor: pointer;
`;

const InformationText = styled.span`
  ${font.p1};
`;

export default PostLikeCountBox;
