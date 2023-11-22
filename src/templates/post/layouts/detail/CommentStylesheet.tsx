import { theme, font } from "@/styles";
import styled from "styled-components";

export const CommentWriter = styled.span`
  ${font.caption};
  font-weight: 600;
  color: ${theme.gray};
`;

export const CommentCreatedAt = styled.span`
  ${font.caption};
  color: ${theme.gray};

  @media screen and (max-width: 541px) {
    display: none;
  }
`;

export const CommentTextArea = styled.textarea`
  border: 2px solid ${theme.on_tertiary};
  border-radius: 4px;
  padding: 6px 12px;
  margin: 6px 0;
  ${font.p3};
`;
