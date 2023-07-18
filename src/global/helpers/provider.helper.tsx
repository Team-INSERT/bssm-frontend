"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { PropsWithChildren } from "react";
import { ToastContainer, toast } from "react-toastify";
import { RecoilRoot } from "recoil";
import Column from "@/components/Flex/Column";
import ReactQueryProvider from "./reactQueryProvider.helper";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <RecoilRoot>
        <ToastContainer autoClose={1000} position={toast.POSITION.TOP_RIGHT} />
        <Column gap="6vh">
          <Header />
          {children}
          <Footer />
        </Column>
      </RecoilRoot>
    </ReactQueryProvider>
  );
};

export default Provider;
