import { color, font } from "@/styles";
import React from "react";
import styled from "styled-components";
import { BambooIcon } from "@/assets/icons";
import HomeHead from "./HomeHead";

const HomeBamboo = () => {
  return (
    <Container>
      <HomeHead
        icon={<BambooIcon />}
        title="#34번째 부마숲 이야기"
        href="/bamboo"
      />
      <StyledContent>
        코로나 정책이 완화된 요즘, 인프런에서 주최하는 컨퍼런스 ‘인프콘’,
        안드로이드 개발자를 위한 ‘드로이드 나이츠’, … 그 외 많은 IT인들을 위한
        행사들이 곳곳에서 열리고 있습니다. 여러분은 컨퍼런스, IT 대회 등 각종 IT
        행사들에 관심이 있으신가요? 특히 컨퍼런스는 IT 업계의 능력있는 사람들이
        모여 지식을 공유하고, 네트워킹하며 지식의 뿌리를 넓힐 수 있는 매력적인
        행사입니다. 공모전과 같은 대회 역시 자신의 역량을 시험하고 경험을 넓힐
        수 있는 귀중한 기회가 되기도 합니다. 여러분은 개발자 컨퍼런스, 대회를
        찾을 때 어떻게 찾으시나요? 어쩌다가 생각나서 행사 모음 사이트를
        검색하거나 지인에게 건너 듣진 않으신가요? 이런 IT 행사 정보를 간편하게
        한 데 모아볼 수 있다면 좋지 않을까요?
      </StyledContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 20vh;
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
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

export default HomeBamboo;
