import styled from "styled-components";
import { CommentBox, ImageWithFallback } from "@/components/atoms";
import { font } from "@/styles";
import LostFoundInfoBox from "./LostFoundInfoBox";

const LostFoundBody = () => {
  return (
    <Container>
      <Content>
        {`
남성용 빈폴 지갑을 주웠습니다~~~
오후 2시쯤이었던 것 같은데 누구 있으신가용
2학년 2반에 맡겨놓고있ㅎ습니다~~
        `}
      </Content>
      <ImageWithFallback
        src="/"
        fallbackSrc=""
        alt="image"
        size="40%"
        isShouldHide
      />
      <LostFoundInfoBox />
      <CommentBox totalComments={3} />
    </Container>
  );
};

const Container = styled.div`
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Content = styled.p`
  ${font.p2};
  text-overflow: ellipsis;
  white-space: pre-wrap;
`;

export default LostFoundBody;
