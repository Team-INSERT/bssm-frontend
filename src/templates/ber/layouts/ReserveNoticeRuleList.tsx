import { Column } from "@/components/Flex";
import { color, flex, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { noticeRuleList } from "../assets/data";

const ReserveNoticeRuleList = () => {
  return (
    <Column gap="6px">
      <NoticeTitleText>숙지 사항</NoticeTitleText>
      <NoticeTextList>
        {noticeRuleList.map((notice) => (
          <NoticeTextListItem key={notice}>{notice}</NoticeTextListItem>
        ))}
      </NoticeTextList>
    </Column>
  );
};

const NoticeTitleText = styled.span`
  ${font.p3};
  color: ${color.gray};
`;

const NoticeTextList = styled.ul`
  ${flex.COLUMN};
  gap: 4px;
  list-style: decimal;
`;

const NoticeTextListItem = styled.li`
  ${font.p2};
  color: ${color.gray};
  font-weight: 500;
`;

export default ReserveNoticeRuleList;
