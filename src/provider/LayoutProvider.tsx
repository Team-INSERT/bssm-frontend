import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { Footer, Header } from "@/components/common";
import { GlobalStyle, flex } from "@/styles";
import Modal from "@/@modal/layouts";

const LayoutProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <StyledToastify autoClose={1000} position={toast.POSITION.TOP_RIGHT} />
      <GlobalStyle />
      <Modal />
      <Layout>
        <Header />
        <Main>{children}</Main>
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
  ${flex.COLUMN_FLEX};
  gap: 6vh;
`;

const Main = styled.main`
  ${flex.FLEX};
  gap: 14px;
  width: 100%;
  padding: 0 8vw;
  min-height: 52vh;
`;

export default LayoutProvider;
