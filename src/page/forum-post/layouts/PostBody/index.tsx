import styled from "styled-components";
import { font } from "@/styles";
import { CommentBox } from "@/components/atoms";
import CountBox from "./CountBox";

const PostBody = () => {
  return (
    <Container>
      {/* 테스트용 */}
      <Content>
        {`
오늘 저녁에 다른 친구들이 먹을게 적어진다면서 급식량을 제한하는 걸 보면서 불만이 생김
근데 막상 배식 다 하고 잉글리쉬 머핀이 거의 50개 정도 남는걸 보고 새로운 아이디어가 떠오름
급식량을 제한해놓고 양 조절을 못 한 이유를 생각해보니 바로 수요를 예측하기 어려워서임!

급식은 학생 수에 맞춰 이미 다 만들어놨는데 정작 학생들이 급식실을 안오거나
그래서 이를 해결할 수 있는 근본적인 방법은 수요를 조사하고 거기에 맞춰서 급식을 만드는 거임!!!

지금 생각해본 기능이 여러개있는데

1. 내일의 아침, 점심, 저녁 급식을 내가 먹을 수 있는지 여부를 체크하는 기능  
2. 만약 내가 안 먹을 특정 메뉴가 있다면 받지 않거나 친구에게 주는 기능   
3. 모든 학생이 먹을 수 있는 양이 남아있다는 가정하에 더 받을 수 있으면 더 받겠다고 체크하는 기능  
 
이런 서비스를 만들면 좋을 것 같은데 막상 학교가 관심이 별로 없어서 안 쓸까 봐 못 만드겠음
        `}
      </Content>
      <CountBox />
      <CommentBox />
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

export default PostBody;
