import styled from "styled-components";
import { Aside } from "@/components/common";
import WriteBox from "./layouts/WriteBox";

const WritePage = () => {
  return (
    <Layout>
      <Container>
        <WriteBox />
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

export default WritePage;
