import React from "react";
import styled from "styled-components";
import { Row } from "@/components/Flex";
import { font } from "@/styles";
import { CommentIcon, LikeIcon } from "@/assets/icons";
import httpClient from "@/apis/httpClient";
import { LIKE } from "@/constants";
import { useApolloClient } from "@apollo/client";

interface ICountBoxProps {
  commentCount: number;
  likeCount: number;
  doesLike: boolean;
  id: string;
}

const CountBox = ({
  likeCount,
  commentCount,
  doesLike,
  id,
}: ICountBoxProps) => {
  const [isLiked, setIsLiked] = React.useState(doesLike);
  const [currentLikeCount, setCurrentLikeCount] = React.useState(likeCount);
  const apolloClient = useApolloClient();

  // 연속 클릭을 막기 위해 해당 컴포넌트가 unmount될 때만 clenaup함수를 실행해서 서버 부하를 줄이는 방법으로 바꾸는 것이 좋을 것 같음
  const handleLikeButtonClick = async () => {
    const { data: like } = await httpClient.like.put({
      type: LIKE.POST,
      partyId: id,
    });
    apolloClient.cache.reset();
    setIsLiked(like);

    if (like) return setCurrentLikeCount(currentLikeCount + 1);
    return setCurrentLikeCount(currentLikeCount - 1);
  };

  React.useEffect(() => {
    setIsLiked(doesLike);
  }, [doesLike]);

  React.useEffect(() => {
    setCurrentLikeCount(likeCount);
  }, [likeCount]);

  return (
    <Row gap="22px">
      <LikeBox onClick={handleLikeButtonClick}>
        <LikeIcon width={18} isLiked={isLiked} />
        <LikeText>{currentLikeCount}</LikeText>
      </LikeBox>
      <Row alignItems="center" gap="4px">
        <CommentIcon width={18} height={18} />
        <CommentText>{commentCount}</CommentText>
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
