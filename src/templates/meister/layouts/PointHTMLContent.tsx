import { theme } from "@/styles";
import { styled } from "styled-components";

const PointHTMLContent = ({ pointHTML }: { pointHTML: string }) => {
  return (
    <StyledPointHTMLContent
      dangerouslySetInnerHTML={{
        __html: pointHTML,
      }}
    />
  );
};

export default PointHTMLContent;

const StyledPointHTMLContent = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  div {
    flex: 100% !important;
    font-size: 18px !important;
    font-weight: bold !important;
  }

  li {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    width: calc(50% - 0.5rem) !important;
    height: 12.5rem !important;
    background-color: #ccffd8 !important;
    border-radius: 1rem !important;
    transition: var(--hover-transition) !important;
  }

  li:hover {
    background-color: #9effb5 !important;
  }

  .bad {
    color: black !important;
    background-color: #ffd7d5 !important;
  }

  .bad:hover {
    background-color: #ffc9c6 !important;
  }

  li > div {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    border: none !important;
    box-shadow: none !important;
    padding: 1rem 2rem !important;
  }

  li:not(.bad) > div {
    font-weight: normal !important;
  }

  li > div > div {
    font-size: 16px !important;
    font-weight: 500 !important;
    text-align: center !important;
    white-space: pre-wrap !important;
    color: ${theme.gray};
    padding-top: 10px !important;
  }

  li > div > div:first-child > div {
    font-size: 18px !important;
    font-weight: 500 !important;
    color: black !important;
  }
`;
