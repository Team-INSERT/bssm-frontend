"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import { RecoilRoot } from "recoil";
import styled from "styled-components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: false,
    },
  },
});

const CustomToastContainer = styled(ToastContainer)`
  .Toastify__toast {
    color: black;
    font-size: 14px;
  }
`;

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <CustomToastContainer
          autoClose={1000}
          position={toast.POSITION.TOP_RIGHT}
        />
        <Header />
        {children}
        <Footer />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

export default Provider;
