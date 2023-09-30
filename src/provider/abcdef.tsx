"use client";

import React from "react";
import { RecoilRoot } from "recoil";
import ReactQueryProvider from "./abcde";
import LayoutProvider from "./abcd";
import ApolloClientProvider from "./abc";

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
