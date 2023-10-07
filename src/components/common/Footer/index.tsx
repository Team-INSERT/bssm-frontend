import styled from "styled-components";
import { color } from "@/styles";
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
  width: 100%;
  height: 400px;
  color: ${color.content};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${color.tertiary};
`;

const Container = styled.div`
  width: 76%;
  height: 60%;
`;

export default Footer;
