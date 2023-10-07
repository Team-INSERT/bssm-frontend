import styled from "styled-components";
import { color, flex, font } from "@/_styles";
import { Column } from "@/_components/Flex";
import ScheduleBox from "./layouts/ScheduleBox";

const CalenderPage = () => {
  return (
    <Layout>
      <Container>
        <Column gap="8px" alignItems="center">
          <Title />
          <SubTitle />
        </Column>
        <ScheduleBox />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 76%;
  ${flex.COLUMN};
  align-items: center;
  gap: 24px;
`;

const Title = styled.span`
  ${font.H2};

  &:after {
    content: "🗓️ 캘린더";
  }
`;

const SubTitle = styled.span`
  color: ${color.gray};
  &:after {
    content: "좌우 화살표 방향키를 탭해 날짜를 조정해보세요.";
  }
`;

export default CalenderPage;
