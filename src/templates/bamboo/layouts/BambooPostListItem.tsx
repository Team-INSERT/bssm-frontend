import styled from "styled-components";
import { Button } from "@/components/atoms";
import { Row } from "@/components/Flex";
import { theme, flex, font } from "@/styles";
import { useBamboo } from "../hooks";
import { BambooPostListItemProps } from "../types/@props";

const BambooPostListItem = ({
  bambooId,
  allowedId,
  createdAt,
  content,
  isAdmin,
  isManageMode,
}: BambooPostListItemProps) => {
  const {
    formatCreatedDate,
    handleAcceptButtonClick,
    handleDeleteButtonClick,
  } = useBamboo();

  return (
    <Container>
      <InfomationBox>
        <PostNumberText>{allowedId}</PostNumberText>
        <PostDateText>{formatCreatedDate(createdAt)}</PostDateText>
      </InfomationBox>
      <PostContentText>{content}</PostContentText>
      {isAdmin && (
        <Row gap="8px">
          {isManageMode && (
            <Button
              onClick={() => handleAcceptButtonClick(allowedId)}
              color={theme.primary_blue}
            >
              승인
            </Button>
          )}
          <Button
            onClick={() => handleDeleteButtonClick(bambooId)}
            color={theme.primary_red}
          >
            삭제
          </Button>
        </Row>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 10px 22px;
  background-color: ${theme.white};
  ${flex.COLUMN_FLEX};
  box-shadow: 4px 4px 15px 0 rgba(0, 0, 0, 0.05);
`;

const InfomationBox = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1.5px solid ${theme.on_tertiary};
  display: flex;
  gap: 8px;
`;

const PostNumberText = styled.span`
  ${font.H6};

  &:before {
    content: "#부마숲 ";
  }

  &:after {
    content: "번째 이야기";
  }
`;

const PostDateText = styled.span`
  ${font.p3};
  color: ${theme.gray};
`;

const PostContentText = styled.div`
  width: 100%;
  padding: 10px 0;
  word-break: break-all;
`;

export default BambooPostListItem;
