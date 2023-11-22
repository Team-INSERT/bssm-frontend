import styled from "styled-components";
import { Column } from "@/components/Flex";
import { theme, flex, font } from "@/styles";
import { noticeRuleListData } from "../assets/data";

const ReserveNoticeRuleList = () => {
  return (
    <Column gap="6px">
      <NoticeTitleText>숙지 사항</NoticeTitleText>
      <NoticeTextList>
        {noticeRuleListData.map((notice) => (
          <NoticeTextListItem key={notice}>{notice}</NoticeTextListItem>
        ))}
      </NoticeTextList>
    </Column>
  );
};

const NoticeTitleText = styled.span`
  ${font.p3};
  color: ${theme.gray};
`;

const NoticeTextList = styled.ul`
  ${flex.COLUMN_FLEX};
  gap: 4px;
  list-style: decimal;
`;

const NoticeTextListItem = styled.li`
  ${font.p2};
  color: ${theme.gray};
  font-weight: 500;
`;

export default ReserveNoticeRuleList;
