import { Column } from "@/components/Flex";
import { Footer, Header, Modal } from "@/components/common";
import { GlobalStyle } from "@/styles";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

const LayoutProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <ToastContainer autoClose={1000} position={toast.POSITION.TOP_RIGHT} />
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

export default LayoutProvider;
