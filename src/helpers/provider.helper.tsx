"use client";

import React from "react";
import { RecoilRoot } from "recoil";
import ReactQueryProvider from "./reactQueryProvider.helper";
import LayoutProvider from "./layoutProvider.helper";

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <RecoilRoot>
        <LayoutProvider>{children}</LayoutProvider>
      </RecoilRoot>
    </ReactQueryProvider>
  );
};

export default Provider;
