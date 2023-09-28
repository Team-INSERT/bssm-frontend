"use client";

import React from "react";
import { RecoilRoot } from "recoil";
import ReactQueryProvider from "./ReactQueryProvider.helper";
import ApolloClientProvider from "./ApolloClientProvider.helper";
import LayoutProvider from "./LayoutProvider.helper";

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
