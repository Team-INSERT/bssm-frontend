import styled from "styled-components";
import { flex, theme } from "@/styles";
import Info from "./Info";

const Footer = () => {
  return (
    <Layout>
      <Container>
        <Info />
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  ${flex.CENTER};
  width: 100%;
  height: 400px;
  color: ${theme.content};
  background-color: ${theme.tertiary};
`;

const Container = styled.div`
  width: 76%;
  height: 60%;
`;

export default Footer;
