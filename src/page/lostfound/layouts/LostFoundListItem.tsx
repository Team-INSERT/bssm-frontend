import Column from "@/components/Flex/Column";
import color from "@/styles/color";
import { font } from "@/styles/font";
import React from "react";
import styled from "styled-components";
import ImageWithFallback from "@/components/atoms/ImageWithFallback";
import NotFoundImage from "@/page/lostfound/assets/imageNotFound.png";

const LostFoundListItem = () => {
  return (
    <Container>
      <ImageWithFallback
        src="/"
        fallbackSrc={NotFoundImage}
        alt="image"
        width={90}
        height={90}
      />
      <Column width="100%">
        <LostFoundName>남성용 카드지갑</LostFoundName>
        <Column>
          <LostFoundDate>2022.07.22.</LostFoundDate>
          {"만약 타입이 습득한 물건이라면" && (
            <>
              <LostFoundLocation>체육관 2층 계단</LostFoundLocation>
              <LostFoundSaveLocation>2학년 2반</LostFoundSaveLocation>
            </>
          )}
          {!"만약 타입이 분실한 물건이라면" && (
            <LostFoundLostLocation>체육관</LostFoundLostLocation>
          )}
        </Column>
      </Column>
    </Container>
  );
};

const Container = styled.article`
  width: 100%;
  height: 110px;
  background-color: ${color.white};
  display: flex;
  align-items: center;
  padding: 0px 14px;
  box-shadow: 0 0 10px 0 rgba(144, 144, 144, 0.1);
  border-radius: 4px;
  gap: 24px;
  border-bottom: 1.5px solid ${color.on_tertiary};
`;

const LostFoundName = styled.h1`
  ${font.H4};
`;

const LostFoundDate = styled.p`
  ${font.caption};
`;

const LostFoundLocation = styled(LostFoundDate)`
  color: ${color.blue};
  font-weight: 500;

  &:before {
    content: "습득장소 | ";
  }
`;

const LostFoundSaveLocation = styled(LostFoundLocation)`
  &:before {
    content: "보관장소 | ";
  }
`;

const LostFoundLostLocation = styled(LostFoundLocation)`
  &:before {
    content: "분실장소 | ";
  }
`;

export default LostFoundListItem;