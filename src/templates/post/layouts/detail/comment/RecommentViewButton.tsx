import { color, flex, font } from "@/styles";
import { PostArrowIcon } from "@/templates/post/assets/icons";
import { RecommentViewButtonProps } from "@/templates/post/interfaces";
import React from "react";
import styled from "styled-components";

const RecommentViewButton = ({
  handleViewRecommentModeChange,
  isViewRecommentMode,
  recommentCount,
}: RecommentViewButtonProps) => {
  return (
    <Container onClick={handleViewRecommentModeChange}>
      <PostArrowIcon
        direction={isViewRecommentMode ? "top" : "bottom"}
        width={12}
        height={12}
        color={color.primary_blue}
      />
      <RecommentViewCountText>답글 {recommentCount}개</RecommentViewCountText>
    </Container>
  );
};

const Container = styled.button`
  width: fit-content;
  ${flex.CENTER};
  gap: 6px;
  margin-top: 6px;
  padding: 8px 10px 4px 10px;
  border-radius: 999px;

  &:hover {
    background-color: ${color.on_tertiary};
  }
`;

const RecommentViewCountText = styled.span`
  color: ${color.primary_blue};
  ${font.caption};
  font-weight: 600;
  margin-top: -4px;
`;

export default RecommentViewButton;
