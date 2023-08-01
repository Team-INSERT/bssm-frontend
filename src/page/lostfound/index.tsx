import styled from "styled-components";
import { Aside } from "@/components/common";
import LostFoundBox from "./layouts/LostFoundBox";

const LostFoundPage = () => {
  return (
    <Layout>
      <Container>
        <LostFoundBox />
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
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export default LostFoundPage;
