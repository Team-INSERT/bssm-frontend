import { color, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { BambooIcon } from "@/assets/icons";
import HomeHead from "./HomeHead";

interface IHomeBambooProps {
  allowedId: number;
  content: string;
}

const HomeBamboo = ({ allowedId, content }: IHomeBambooProps) => {
  return (
    <Container>
      <HomeHead
        icon={<BambooIcon />}
        title={`#${allowedId}번째 부마숲 이야기`}
        href="/bamboo"
      />
      <StyledContent>
        {content?.length > 30 ? `${content}...` : content}
      </StyledContent>
    </Container>
  );
};

const Container = styled.div`
  width: 20vw;
  height: 100%;
  background-color: ${color.white};
  border-radius: 4px;
`;

const StyledContent = styled.p`
  ${font.p2};
  padding: 6px 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 180%;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

export default HomeBamboo;
