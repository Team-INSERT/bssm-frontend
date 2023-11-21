import styled from "styled-components";
import { theme, flex, font } from "@/styles";
import { RecommentViewButtonProps } from "@/templates/post/types/@props";
import { ArrowIcon } from "@/assets/icons";
import { DIRECTION } from "@/constants";

const RecommentViewButton = ({
  handleViewRecommentModeChange,
  isViewRecommentMode,
  recommentCount,
}: RecommentViewButtonProps) => {
  return (
    <Container onClick={handleViewRecommentModeChange}>
      <ArrowIcon
        direction={isViewRecommentMode ? DIRECTION.TOP : DIRECTION.BOTTOM}
        width={12}
        height={12}
        color={theme.primary_blue}
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
    background-color: ${theme.on_tertiary};
  }
`;

const RecommentViewCountText = styled.span`
  color: ${theme.primary_blue};
  ${font.caption};
  font-weight: 600;
  margin-top: -4px;
`;

export default RecommentViewButton;
