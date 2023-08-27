"use client";

import React from "react";
import { RecoilRoot } from "recoil";
import ReactQueryProvider from "./reactQueryProvider.helper";
import LayoutProvider from "./layoutProvider.helper";
import ApoloClientProvider from "./apoloClientProvider.helper";

const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <ApoloClientProvider>
        <RecoilRoot>
          <LayoutProvider>{children}</LayoutProvider>
        </RecoilRoot>
      </ApoloClientProvider>
    </ReactQueryProvider>
  );
};

export default Provider;
