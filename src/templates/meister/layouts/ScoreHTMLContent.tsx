import { color, font } from "@/styles";
import styled from "styled-components";

const ScoreHTMLContent = ({ scoreHTML }: { scoreHTML: string }) => {
  return (
    <StyledScoreHTMLContent
      dangerouslySetInnerHTML={{
        __html: scoreHTML,
      }}
    />
  );
};

export default ScoreHTMLContent;

const StyledScoreHTMLContent = styled.div`
  width: 100%;
  white-space: pre-wrap;
  & > div {
    display: none;
  }

  .item-score {
    ${font.p3};
    color: ${color.gray};
  }

  .total-score-item {
    ${font.H6};
  }

  .list-item {
    ${font.p2};
    font-weight: 600;
    padding: 20px;
    margin: 10px 0;
    border-radius: 4px;
    box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.05);
  }

  .section-date {
    margin: 0;
    padding: 0;
    text-align: left;
    ${font.p3};
    color: ${color.gray};
    font-weight: 500;
  }

  & > .titleBarA {
    ${font.H5};

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      display: none;
    }
  }

  & > table {
    &:nth-child(3),
    &:nth-child(4),
    &:nth-child(5) {
      display: none;
    }
    background-color: ${color.white};
    width: 100%;
    padding: 16px 20px;
    border-radius: 4px;

    tbody {
      tr {
        &:first-child,
        &:last-child {
          display: none;
        }

        td {
          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3) {
            display: none;
          }
        }
      }
    }
  }
`;
