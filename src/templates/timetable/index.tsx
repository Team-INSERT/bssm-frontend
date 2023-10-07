import styled from "styled-components";
import TimeTableBox from "./layouts/TimeTableBox";

const TimeTablePage = () => {
  return (
    <Layout>
      <Container>
        <TimeTableBox />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  display: flex;
`;

const Container = styled.div`
  width: 76%;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export default TimeTablePage;
