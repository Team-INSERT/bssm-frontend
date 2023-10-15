import { Footer, Header, Modal } from "@/components/common";
import { GlobalStyle, flex } from "@/styles";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";

const LayoutProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <StyledToastify autoClose={1000} position={toast.POSITION.TOP_RIGHT} />
      <GlobalStyle />
      <Modal />
      <Layout>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </Layout>
    </>
  );
};

const StyledToastify = styled(ToastContainer)`
  .Toastify__toast {
    color: black;
    font-size: 14px;
  }
`;

const Layout = styled.div`
  ${flex.COLUMN};
  gap: 6vh;
`;

const Container = styled.div`
  min-height: 80vh;
`;

export default LayoutProvider;
