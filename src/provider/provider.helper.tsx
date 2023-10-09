"use client";

import React from "react";
import { RecoilRoot } from "recoil";
import ReactQueryProvider from "./reactQueryProvider.helper";
import LayoutProvider from "./layoutProvider.helper";
import ApolloClientProvider from "./apolloClientProvider.helper";
import StyledComponentsProvider from "./styledComponentsProvider.helper";

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <ApolloClientProvider>
        <RecoilRoot>
          <LayoutProvider>
            <StyledComponentsProvider>{children}</StyledComponentsProvider>
          </LayoutProvider>
        </RecoilRoot>
      </ApolloClientProvider>
    </ReactQueryProvider>
  );
};

export default Provider;
