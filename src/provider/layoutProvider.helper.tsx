import { Column } from "@/components/Flex";
import { Footer, Header, Modal } from "@/components/common";
import { GlobalStyle } from "@/styles";
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
      <Column gap="6vh">
        <Header />
        {children}
        <Footer />
      </Column>
    </>
  );
};

const StyledToastify = styled(ToastContainer)`
  .Toastify__toast {
    color: black;
    font-size: 14px;
  }
`;

export default LayoutProvider;
