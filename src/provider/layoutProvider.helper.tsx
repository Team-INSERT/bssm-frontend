import { Aside, Footer, Header, Modal } from "@/components/common";
import { GlobalStyle, flex } from "@/styles";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import useWindow from "@/hooks/useWindow";
import { ROUTER } from "@/constants";

const LayoutProvider = ({ children }: React.PropsWithChildren) => {
  const { isWindow } = useWindow();
  const routerName = isWindow ? window.location.pathname : "";
  const dontNeedAsidePage: Array<string> = [ROUTER.LOGIN, ROUTER.CALENDER];
  const isNeedAsidePage = !dontNeedAsidePage.includes(routerName);

  return (
    <>
      <StyledToastify autoClose={1000} position={toast.POSITION.TOP_RIGHT} />
      <GlobalStyle />
      <Modal />
      <Layout>
        <Header />
        <Main>
          <Container>{children}</Container>
          {isNeedAsidePage && <Aside />}
        </Main>
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
  width: 100%;
  min-height: 80vh;
`;

const Main = styled.main`
  ${flex.VERTICAL};
  gap: 12px;
  width: 100%;
  padding: 0 8vw;
`;

export default LayoutProvider;
