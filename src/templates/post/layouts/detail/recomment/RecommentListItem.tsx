import { defaultProfile } from "@/assets/images";
import { Column, Row } from "@/components/Flex";
import { ImageWithFallback } from "@/components/atoms";
import { color, flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { useLike } from "@/templates/post/hooks";
import ReactableLikeIcon from "@/templates/post/assets/icons/ReactableLikeIcon";
import Recomment from "@/templates/post/interfaces/recomment.interface";
import RecommentWritableBox from "./RecommentWritableBox";

const RecommentListItem = ({ ...recomment }: Recomment) => {
  const { isLike, currentLikeCount, handleUpdateRecommentLikeButtonClick } =
    useLike({
      doesLike: recomment.doesLike,
      likeCount: recomment.likeCount,
    });
  return (
    <Container>
      <ProfileImage>
        <ImageWithFallback
          src={recomment.user.profileImage}
          fallbackSrc={defaultProfile}
          alt="프로필"
          rounded
          width={34}
          height={34}
        />
      </ProfileImage>
      <Column gap="4px" width="100%">
        <RecommentWritableBox {...recomment} />
        <Row gap="6px">
          <StyledBox
            onClick={() => handleUpdateRecommentLikeButtonClick(recomment.id)}
          >
            <ReactableLikeIcon isLiked={isLike} width={14} />
            <StyledText>{currentLikeCount}</StyledText>
          </StyledBox>
        </Row>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  padding: 8px 0;
  display: flex;
  gap: 10px;
`;

const ProfileImage = styled.div`
  padding: 2px;
  border-radius: 50%;
  width: 44px;
  height: 100%;
  ${flex.CENTER};
`;

const StyledBox = styled.div`
  ${flex.HORIZONTAL};
  gap: 4px;
  cursor: pointer;
  padding: 2px 6px;

  &:hover {
    background-color: ${color.on_tertiary};
    border-radius: 999px;
  }
`;

const StyledText = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

export default RecommentListItem;
