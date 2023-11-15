"use client";

import React from "react";
import { RecoilRoot } from "recoil";
import ReactQueryProvider from "./reactQueryProvider.helper";
import LayoutProvider from "./layoutProvider.helper";
import StyledComponentsProvider from "./styledComponentsProvider.helper";

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <StyledComponentsProvider>
      <ReactQueryProvider>
        <RecoilRoot>
          <LayoutProvider>{children}</LayoutProvider>
        </RecoilRoot>
      </ReactQueryProvider>
    </StyledComponentsProvider>
  );
};

export default Provider;
