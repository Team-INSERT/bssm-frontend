"use client";

import React from "react";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";
import ReactQueryProvider from "./reactQueryProvider.helper";
import LayoutProvider from "./layoutProvider.helper";

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <CookiesProvider>
        <RecoilRoot>
          <LayoutProvider>{children}</LayoutProvider>
        </RecoilRoot>
      </CookiesProvider>
    </ReactQueryProvider>
  );
};

export default Provider;
