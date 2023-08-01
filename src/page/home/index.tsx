import styled from "styled-components";
import { Aside } from "@/components/common";

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <Aside />
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
  height: 100vh;
`;

export default HomePage;
