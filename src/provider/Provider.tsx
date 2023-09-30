"use client";

import React from "react";
import { RecoilRoot } from "recoil";
import ReactQueryProvider from "./ReactQueryProvider";
import LayoutProvider from "./LayoutProvider";
import ApolloClientProvider from "./ApolloClientProvider";

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <ApolloClientProvider>
        <RecoilRoot>
          <LayoutProvider>{children}</LayoutProvider>
        </RecoilRoot>
      </ApolloClientProvider>
    </ReactQueryProvider>
  );
};

export default Provider;
