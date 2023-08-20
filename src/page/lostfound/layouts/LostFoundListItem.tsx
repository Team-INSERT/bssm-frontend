import styled from "styled-components";
import { Column } from "@/components/Flex";
import { color, font } from "@/styles";
import { ImageWithFallback } from "@/components/atoms";
import { emptyImage } from "@/assets/images";

const LostFoundListItem = () => {
  return (
    <Container>
      <ImageWithFallback
        src="/"
        fallbackSrc={emptyImage}
        alt="image"
        size="90px"
        width={0}
        height={0}
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
