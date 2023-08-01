"use client";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { RecoilRoot } from "recoil";
import { Header, Footer, Modal } from "@/components/common";
import Column from "@/components/Flex/Column";
import GlobalStyle from "@/styles/GlobalStyle";
import ReactQueryProvider from "./reactQueryProvider.helper";

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <RecoilRoot>
        <ToastContainer autoClose={1000} position={toast.POSITION.TOP_RIGHT} />
        <GlobalStyle />
        <Column gap="6vh">
          <Header />
          {children}
          <Modal />
          <Footer />
        </Column>
      </RecoilRoot>
    </ReactQueryProvider>
  );
};

export default Provider;
